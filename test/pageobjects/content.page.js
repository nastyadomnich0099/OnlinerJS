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

    get fastModalSearchField() {
        return $('//input[@class="fast-search__input"]');
    }
    get modalSearchField() {
        return $('//input[contains(@class,"search__input" ) and (@placeholder="Поиск")]')
    }

    get searchResult1() {
        return $('//a[@class="product__title-link" and contains(.,"Карта памяти")]')
    }

    get searchResult2() {
        return $('//a[@class="product__title-link" and contains(.,"Напольные весы Xiaomi Mi Smart Scale 2")]')
    }

    get catalogFilter() {
        return $('//div[contains(@class,"search__tabs-item active")]')
    }

    get searchResult() {
        return $('//a[@class="product__title-link"]')
    }

    get serchResultName() {
        return $('//h1[contains(text()," Напольные весы Xiaomi Mi Smart Scale 2")]')
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

    // get frame1(){
    //     return $('//iframe[contains(@class,"modal")]')
    // }

    async openContent() {
        await this.autoSection1.scrollIntoView();
        await this.article.click();
    }

    async search(searchValue) {
        await this.searchField.setValue(searchValue)
        const iframeSection = await browser.$("//iframe[contains(@class,'modal')]");
        await browser.switchToFrame(iframeSection);
        await this.catalogFilter.click()
        browser.waitUntil(await expect(await this.searchResult1).toBeDisplayed(), 5000);
    }

    async deleteSearchResult() {
        await this.modalSearchField.clearValue();
        browser.pause(5000)
    }

    async searchUniqProduct(searchValue1) {
        await this.modalSearchField.setValue(searchValue1);
        browser.waitUntil(await expect(await this.searchResult2).toBeDisplayed(), 5000);

    }

    async searchUniqProduct2(searchValue1) {
        await this.searchField.setValue(searchValue1)
        const frame1 = await browser.$("//iframe[contains(@class,'modal')]");
        await browser.switchToFrame(frame1);
        //await this.catalogFilter.click()
        browser.waitUntil(await expect(await this.searchResult2).toBeDisplayed(), 5000);
    }



    async openSearchResult() {
        await this.searchResult2.click()
        browser.waitUntil(await expect(await this.serchResultName).toBeDisplayed(), 5000)
    }

    async openSearchResult2() {
        await this.searchResult.isDisplayed();
        await this.searchResult.click()
        await expect(await this.serchResultName).toBeDisplayed()
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