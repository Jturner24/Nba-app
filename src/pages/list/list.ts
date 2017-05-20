import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, icon: string }>;
  teams: Array<{ name: string, id: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['paper-plane', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 33; i++) {
      this.items.push({
        title: 'lakers ' + i,

        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    this.teams = [
      {
        name: 'Atlanta Hawks',
        id: "1610612737"
      },
      {
        name: 'Boston Celtics',
        id: "1610612738"
      },
      {
        name: 'Brooklyn Nets',
        id: "1610612751"
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {

        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
      {
        name: '',
        id: ""
      },
    ]
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
