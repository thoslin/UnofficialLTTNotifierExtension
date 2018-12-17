/*
Part of AluminiumTech's Unofficial LTT Notifier WebExtension.

Created by AluminiumTech.
*/

// Initialize the twitch API Key variable but don't store the API key in the source code.
// Use the API key from config file.
const secret = require('../config.json').twitchapikey;

// Twitch WatchPage info.
const twitch_watchpage_lmg_wan = "https://twitch.tv/linustech/";
const twitch_watchpage_ltt_luke = "https://twitch.tv/luke_lafr/";
const twitch_watchpage_ltt_colton = "https://www.twitch.tv/caltane/";
