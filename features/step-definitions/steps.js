import { Given,When,Then } from "@wdio/cucumber-framework";
import homePage from "../pageobjects/home.page";
import page from "../pageobjects/page";
import authPage from "../pageobjects/auth.page";
import myaccountPage from "../pageobjects/myaccount.page";
import MyAccount from "../pageobjects/myaccount.page"
//import faker from faker;
import { faker } from '@faker-js/faker';
Given (/^I am on the home page$/,async ()=> {
   page.openHomePage();
   await expect(homePage.btn_SignIn).toBePresent();
   await expect(homePage.contact_Link).toBePresent();
   await expect(homePage.logo_Img).toBePresent(); 
});

When(/^Navigate to SignUp Page$/,async()=>{
   homePage.navigateToSignUpPage();
   console.log("Navigated to SignUp page");
});

Then (/^Create an account with random username$/,async()=>{
   console.log("account creation");
   const randomStr=Math.random().toString(36).substring(2,5);
   const emailId=`mymail_${randomStr}@gmail.com`;
   console.log(emailId);
   const addressObj={
       firstName:faker.name.firstName(),
       lastName:faker.name.lastName(),
       company:faker.company.name(),
       address1:faker.address.buildingNumber(),
       address2:faker.address.countryCode(),
   };
   global.SharedVariable.email=emailId;
   global.SharedVariable.address=addressObj;
  await authPage.createAccount(emailId,addressObj);
});

Given(/^I am on the sign in page$/,async()=>{
   if( await homePage.btn_signOut.isExisting()){
      await authPage.signOut();
   }
  await expect(homePage.btn_SignIn).toBeExisting();
  await expect(homePage.logo_Img).toBeExisting();
  await expect(homePage.contact_Link).toBeExisting();
  
  await homePage.navigateToSignUpPage();
});

When(/^login with the newly created credentials$/,async()=>{
   await authPage.signIn(global.SharedVariable.email);
});

Then(/^I shall verify the address information in my addresses$/,async()=>{
   await myaccountPage.navigateToAddress();
  
        
})





