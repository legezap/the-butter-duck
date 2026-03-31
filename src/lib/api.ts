const WEBHOOK_URL = "https://pavellegeza.app.n8n.cloud/webhook/inbound-lead";

export interface RFPPayload {
  _subject: string;
  reference: string;
  service: string;
  eventName: string;
  eventDates: string;
  eventLocation: string;
  boothSize: string;
  budget: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  notes: string;
}

export async function submitRFP(payload: RFPPayload): Promise<void> {
  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Submission failed");
}
