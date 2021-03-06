import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Obsevable";
import 'rxjs/Rx';
import * as moment from 'moment';

/**
 * Generated class for the PlayersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {
  player: any;
  playerstats: any;
  moment: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.moment = moment
    this.player = navParams.get("player")
    let urlteamroster = "http://stats.nba.com/stats/commonplayerinfo/?PlayerID=" + this.player[12]


    http.get(urlteamroster).map(response => response.json()).subscribe((response) => {

      console.log('roster', response)
      this.playerstats = response;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersPage');
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase().replace("_", " ");

  }


}
