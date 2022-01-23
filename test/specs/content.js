import ContentPage from '../pageobjects/content.page';
import resources from '../resources';
import LoginPage from '../pageobjects/login.page'
import OrderPage from '../pageobjects/order.page'
import BacketPage from '../pageobjects/backet.page'
import CatalogPage from '../pageobjects/catalog.page'
import ProductPage from '../pageobjects/product.page'

describe('Content Page', () => {

    before(async () => {
        await ContentPage.open();
    });

    after(() => {
        browser.url(resources.url);
    });

    afterEach(() => {
        browser.refresh();
    });

    describe(' Onliner tests', () => {
        // it('should login with valid credentials', async () => {
        //     await LoginPage.login(resources.username, resources.password);
        //     await ContentPage.openContent();
        // });

        it('search of items', async () => {
            await ContentPage.search(resources.searchValue);
            await ContentPage.deleteSearchResult();
            await ContentPage.searchUniqProduct(resources.searchValue1);
            await ContentPage.openSearchResult();
        })

        it('filtering catalog page', async () => {
            await ContentPage.navigateToLaptop();
            await CatalogPage.selectFilter();
        })

        it('should place an order before payment', async () => {
            await ContentPage.searchUniqProduct2(resources.searchValue1);
            await ContentPage.openSearchResult2();
            await ProductPage.redirectToProposal();
            await BacketPage.redirectToBacket();
   //         await OrderPage.fillInForm(resources.street, resources.house, resources.firstName, resources.lastName, resources.mobile);
         // await OrderPage.redirectToPayment();
        })
    })
});