
import { Locator, Page } from '@playwright/test';

export class LoginPage{

private readonly usernameTextbox:Locator
private readonly passwordTextbox:Locator
private readonly loginButton:Locator

constructor(page: Page){
  this.usernameTextbox=page.getByRole("textbox",{name:"Username",exact:true})
  this.passwordTextbox=page.getByRole("textbox",{name:"Password",exact:true})
  this.loginButton=page.getByRole("button",{name:"Login",exact:true})
}

async fillUsername(){
    await this.usernameTextbox.fill("standard_user")
}

async fillPassword(){
   await this.passwordTextbox.fill("secret_sauce")
}

async clicOnLogin(){
    await this.loginButton.click()
}


}

