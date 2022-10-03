import myaccountPage from "./myaccount.page"
class MyAccount{
    get btnMyAddress(){
        return $(".icon-building");
    }
    get btnOrderHistory(){
        return $(".icon-list-ol");
    }
    get btnPersonalInfo(){
        return $(".icon-user");
    }
    get btnWishList(){
        return $(".icon-heart");
    }
    // get txtGetAddressName(){
    //     return $(".address_name");
    // }
    get txtAddressCompany(){
        return $(".address_company");
    }
    get txtAddress1(){
        return $(".address_address1");
    }
    get txtAddress2(){
        return $(".address_address2");
    }
    //actions
    navigateToAddress=async()=>{
        
        await this.btnMyAddress.click();
        expect(myaccountPage.txtGetAddressName.toBeExisting());
        expect(myaccountPage.txtAddressCompany.toBeExisting());
        expect(myaccountPage.txtAddress2.toBeExisting());
        
    }
}
export default new MyAccount();