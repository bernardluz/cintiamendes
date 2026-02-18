<script setup lang="ts">
const title = 'Cíntia Mendes | Advocacia Especializada em Direito Bancário'
const description = 'Defesa jurídica especializada contra golpes, fraudes bancárias, juros abusivos e superendividamento. Proteja seu patrimônio com quem entende.'
const url = 'https://cintiamendes.adv.br' 
const image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80' // Using the Unsplash URL directly for better OG preview if local file fails in previews

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: url,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
})

useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Cíntia Mendes Advocacia e Consultoria Jurídica",
        "image": image,
        "url": url,
        "telephone": "+5531984394524",
        "email": "cintiamendes12.adv@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Belo Horizonte",
          "addressRegion": "MG",
          "addressCountry": "BR"
        },
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Como sei se fui vítima de um golpe bancário?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Se você identificou transações desconhecidas em sua conta, PIX que não realizou, compras indevidas no cartão de crédito ou empréstimos que não contratou, é muito provável que tenha sido vítima de um golpe."
            }
          },
          {
            "@type": "Question",
            "name": "O banco é responsável por devolver meu dinheiro?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. O Código de Defesa do Consumidor e a Súmula 479 do STJ estabelecem que os bancos respondem objetivamente por fraudes e delitos praticados por terceiros no âmbito de operações bancárias."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto custa para contratar o escritório?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Trabalhamos com condições facilitadas e, na maioria dos casos, com honorários 'ad exitum', ou seja, você só paga um percentual sobre o valor recuperado ao final do processo."
            }
          }
        ]
      })
    }
  ]
})
</script>

<template>
  <div class="page-wrapper">
    <AppHeader />
    <main>
      <SectionHero />
      <SectionServices />
      <SectionProblems />
      <SectionAbout />
      <SectionBenefits />
      <SectionFaq />
      <SectionCta />
    </main>
    <AppFooter />
    <WhatsappFloat />
  </div>
</template>
