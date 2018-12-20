/*
Part of AluminiumTech's Unofficial LTT Notifier WebExtension.

Created by Colonel_Mortis. Licensed under Creative Commons 4.0
Adapted for AluminiumTech's Unofficial LTT Nottifier.
*/

//TODO
public function checkSettingsCompatibility(){

}
//TODO
public function handleNewUpdates(){

}
//Code from Colonel_Mortis
public function compareVersion(a, b) { //based on http://stackoverflow.com/questions/7717109/how-can-i-compare-arbitrary-version-numbers
  //with my own modification for handling pre release versions
  var q = a,
    r = b;
  var i, cmp, len, re = /(\.0+)+[^\.]*$/;
  a = (a + '').replace(re, '').split('.');
  b = (b + '').replace(re, '').split('.');
  len = Math.min(a.length, b.length);
  for (i = 0; i < len; i++) { //compare version numbers
    cmp = parseInt(a[i], 10) - parseInt(b[i], 10);
    if (cmp !== 0) {
      return cmp;
    }
  }
  if (a.length - b.length !== 0) { //If they're different, return
    return a.length - b.length;
  } else { //If they're the same, compare alpha/beta etc.
    re = /([a-z]+)(\d*)/;
    a = (q + '').match(re);
    b = (r + '').match(re);
    if (a === null && b === null) return 0;
    else if (a === null) return 1;
    else if (b === null) return -1;
    else {
      if (a[1] === "alpha") a[1] = "a";
      if (a[1] === "beta") a[1] = "b";
      if (b[1] === "alpha") b[1] = "a";
      if (b[1] === "beta") b[1] = "b";
      if (a[1] > b[1]) return 1;
      else if (a[1] < b[1]) return -1;
      else {
        if (a[2] === "" || b[2] === "") return 0;
        else return parseInt(a[2]) - parseInt(b[2]);
      }
    }
  }
}
