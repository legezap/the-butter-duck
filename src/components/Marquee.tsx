"use client";

interface Props {
  items: string[];
}

export default function Marquee({ items }: Props) {
  const text = items.map((item, i) => (
    <span key={i} className={i % 2 === 0 ? undefined : "accent-word"}>
      {item} &#9670;{" "}
    </span>
  ));

  return (
    <div className="scroll-text" aria-hidden="true">
      <div className="scroll-text-track">
        <div className="scroll-text-inner">{text}</div>
        <div className="scroll-text-inner">{text}</div>
      </div>
    </div>
  );
}
