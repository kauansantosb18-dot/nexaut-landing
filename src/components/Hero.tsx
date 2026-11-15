import { whatsappUrl } from "../config";

export function Hero() {
  return (
    <section id="topo" className="lp-hero" aria-label="Apresentação NEXAUT">
      <div className="lp-hero-visual" aria-hidden="true" />
      <div className="lp-system-stage" aria-hidden="true">
        <div className="lp-system-frame">
          <div className="lp-system-chrome">
            <span className="lp-dot" />
            <span className="lp-dot" />
            <span className="lp-dot" />
          </div>
          <div className="lp-system-body">
            <aside className="lp-system-rail">
              <div className="lp-rail-item is-active" />
              <div className="lp-rail-item" />
              <div className="lp-rail-item" />
              <div className="lp-rail-item" />
            </aside>
            <div className="lp-system-main">
              <div className="lp-system-top">
                <div className="lp-pane" />
                <div className="lp-pane" />
                <div className="lp-pane" />
              </div>
              <div className="lp-pane-wide">
                <div className="lp-chart">
                  <div className="lp-chart-line" />
                </div>
                <div className="lp-list">
                  <div className="lp-list-row" />
                  <div className="lp-list-row" />
                  <div className="lp-list-row" />
                  <div className="lp-list-row" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lp-hero-content">
        <div className="lp-hero-brand">
          <img
            className="lp-mark"
            src="/brand/nexaut-mark.png"
            alt=""
            width={72}
            height={72}
          />
          <h1 className="lp-hero-brand-name">NEXAUT</h1>
        </div>
        <p className="lp-hero-headline">
          Seu negócio mais inteligente.
          <br />
          Sua gestão mais simples.
        </p>
        <p className="lp-hero-copy">
          Sistemas personalizados para controlar pedidos, estoque, clientes, vendas e operações em
          um só lugar.
        </p>
        <div className="lp-cta-row">
          <a className="nx-btn nx-btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Quero meu sistema
          </a>
          <a className="nx-btn nx-btn-outline" href="#criacoes">
            Conhecer soluções
          </a>
        </div>
      </div>
    </section>
  );
}
