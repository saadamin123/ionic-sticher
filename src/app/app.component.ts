import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      Environment.setEnv({
        // api key for server
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAe1gWP0pnrSG-rp5uHI677pjHiy5VmusA',

        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyD_VgPQVwoA9EHntOS4gKcsFNz7VdytmNg'
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
