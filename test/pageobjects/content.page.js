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
get asus() {return $('//input[@type="checkbox"][contains(@value, "asus")][1]')}

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

async navigateToLaptop(){
    await this.catalogButton.click()
    await this.computerAndNetwork.click()
    await(await this.monitor).moveTo()
    await this.laptop.click()

}

async selectFilter(){

    //const checkboxesLabels = await browser.$('//input[@type="checkbox"][contains(@value, "asus")]');
  // const checkboxesLabels = await browser.$(`//label[@class="schema-filter__checkbox-item"][contains(@data-bind, "css: {'schema-filter__checkbox-item_disabled': facet.isDisabledLabel(item.id)}")]/span/input[@value="asus"]`);
   // const checkboxesLabels = await browser.$('//input[@class="i-checkbox__real"]');
    const checkboxesLabels = await browser.$$('//label[@class="schema-filter__checkbox-item"]');
   //const checkboxesLabels = await browser.$('input[type=checkbox][value=asus]');

   //const  checkboxesLabels =  await browser.getAttributeSelector('schema-filter__checkbox-item', 'asus');
     await checkboxesLabels.scrollIntoView();
     browser.pause(50000)


    //await checkboxesLabels.isDisplayed()
    //await checkboxesLabels.isClickable()
   await checkboxesLabels.click();


   //await this.asus.click()
    browser.pause(50000)
   // await this.asus.isSelected()
}




open () {
    return super.open('');
}



}

export default new ContentPage();