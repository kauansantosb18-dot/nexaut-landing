import { whatsappUrl } from "../config";
import { useInView } from "../hooks/useInView";
import { SystemMock, type MockKind } from "./SystemMocks";

const creations: {
  kind: MockKind;
  title: string;
  tag: string;
  problem: string;
  demo?: boolean;
}[] = [
  {
    kind: "dashboard",
    title: "Dashboards executivos",
    tag: "Visão em tempo real",
    problem: "Resolve a falta de clareza: você enxerga o negócio sem abrir dez planilhas.",
    demo: true,
  },
  {
    kind: "reports",
    title: "Relatórios sob demanda",
    tag: "Análise e exportação",
    problem: "Resolve o retrabalho: relatórios prontos quando a decisão não pode esperar.",
    demo: true,
  },
  {
    kind: "stock",
    title: "Pedidos & Estoque",
    tag: "Operação comercial",
    problem: "Resolve o descontrole: pedido e estoque conversam — sem venda sem produto.",
  },
  {
    kind: "logistics",
    title: "Logística & Entregas",
    tag: "Rastreio operacional",
    problem: "Resolve a cegueira na entrega: rota, status e ETA em um só acompanhamento.",
  },
  {
    kind: "products",
    title: "Produtos & Catálogo",
    tag: "Gestão de itens",
    problem: "Resolve o cadastro espalhado: preço, estoque e catálogo na mesma base.",
  },
  {
    kind: "clients",
    title: "Clientes & Relacionamento",
    tag: "Base comercial",
    problem: "Resolve o cliente “sumido”: histórico e volume ficam à mão do time.",
  },
  {
    kind: "ops",
    title: "Sistema operacional de negócio",
    tag: "Plataforma completa",
    problem: "Resolve a operação fragmentada: tudo que a empresa precisa, em um produto só.",
  },
];

function CreationItem({
  index,
  kind,
  title,
  tag,
  problem,
  demo,
}: {
  index: number;
  kind: MockKind;
  title: string;
  tag: string;
  problem: string;
  demo?: boolean;
}) {
  const { ref, inView } = useInView<HTMLElement>(0.15);
  const reverse = index % 2 === 0;

  return (
    <article
      ref={ref}
      className={`lp-creation${reverse ? " is-reverse" : ""}${inView ? " is-in" : ""}`}
    >
      <div className="lp-creation-visual">
        <SystemMock kind={kind} />
        {demo ? <p className="lp-demo-note">Dados demonstrativos — ilustração do sistema</p> : null}
      </div>
      <div className="lp-creation-copy">
        <span className="lp-creation-index">{String(index).padStart(2, "0")}</span>
        <p className="nx-kicker">{tag}</p>
        <h3>{title}</h3>
        <p>{problem}</p>
        <a
          className="nx-btn nx-btn-outline lp-creation-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Solicitar este sistema
        </a>
      </div>
    </article>
  );
}

export function Creations() {
  return (
    <section id="criacoes" className="lp-section">
      <div className="lp-section-head">
        <p className="nx-kicker">Soluções</p>
        <h2>Sistemas que resolvem a operação</h2>
        <p>
          Cada solução ataca um problema real do dia a dia. As telas abaixo são demonstrativas —
          o seu sistema nasce sob medida.
        </p>
      </div>
      <div className="lp-creations">
        {creations.map((item, i) => (
          <CreationItem
            key={item.kind}
            index={i + 1}
            kind={item.kind}
            title={item.title}
            tag={item.tag}
            problem={item.problem}
            demo={item.demo}
          />
        ))}
      </div>
      <div className="lp-creations-footer">
        <a className="nx-btn nx-btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
          Quero um projeto personalizado
        </a>
      </div>
    </section>
  );
}
