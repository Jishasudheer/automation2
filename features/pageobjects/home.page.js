import authPage from "./auth.page";

class HomePage {
//Web elements

get btn_SignIn(){
    return $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a');
}
get contact_Link(){
    return $("#contact-link");
}
get logo_Img(){
    return $(".logo.img-responsive");
}
get btn_signOut(){
    return $(".logout");
}

// Actions

async navigateToSignUpPage(){
    console.log("inside navigate to signuppage");
 await this.btn_SignIn.click();
 console.log("Sign in button is clicked");
}

}

export default new HomePage();