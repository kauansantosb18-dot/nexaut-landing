import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../config";

export function Contact() {
  return (
    <section id="contato" className="lp-contact" aria-label="Contato WhatsApp">
      <div className="lp-contact-inner">
        <p className="nx-kicker">Próximo passo</p>
        <h2>Vamos criar o seu sistema?</h2>
        <p>
          Fale agora no WhatsApp. Conte o que precisa e receba uma proposta alinhada à
          identidade NEXAUT.
        </p>
        <a className="nx-btn nx-btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={18} aria-hidden />
          Abrir WhatsApp
        </a>
      </div>
    </section>
  );
}
