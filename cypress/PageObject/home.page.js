export class HomePage{
    static get url(){
         return '/';
    }
    static visit(){
        cy.visit(this.url);
    }

    static get makeAppointmentButton(){
        return cy.get('[id="btn-make-appointment"]');
    }
}