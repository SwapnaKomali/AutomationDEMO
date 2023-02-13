import Automatingdates from "../pageobjects/Automatingdates.js";
import PickCurrentdate from "../pageobjects/PickCurrentdate.js";

describe("Validatig Calander", async () => {
  it("test next date", async () => {
    await browser.url("https://demo.automationtesting.in/Datepicker.html");
    await browser.maximizeWindow();

    let Calandar = await $('//div[@class="col-xs-1"]/img');
    Calandar.waitForClickable();
    Calandar.click();
    

    const currentdate = new Date().getDate();
    console.log("currentdate", +currentdate);
    const nxt = new Date().getDate() + 1;
    console.log("date:::", +nxt);

    await (await Automatingdates.nextday(Automatingdates.nxtDay())).click();
    await browser.pause(4000);

    // let CD = await $('//a[@class="ui-state-default ui-state-highlight"]');
    //   CD.click();
    //   await browser.pause(5000);
    //   console.log(CD.getText());
  });

  it.skip("validating current day", async () => {
    await (await PickCurrentdate.CD).click();
    await browser.pause(4000);
  });
});
