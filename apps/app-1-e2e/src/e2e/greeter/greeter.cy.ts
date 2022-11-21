describe('app-1: Greeter component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=greeter--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Greeter!');
    });
});
