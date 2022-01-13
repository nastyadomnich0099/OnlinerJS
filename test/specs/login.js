import LoginPage from '../pageobjects/login.page';
import resources from '../resources';


describe('Login Page', () => {

    before(async () => {
        await LoginPage.open();

    });

    after(() => {
        browser.url(resources.url);
    });

    afterEach(() => {
        browser.refresh();

    });

    describe(' Onliner tests', () => {
        it('should login with valid credentials', async () => {
            await LoginPage.login(resources.username, resources.password);
            await LoginPage.logOff();
        });

        it('should registrated with valid credentials', async () => {
            await LoginPage.openRegForm();
            await LoginPage.generateEmail();
            await LoginPage.generatePassword();
            await LoginPage.submitReg();
        });

    })
})