describe('Validating dropdowns', async () => {
    it('test File', async() => {
        //File
        await browser.url("https://semantic-ui.com/modules/dropdown.html")
        await browser.maximizeWindow();

        let file = await $('(//div[@class="ui dropdown"])[1]');
        await file.waitForClickable();
        await file.click();
        await browser.pause(5000);
          let file1 = await $("(//div[contains(text(),'New')])[1]");
          file1.click();
          await browser.pause(50000);
         await console.log(file1.getValue());

         
    });

     //Gender
    it('test Gender', async () => {
       
        let  Gender = await $('(//div[@class="default text"])[1]');
       await Gender.waitForClickable();
       Gender.click();
       await browser.pause(3000);
       let Gender1 = await $("(//div[contains(text(),'Male')])[1]");
       Gender1.click();
       await browser.pause(3000);
       console.log(Gender1.getText());
  
    });

    //Country
    it('test country', async() => {
        let country = await $('(//input[@class="search"])[1]')
        await browser.maximizeWindow();
        await country.waitForClickable();
        country.click();

        let country1 = await $("(//div[@class='item']/i[@class='dz flag'])[1]");
       country1.click();
       await browser.pause(3000);
       console.log(country1.getText());

    });

    // it('test state', async() => {
    //     let state =await $('(//input[@class="search"])[1]')
    //     await browser.maximizeWindow();
    //     state.click();
    //     await state.selectByAttribute('value',"CA")
    //     state.click();
    //     await browser.pause(3000);
        
    // });
});