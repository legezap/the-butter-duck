import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "tbd-rfp-draft";
const DRAFT_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface DraftEnvelope {
  ts: number;
  data: Record<string, string>;
}

function loadDraft(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const envelope: DraftEnvelope = JSON.parse(raw);
    if (Date.now() - envelope.ts > DRAFT_TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return envelope.data || {};
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return {};
  }
}

function saveDraft(data: Record<string, string>) {
  if (typeof window === "undefined") return;
  try {
    const envelope: DraftEnvelope = { ts: Date.now(), data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(envelope));
  } catch { /* quota exceeded — ignore */ }
}

function clearDraft() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function useDraftPersistence(formData: Record<string, string>) {
  const [draftRestored, setDraftRestored] = useState(false);
  const [initialDraft, setInitialDraft] = useState<Record<string, string>>({});

  // Load draft on mount
  useEffect(() => {
    const d = loadDraft();
    if (Object.keys(d).length > 0) {
      // Defer to avoid synchronous setState in effect body
      requestAnimationFrame(() => {
        setInitialDraft(d);
        setDraftRestored(true);
      });
    }
  }, []);

  // Auto-save on every change
  const persistDraft = useCallback(() => {
    saveDraft(formData);
  }, [formData]);

  useEffect(() => { persistDraft(); }, [persistDraft]);

  const clear = useCallback(() => {
    clearDraft();
    setDraftRestored(false);
  }, []);

  return { draftRestored, initialDraft, clearDraft: clear };
}
