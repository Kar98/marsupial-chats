import { test, expect } from '@playwright/test';
import { check_answer } from "../data/case3/funcs";

/** This is an example and you do not need to use this. */
function encode(input: string){
    const urlEncoded = encodeURIComponent(input);
    const encoded = btoa(urlEncoded);
    return encoded;
}

function decode(input: string){
    const decoded = atob(input);
    const urlEncoded = decodeURIComponent(decoded);
    return urlEncoded;
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

test('Encoding a complex query', async () => {
    /** Characters you need to handle: 
     * https://developers.google.com/maps/url-encoding
     * Encoding guide: 
     * https://www.w3schools.com/tags/ref_urlencode.ASP
     */
    const starting_string = `http://api.marsupials/search?query={ "request": "POST", "data": { "columns": [1, 2, 3], "query": "Select * From table Where 1=1 & text not in (set1,set2) & idx % 2 = 1" } }`;
    const answer = encode(starting_string);
    console.log(`Encoded result`,answer);
    const reverse_engineer_answer = "aHR0cDovL2FwaS5tYXJzdXBpYWxzL3NlYXJjaD9xdWVyeT0lN0IlMjAlMjJyZXF1ZXN0JTIyJTNBJTIwJTIyUE9TVCUyMiUyQyUyMCUyMmRhdGElMjIlM0ElMjAlN0IlMjAlMjJjb2x1bW5zJTIyJTNBJTIwJTVCMSUyQyUyMDIlMkMlMjAzJTVEJTJDJTIwJTIycXVlcnklMjIlM0ElMjAlMjJTZWxlY3QlMjAlMkElMjBGcm9tJTIwdGFibGUlMjBXaGVyZSUyMDElM0QxJTIwJTI2JTIwdGV4dCUyMG5vdCUyMGluJTIwJTI4c2V0MSUyQ3NldDIlMjklMjAlMjYlMjBpZHglMjAlMjUlMjAyJTIwJTNEJTIwMSUyMiUyMCU3RCUyMCU3RA=="
    console.log(`Encoded answer`, reverse_engineer_answer)
    const decodes = decode(reverse_engineer_answer);
    console.log(`decode url`,decodes);

    expect(check_answer(answer)).toBeTruthy();
});


