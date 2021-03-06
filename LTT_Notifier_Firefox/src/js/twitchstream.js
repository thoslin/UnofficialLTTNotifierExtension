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

// Initialize the twitch API Key variable but don't store the API key in the source code.
// Use the API key from config file.
const secret = require('../config.json').twitchapikey;

// Twitch WatchPage info.
const twitch_watchpage_lmg_wan = "https://twitch.tv/linustech/";
const twitch_watchpage_ltt_luke = "https://twitch.tv/luke_lafr/";
const twitch_watchpage_ltt_colton = "https://www.twitch.tv/caltane/";

public function getTwitchData(){

}
