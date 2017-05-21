import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Obsevable";
import 'rxjs/Rx';
import { PlayersPage } from '../players/players';

/**
 * Generated class for the TeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
  team: any;
  teamstats: any;
  teamroster: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.team = navParams.get("team")

    // let headers = new Headers({ Referer: "http://stats.nba.com/scores/" })
    // let options = new RequestOptions({ headers: headers })
    //on teh url line we are using the nba api, this is a REST endpoint
    //were are using the path team infocommon , with the quary params season, and passed onto the url
    let url = "/api/teaminfocommon/?Season=2016-17&TeamID=" + this.team.id + "&LeagueID=00&SeasonType=Regular%20Season"
    //we had the http go get the stats and info and have responde to us so that it have an object
    http.get(url).map(response => response.json()).subscribe((response) => {
      //after .subscribe the had return out response we can set it to teamstats log
      //it into the inspect console so that we can see in
      //log mean write down
      console.log(response)
      //console.log('high')
      this.teamstats = response;

    })
    let urlteamroster = "/api/commonteamroster/?Season=2016-17&TeamID=" + this.team.id + "&LeagueID=00"

    http.get(urlteamroster).map(response => response.json()).subscribe((response) => {

      console.log('roster', response)
      this.teamroster = response;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
  }

  playerTapped(event, player) {
    console.log("tapped to player ")
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PlayersPage, {
      player: player


    });
  }
}
