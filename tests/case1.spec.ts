import { test, expect } from "@playwright/test";
import { Api } from "../data/api";
/**
 * Task : Your job is to rework the 1 test.
 *
 * Background:
 * There is a 'API' call that gets made and the browser turns that backend value into a human readable label.
 * A test needs to be written that tests to make sure that the conversion is correct. The frontend hasn't been delievered yet
 * but a way to convert the backend type into a frontend type can be done in the meantime.
 *
 * Notes:
 * The backend data can vary so make sure whatever value is returned by the backend will equal the expected frontend label
 * There are only ever 5 elements returned by the API
 *
 */

/** How the labels are mapped :
 * some-value = Some value
 * a-really-long-name = A really long name
 * standard = Standard
 * short = Short
 * another-kinda-value = Another value
 */

test("Title conversion", async ({ page }) => {
  /**
   * Originally it was thought that the data would be in the same order everytime and the below test was written. However when the API
   * was implemented, it was found that the data varies.
   */
  let json = await Api.get_value();
  console.log(json);
  expect(json.data[0].name).to.match(
    /(?:Some value|A really long name|Standard|Short|Another value)/
  );
  expect(json.data[1].name).to.match(
    /(?:Some value|A really long name|Standard|Short|Another value)/
  );
  expect(json.data[2].name).to.match(
    /(?:Some value|A really long name|Standard|Short|Another value)/
  );
  expect(json.data[3].name).to.match(
    /(?:Some value|A really long name|Standard|Short|Another value)/
  );
  expect(json.data[4].name).to.match(
    /(?:Some value|A really long name|Standard|Short|Another value)/
  );
});
