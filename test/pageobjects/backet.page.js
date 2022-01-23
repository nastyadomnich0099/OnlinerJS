import Page from './page';

class BacketPage extends Page {


    get backetLabel() {
        return $('//div[@class="offers-list__part offers-list__part_price"]/following-sibling::*//div[contains(@class,"helpers_hide_tablet")]/a[contains(@class, "button-style_expletive")]')
    }
    get backetButton() {
        return $('//a[@class="b-top-profile__cart"]')
    }



    get checkoutLink() {
        return $('//a[contains(@class, "cart-form__button button-style")]')
    }

    get cartForm() {
        return $('//div[contains(@class, "cart-form__flex")]')
    }


    async redirectToBacket() {
        await this.backetLabel.scrollIntoView()
        await this.backetLabel.click()
        await this.backetButton.scrollIntoView()
        await this.backetButton.click()
        await this.checkoutLink.click()
        await this.cartForm.isDisplayed()
    }





}

export default new BacketPage();