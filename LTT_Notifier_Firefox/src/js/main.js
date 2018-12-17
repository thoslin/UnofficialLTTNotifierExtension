/*
Part of AluminiumTech's Unofficial LTT Notifier for Firefox Extension.

Created by AluminiumTech.
Version: 0.1
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
var youtubeContent = require('features/youtubecontent.js');
var twitchStream = require('features/twitchstream.js');
var soundPlayer = require('features/playsound.js');
var compareVersion = require('features/versioncomparison.js');

public function returnInstalledVersion(){
  return extension_installed_version;
}

function determineBrowser(){
  if(browser == "firefox"){

  }
  else if(browser == "chrome"){

  }
}

function main() {

}
// From Colonel_Mortis's code.
function debug(message) {
  debugContent.log += new Date().toLocaleString() + ": INFO: " + message + "\n";
}

function playSound(sound){
  soundPlayer.playSound(sound);
}

function desktopNotification(data){

}

function showCorrectVersion(){

}
