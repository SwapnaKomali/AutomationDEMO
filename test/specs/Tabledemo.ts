describe("Validating Text from table", async () =>{
    it("Select Bolivia", async () =>{
     await browser.url("https://cosmocode.io/automation-practice-webtable/")
     await browser.maximizeWindow();
     await browser.scroll(150,60);

     let Bolivia = await $('//table[@id ="countries"]//tr//td//strong[contains(text(),"Bolivia")]');

     await browser.pause(5000);
     Bolivia.click();

     let text = Bolivia.getText();
     console.log("print the value of country:",await text);
     await browser.pause(3000);

    
     let Checkbox = await $('(//input[@type="checkbox"])[21]');
     await Checkbox.click();
     await browser.pause(4000);

    })
    it('Select Argentina', async() => {
        
        let Argentina = await $('//div[@class="entry-content"]/table/tbody/tr[8]/td[2]//strong[contains(text(),"Argentina")]')
         
        Argentina.click();
        await browser.pause(3000)
         

         let checkbox2 = await $('(//input[@class="hasVisited"])[7]')
         await checkbox2.click();
         await browser.pause(3000);
   
    });
    it('test Indian Rupee', async() => {
        let IR = await $('//td[contains(text(),"Indian Rupee")]')
        IR.click();
        await browser.pause(3000);

        let checkbox3= await $('(//input[@class="hasVisited"])[77]')
        await checkbox3.click();
        await browser.pause(3000);
        
    });
})
