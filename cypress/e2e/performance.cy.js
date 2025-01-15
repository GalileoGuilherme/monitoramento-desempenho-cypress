describe('Monitoramento de Desempenho', () => {
  const sites = ['https://www.globo.com/', 'https://www.google.com.br/?hl=pt-BR'];

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
