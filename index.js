const puppeteer = require('puppeteer');
const fs = require('fs-extra');


const admitCard = fs.readFileSync('./admitCard.html', {encoding:'utf-8'});
                 

(async function() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(admitCard);
    await page.emulateMedia('screen');
    await page.pdf({
      path: 'admitCard.pdf',
      format: 'A4',
      printBackground: true
    });

    console.log('done');
    await browser.close();
    process.exit();

  } catch (e) {
    console.log('Error', e);
  }
})();