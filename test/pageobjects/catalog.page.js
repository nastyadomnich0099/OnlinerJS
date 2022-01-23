import Page from './page';

class CatalogPage extends Page {

    get asusFilter() {
        return $('//ul//label[.//input[@type="checkbox" and @value="asus"]]')
    }
    get asusLabel() {
        return $('//div[@title="Производитель"]/span[@class="schema-tags__text"]')
    }
    get matrixFrequency1() {
        return $('//*[@class="schema-filter__label" and contains(.,"Частота матрицы")]/following-sibling::*//div[contains(@class,"filter-control")][1]')
    }
    get matrixFrequency2() {
        return $('//*[@class="schema-filter__label" and contains(.,"Частота матрицы")]/following-sibling::*//div[contains(@class,"filter-control")][2]')
    }
    get matrixFrequencyLabel() {
        return $('//span[@class="schema-tags__text"]')
    }
    get superPrice() {
        return $('//label[.//span[@class="schema-filter__hot schema-filter__hot_specific"]]')
    };
    get superPriceLabel() {
        return $('//div[@class="schema-product__hot"]')
    }

    async selectFilter() {
        browser.waitUntil(await this.asusFilter.scrollIntoView());
        await this.asusFilter.click();
        await expect(await this.asusLabel).toBeDisplayed();
        await this.matrixFrequency1.scrollIntoView();
        await this.matrixFrequency1.selectByIndex(3);
        await this.matrixFrequency2.selectByIndex(5);
        await this.matrixFrequencyLabel.scrollIntoView();
        await expect (await this.matrixFrequencyLabel).toBeDisplayed();
        await this.superPrice.scrollIntoView();
        await this.superPrice.click();
        await expect(await this.superPriceLabel).toBeDisplayed();
        await this.asusFilter.click();
    }
}

export default new CatalogPage();