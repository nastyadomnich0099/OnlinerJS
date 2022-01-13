import Page from './page';

class ContentPage extends Page {

    get autoSection1() {
        return $('//header[contains(.,"Авто")]/parent::div[contains(@class,"main-page-news")]')
    }
    get article() {
        return $('//header[contains(.,"Авто")]/parent::div[contains(@class,"main-page-news")]/ul/li[1]')
    }
    get searchField() {
        return $('//input[@class="fast-search__input"]')
    }
    get searchResult1() {
        return $('//div[@class="news__data"]')
    }

    get catalogFilter() {
        return $('//div[@class="search__tabs-item active"]')
    }
    //get frame1() {return $("//iframe[contains(@class,'modal')]")}
    get searchResult() {
        return $('//div[@class="result__item result__item_product"]')
    }
    get serchResultName() {
        return $('//h1[contains(text()," Напольные весы Xiaomi Mi Smart Scale 2")] ')
    }
    get catalogButton() {
        return $('//span[contains(text(), "Каталог")][@class="b-main-navigation__text"]')
    }
    get computerAndNetwork() {
        return $('//li [@data-id="2"]')
    }
    get computerSection() {
        return $('//div[contains (text (), "Ноутбуки, компьютеры, мониторы")]')
    }
    get laptopSection() {
        return $('//a[contains(@href, "/notebook")]//span[contains(text(), "Ноутбуки ")]')
    }

    async openContent() {
        await this.autoSection1.scrollIntoView();
        await this.article.click();

    }

    async search(searchValue) {
        await this.searchField.setValue(searchValue)
        await this.searchResult1.isDisplayed()
    }

    async deleteSearchResult() {
        await this.searchField.clearValue();
        browser.pause(50000)
    }

    async searchUniqProduct(searchValue1) {
        await this.searchField.setValue(searchValue1);
    }

    async openSearchResult() {
        const frame1 = await browser.$("//iframe[contains(@class,'modal')]");
        await browser.switchToFrame(frame1);
        await this.catalogFilter.click();
        await this.searchResult.isDisplayed();
        await this.searchResult.click()
        await this.serchResultName.isDisplayed()
    }

    async openSearchResult2() {
        const frame1 = await browser.$("//iframe[contains(@class,'modal')]");
        await browser.switchToFrame(frame1);
        //await this.catalogFilter.click();
        await this.searchResult.isDisplayed();
        await this.searchResult.click()
        await this.serchResultName.isDisplayed()
    }

    async navigateToLaptop() {
        await this.catalogButton.click()
        await this.computerAndNetwork.click()
        await (await this.computerSection).moveTo()
        await this.laptopSection.click()
    }
    open() {
        return super.open('');
    }
}

export default new ContentPage();