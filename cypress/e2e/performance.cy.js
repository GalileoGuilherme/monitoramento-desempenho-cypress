describe('Monitoramento de Desempenho', () => {
  const sites = ['https://www.globo.com/', 'https://www.google.com.br/'];

  sites.forEach((url) => {
    it(`Deve testar desempenho do site ${url}`, () => {
      cy.visit(url);
      cy.task('lighthouse', {
        url,
        thresholds: {
          performance: 50,
          accessibility: 50,
          'best-practices': 50,
          seo: 50,
        },
      }).then((report) => {
        cy.log(`Resultados de desempenho para ${url}`);
        cy.log(report);
      });
    });
  });
});

// 1. Performance
// A performance avalia a velocidade de carregamento e a experiência do usuário no seu site. O Lighthouse mede o tempo de carregamento, a resposta da página e outros fatores como First Contentful Paint (FCP) e Largest Contentful Paint (LCP).

// Escala de 0 a 100:
// 90-100: Excelente
// 50-89: Moderado (necessita de melhorias)
// 0-49: Ruim (precisa de ações imediatas)
// Quando você define performance: 50, significa que o teste falhará se a pontuação de performance for inferior a 50. Esse valor é considerado abaixo do desejado e indica que o site tem problemas de velocidade e deve ser otimizado.

// 2. Accessibility (Acessibilidade)
// A acessibilidade mede o quão acessível seu site é para todos os usuários, incluindo aqueles com deficiências. O Lighthouse avalia coisas como contraste de cores, uso de marcação HTML semântica e compatibilidade com leitores de tela.

// Escala de 0 a 100:
// 90-100: Excelente
// 50-89: Moderado (necessita de melhorias)
// 0-49: Ruim (precisa de ações imediatas)
// Ao definir accessibility: 50, você está dizendo que se a acessibilidade ficar abaixo de 50, o site não estará cumprindo os requisitos mínimos de acessibilidade e pode precisar de ajustes, como a melhoria de contrastes, textos alternativos para imagens, entre outros.

// 3. Best Practices (Melhores Práticas)
// As melhores práticas se referem à implementação de técnicas recomendadas para garantir a segurança e a estabilidade do site. O Lighthouse verifica se o site segue boas práticas de desenvolvimento, como o uso de HTTPS, evitar vulnerabilidades de segurança e outras recomendações relacionadas à construção de um site robusto.

// Escala de 0 a 100:
// 90-100: Excelente
// 50-89: Moderado (necessita de melhorias)
// 0-49: Ruim (precisa de ações imediatas)
