describe('testDropdown',() =>{
it('Test',async() =>{
     
     await browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
     await browser.maximizeWindow()

     const dropdown = await $('//div[@rel-title="Select Country"]//select');
     await dropdown.waitForClickable()
     await dropdown.click()

     //await dropdown.selectByIndex(3)
     //await dropdown.selectByVisibleText('Andorra')
     await dropdown.selectByAttribute('value',"AND")
     console.log(await dropdown.getValue())
     await browser.pause(4000)

})
})