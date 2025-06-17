const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(); 
  const page = await browser.newPage();
  await page.goto('https:example.com'); /* -------- PASTE UR URL HERE -------- */ 

  const title = await page.$eval('h1', el => el.innerText);
  console.log('title', title);

  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  console.log('saved in screenshot.png');

  await browser.close();
})();
