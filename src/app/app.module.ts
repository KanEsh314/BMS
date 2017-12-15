import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StationPage } from '../pages/station/station';
import { TripPage } from '../pages/trip/trip';
import { ReportPage } from '../pages/report/report';
import { ConfirmPage } from '../pages/confirm/confirm';
import { LogPage } from '../pages/log/log';
import { SummaryPage } from '../pages/summary/summary';
import { RegisterPage } from '../pages/register/register';
import { StoptripPage } from '../pages/stoptrip/stoptrip'

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { AuthProvider } from '../providers/auth/auth';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    StationPage,
    TripPage,
    ReportPage,
    ConfirmPage,
    LogPage,
    SummaryPage,
    RegisterPage,
    StoptripPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    StationPage,
    TripPage,
    ReportPage,
    ConfirmPage,
    LogPage,
    SummaryPage,
    RegisterPage,
    StoptripPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    AuthProvider
  ]
})
export class AppModule {}
