class selectbolivia {

    public get Bolivia() {
        return $('//table[@id ="countries"]//tr//td//strong[contains(text(),"Bolivia")]');
    }

    public async waituntilclickble() {
         await (this.Bolivia).waitForClickable()

    }

    public get checkbox() {
        return $('(//input[@type="checkbox"])[21]');
    }

    public async waituntilcheckthebox() {
         
        
        await (this.checkbox).waitForClickable()

    }
}
export default new selectbolivia()