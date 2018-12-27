import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';

@Injectable()
export class EmployeeDetails_Default_ActivityService {
    constructor(private http : Http,private config: ConfigService, private apiService: ApiService) {

    }


    createEmployeeDetails(employeedetails):Observable<any> {
       return this.apiService.post(this.config.api_url+`/EmployeeDetails_Default_Activity/EmployeeDetails/`,employeedetails);
    }
    updateEmployeeDetails(employeedetails):Observable<any> {
       return this.apiService.put(this.config.api_url+`/EmployeeDetails_Default_Activity/EmployeeDetails/`,employeedetails);
    }
    search_for_updateEmployeeDetails(employeedetails_id):Observable<any> {
       return this.apiService.get(this.config.api_url+`/EmployeeDetails_Default_Activity/EmployeeDetails/${employeedetails_id}`);
    }
    deleteEmployeeDetails(employeedetails):Observable<any> {
       return this.apiService.delete(this.config.api_url+`/EmployeeDetails_Default_Activity/EmployeeDetails/${employeedetails.id}`);
    }
    get_all_EmployeeDetails():Observable<any> {
       return this.apiService.get(this.config.api_url+`/EmployeeDetails_Default_Activity/EmployeeDetails/`);
    }

}