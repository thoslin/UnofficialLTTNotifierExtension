/*
Part of AluminiumTech's Unofficial LTT Notifier for Firefox Extension.

Created by AluminiumTech.
Version: 0.1
*/

//Initialize the variable but don't store the API key in the source code.
var youtube_apiKey = "";

const youtube_WatchPageURL = "https://www.youtube.com/watch?v=";

//These are YouTube playlist IDs for making fetching YouTube info easier.
const ltt_playlistID = "UUXuqSBlHAE6Xw-yeJA0Tunw";
const tq_playlistID = "UU0vBXGSyV14uvJ4hECDOl0Q";
const csf_playlistID = "UUBZiUUYeLfS5rIj4TQvgSvA";

const ltt_newUpload_Title = "New upload to the LTT YouTube Channel";
const tq_newUpload_Title = "New upload to the TQ YouTube Channel";
const csf_newUpload_Title = "New upload to the CSF YouTube Channel";

const ltt_newUpload_text = " was just uploaded the the LinusTechTips YouTube Channel.";
const tq_newUpload_text = " was just uploaded the the TechQuickie YouTube Channel.";
const csf_newUpload_text = " was just uploaded the the Channel Superfun YouTube Channel.";


//Get the YouTube API Key in file youtube_api.txt
// This is in the .gitignore and users forking or cloning this repository must provide their own API key.
function getYouTubeApiKey(){

}