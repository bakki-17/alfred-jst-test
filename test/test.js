const {By, Key, Builder} = require("selenium-webdriver");
require("geckodriver")

async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build(); 

    await driver.get('http://practice.automationtesting.in/');
    // await driver.get('https://google.com');

    await driver.findElement(By.name("s")).sendKeys("Hello, world", Key.RETURN);

    setInterval(function(){
        driver.quit();
    }, 10000);

}

test_case();