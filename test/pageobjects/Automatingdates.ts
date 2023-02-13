class Automatingdates {
  //   public get  currentdate(){

  //     return $('//td//a[@class="ui-state-default ui-state-highlight ui-state-hover"]')
  //   }

  public async nextday(date: string) {
    let date_ele = `//a[text()='${date}']`;

    return $(date_ele);
  }

  public nxtDay() {
    const nxt = new Date().getDate() + 1;

    return nxt.toString();
  }
}
export default new Automatingdates();
