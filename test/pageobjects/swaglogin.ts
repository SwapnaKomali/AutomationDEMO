class swaglogin{


     public get inputuserName(){
        return $("//input[@id='user-name']")
     }


     public get inputpassword(){
        return $("//input[@id='password']")
     }

     public get btnsubmit(){
        return $("//input[@type='submit']")
     }

     public async login(userName:string, password:string){
        await this.inputuserName.setValue('standard_user')
        await this.inputpassword.setValue('secret_sauce')
        await this.btnsubmit.click()
     }

}
export default new swaglogin()
