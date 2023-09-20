import { expect } from '@playwright/test';
import { test } from "../data/case2/testdata";
import { Api } from '../data/case2/api';
import { get_environment, get_token } from '../data/case2/funcs';

/** This is the spec file that will need updating */

/** Below is what should be returned if the Id of 2 is passed in
 * { 
 * name: "sr71", 
 * fuelCapacity: 18000, 
 * wingspan: 50.0, 
 * passengers: 4, 
 * manufacturer: "lockheed"
 * }
 */
test('Check lockheed ID returns correctly', async ({ td }) => {
    // Test data
    let planeId = 2;
    let res = await Api.get_plane(td.token, planeId);
    // Do test
    console.log(res.data);
    expect(res.data.name).toEqual('sr71');
    expect(res.data.manufacturer).toEqual('lockheed');
});
  
  