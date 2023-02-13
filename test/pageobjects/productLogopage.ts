class productLogopage{

  public get logo(){
    return $(".app_logo")
  }

public async waitUntilLogoDisplay(){
    await this.logo.waitForDisplayed()
}


}

export default new productLogopage()