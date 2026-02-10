<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: "Como sei se fui vítima de um golpe bancário?",
    answer: "Se você identificou transações desconhecidas em sua conta, PIX que não realizou, compras indevidas no cartão de crédito ou empréstimos que não contratou, é muito provável que tenha sido vítima de um golpe. Entre em contato conosco para uma análise detalhada."
  },
  {
    question: "O banco é responsável por devolver meu dinheiro?",
    answer: "Sim. O Código de Defesa do Consumidor e a Súmula 479 do STJ estabelecem que os bancos respondem objetivamente por fraudes e delitos praticados por terceiros no âmbito de operações bancárias. Eles devem garantir a segurança das transações."
  },
  {
    question: "Quanto custa para contratar o escritório?",
    answer: "Trabalhamos com condições facilitadas e, na maioria dos casos, com honorários 'ad exitum', ou seja, você só paga um percentual sobre o valor recuperado ao final do processo, se ganharmos a ação. Fale conosco para entender melhor."
  },
  {
    question: "Fui vítima de golpe do PIX. Tem solução?",
    answer: "Sim. Existe o Mecanismo Especial de Devolução (MED) do Banco Central e também medidas judiciais para obrigar o banco a ressarcir os valores, especialmente se houver falha na segurança ou demora no bloqueio da conta do golpista."
  },
  {
    question: "O banco pode cobrar juros abusivos?",
    answer: "Não. A cobrança de juros muito acima da média de mercado é considerada abusiva e pode ser revista judicialmente. Analisamos seu contrato para identificar ilegalidades e buscar a redução da dívida."
  },
  {
    question: "Preciso ir pessoalmente ao escritório?",
    answer: "Não necessariamente. Atendemos clientes de todo o Brasil de forma 100% digital, via WhatsApp e vídeochamada, com a mesma segurança e eficiência do atendimento presencial."
  }
]
</script>

<template>
  <section class="faq" id="faq">
    <div class="container">
      <div class="section-header fade-in">
        <div class="section-label">Dúvidas Frequentes</div>
        <h2 class="section-title">Perguntas comuns de nossos clientes</h2>
        <p class="section-subtitle">
          Esclareça suas dúvidas sobre seus direitos e como podemos ajudar você.
        </p>
      </div>

      <div class="faq-list">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="faq-item fade-in"
          :class="{ 'active': activeIndex === index }"
        >
          <button 
            class="faq-question" 
            @click="toggleFaq(index)"
            :aria-expanded="activeIndex === index"
            :aria-controls="'faq-answer-' + index"
          >
            {{ faq.question }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          </button>
          <div 
            :id="'faq-answer-' + index"
            class="faq-answer"
            :style="{ maxHeight: activeIndex === index ? '500px' : '0' }"
          >
            <div class="faq-answer-inner">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
