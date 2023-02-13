class selectArgentina {

    public get Argentina() {

        return $('//div[@class="entry-content"]/table/tbody/tr[8]/td[2]//strong[contains(text(),"Argentina")]')
    }

    public async waituntilclickble() {
        await (this.Argentina).waitForClickable()

    }

    public get checkbox() {
        return $('(//input[@class="hasVisited"])[7]')
    }

    public async waituntilcheckthebox() {
        await (this.checkbox).waitForClickable()

    }
}
export default new selectArgentina()