import { useInView } from "../hooks/useInView";

const reasons = [
  {
    title: "Sistemas personalizados",
    description: "Feitos para o seu fluxo — não um pacote genérico que força a empresa a se adaptar.",
  },
  {
    title: "Gestão centralizada",
    description: "Pedidos, estoque, clientes e operação no mesmo lugar, com a mesma linguagem visual.",
  },
  {
    title: "Informações organizadas",
    description: "Dashboards e relatórios que mostram o que importa, quando importa.",
  },
  {
    title: "Alinhados à sua operação",
    description: "Cada tela nasce da rotina real do negócio — do chão de loja à gestão.",
  },
];

function Reason({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  const { ref, inView } = useInView<HTMLElement>(0.2);

  return (
    <article ref={ref} className={`lp-why-item${inView ? " is-in" : ""}`}>
      <span className="lp-creation-index">{String(index).padStart(2, "0")}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export function Why() {
  return (
    <section id="por-que" className="lp-section">
      <div className="lp-section-head">
        <p className="nx-kicker">Diferenciais</p>
        <h2>Por que escolher a NEXAUT?</h2>
        <p>Tecnologia com cara de produto — e foco no que a sua empresa precisa controlar.</p>
      </div>
      <div className="lp-why">
        {reasons.map((item, i) => (
          <Reason
            key={item.title}
            index={i + 1}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
