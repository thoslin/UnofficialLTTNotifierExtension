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
function playSound(sound){
  if(sound === ""){
    return false;
  }

  //security check - make sure the sound is valid to prevent exploit
  var permittedSounds = ["../assets/sounds/notification-1.mp3", "../assets/sounds/notification-2.mp3", "../assets/sounds/notification-3.mp3", "../assets/sounds/notification-4.mp3"];

  debug("Playing sound: " + sound);
  if (!(volume !== undefined && volume >= 0 && volume <= 1)) {
    callError("Volume was not a valid value: " + settings["sound.volume"]);
    settings["sound.volume"] = 1;
    volume = 1;
  }
//Double check this later.
  var audio = new Audio(sound);
  audio.volume = volume;
  audio.play();
}
