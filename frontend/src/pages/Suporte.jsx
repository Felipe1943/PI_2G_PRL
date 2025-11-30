// frontend/src/pages/Suporte.jsx
import React, { useState } from "react";

export default function Suporte() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    "Como calcula a pegada de carbono?",
    "Posso importar dados de planilhas?",
    "Como defino metas realistas de redução?",
    "Os relatórios são adequados para auditorias?",
    "Como funcionam as recomendações personalizadas?",
  ];

  return (
    <div className="page-container">
      <h1>Suporte e Educação</h1>
      <p className="subtitle">Recursos para te ajudar a maximizar seus resultados de sustentabilidade</p>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="icon email">✉️</div>
          <h4>E-mail</h4>
          <p>suporte@gmail.com</p>
          <button className="btn">Enviar E-mail</button>
        </div>

        <div className="contact-card">
          <div className="icon phone">📞</div>
          <h4>Telefone</h4>
          <p>49 9673 7483</p>
          <button className="btn">Ligue agora</button>
        </div>
      </div>

      <div className="faq-card">
        <h3>Perguntas Frequentes</h3>
        <div className="faq-list">
          {faqs.map((q, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {q}
              </button>
              {openIndex === i && <div className="faq-answer">Resposta exemplo para a pergunta: <em>{q}</em></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
