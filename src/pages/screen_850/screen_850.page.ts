import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams,AlertController } from 'ionic-angular';
import { EmployeeDetails_Default_ActivityService } from '../../shared/shared';
import { IEmployeeDetails } from '../models/employeedetails';
import {  } from '../pages';

@Component({
    templateUrl: 'screen_850.page.html'
})
export class Screen_850Page{
    employeedetails: IEmployeeDetails = {
    	id: 0,
    	name: '',	lastname: '',	doj: '',	dob: '',	employeenumber: 0,	address: ''
    }
    ;

    constructor(private nav: NavController,public navParams: NavParams, private loadingController : LoadingController, public alertCtrl: AlertController, private employeedetails_default_activityservice: EmployeeDetails_Default_ActivityService) { }

    ionViewDidLoad() {
    }


}