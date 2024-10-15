import { test, expect } from '@playwright/test';

test('testgrabado', async ({ page }) => {
  await page.goto('https://mercadolibre.com/');
  await page.getByRole('link', { name: 'México' }).click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('Iphone');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  //await page.getByRole('link', { name: 'Apple iPhone 13 (128 GB) -' }).first().click()
  //await page.getByRole('button', { name: 'Comprar ahora' }).click();
  await page.pause();
});