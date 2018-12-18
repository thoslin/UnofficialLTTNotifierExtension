/*
Part of AluminiumTech's Unofficial LTT Notifier WebExtension.

Created by AluminiumTech.
*/

//Initialize the variable but don't store the API key in the source code.
// Use the API key from config file.
const secret = require('../config.json').youtubedataapikey;

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

public function getYouTubeData(){
  
}
