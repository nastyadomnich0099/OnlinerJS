import loginPage from '../pageobjects/login.page';
import LoginPage from '../pageobjects/login.page';


describe('Login Page', () => {

    before(async () => {
        await LoginPage.open();
        await browser.pause(1000);

    });



    after(() => {
        browser.url('https://www.onliner.by/');
    });

    afterEach(() => {
        browser.refresh();

    });

    describe(' Onliner tests', () => {
        it('should login with valid credentials', async () => {
            await LoginPage.login('nastyadomnich071@gmail.com', 'Lena5530718');
            await loginPage.logOff();


        });


   
        it('should registrated with valid credentials', async () => {
            await LoginPage.openRegForm()
            await loginPage.generateEmail();
            await loginPage.generatePassword();
            await loginPage.submitReg();
            browser.pause(10000);

        });
    




})
})
