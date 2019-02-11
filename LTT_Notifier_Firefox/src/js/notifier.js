/*
Part of AluminiumTech's Unofficial LTT Notifier WebExtension.

Created by AluminiumTech.

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
var settings = require('settings.js');

const baseUrl = "https://linustechtips.com/main/";

function callError(error){
  console.log(error);
}

function getLTTForumData(){

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("loadend", function() {
    if (xhr.responseText !== null && xhr.responseText !== "nopermission" && xhr.status === 200) {
      checkLTT(true); //We want it to check whether there have been any notifications since the last time we updated
      debug("XHR success");
    } else {
      callError("XHR Failed with status:" + xhr.status + " and data: " + xhr.responseText);
    }
  });
  switch (what) {
    case "notifications":
      xhr.open("post", baseUrl +
        'notifications/?nocache=' + (new Date()).getTime(), true);
      break;
    case "messages":
      xhr.open("post", baseUrl +
        '?app=core&module=messaging&controller=messenger&overview=1&nocache=' + (new Date()).getTime(),
        true);
      break;
    default:
      callError("Marking unknown type as read: " + what);
  }
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  //xhr.setRequestHeader("Host", "linustechtips.com");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send();
  }
}

function checkLTT(){
  checkIfLttIsOpenInATab();

}

function checkIfLttIsOpenInATab(){

var tabs;

    //  browser.tabs.query
    for(i = 0; i < tabs; i++){
      try{
        checkTabFireFox(tabs[i]);
      }
      catch{
        checkTabChrome(tabs[i]);
      }
  }

}

function checkTabFireFox(tab){

}


function checkTabChrome(){

}

function processTabClose(tab){
  if (lttTab.indexOf(tab) > -1) {
    lttTab.splice(lttTab.indexOf(tab), 1);
    debug("LTT tab closed");
  }
}


function clearInterval(interval){

}

//Resets the interval used to get data from ltt/twitch/yt/etc
//which MUST be one of: "ltt" "reports" "yt" "twitch"
function resetInterval(which) {
  switch (which) {
    case "ltt":
      clearInterval(lttUpdateInterval);
      lttUpdateInterval = setInterval(function() {
        checkLTT();
      }, settings["updateTime.ltt"] * 1000);
      debug("reset LTT interval");
      break;
    case "reports":
      clearInterval(reportUpdateInterval);
      if (settings.moderator) {
        reportUpdateInterval = setInterval(function() {
          getReports();
        }, settings["updateTime.reports"] * 60000);
        debug("reset report interval");
      }
      break;
    case "yt":
      clearInterval(ytUpdateInterval);
      ytUpdateInterval = setInterval(function() {
        checkYouTube();
      }, settings["updateTime.yt"] * 60000);
      debug("reset yt interval");
      break;
    case "twitch":
      clearInterval(twitchUpdateInterval);
      twitchUpdateInterval = setInterval(function() {
        checkTwitch();
      }, settings["updateTime.twitch"] * 60000);
      debug("reset twitch interval");
      break;
    default:
      callError("reset interval called on invalid target - " + which);
  }
}
