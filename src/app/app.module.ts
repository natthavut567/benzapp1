import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';

import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { Car1Page } from '../pages/car1/car1';
import { Car2Page } from '../pages/car2/car2';
import { Car3Page } from '../pages/car3/car3';
import { Car4Page } from '../pages/car4/car4';
import { Car5Page } from '../pages/car5/car5';
import { Car6Page } from '../pages/car6/car6';
import { Car7Page } from '../pages/car7/car7';
import { Car8Page } from '../pages/car8/car8';
import { Car9Page } from '../pages/car9/car9';
import { Car10Page } from '../pages/car10/car10';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    TabsPage,
    MenuPage,
    Car1Page,
    Car2Page,
    Car3Page,
    Car4Page,
    Car5Page,
    Car6Page,
    Car7Page,
    Car8Page,
    Car9Page,
    Car10Page 
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    TabsPage,
    MenuPage,
    Car1Page,
    Car2Page,
    Car3Page,
    Car4Page,
    Car5Page,
    Car6Page,
    Car7Page,
    Car8Page,
    Car9Page,
    Car10Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
