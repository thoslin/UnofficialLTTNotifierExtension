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
public function checkLTT(){
  checkIfLttIsOpenInATab();

}

function checkIfLttIsOpenInATab(){

  try{
    browser.tabs.query
  }
  catch{

  }
}

//From Mortis' code.
function checkTabFF(tab){
  if (lttTab.indexOf(tab) > -1) {
    lttTab.splice(lttTab.indexOf(tab), 1);
    debug("LTT tab changed");
  }
  if (tab.url !== undefined && /^https?:\/\/(?:[^\.]+\.)?linustechtips\.com\/main\/(?!admin)/.test(tab.url) === true) {
    debug("ltt tab opened or loaded");
  //  lttTab.push(tab);
//    panel.port.emit("ltt-tab", true);
    tab.on("close", processTabClose);
  } else if (lttTab.length === 0) {
//    panel.port.emit("ltt-tab", false);
  }
}


function checkTabChrome(){

}


function processTabClose(tab){
  if (lttTab.indexOf(tab) > -1) {
    lttTab.splice(lttTab.indexOf(tab), 1);
    debug("LTT tab closed");
  }
}
