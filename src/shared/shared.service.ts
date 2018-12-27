import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl: string = "http://apps.geppettosoftware.com/employeedetails-web-10048";
    public loggedIn: boolean = false;
}