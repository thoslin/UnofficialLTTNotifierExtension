/*
Part of AluminiumTech's Unofficial LTT Notifier for Firefox Extension.

Created by AluminiumTech.
Version: 1.0

TODO:

Known Issues:



Resolved:
*/

//Initialize the variable but don't store the API key in the source code.
var apiKey = "";
//Initialize the variable but don't store the srcID in the source code.
var srcID = "";

const baseUrl = "https://linustechtips.com/main/";

const yt_WatchPageURL = "https://www.youtube.com/watch?v=";

//These are YouTube playlist IDs for making fetching YouTube info easier.
const ltt_playlistID = "UUXuqSBlHAE6Xw-yeJA0Tunw";
const tq_playlistID = "UU0vBXGSyV14uvJ4hECDOl0Q";
const csf_playlistID = "UUBZiUUYeLfS5rIj4TQvgSvA";

const ltt_newUpload_Title = "New upload to the LTT YouTube Channel";
const tq_newUpload_Title = "New upload to the TQ YouTube Channel";
const csf_newUpload_Title = "New upload to the CSF YouTube Channel";

var ltt_newUpload_text = " was just uploaded the the LinusTechTips YouTube Channel.";
var tq_newUpload_text = " was just uploaded the the TechQuickie YouTube Channel.";
var csf_newUpload_text = " was just uploaded the the Channel Superfun YouTube Channel.";

function main() {

}

//Get the API Key in file api.txt
// This is in the .gitignore and users forking or cloning this repository must provide their own API key.
function getApiKey(){

}
//Each call to LinusTechTips.com must include our own SRC ID for debugging.
// This is in the src.txt file.
//This is in the .gitignore and users forking or cloning this repository must provide their own SRC ID.
function getSRCID(){

}

function desktopNotifications(){

}

function playSound(){

}

function soundQueue(){

}

function sendRequest(){

}

function processTabs(){

}

function processTabsClose(){

}

function checkSettings(){

}

function onSettingsUpdate(){

}

function dispatchLTTData(){

}

function resetInterval(){

}

function createShortNotification(){

}

function updateBadge(){

}

function parseError(){

}

function checkYouTube(){

}
