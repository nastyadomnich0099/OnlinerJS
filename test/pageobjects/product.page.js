import Page from './page';

class ProductPage extends Page {

    get proposal() {
        return $('//a[contains(@href,"://catalog.onliner.by/scales/xiaomi/mismartscale2new/prices")]/span[text()="Предложения продавцов"]')
    }
    get sortfilter() {
        return $('//select[@class="input-style__real"]')
    }
    get sortfilterView() {
        return $('//div[@class="offers-filter__part offers-filter__part_2"]')
    }

    get priceOption() {
        return $('//select[@class="input-style__real"]/option[@value="price:asc"]')
    }
    get pricelabel() {
        return $('//div[@class="input-style__faux"]')
    }


    async redirectToProposal() {
        await this.proposal.click()
        await this.sortfilterView.scrollIntoView()
        await this.sortfilter.click()
        await this.priceOption.click()
        await expect (await this.pricelabel).toBeDisplayed();
    }

}

export default new ProductPage();