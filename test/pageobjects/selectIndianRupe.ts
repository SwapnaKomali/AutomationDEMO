class selectIndianRupe {
    public get IR() {
        return $('//td[contains(text(),"Indian Rupee")]');
    }

    public async waituntilclickble() {
        await (this.IR).waitForClickable();
    }

    public get checkbox() {
        return $('(//input[@class="hasVisited"])[77]');
    }

    public async waituntilcheckthebox() {
        await (this.checkbox).waitForClickable;
    }
}
export default new selectIndianRupe();
