import { hero, mainAction } from "@/lib/content";
import { ArrowIcon, Kicker, vars } from "./ui";

// Each headline word rises in on its own delay; the kicker, lede and
// buttons follow once the last word is up (Motion adds .ready to start it).
const WORD_START = 0.25;
const WORD_STEP = 0.08;
// Once the accent words are up, one band of light sweeps across them and they settle in red.
const SHINE_AFTER_RISE = 0.75;
// The faint wordmark behind the hero lights letter by letter as the page opens, then rests.
const MARK = "MECHELEIN";
const MARK_START = 0.2;
const MARK_STEP = 0.09;

function Words({ text, from, shine = false }: { text: string; from: number; shine?: boolean }) {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      <span className="w">
        <span style={vars({ "--d": `${WORD_START + (from + i) * WORD_STEP}s` })}>
          {shine ? (
            <span className="shine" style={vars({ "--sd": `${WORD_START + (from + i) * WORD_STEP + SHINE_AFTER_RISE}s` })}>
              {word}
            </span>
          ) : (
            word
          )}
        </span>
      </span>{" "}
    </span>
  ));
}

export default function Hero() {
  const mainWords = hero.headline.split(" ").length;
  const total = mainWords + hero.headlineAccent.split(" ").length;
  const after = WORD_START + total * WORD_STEP;
  const delay = (s: number) => vars({ "--d": `${s}s` });

  return (
    <section className="hero on-dark" aria-labelledby="hero-h">
      <img className="hero__bg" src={hero.image.src} alt={hero.image.alt} fetchPriority="high" />
      <p className="hero__mark" aria-hidden="true">
        {[...MARK].map((c, k) => (
          <span key={k} className={k === 1 ? "ml e" : "ml"} style={vars({ "--md": `${MARK_START + k * MARK_STEP}s` })}>
            {c}
          </span>
        ))}
      </p>
      <div className="wrap">
        <div className="hx" style={delay(0.1)}>
          <Kicker>{hero.kicker}</Kicker>
        </div>
        <h1 id="hero-h">
          <Words text={hero.headline} from={0} />
          <span className="red">
            <Words text={hero.headlineAccent} from={mainWords} shine />
          </span>
        </h1>
        <p className="lede hx" style={delay(after)}>
          {hero.lede}
        </p>
        <div className="actions hx" style={delay(after + 0.12)}>
          <a className="btn" href={mainAction.href}>
            {mainAction.label} <ArrowIcon />
          </a>
          <a className="btn btn--line" href="#services">
            See our services
          </a>
        </div>
      </div>
    </section>
  );
}
