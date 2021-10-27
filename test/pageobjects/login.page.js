import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginIcon() { return $('//*[@class="auth-bar__item auth-bar__item--text"]')}
    get inputUsername () { return $('//*[@placeholder="Ник или e-mail"]') }
    get inputPassword () { return $('//*[@placeholder="Пароль"]') }
    get btnSubmit () { return $('//button[@type="submit"][@class="auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full"]') }
    get regButton() { return $('//a[@class="auth-form__link auth-form__link_primary auth-form__link_small"]')}
    get regForm() { return $('//div[@class="auth-form__body"]')}
    get logOffSection() {return $('//a[@class="b-top-profile__preview js-toggle-bar"]')}
    get logOffButton() {return $('//div[@class="b-top-profile__logout"]/a')}
    get regEmail() {return $('//*[@placeholder="Ваш e-mail"]')};
    get regPassword() {return $('//*[@placeholder="Придумайте пароль"]')};
    get regPassword1() {return $('//*[@placeholder="Повторите пароль"]')};
    get regSubmitBtn() {return $('//button[@class="auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full"]')};
    get authForm() {return $('//div[@class="auth-container auth-container_max-width_sssm"]')};


   

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.loginIcon.click()
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async logOff(){
        await this.logOffSection.click()

        await this.logOffButton.click()
    }

    async  openRegForm (){
        await browser.pause(10000);
        await  this.loginIcon.click()
        await this.regButton.click()
       // await this.regForm.waitForDispalyed()

    }


    async generateEmail(){
        let random = Math.floor(Math.random() * 10);
        await this.regEmail.setValue(` email${random}@gmail.com`);
        
   }

   async generatePassword(){
       let random1 = Math.random();
       await this.regPassword.setValue(random1);
       await this.regPassword1.setValue(random1);
       browser.pause(10000);
   }

   async submitReg(){
       await  this.regSubmitBtn.click()
       await this.authForm.isDisplayed();
   }



      


     




    

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();
