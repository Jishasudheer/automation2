import { Given,When,Then } from "@wdio/cucumber-framework";
import homePage from "../pageobjects/home.page";
import page from "../pageobjects/page";
import authPage from "../pageobjects/auth.page";
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
   
  await authPage.createAccount(emailId);
});





