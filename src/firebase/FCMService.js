import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
class FCMService {
  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister);
    this.createNotificationListeners(
      onRegister,
      onNotification,
      onOpenNotification,
    );
  };

  registerAppWithFCM = async () => {
    if (Platform.OS === 'ios') {
      await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
  };

  checkPermission = (onRegister) => {
    messaging()
      .hasPermission()
      .then((enable) => {
        if (enable) {
          //user has Permission
          this.getToken(onRegister);
        } else {
          this.requestPermission(onRegister);
        }
      })
      .catch((error) => {
        console.log('[FCMService] , permission rejected', error);
      });
  };

  getToken = (onRegister) => {
    messaging()
      .getToken()
      .then((fcmToken) => {
        if (fcmToken) {
          onRegister(fcmToken);
        } else {
          console.log('[FCMService] User does not have a device token');
        }
      })
      .catch((error) => {
        console.log('[FCMService] getToken rejected ', error);
      });
  };
  requestPermission = (onRegister) => {
    messaging()
      .requestPermission()
      .then(() => {
        this.getToken(onRegister);
      })
      .catch((error) => {
        console.log('[FCMService] Request Permission rejected ', error);
      });
  };

  deleteToken = () => {
    console.log('[FCMService] delete permission');
    messaging()
      .deleteToken()
      .catch((error) => {
        console.log('[FCMService] Delete token error', error);
      });
  };
  createNotificationListeners = (
    onRegister,
    onNotification,
    onOpenNotification,
  ) => {
    // when the application is running but in the background
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log('[FCMService] onNotificationOpenedApp ', remoteMessage);
      if (remoteMessage) {
        const notification = remoteMessage.notification;
        onOpenNotification(notification);
      }
    });
    //when the application is opened from a quit state
    messaging().getInitialNotification((remoteMessage) => {
      console.log('[FCMService] getInitialNotification ', remoteMessage);
      if (remoteMessage) {
        const notification = remoteMessage.notification;
        onOpenNotification(notification);
      }
    });
    //foreground state message
    this.messageListener = messaging().onMessage((remoteMessage) => {
      console.log('[FCMService] a new FCM message ', remoteMessage);
      if (remoteMessage) {
        let notification = null;
        if (Platform.OS === 'ios') {
          notification = remoteMessage.data.notification;
        } else {
          notification = remoteMessage.notification;
        }
        onNotification(notification);
      }
    });
    //triggered when have new token
    messaging().onTokenRefresh((fcmToken) => {
      console.log('New token refresh', fcmToken);
      onRegister(fcmToken);
    });
  };
  unRegister = () => {
    this.messageListener();
  };
}

export const fcmService = new FCMService();
