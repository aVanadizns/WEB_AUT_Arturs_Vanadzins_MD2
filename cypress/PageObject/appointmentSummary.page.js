export class AppointmentSummaryPage{
    static get url(){
         return '/#appointment.php#summary';
    }
    static visit(){
        cy.visit(this.url);
    }

    static get getFacility(){
        return cy.get('[id="facility"]');
    }

    static get getHospitalReadmission(){
        return cy.get('[id="hospital_readmission"]');
    }

    static get getProgramMedicaid(){
        return cy.get('[id="program"]');
    }

    static get getVisitDate(){
        return cy.get('[id="visit_date"]');
    }

    static get getComment(){
        return cy.get('[id="comment"]');
    }

}