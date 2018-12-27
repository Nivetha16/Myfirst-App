import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage, Screen_850Page } from '../pages/pages';
import { EmployeeDetails_Default_ActivityService, SharedService } from '../shared/shared';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { customHttpProvider } from '../_helpers/custom-http';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import {CookieService} from 'angular2-cookie/core';

@NgModule({
  declarations: [
    MyApp,
HomePage,
Screen_850Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
HomePage,
Screen_850Page
  ],
  providers: [
    CookieService,
    ConfigService,
    ApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    customHttpProvider,
EmployeeDetails_Default_ActivityService
,
SharedService

  ]
})
export class AppModule {}