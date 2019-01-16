/*
Part of AluminiumTech's Unofficial LTT Notifier WebExtension.

Created by AluminiumTech.

Contains code by Colonel_Mortis.
*/

//TODO: Need to finish
function createNotification(data, notificationShowing){
  	if (settings.doNotDisturb === true) return;
    if (notificationShowing === false && notificationQueue.length !== 0) {
				notificationShowing = true;
        new Notification(data)
      }
}

function requestPermission() {
  Notification.requestPermission()
}