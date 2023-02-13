import selectIndianRupe from "../pageobjects/selectIndianRupe.js";
import selectArgentina from "../pageobjects/selectArgentina.js";
import selectbolivia from "../pageobjects/selectbolivia.js";



describe('Validating table', async() => {
     it('Validating selected values', async() => {
        
        await browser.url("https://cosmocode.io/automation-practice-webtable/")
        await browser.maximizeWindow();


        //validating Bolivia
          await selectbolivia.waituntilclickble()
         await expect (selectbolivia.Bolivia).toBeClickable()
         await browser.pause(3000);

          //Validating Argentina
          await selectArgentina.waituntilclickble()
           await expect (selectArgentina.Argentina).toBeClickable()
           await browser.pause(3000);
           
           //Validating IndianRupe
           await selectIndianRupe.waituntilclickble()
           await expect (selectIndianRupe.IR).toBeClickable()
           await browser.pause(3000);
     });
});