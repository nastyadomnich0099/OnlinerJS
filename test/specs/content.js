import ContentPage from '../pageobjects/content.page';
import resources from '../resources';

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
        it('should login with valid credentials', async () => {
            await ContentPage.openContent();
        
        });


        it('search of items', async() => {
            await ContentPage.search(resources.searchValue);
            await ContentPage.deleteSearchResult();
            await   ContentPage.searchUniqProduct(resources.searchValue1);
            await ContentPage.openSearchResult();

        })


        it ('filtering catalog page', async() => {
            await ContentPage.navigateToLaptop();
            await ContentPage.selectFilter();
            browser.pause(10000);
            browser.pause(50000)
            

        }
        )


        it('should place an order before payment', async() =>{
             await   ContentPage.searchUniqProduct(resources.searchValue1);
            await ContentPage.openSearchResult2();
            await ContentPage.redirectToProposal();
            await ContentPage.redirectToBacket();
           await ContentPage.fillInForm(resources.street, resources.house, resources.firstName, resources.lastName);


           browser.pause(50000)
        })


        })

        



    });
