/*
Part of AluminiumTech's Unofficial LTT Notifier WebExtension.

Created by AluminiumTech.
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

  var audio = new Audio(sound);
  audio.volume = volume;
  audio.play();
}
