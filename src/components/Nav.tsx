import { whatsappUrl } from "../config";

export function Nav() {
  return (
    <header className="lp-nav">
      <a className="lp-lockup" href="#topo" aria-label="NEXAUT">
        <img
          className="lp-mark"
          src="/brand/nexaut-mark.png"
          alt=""
          width={36}
          height={36}
        />
        <span className="nx-title text-lg leading-none">NEXAUT</span>
      </a>
      <a className="nx-btn nx-btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </header>
  );
}
