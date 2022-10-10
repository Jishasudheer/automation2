import homePage from "./home.page";
class AuthPage{
//webelments

get txtEmailIDForAccountCreation(){
    return $("#email_create");
}
get btn_createAnAccount(){
    return $("#SubmitCreate");
}
get radio_gender(){
    return $(".radio-inline")
}
get txtName(){
    return $("#customer_firstname");
}
get txtLastName(){
    return $("#customer_lastname");
}
get txtEmail(){
    return $("#email");
}
get txtPassword(){
    return $("#passwd");
}
get drpListDays(){
    return $("#days")
}
get drpListMont(){
    return $("#months")
}
get drpListYear(){
    return $("#years")
}
get checkBoxNewsletter(){
    return $("#newsletter")
}
get checkBoxSpecialOffer(){
    return $("#optin")
}
get txtAddressFirstName(){
    return $("#firstname");
}    
get txtAddressLastName(){
    return $("#lastname");
}
get txtAddressCompanyName(){
    return $("#company");
}
get txtAddress1(){
    return $("#address1");
}    
get txtAddress2(){
    return $("#address2");
}   

get txtAddressCity(){
    return $("#city");
}    
get listAddressState(){
    return $("#id_state");
}    
get txtPostCode(){
    return $("#postcode");
}  
get listAddressCountry(){
    return $("#id_country");
}    
get txtAreaAdditionalInfo(){
    return $("#other");
}    
get txtPhoneNo(){
    return $("#phone");
}      

get txtMobilePhoneNo(){
    return $("#phone_mobile");
}    
get txtAddressAlias(){
    return $("#alias");
}
get btnRegister(){
    return $("#submitAccount");
}
get txtEmailForSignIn(){
    return $("#email");
}
get txtPasswordForSignIn(){
    return $("#passwd");
}
get btnSubmitLogIn(){
    return $("#SubmitLogin");
}
get btnlogOut(){
    return $('.logout');
}   

//Actions

createAccount= async(emailId,address)=> {

await this.txtEmailIDForAccountCreation.waitForExist({ timeout:100000 });
await this.txtEmailIDForAccountCreation.setValue(emailId);
await this.btn_createAnAccount.click();
console.log("mail id is ok");

const gender1=await this.radio_gender;
await  gender1.waitForExist({timeout:15000});
await this.radio_gender.click();
console.log("gender is fine");

await this.txtName.setValue(address.firstName);
await this.txtLastName.setValue(address.lastName);
await this.txtEmail.setValue(emailId);
await this.txtPassword.setValue("password123");

await this.drpListMont.selectByAttribute("value","5");
await this.drpListDays.selectByIndex(12);
await this.drpListYear.selectByAttribute("value","1992");
await this.txtAddressFirstName.setValue(address.firstName);

await this.txtAddressLastName.setValue(address.lastName);
await this.txtAddressCompanyName.setValue(address.companyName);
console.log("company name is :"+address.companyName);
await this.txtAddressCity.setValue("Singapore");
await this.txtAddress1.setValue(address.address1);
await this.txtAddress2.setValue(address.address2);
await this.listAddressState.selectByIndex(2);
await this.txtPostCode.setValue("00000");
await this.txtAreaAdditionalInfo.setValue("This is the additional information");
await this.txtPhoneNo.setValue("6235226075");
await this.txtMobilePhoneNo.setValue("2356415263");
await this.txtAddressAlias.setValue("My Address");
await this.btnRegister.click();


};
//SignIn using new credentials
signIn=async(username)=>{
    await this.txtEmailForSignIn.setValue(username);
    await this.txtPassword.setValue("password123");
    await this.btnSubmitLogIn.click();
}
signOut=async()=>{
    await this.btnlogOut.click();
    console.log("logout successfull");
}
}

export default new AuthPage();