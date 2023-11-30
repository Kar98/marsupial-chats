import { test, expect, Page, Locator } from '@playwright/test';
import { BridgesPage } from '../data/case4/classes';

/** Task:
 * A new webpage is being developed for a bridge company and you have been asked to make sure it works correctly. You've decided to use playwright
 * and the basic design has been given. The functionality isn't fully built yet but it will be a static page. New bridges will be added over the
 * next few months that match the existing format so factor that in when you set up your design.
 * 
 * Your task to is write a basic design for the page using Page object model. Only the interface or types need to be defined, no code needs to 
 * execute tests on the page. See the example below.
 * 
 * How to run the server:
 * node data/case4/index.js
 */


function sleep(milliseconds: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, milliseconds);
  });
}

test.beforeEach(async({page})=>{
  await page.goto("http://localhost:3000");
  await sleep(500); // So it renders the imgs/buttons properly
});

test('Check about page', async ({ page }) => {
    const bridges = new BridgesPage();
    // Access obj directly, rather than through functions
    let bridge_totals = await bridges.aboutPage.get_total();
    // Cant have async in constructor, so forced to use functions to get the other objs
    let pop_posts = await bridges.get_popular_posts();
    let tags = await bridges.get_tags();
    let main_posts = await bridges.get_main_posts();

    expect(bridge_totals).toBeDefined();
    expect(pop_posts).toBeDefined();
    expect(tags).toBeDefined();
    expect(main_posts).toBeDefined();
});


