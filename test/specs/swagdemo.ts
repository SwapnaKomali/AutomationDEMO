describe('My Login application',async () => {
    it("Test valid user details",async ()=>{
    await browser.url("https://www.saucedemo.com/");
    const userName=await $("//input[@id='user-name']")
    const password=await $("//input[@id='password']")
    const btnSubmit=await $("//input[@type='submit']")
    const logo= await $(".app_logo")

    await userName.setValue('standard_user')
    await password.setValue('secret_sauce')
    await btnSubmit.click()
    expect(logo).toBeDisplayed()
    })

    //Multiple selectors
    
    it('multiple element finding', async() => {
        const addToCartElements = await $$("//button[text()='Add to cart']")
    let sizeofAddToCart = await addToCartElements.length
    console.log("size of the cart",sizeofAddToCart)
    browser.waitUntil(async ()=> await addToCartElements.length>0,{timeout:8000,timeoutMsg:"Element length not greater than zero"})
     await browser.pause(5000)

    for (let index = 0; index < sizeofAddToCart; index++) {
     const element = await addToCartElements[index];
      await element.waitForClickable();
     await browser.pause(5000)
     await element.click()

    }
    
// checking the count of the cart
    const addToCart = await $(".shopping_cart_badge")
    const addToCartelement = await addToCart.getText()
    console.log("no of items",addToCartelement)
    console.log("addto cart element",sizeofAddToCart.toString())
    browser.waitUntil(async ()=> await addToCartelement==sizeofAddToCart.toString(),{timeout:8000,timeoutMsg:"Element is equal to six "})

    await expect(addToCartelement).toEqual(sizeofAddToCart.toString())


})
    })