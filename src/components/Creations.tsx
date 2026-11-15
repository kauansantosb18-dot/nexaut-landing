import { useInView } from "../hooks/useInView";
import { SystemMock, type MockKind } from "./SystemMocks";

const creations: {
  kind: MockKind;
  title: string;
  tag: string;
  description: string;
}[] = [
  {
    kind: "stock",
    title: "Pedidos & Estoque",
    tag: "Operação comercial",
    description:
      "Pedidos ligados ao estoque em tempo real: baixa automática, alerta de SKU crítico e status do pedido na mesma tela.",
  },
  {
    kind: "logistics",
    title: "Logística & Entregas",
    tag: "Rastreio operacional",
    description:
      "Rotas, coletas, hubs e ETA. O time acompanha cada entrega sem planilha e sem WhatsApp perdido.",
  },
  {
    kind: "products",
    title: "Produtos & Catálogo",
    tag: "Gestão de itens",
    description:
      "Cadastro de produtos, preços, kits e disponibilidade. O catálogo vira base do pedido e do estoque.",
  },
  {
    kind: "clients",
    title: "Clientes & Relacionamento",
    tag: "Base comercial",
    description:
      "Histórico, status e volume por cliente. Do primeiro contato ao pedido recorrente, tudo no mesmo sistema.",
  },
  {
    kind: "ops",
    title: "Sistema operacional de negócio",
    tag: "Plataforma completa",
    description:
      "Um produto único: pedidos, estoque, logística, clientes e financeiro sob a identidade NEXAUT — sob medida para a sua operação.",
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
        <h2>Sistemas que rodam o seu negócio</h2>
        <p>
          Logística, pedidos com estoque, produtos, clientes e plataformas operacionais — cada
          sistema nasce visual, integrado e com a cara NEXAUT.
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
