// const {By, Key, Builder} = require("selenium-webdriver");
import { By, Builder } from "selenium-webdriver";
//import { expect } from chai;
import { expect, should } from "chai";
import { it } from "node:test";
import { describe } from "node:test";


async function home_slider_test(){

    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("https://practice.automationtesting.in/");

    describe("Verify the slider ", async () => {
        let slider = await driver.findElement(By.className("n2-ss-slider-3")).isDisplayed
        expect(slider)
    })

    describe("Verify if it has 3 slider", async () => {
        let sliders = 3;

        it("go to shop ", async () =>{
            expect(await driver.findElement(By.linkText("Shop")).click)
        })

        it("go back to home ", async() =>{
            await driver.findElement(By.linkText("Home")).click
        })

        it("Homepage has 3 slider ", async () => {
            for(let i = 0; i<= sliders.length; i++){
                let counts = await driver.findElement(By.className(".n2-ss-slider-3"))
                expect(counts).should.equal(sliders)
            }
        })


    })

    driver.quit();

} home_slider_test();