/*
Part of AluminiumTech's Unofficial LTT Notifier for Firefox Extension.

Created by AluminiumTech.
Version: 0.1

Copyright 2018-2019 AluminiumTech

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const baseUrl = "https://linustechtips.com/main/";
//Forum Stuff
var ltt_forum_api_page = "https://linustechtips.com/main/page/api.php";
//Initialize the variable but don't store the srcID in the source code.
var extension_src_url = require('../config.json').lttapisrc;
var extension_installed_version = require('../manifest.json').version;
//Make sure we can support Chrome/Chromium and Firefox.
var browser;

//JS Files we require go here
var youtubeContent = require('youtubecontent.js');
var twitchStream = require('twitchstream.js');
var soundPlayer = require('playsound.js');
var compareVersion = require('versioncomparison.js');
var notifications = require('notifications.js');

public function returnInstalledVersion(){
  return extension_installed_version;
}

function determineBrowser(){
  if(browser == "firefox"){

  }
  else if(browser == "chrome"){

  }
}

// The global variables go here:
// Code from Colonel_Mortis.
var messageCount = 0,
  notificationCount = 0,
  reportCount = 0,
  error = [],
  notificationShowing = false,
  notificationQueue = [], //AUTOMATED - don't touch
  prevTwitch = {
    "linus": false,
    "slick": false,
    "colton": false,
  },
  volume = parseFloat(settings["sound.volume"]),
  lttTab = [],
  audioTimeout = null,
  audioQueue = [], //AUTOMATED - don't touch
  lttUpdateInterval = null, //The variable that holds the ltt update setInterval object
  reportUpdateInterval = null,
  twitchUpdateInterval = null,
  ytUpdateInterval = null,
  panelCreated = false,
  etag = {
  			ltt: "",
  			tq: "",
  			csf: "",
        tl:"",
  		}, //holds the etag from the youtube update to reduce download usage
  messagesShown = JSON.parse(settings.messagesShown),
  panel,
  lttModders = [], //Holds an array of all the LTT page workers so that messages can be dispatched to them
  notificationArray = []; //holds a shortened list of all the notificaitons, to allow for comparison (to check whether it changed)

  const badgeColours = {
  		normal: "#db4105",
  		zero: "#555",
  		message: "#37c2e8",
  		twitch: "#6441A5",
  		error: "#ff2f2f"
  	};



//The important methods go here:
function main() {

}
// From Colonel_Mortis's code.
function debug(message) {
  debugContent.log += new Date().toLocaleString() + ": INFO: " + message + "\n";
}

function playSound(sound){
  soundPlayer.playSound(sound);
}

function createNotification(data, notificationShowing){
  notifications.createNotification(data, notificationShowing);
}

function requestNotificationPermission(){
 notifications.requestPermission();
}
