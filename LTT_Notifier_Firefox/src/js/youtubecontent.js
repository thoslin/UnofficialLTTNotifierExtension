/*
Part of AluminiumTech's Unofficial linusTechTips Notifier WebExtension.

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

//Initialize the variable but don't store the API key in the source code.
// Use the API key from config file.
const secret = require('../config.json').youtubedataapikey;

const youtube_WatchPageURL = "https://www.youtube.com/watch?v=";

//These are YouTube playlist IDs for making fetching YouTube info easier.
const linusTechTips_playlistID = "UUXuqSBlHAE6Xw-yeJA0Tunw";
const techQuickie_playlistID = "UU0vBXGSyV14uvJ4hECDOl0Q";
const channelSuperFun_playlistID = "UUBZiUUYeLfS5rIj4techQuickievgSvA";
const techLinked_playlistID = "";

const linusTechTips_channelID = "UCXuqSBlHAE6Xw-yeJA0Tunw";
const techQuickie_channelID = "UC0vBXGSyV14uvJ4hECDOl0Q";
const channelSuperFun_channelID = "UCBZiUUYeLfS5rIj4TQvgSvA";
const techLinked_channelID = "UCeeFfhMcJa1kjtfZAGskOCA";

const linusTechTips_newUpload_Title = "New upload to the linusTechTips YouTube Channel";
const techQuickie_newUpload_Title = "New upload to the techQuickie YouTube Channel";
const channelSuperFun_newUpload_Title = "New upload to the channelSuperFun YouTube Channel";
const techLinked_Title = "New upload to the TechLinked YouTube Channel";

const linusTechTips_newUpload_text = " was just uploaded to the LinusTechTips YouTube Channel.";
const techQuickie_newUpload_text = " was just uploaded to the TechQuickie YouTube Channel.";
const channelSuperFun_newUpload_text = " was just uploaded to the Channel Superfun YouTube Channel.";
const techLinked_newUpload_text = "was just uploaded to the TechLinked YouTube Channel.";

public function getYouTubeData(){

}
