[Install NativeScript](http://docs.nativescript.org/angular/start/quick-setup)

Install platforms and npm dependencies
``` 
$ tns install 
```

Start genymotion or plug USB device (remember to enable USB debugging on device)

Build
``` 
$ tns run android 
```

Watch files for development
``` 
$ tns livesync android --watch 
```

Build apk in ```/platforms/android/build/outputs/apk/...```
``` 
$ tns build android 
```