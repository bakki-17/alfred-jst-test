import {By, Key, Builder} from "selenium-webdriver";
import { expect } from "chai";

 function navtest(){
    describe(" Check Home Page with three Sliders only", async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://practice.automationtesting.in/");
        
        it("Verify home page with three sliders", async function(){

        let sliders = expect(await driver.findElement(By.className(".n2-ss-slider-3")));
        sliders.should.isDispalyed();
        //     let slider = 3;
        //     for(i = 0; i <= slider; i++){
        //         let count = await driver.findElement(By.className(".n2-ss-slider-3"));
        //     }
        //     expect(count).to.equal(slider);
        // debug;
        // });  console.log();

        driver.quit();
    }) 
})}; navtest();

// describe("sample test", function(){
//     let a = 5;
//     let b = 5;
//     it("verify ", function(){
//         expect("pass", add(a + b)).to.equal(10);
//     })
// })