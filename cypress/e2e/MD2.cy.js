import { HomePage } from "../PageObject/home.page"
import { LoginPage } from "../PageObject/login.page"
import { AppointmentPage } from "../PageObject/appointment.page"
import { AppointmentSummaryPage } from "../PageObject/appointmentSummary.page"
import { HistoryPage } from "../PageObject/history.page"

describe('Scenario 1 - Make an Appointment', () => {
  beforeEach(() => {
    HomePage.visit();
  })

  it('Make Appointment', () => {
    HomePage.makeAppointmentButton.click();
    cy.url().should('include', '/profile.php#login');
  })

  it('Login', () => {
    HomePage.makeAppointmentButton.click();
    cy.url().should('include', '/profile.php#login');
    LoginPage.getUsername.type('John Doe');
    LoginPage.getUsername.should('have.value', 'John Doe');
    LoginPage.getPassword.type('ThisIsNotAPassword');
    LoginPage.getPassword.should('have.value', 'ThisIsNotAPassword');
    LoginPage.getLoginButton.click();
    cy.url().should('include', '/#appointment');
  })

  it('Make an Appointment', () => {
    HomePage.makeAppointmentButton.click();
    cy.url().should('include', '/profile.php#login');
    LoginPage.getUsername.type('John Doe');
    LoginPage.getPassword.type('ThisIsNotAPassword');
    LoginPage.getLoginButton.click();
    cy.url().should('include', '/#appointment');

    AppointmentPage.getFacility.select('Hongkong CURA Healthcare Center');
    AppointmentPage.getFacility.should('have.value', 'Hongkong CURA Healthcare Center');
    AppointmentPage.getHospitalReadmission.check();
    AppointmentPage.getHospitalReadmission.should('be.checked');
    AppointmentPage.getProgramMedicaid.check();
    AppointmentPage.getProgramMedicaid.should('be.checked');
    AppointmentPage.getVisitDate.click();
    // AppointmentPage.getDatePicker.click(); // šis izvēlas 28. datumu no kalendāra
    AppointmentPage.getVisitDate.type('28/02/2025');
    AppointmentPage.getVisitDate.should('have.value', '28/02/2025');
    AppointmentPage.getComment.click( {force:true});
    AppointmentPage.getComment.type('CURA Healthcare Service');
    AppointmentPage.getComment.should('have.value', 'CURA Healthcare Service');
    AppointmentPage.getBookAppointmentButton.click();
    cy.url().should('include', '/appointment.php#summary');

    AppointmentSummaryPage.getFacility.should('have.text', 'Hongkong CURA Healthcare Center');
    AppointmentSummaryPage.getHospitalReadmission.should('have.text', 'Yes');
    AppointmentSummaryPage.getProgramMedicaid.should('have.text', 'Medicaid');
    AppointmentSummaryPage.getVisitDate.should('have.text', '28/02/2025'); 
    AppointmentSummaryPage.getComment.should('have.text', 'CURA Healthcare Service');

  })
})

describe('Scenario 2 - Appointment history empty', () => {
  beforeEach(() => {
    HomePage.visit();
  })

  it('Make Appointment', () => {
    HomePage.makeAppointmentButton.click();
    cy.url().should('include', '/profile.php#login');
  })

  it('Login', () => {
    HomePage.makeAppointmentButton.click();
    cy.url().should('include', '/profile.php#login');
    LoginPage.getUsername.type('John Doe');
    LoginPage.getUsername.should('have.value', 'John Doe');
    LoginPage.getPassword.type('ThisIsNotAPassword');
    LoginPage.getPassword.should('have.value', 'ThisIsNotAPassword');
    LoginPage.getLoginButton.click();
    cy.url().should('include', '/#appointment');
  })

  it('Appointment history empty', () => {
    HomePage.makeAppointmentButton.click();
    cy.url().should('include', '/profile.php#login');
    LoginPage.getUsername.type('John Doe');
    LoginPage.getPassword.type('ThisIsNotAPassword');
    LoginPage.getLoginButton.click();
    cy.url().should('include', '/#appointment');
    AppointmentPage.getMenuButton.click();
    AppointmentPage.getHistoryButton.click();
    HistoryPage.getHistoryTable.should('contain.text', 'No appointment.');
  })
})