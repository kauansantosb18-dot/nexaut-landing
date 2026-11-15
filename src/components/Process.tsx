import { useInView } from "../hooks/useInView";

const steps = [
  {
    title: "Diagnóstico",
    description: "Entendemos o problema, o fluxo atual e o que precisa aparecer na tela.",
  },
  {
    title: "Arquitetura visual",
    description: "Montamos a experiência com a identidade NEXAUT e a marca da sua empresa.",
  },
  {
    title: "Construção do sistema",
    description: "Desenvolvemos o produto com componentes sólidos, responsivos e prontos para evoluir.",
  },
  {
    title: "Entrega e evolução",
    description: "Você entra no ar com um sistema vivo — e segue evoluindo com suporte direto.",
  },
];

function Step({
  num,
  title,
  description,
}: {
  num: string;
  title: string;
  description: string;
}) {
  const { ref, inView } = useInView<HTMLElement>(0.2);

  return (
    <article ref={ref} className={`lp-step${inView ? " is-in" : ""}`}>
      <span className="lp-step-num">{num}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export function Process() {
  return (
    <section id="processo" className="lp-section">
      <div className="lp-section-head">
        <p className="nx-kicker">Método</p>
        <h2>Mais praticidade, menos etapas.</h2>
        <p>Processo direto, sem burocracia. Você fala conosco e o sistema começa a nascer.</p>
      </div>
      <div className="lp-process">
        {steps.map((step, i) => (
          <Step
            key={step.title}
            num={`0${i + 1}`}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}
