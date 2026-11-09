// A scrolling band of words; the list is doubled so the loop has no seam.
export default function Ticker({ words, alt = false }: { words: string[]; alt?: boolean }) {
  return (
    <div className={alt ? "ticker ticker--alt" : "ticker"} aria-hidden="true">
      <div className="ticker__track">
        {[...words, ...words].map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}
