const {By, Key, Builder} = require("selenium-webdriver");
const { driver } = require("selenium-webdriver/chromium");
require("chromedriver", "geckodriveer");


async function test_case_01(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get('http://practice.automationtesting.in/');

    await driver.findElement(By.linkText("//practice.automationtesting.in/wp-content/uploads/2017/01/Shop-For-Selenium-Books.png")); 

    setInterval(function(){
        driver.quit();
    }, 10000);

} test_case_01();