class Page{
    openHomePage(){
        browser.url("http://automationpractice.com/index.php");
        console.log("Navigating to URL http://automationpractice.com/index.php ");
        const browserTitle= browser.getTitle();
    }
    verifyPageHeading=async()=>{

    }
}
export default new Page();