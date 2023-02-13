describe('My Login application',async () => {
    it("Test valid user details",async ()=>{
    await browser.url("https://www.saucedemo.com/");
    const userName=await $("//input[@id='user-name']")
    const password=await $("//input[@id='password']")
    const btnSubmit=await $("//input[@id='login-button']")
    const logo= await $(".app_logo")


    await userName.setValue('standard_user')
    await password.setValue('secret_sauce')
    await btnSubmit.click()

// Adding products to the cart
    const clkaddcart=await $("//button[@id='add-to-cart-sauce-labs-backpack']")
    const clkaddcart2=await $("//button[@id='add-to-cart-sauce-labs-backpack']")
    const clkcarticon=await $("//span[@class='shopping_cart_badge']")

//Validate same product is ahowing on cart
    const samename=await $("//div[@class='inventory_item_name']")
    const samename2=await $("//div[@class='inventory_item_name']")
    
//validating expected results
    await expect(logo).toBeDisplayed()
    await expect(samename).toBeDisplayed()
    await expect(samename2).toBeDisplayed()
    })
    })