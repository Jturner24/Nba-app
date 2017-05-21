# Nba App Readme

### Nba Api Documentation
https://github.com/seemethere/nba_py/wiki/stats.nba.com-Endpoint-Documentation

May need to add Referer Headers, eg:
Referer: http://stats.nba.com/scores/

**Best Endpoints:**
https://github.com/bttmly/nba/blob/master/doc/stats.md

**Api Docs:**
https://github.com/seemethere/nba_py/wiki/stats.nba.com-Endpoint-Documentation

**Get Team Dashboard:**
http://stats.nba.com/stats/teaminfocommon/?Season=2016-17&TeamID=1610612762&LeagueID=00&SeasonType=Regular%20Season

**Get Team Roster:**
http://stats.nba.com/stats/commonteamroster/?Season=2016-17&TeamID=1610612747&LeagueID=00

**Get Player Info:**
http://stats.nba.com/stats/commonplayerinfo/?PlayerID=201156

API WILL RETURN BLANK DATA IF QUERY IS BAD

### Nba Images

Get Team Logos:
http://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/UTA.svg

Replace UTA with the teams Abbrevation.


Get Player headshot:
https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201156.png

Replace 201156 with the PLAYER_ID

### Ionic Serve Api Proxying

We need to proxy request in ionic.config, but when you build the app for android, you have to undo it.
http://blog.ionic.io/handling-cors-issues-in-ionic/


---------------------------------------------------------------------------------------

# Default Ionic Readme

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/driftyco/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/driftyco/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start mySideMenu sidemenu
```

Then, to run it, cd into `mySideMenu` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.
