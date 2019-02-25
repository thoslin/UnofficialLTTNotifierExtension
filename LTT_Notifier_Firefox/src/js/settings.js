/*
Part of AluminiumTech's Unofficial LTT Notifier WebExtension.

Created by AluminiumTech.

Store Settings using modern WebStorage APIs.

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

function migrateSettings(){

}

function setupSettings(){
  //Allow LTT Forum API checks every 30 seconds after being activated but dynamically switch back to regular speed if there is no notification activity.
  set("enableDynamicallyFasterUpdates", true);
  //Help save data for user in case they really desperately need to save data.
  //A value of 1 is the normal speed. Any value less than 0 is not okay.
  //A value of 2 will make notification checks happen 2x less frequently.
  set("slowerUpdatesToSaveData", 1);
  // Set the update interval to once every 60 seconds
  set("updateTimeMinutes", 1);
  // Set this to every X number of minutes because YouTube videos aren't released more than a few times per day.
  //We may need to add a way to allow users to easily be more quickly noitified of YouTube Live Streams if they want to use YouTube Live Streams instead.
  // We can use less of our quota this way.
  set("youtubeUpdateTimeMinutes", 60);
  // Set this to every 1 minute.
  set("twitchUpdateTimeMinutes", 60);
  //
  set("lttUpdateInterval", 1000 * ((60 * get(updateTimeMinutes)) * get(slowerUpdatesToSaveData)));
  //Set YouTube and Twitch update intervals.
  set("youtubeUpdateInterval", 1000 * (60 * get(youtubeUpdateTimeMinutes)) * get(slowerUpdatesToSaveData)));
  set("twitchUpdateInterval", 1000 * (60 * get(twitchUpdateTimeMinutes)) * get(slowerUpdatesToSaveData)));

  set("volume", );
  set("enableSoundsForNotifications", "true");
  set("enableSoundsForMessageNotifications", "true");
  set("enableSoundsForYouTubeNotifications", "true");

  set("youtubeLatest", "true");
// For when deciding to use GA or not use GA.
  set("enableAnalyticsTelemetry", "true");
}

function modify(key, data){
  set(key, data);
}
function set(key, data){
  try{
    browser.storage.local.set({key, data}).then(onSet, onError));
  }
  catch{
    chrome.storage.local.set({key: value}, function() {
         onSet);
       });
  }
}
function get(key){
  try{
    let result = browser.storage.local.get(key).then(onGot, onError);
    return result;
  }
  catch{
    chrome.storage.local.get([key], function(result) {
        onGot();
        return result.key;
    });
  }
}

function onSet(){
  console.log(console.log('Set new local storage setting.'));
}
function onGot() {
  console.log('Got a local storage setting.');
}
function onError(error) {
  console.log(`Error: ${error}`);
}
