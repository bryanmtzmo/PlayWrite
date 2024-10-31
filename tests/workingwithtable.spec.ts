import { test, expect } from '@playwright/test';

test('tablaweb', async ({ page }) => {
 
await page.goto('https://cosmocode.io/automation-practice-webtable/')

const tablecontainer = await page.locator("xpath=//table[@id='countries']")

const rows= await tablecontainer.locator("xpath=.//tr").all()

const countries:Country[]=[]


for(let row of rows){
   let country:Country={
      name: await row.locator('xpath=.//td[2]').innerText(),
      capital:  await row.locator('xpath=.//td[3]').innerText(),
      currency:  await row.locator('xpath=.//td[4]').innerText(),
      primaryLanguage:  await row.locator('xpath=.//td[5]').innerText()
   }
   countries.push(country)
}

/*
for(let num of countries){
   console.log(num)
}*/

const countryWherePeopleSpeakPortuguese=countries.filter(country => country.primaryLanguage==='Portuguese')

console.log(countryWherePeopleSpeakPortuguese)

//console.log(rows.length)
/*
for(let row of rows){
   console.log(await row.innerText())
}*/
/*
const row1= rows.at(1)
const countryname=await row1?.locator("xpath=.//td[2]").innerText()
const countrycapital=await row1?.locator("xpath=.//td[3]").innerText()
const countrycurrency= await row1?.locator("xpath=.//td[4]").innerText()

console.log(countryname,countrycapital,countrycurrency)
*/
interface Country{
  name:string
  capital:string
  currency:string  
  primaryLanguage:string
}


// tr filas

//table[@id='countries']//tr[2]//td[1] --> check
//table[@id='countries']//tr[2]//td[2] -- country
//table[@id='countries']//tr[2]//td[3] -- capital
//table[@id='countries']//tr[2]//td[4] -- currency
//table[@id='countries']//tr[2]//td[5] -- primary lenguaje

});



