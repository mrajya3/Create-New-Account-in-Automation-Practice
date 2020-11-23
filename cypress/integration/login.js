describe('Login Verification',function(){
    it ('Create new account scenario',function(){

            cy.visit('http://automationpractice.com/index.php')  //// this is to hit url

            cy.get('.login').click()   ////this is to click in sign in button

            cy.title().should('eq','Login - My Store')  ////This will check the subtitle . is an example of assertion
        
            cy.get('#email_create').type('stotens12@hbauers.best')  //// This step will input the email address
            
            cy.get('#SubmitCreate').click()  //// This will click the create an account button

            cy.get('#id_gender1').click()   ////This will select the gender 

            cy.get('input#customer_firstname').type('stotens')    ////This will enter first name

            cy.get('#customer_lastname').type('stateru')    ////This will enter last name

            cy.get('#passwd').type('stateru@226')    ////This will enter password

            cy.get('#address1').type('893 Zappia Drive')    ////This will enter address

            cy.get('#city').type('Lexington')    ////This will enter city

            cy.get('#postcode').type('12345')    ////This will enter postcode

            cy.get('#id_state').select('Alabama')    ////This will selectc Alabama from state dropdown

            cy.get('#phone_mobile').type('8567890078')    ////This will enter mobile number

            cy.get('#alias').type('test address')    ////This will enter address

            cy.get('#submitAccount > span').click()  //// This will click the create an account button

            cy.title().should('eq','My account - My Store')   ////This will check the  title of the page and validate if the user has been created








            })
        

   
})