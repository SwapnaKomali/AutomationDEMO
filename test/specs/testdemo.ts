import swaglogin from "../pageobjects/swaglogin.js"
import productLogopage from "../pageobjects/productLogopage.js"
import swagcartElements from "../pageobjects/swagcartElements.js"
describe("My Login application", async () => {


    it("Test valid user details", async ()=> {

     await browser.url("https://www.saucedemo.com/inventory.html")
    await swaglogin.login('standard_user','secret_sauce')

    
     //Validating product logo
     
     await productLogopage.waitUntilLogoDisplay()
    expect (productLogopage.logo).toBeDisplayed()

    // validating the cartElements
    await swagcartElements.addToCartElements()
    expect(swagcartElements).toBeDisplayed()
    })

   
})




