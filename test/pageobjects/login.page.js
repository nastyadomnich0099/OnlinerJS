import Page from './page';

class LoginPage extends Page {

    get loginIcon() { return $('//*[@class="auth-bar__item auth-bar__item--text"]')}
    get loginForm() {return $('//div[@class="auth-entry"]')}
    get inputUsername () { return $('//*[@placeholder="Ник или e-mail"]') }
    get inputPassword () { return $('//*[@placeholder="Пароль"]') }
    get btnSubmit () { return $('//button[contains( @class, "auth-button_middle auth-form__button")]') }
    get regButton() { return $('//a[contains(@class,"auth-form__link")]')}
    get regForm() { return $('//div[@class="auth-form__body"]')}
    get logOffSection() {return $('//a[@class="b-top-profile__preview js-toggle-bar"]')}
    get logOffButton() {return $('//div[@class="b-top-profile__logout"]/a')}
    get regEmail() {return $('//*[@placeholder="Ваш e-mail"]')};
    get regPassword() {return $('//*[@placeholder="Придумайте пароль"]')};
    get regPassword1() {return $('//*[@placeholder="Повторите пароль"]')};
    get regSubmitBtn() {return $('//button[contains(@class, "auth-button auth-button_primary")]')};
    get authForm() {return $('//div[@class="auth-container auth-container_max-width_sssm"]')};
   



    async login (username, password) {
        await this.loginIcon.click();
        await  expect(await this.loginForm).toBeDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async logOff(){
        await this.logOffSection.click();
        await this.logOffButton.click();
    }

    async  openRegForm (){
        await this.loginIcon.click();
        await this.regButton.click();
       await  expect(await this.regForm).toBeDisplayed();

    }


    async generateEmail(){
        let random = Math.floor(Math.random() * 10);
        await this.regEmail.setValue(` email${random}@gmail.com`);
        
   }

   async generatePassword(){
       let random1 = Math.random();
       await this.regPassword.setValue(random1);
       await this.regPassword1.setValue(random1);
   }

   async submitReg(){
       await  this.regSubmitBtn.click();
       await expect (await this.authForm).toBeDisplayed();

   }

    open () {
        return super.open('');
    }
}

export default new LoginPage();
