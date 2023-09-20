import { test as base } from "@playwright/test";
import { get_token } from './funcs';

class TestData{
    env: string;
    username: string;
    password: string;
    planeId: number;
    token: string;
    constructor(){
        this.env = process.env.ENV as string;
        switch(this.env){
            case "trn": 
                this.username = 'tom.jones';
                this.password = 'P2assw0rdt1me';
                this.planeId = 1;
                break;
            case "uat": 
                this.username = 'Pilotwings';
                this.password = 'gyr0copTER';
                this.planeId = 1;
                break;
            default:
                console.log("No env set. Using dev");
            case "dev":
                this.username = 'Certified';
                this.password = 'B0mb3r';
                this.planeId = 1;
        }
        this.token = get_token(this.username, this.password);
    }
}

type Data = {
    td: TestData;
};

export const test = base.extend<Data>({
    td: new TestData()
});