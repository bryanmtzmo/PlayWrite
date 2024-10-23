import { test, expect } from '@playwright/test';
import { LoginPage } from './PageObject/LoginPage';


test('script', async ({ page }) => {
 await page.goto('https://www.mercadolibre.com.mx/')
await page.locator('input[id=\'cb1-edit\']').fill('Iphone')
await page.keyboard.press('Enter')
await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible()
const titles= await page.locator('//ol[contains(@class,\'ui-search-layout\')]//li//h2').allInnerTexts()
console.log("Resultados obtenidos: ",titles.length)
for(let title of titles){
   console.log("El titulo es ", title)
}
//await page.pause()
});


test('getByRole', async ({ page }) => {
  await page.goto('https://amazon.com.mx/')
  //await page.getByRole("link",{name:"0 artículos en el carrito"}).click()
  await page.getByRole("link",{name:"AmazonBasics",exact:true}).click()
  await page.pause()
 });
 



 test('CarritoDeCompras', async ({ page }) => {
  //login
  await page.goto('https://www.saucedemo.com/')

/*
  await page.getByRole("textbox",{name:"Username",exact:true}).fill("standard_user")
  await page.getByRole("textbox",{name:"Password",exact:true}).fill("secret_sauce")
  await page.getByRole("button",{name:"Login",exact:true}).click()*/
  
  const ingreso =new LoginPage(page)
  await ingreso.fillUsername('standar_user')
  await ingreso.fillPassword('secre_sauce')
  await ingreso.clicOnLogin()



  //seleccion aleatoria
  const itemsContainer= await page.locator('#inventory_container .inventory_item').all()
  const randomIndex=Math.floor(Math.random()*itemsContainer.length)
  const randomItem= itemsContainer[randomIndex]
  const  expectDescription= await randomItem.locator('.inventory_item_desc').innerText()
  const  expectName= await randomItem.locator('.inventory_item_name').innerText()
  const  expectPrice= await randomItem.locator('.inventory_item_price').innerText()
  console.log(`Precio: ${expectPrice} Nombre: ${expectName} Descripcion: ${expectDescription}`)

   //hacer clic aleatoriamente y agregar al carrito
   await randomItem.getByRole("button",{name:"Add to cart",exact:true}).click()
   await page.locator('a.shopping_cart_link').click()

   expect(page.getByRole("button",{name:"Checkout",exact:true})).toBeVisible()


   //comparar si es el producto correcto.
   const  actualDescription= await page.locator('.inventory_item_desc').innerText()
   const  actualName= await page.locator('.inventory_item_name').innerText()
   const  actualPrice= await page.locator('.inventory_item_price').innerText()

   expect(actualDescription).toEqual(expectDescription)
   expect(actualName).toEqual(actualName)
   expect(actualPrice).toEqual(expectPrice)
   await page.pause()
   
 });
 
 test('Comprar Producto', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/')
  const ingreso =new LoginPage(page)
  await ingreso.fillUsername('standard_user')
  await ingreso.fillPassword('secret_sauce')
  await ingreso.clicOnLogin()

 });
 
 test('Login en Pagina', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/')
  const ingreso =new LoginPage(page)
  await ingreso.loginWithCredentials('standard_user','secret_sauce')
  await ingreso.checkSuccessfulLogin()

 });

 test('Variable Entorno', async ({ page }) => {

  await page.goto(process.env.URL)
  await page.pause
 });