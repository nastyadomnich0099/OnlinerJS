import Page from './page';

class OrderPage extends Page {

    get streetField() {
        return $('//div[@class="cart-form__field"]/following::*/input[contains(@class, "auth-form__input auth-form__input_width_full")]')
    }
    get houseField() {
        return $('//input[contains(@class,"cart-form__input_nonadaptive")]')
    }
    get nameField() {
        return $('//input[contains(@class,"cart-form__input_width_ss")]')
    }
    get lastNameField() {
        return $('//*[@class="cart-form__label-title" and contains(.,"Фамилия")]/following::*/input[contains(@class, "cart-form__input_width_ss")]')
    }
    get paymentMethod() {
        return $('//button [contains(@class,"cart-form__button_responsive")]')
    }
    get mobileNumber() {
        return $('//div[contains(@class,"cart-form__group_nonadaptive") and contains(.,"Телефон")]/following::*/input[contains(@class, "cart-form__input_nonadaptive")]')
    }

  



  async fillInForm(street, house, firstName, lastName, mobile) {
    await this.streetField.setValue(street)
    await this.houseField.setValue(house)
    await this.nameField.setValue(firstName)
    await this.lastNameField.setValue(lastName)
    //  await this.mobileNumber.setValue(mobile)
}

async redirectToPayment() {
    await this.paymentMethod.scrollIntoView()
    await this.paymentMethod.click()
}
}

export default new OrderPage();