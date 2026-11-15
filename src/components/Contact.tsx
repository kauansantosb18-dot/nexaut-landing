import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../config";

export function Contact() {
  return (
    <section id="contato" className="lp-contact" aria-label="Contato WhatsApp">
      <div className="lp-contact-inner">
        <p className="nx-kicker">Próximo passo</p>
        <h2>Vamos transformar a gestão do seu negócio?</h2>
        <p>
          Conte o que sua empresa precisa e descubra como um sistema personalizado pode ajudar.
        </p>
        <a className="nx-btn nx-btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={18} aria-hidden />
          Quero conversar com a NEXAUT
        </a>
      </div>
    </section>
  );
}
