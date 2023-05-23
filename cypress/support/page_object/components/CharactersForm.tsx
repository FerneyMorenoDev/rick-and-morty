export class CharactersForm {
    get characterId() {
        return cy.get('input[type=text]');
    }

    get searchButton() {
        return cy.get('button.character-form__button');
    }

    fillCharacterId(value: string) {
        if (value) {
            this.characterId.type(value);
        }
    }
}