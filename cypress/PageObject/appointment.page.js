export class AppointmentPage{
    static get url(){
         return '/#appointment';
    }
    static visit(){
        cy.visit(this.url);
    }

    static get getFacility(){
        return cy.get('[id="combo_facility"]');
    }

    static get getHospitalReadmission(){
        return cy.get('[id="chk_hospotal_readmission"]');
    }

    static get getProgramMedicaid(){
        return cy.get('[id="radio_program_medicaid"]');
    }

    static get getVisitDate(){
        return cy.get('[id="txt_visit_date"]');
    }

    static get getComment(){
        return cy.get('[id="txt_comment"]');
    }

    static get getBookAppointmentButton(){
        return cy.get('[id="btn-book-appointment"]');
    }

    //Funkcija kas atgriež lokācīju ar 28.datumuam
    static get getDatePicker(){
        return cy.contains('td[class="day"]', '28');
    }

    static get getMenuButton(){
        return cy.get('[id="menu-toggle"]');
    }

    static get getHistoryButton(){
        return cy.get('[href="history.php#history"]');
    }

}