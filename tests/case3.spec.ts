import { test, expect } from "@playwright/test";
import { check_answer } from "../data/case3/funcs";

const maps = {
  "{": "%7B",
  "}": "%7D",
  "[": "%5B",
  "]": "%5D",
  '"': "%22",
  ":": "%3A",
  ",": "%2C",
  "*": "%2A",
  "=": "%3D",
  "$": "%24",
  "%": "%25",
  " ": "%20",
  "&": "%26",
  "(": "%28",
  ")": "%29",
}

/** This is an example and you do not need to use this. */
function encode(input: string) {
  /**
   * Handle
   * { } [ ] " : , * = $ % space & ( )
   */
  let output = "";
  for (const char of input) {
    switch (char) {
      case "{":
        output += "%7B";
        break;
      case "}":
        output += "%7D";
        break;
      case "[":
        output += "%5B";
        break;
      case "]":
        output += "%5D";
        break;
      case '"':
        output += "%22";
        break;
      case ":":
        output += "%3A";
        break;
      case ",":
        output += "%2C";
        break;
      case "*":
        output += "%2A";
        break;
      case "=":
        output += "%3D";
        break;
      case "$":
        output += "%24";
        break;
      case "%":
        output += "%25";
        break;
      case " ":
        output += "%20";
        break;
      case "&":
        output += "%26";
        break;
      case "(":
        output += "%28";
        break;
      case ")":
        output += "%29";
        break;
      default:
        output += char;
        break;
    }
  }
  return output;
}

/** Task:
 * Encode the query to be able to be passed in as a get request
 *
 * Background:
 * A new search API has been built that can handle complex queries like graphQL. You have a query that you've built and need to execute it to retrieve the correct data.
 * But the search is a get call and the query gets passed in as a parameter. Since the query contains reserved characters this query needs to be encoded to work.
 *
 * To test if the solution has been found, pass in the correctly encoded string to the function check_answer(). If the encoding is correct then true will be returned.
 * Solve the solution in any way that you can.
 */

test("Encoding a complex query", async () => {
  /** Characters you need to handle:
   * https://developers.google.com/maps/url-encoding
   * Encoding guide:
   * https://www.w3schools.com/tags/ref_urlencode.ASP
   */
  const starting_string = `http://api.marsupials/search?query={ "request": "POST", "data": { "columns": [1, 2, 3], "query": "Select * From table Where 1=1 & text not in (set1,set2) & idx % 2 = 1" } }`;
  const url = `http://api.marsupials/search?query=`;
  const param = `{ "request": "POST", "data": { "columns": [1, 2, 3], "query": "Select * From table Where 1=1 & text not in (set1,set2) & idx % 2 = 1" } }`;

  const answer = url + encode(param);
  console.log(answer);
  // do some conversion and check
  expect(check_answer(answer)).toBeTruthy();
});

test("Solution 2", async () => {
  const starting_string = `http://api.marsupials/search?query={ "request": "POST", "data": { "columns": [1, 2, 3], "query": "Select * From table Where 1=1 & text not in (set1,set2) & idx % 2 = 1" } }`;
  const url = `http://api.marsupials/search?query=`;
  const param = `{ "request": "POST", "data": { "columns": [1, 2, 3], "query": "Select * From table Where 1=1 & text not in (set1,set2) & idx % 2 = 1" } }`;
  let result = url;
  Array.from(param).forEach((c) => {
    if(Object.keys(maps).includes(c)){
      result += maps[c];
    }else{
      result += c;
    }
  });
  console.log(result);
  expect(check_answer(result)).toBeTruthy();
});

test("Solution 3", async () => {
  const starting_string = `http://api.marsupials/search?query={ "request": "POST", "data": { "columns": [1, 2, 3], "query": "Select * From table Where 1=1 & text not in (set1,set2) & idx % 2 = 1" } }`;
  const url = `http://api.marsupials/search?query=`;
  const param = `{ "request": "POST", "data": { "columns": [1, 2, 3], "query": "Select * From table Where 1=1 & text not in (set1,set2) & idx % 2 = 1" } }`;
  let result = url;
  Array.from(param).forEach((c) => {
    const char = (maps[c] === undefined) ? c : maps[c];
    result += char;
  });
  console.log(result);
  expect(check_answer(result)).toBeTruthy();
});

