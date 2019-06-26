import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { ChatPage } from '../chat/chat.page';
@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async showModel(){
      const modal =await this.modalCtrl.create({component: LoginPage});
    //window.alert('showModel');
      modal.present();
  }
   async showModel2(){
    const modal = await this.modalCtrl.create({
      showBackdrop: true,
      component: ChatPage
    });
    await modal.present();
    const { data } = await modal.onDidDismiss(); // 获取关闭传回的值
    console.log(data);
  } 
  
}