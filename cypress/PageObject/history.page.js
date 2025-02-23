export class HistoryPage{
    static get url(){
         return '/history.php#history';
    }
    static visit(){
        cy.visit(this.url);
    }

    static get getHistoryTable(){
        return cy.get('[id="history"] ');
    }

}