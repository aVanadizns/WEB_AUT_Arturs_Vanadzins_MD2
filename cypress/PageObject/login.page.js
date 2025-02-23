export class LoginPage{
    static get url(){
         return '/profile.php#login';
    }
    static visit(){
        cy.visit(this.url);
    }

    static get getUsername(){
        return cy.get('[id="txt-username"]');
    }

    static get getPassword(){
        return cy.get('[id="txt-password"]');
    }

    static get getLoginButton(){
        return cy.get('[id="btn-login"]');
    }
}