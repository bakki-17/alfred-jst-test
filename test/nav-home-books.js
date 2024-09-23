import {By, Builder} from "selenium-webdriver";
import { describe } from "node:test";
import { it } from "node:test";
import { expect } from "chai";
import { assert } from "node:console";
import { should } from "chai";


async function home_arrival_products(){
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("https://practice.automationtesting.in/");
     
    describe("Home - Arrivals ", async () => {
        it("Go to Shop ", async ()=> {
            await driver.findElement(By.linkText('Shop')).click

            let shopPage = await driver.findElement(By.id('pagewrap'))
            //let shop = await driver.findElement(By.className('archive')).getText
            // shop.then(function(value){ //return value;
            //     console.log(value)
            //     })
                
            assert(shopPage)
        })

        it('Click Home link button ', async ()=> {
            await driver.findElement(By.linkText('Home')).click
            let home = await driver.findElement(By.className('home')).getAttribute('')
            
            
            assert(home == 'home')
        })

        it('It has 3 books displayed', async ()=> {
            
            let bookCount = await driver.findElement(By.className(
                '.themify_builder_sub_row clearfix gutter-default   sub_row_1-0-2')).length
            for(let i; i <= bookCount; i++){
                let result = await driver.findElement(By.className('.col3-1')).length
                assert(bookCount == result)
            }
            
        })

    })

    driver.quit();
}; home_arrival_products();

