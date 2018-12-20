/*
Part of AluminiumTech's Unofficial LTT Notifier WebExtension.

Created by AluminiumTech.

Store Settings using modern WebStorage APIs.
*/

function SetupSettings(){
  //
  localStorage.set("", "");
}

function modifySettings(key, data){
  settings[key] = data;
}
