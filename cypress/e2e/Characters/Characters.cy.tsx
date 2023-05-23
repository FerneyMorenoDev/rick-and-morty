import CharacterPage from "../../support/page_object/CharactersPage";

describe('character', () => {
    let characterPage;
    beforeEach(() => {
        characterPage = new CharacterPage();
        characterPage.visit();
    })
  
    it('Should render title and text', () => {
        cy.contains('Rick and Morty characters');
        cy.contains('Search single or multiple character between 1 and 826, eg: 1 or 1,2,3');
        cy.get('h1').should('have.text', 'Rick and Morty characters');
        // .debug();
    });

    it('Should button be disabled when input is empty', () => {
        characterPage.form.searchButton.should('be.disabled');
    });
    
    it('should get 4 characters based on input value', () => {
        characterPage.form.fillCharacterId('15, 30, 47, 23');
        characterPage.form.searchButton.should('be.enabled').click();
    });

    it('should call API with a status code of 200', () => {
        characterPage.form.fillCharacterId('67,34');
        characterPage.form.searchButton.should('be.enabled').click();
        cy.request('https://rickandmortyapi.com/api/character/avatar/67.jpeg').should((response) => {
            expect(response.status).to.eq(200);
        });
        cy.request('https://rickandmortyapi.com/api/character/avatar/34.jpeg').should((response) => {
            console.log(response)    
            expect(response.status).to.eq(200);
        });
    });
});