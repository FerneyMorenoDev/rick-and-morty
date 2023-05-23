import { CharactersForm } from "./components/CharactersForm";

export default class CharacterPage {
    visit() {
        cy.visit('/');
    }

    get form() {
        return new CharactersForm();;
    }
};