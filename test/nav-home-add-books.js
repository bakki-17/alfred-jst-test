import {By, Builder} from "selenium-webdriver";
import { describe, it } from "node:test";
import { expect } from "chai";


async function add_books_homepage(){

    let driver = new Builder().forBrowser('chome').build();
    await driver.get('https://practice.automationtesting.in/');

    describe('Check the books redirection', async () =>{
        it('')
    })

}