import Page from './page';

class ContentPage extends Page {


get autoSection1() {return $('//header[contains(.,"Авто")]/parent::div[contains(@class,"main-page-news")]')}
get article() {return $('//header[contains(.,"Авто")]/parent::div[contains(@class,"main-page-news")]/ul/li[1]')}
get searchField() {return $('//input[@class="fast-search__input"]')}
get searchResult() {return $('//a[@class="news__link news__link_primary"]')}
get catalogFilter() {return $('//div[@class="search__tabs-item active"]')}
get frame() {return $("//iframe[contains(@class,'modal')]")}
get searchResult() {return $('//div[@class="result__item result__item_product"]')}
get serchResultName() {return $('//h1[contains(text()," Напольные весы Xiaomi Mi Smart Scale 2")] ')}
get catalogButton() {return $('//span[contains(text(), "Каталог")][@class="b-main-navigation__text"]')}
get computerAndNetwork() {return $('//li [@data-id="2"]')}
get monitor() {return $('//div[contains (text (), "Ноутбуки, компьютеры, мониторы")]')}
get laptop() {return $('//a[contains(@href, "/notebook")]//span[contains(text(), "Ноутбуки ")]')}
get asus() {return $('//ul//label[.//input[@type="checkbox" and @value="asus"]]')}
//get asusLabel() {return $('//span[@class="schema-tags__text"]')}
get asusLabel() {return $('//div[@title="Производитель"]/span[@class="schema-tags__text"]')}
get matrixFreq1() {return $('//*[@class="schema-filter__label" and contains(.,"Частота матрицы")]/following-sibling::*//div[contains(@class,"filter-control")][1]')}
get matrixFreq2() {return $('//*[@class="schema-filter__label" and contains(.,"Частота матрицы")]/following-sibling::*//div[contains(@class,"filter-control")][2]')}
get matrixFreqLabel() {return $('//span[@class="schema-tags__text"]')}
get superPrice() {return $('//label[.//span[@class="schema-filter__hot schema-filter__hot_specific"]]')};
get superPriceLabel() {return $('//div[@class="schema-product__hot"]')}

get proposal() {return $('//a[contains(@href,"://catalog.onliner.by/scales/xiaomi/mismartscale2new/prices")]/span[text()="Предложения продавцов"]')}
get sortfilter() {return $('//select[@class="input-style__real"]')}
get priceOption() {return $('//select[@class="input-style__real"]/option[@value="price:asc"]')}
//get backetLabel() {return $('//div[@class="offers-list__item offers-list__item_highlighted"][2]//a[contains(text(),"В корзину")]')}
get backetLabel() {return $('//*[@class="offers-list__item offers-list__item_highlighted"]/following::*//div[contains(@class,"helpers_hide_tablet")]/a[contains(@class, "button-style_expletive")]')}
//*[@class="offers-list__item offers-list__item_highlighted"][1]/parent::*//a[contains(@class, 'button-style_expletive')]




//a[position()=2]

async openContent(){
    
    await this.autoSection1.scrollIntoView();
    await this.article.click();
    
}

async search(searchValue){

    await this.searchField.setValue(searchValue)
    await this.searchResult.isDisplayed()


}

async deleteSearchResult(){
    await this.searchField.clearValue();
    browser.pause(50000)
}

async searchUniqProduct(searchValue1){
    await this.searchField.setValue(searchValue1);


}

async openSearchResult(){
const frame1 = await browser.$("//iframe[contains(@class,'modal')]");
await browser.switchToFrame(frame1);
await this.catalogFilter.click();
await this.searchResult.isDisplayed();
await this.searchResult.click()
await this.serchResultName.isDisplayed()


}

async openSearchResult2(){
    const frame1 = await browser.$("//iframe[contains(@class,'modal')]");
    await browser.switchToFrame(frame1);
    //await this.catalogFilter.click();
    await this.searchResult.isDisplayed();
    await this.searchResult.click()
    await this.serchResultName.isDisplayed()
    
    
    }

async navigateToLaptop(){
    await this.catalogButton.click()
    await this.computerAndNetwork.click()
    await(await this.monitor).moveTo()
    await this.laptop.click()

}

async selectFilter(){

     browser.pause(50000)
    
    await this.asus.scrollIntoView();
    await this.asus.click();
    await this.asusLabel.isDisplayed();
    await this.matrixFreq1.scrollIntoView();
    await this.matrixFreq1.selectByIndex(3);
    await this.matrixFreq2.selectByIndex(5);
    await this.matrixFreqLabel.scrollIntoView();
    await this.matrixFreqLabel.isDisplayed();
    await this.superPrice.scrollIntoView();
    await this.superPrice.click();
    await this.superPriceLabel.isDisplayed();
    await this.asus.click();
    
   // await this.asus.scrollIntoView();
   // await this.asus.click();
    browser.pause(5000)
}


async redirectToProposal(){

    await this.proposal.click()
    await this .sortfilter.scrollIntoView()
    await this.sortfilter.click()
    await this.priceOption.click()
    //await this.backetLabel.scrollIntoView()
    await this.backetLabel.doubleClick()
    
   



    browser.pause(10000);



////a[contains(@class,"button-style ")]

   
}




open () {
    return super.open('');
}



}

export default new ContentPage();