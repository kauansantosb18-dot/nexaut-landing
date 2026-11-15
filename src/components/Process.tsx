import { useInView } from "../hooks/useInView";

const steps = [
  {
    title: "Você apresenta a necessidade",
    description: "Conta o que a empresa precisa controlar — pedidos, estoque, clientes ou a operação inteira.",
  },
  {
    title: "A NEXAUT desenvolve a solução",
    description: "Desenhamos e construímos o sistema sob medida, com a identidade visual da marca.",
  },
  {
    title: "Você recebe o sistema personalizado",
    description: "Entra no ar com um produto pronto para usar — e evolui com suporte direto.",
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
    <section id="como-funciona" className="lp-section">
      <div className="lp-section-head">
        <p className="nx-kicker">Como funciona</p>
        <h2>Mais praticidade, menos etapas.</h2>
        <p>Do contato à entrega: um caminho curto para o seu sistema entrar em operação.</p>
      </div>
      <div className="lp-process">
        {steps.map((step, i) => (
          <Step
            key={step.title}
            num={String(i + 1).padStart(2, "0")}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}
