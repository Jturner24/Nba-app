import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamPage } from './team';


@NgModule({
  declarations: [
    TeamPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamPage),
  ],
  exports: [
    TeamPage
  ]
})
export class TeamPageModule { }
//we imported the teampage so that the system wont break because they has to that
//we didnt import a team page
