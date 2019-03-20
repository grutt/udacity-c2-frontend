import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthMenuUserComponent } from './auth-menu-user/auth-menu-user.component';

import { AuthService } from '../services/auth.service';
import { AuthLoginComponent } from '../auth-login/auth-login.component';
import { AuthRegisterComponent } from '../auth-register/auth-register.component';

@Component({
  selector: 'app-auth-menu-button',
  templateUrl: './auth-menu-button.component.html',
  styleUrls: ['./auth-menu-button.component.scss'],
})
export class AuthMenuButtonComponent implements OnInit {

  constructor(
    private auth: AuthService,
    public modalController: ModalController
    ) {}

  async presentPopover(ev: any) {
    const popover = await this.modalController.create({
      component: AuthMenuUserComponent,
      // componentProps:
    });
    return await popover.present();
  }

  async presentLogin(ev: any) {
    const popover = await this.modalController.create({
      component: AuthLoginComponent,
      // componentProps:
    });
    return await popover.present();
  }
  async presentRegister(ev: any) {
    const popover = await this.modalController.create({
      component: AuthRegisterComponent,
      // componentProps:
    });
    return await popover.present();
  }

  ngOnInit() {}

}
