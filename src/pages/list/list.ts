import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TeamPage } from '../team/team';
//we had imprt team page cause list page didnt know what it was
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  icons: string[];

  teams: Array<{ name: string, id: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies
    this.icons = ['basketball',];





    // nba teams
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
        name: 'Charlotte Hornets',
        id: "1610612766"
      },
      {
        name: 'Chicago Bulls',
        id: "1610612741"
      },
      {
        name: 'Cleveland Cavaliers',
        id: "1610612739"
      },
      {
        name: 'Dallas Mavericks',
        id: "1610612742"
      },
      {
        name: 'Denver Nuggets',
        id: "1610612743"
      },
      {
        name: 'Detroit Pistons',
        id: "1610612765"
      },
      {

        name: 'Golden State Warriors',
        id: "1610612744"
      },
      {
        name: 'Houston Rockets',
        id: "1610612745"
      },
      {
        name: 'Indiana Pacers',
        id: "1610612754"
      },
      {
        name: 'Los Angeles Clippers',
        id: "1610612746"
      },
      {
        name: 'Los Angeles Lakers',
        id: "1610612747"
      },
      {
        name: 'Memphis Grizzlies',
        id: "1610612763"
      },
      {
        name: 'Miami Heat',
        id: "1610612748"
      },
      {
        name: 'Milwaukee Bucks',
        id: "1610612749"
      },
      {
        name: 'New Orleans Pelicans',
        id: "1610612740"
      },
      {
        name: 'New York Knicks',
        id: "1610612752"
      },
      {
        name: 'Oklahoma City Thunder',
        id: "1610612760"
      },
      {
        name: 'Orlando Magic',
        id: "1610612753"
      },
      {
        name: 'Philadelphia 76ers',
        id: "1610612755"
      },
      {
        name: 'Phoenix Suns',
        id: "1610612756"
      },
      {
        name: 'Portland Trail Blazers',
        id: "1610612757"
      },
      {
        name: 'Sacramento Kings',
        id: "1610612758"
      },
      {
        name: 'San Antonio Spurs',
        id: "1610612759"
      },
      {
        name: 'Toronto Raptors',
        id: "1610612761"
      },
      {
        name: 'Utah Jazz',
        id: "1610612762"
      },
      {
        name: 'Washington Wizards',
        id: "1610612764"
      },
    ]
  }

  //nav crtl lets go to page by page by clikcing
  //push lets you go to a page and we can pass an object to that page
  //pop let you go back a page 
  teamTapped(event, team) {
    console.log("tapped to team ")
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TeamPage, {
      team: team


    });
  }
}
