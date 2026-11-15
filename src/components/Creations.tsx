import { useInView } from "../hooks/useInView";
import { SystemMock, type MockKind } from "./SystemMocks";

const creations: {
  kind: MockKind;
  title: string;
  tag: string;
  description: string;
}[] = [
  {
    kind: "dashboard",
    title: "Dashboard Analytics",
    tag: "Painel executivo",
    description:
      "KPIs, curva de receita e barras de performance em tempo real — leitura rápida para quem decide.",
  },
  {
    kind: "crm",
    title: "CRM & Pipeline",
    tag: "Comercial",
    description:
      "Funil visual com leads, propostas e fechamentos. O time enxerga o negócio sem planilha paralela.",
  },
  {
    kind: "ops",
    title: "Operação & SLA",
    tag: "Gestão interna",
    description:
      "Tabela viva de pedidos, status e prazos. Controle operacional com a linguagem visual NEXAUT.",
  },
  {
    kind: "flow",
    title: "Automação de fluxo",
    tag: "Workflow",
    description:
      "Triggers, regras e ações encadeadas. O sistema trabalha sozinho e avisa quando importa.",
  },
];

function CreationItem({
  index,
  kind,
  title,
  tag,
  description,
}: {
  index: number;
  kind: MockKind;
  title: string;
  tag: string;
  description: string;
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
      </div>
      <div className="lp-creation-copy">
        <span className="lp-creation-index">0{index}</span>
        <p className="nx-kicker">{tag}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export function Creations() {
  return (
    <section id="criacoes" className="lp-section">
      <div className="lp-section-head">
        <p className="nx-kicker">Criações</p>
        <h2>Sistemas que já nascem com cara de produto</h2>
        <p>
          Cada entrega é um software visual — dashboard, CRM, operação ou automação — com a
          identidade NEXAUT aplicada de ponta a ponta.
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
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
