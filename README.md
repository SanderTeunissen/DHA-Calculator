# DHA Calculator

De DHA Calculator applicatie is geschreven als eerste app van de course Develop a Hybrid App van de herfst 2018 uitvoering van de minor Mobile Application Development aan de Hogeschool van Arnhem en Nijmegen.

-----

The DHA Calculator application is written as the first app of the course Develop a Hybrid App of the fall 2018 implementation of the minor Mobile Application Development at the Hogeschool of Arnhem and Nijmegen.

![Calculator on iPad](./assets/ipad-app-screen.png)



## Getting Started

Om aan de slag te gaan met de calculator app is het van belang dat Node.js geïnstalleerd is op de development machine. Dit wordt gebruikt om de verschillende javascript packages te beheren.

-----

To get started with the calculator app it is important that Node.js is installed on the development machine. This is used to manage the various javascript packages.

- Node.js: https://nodejs.org/dist/v8.12.0/

Wanneer Node.js geïnstalleerd is kan het onderstaande commando worden uitgevoerd. Dit commando installeert Ionic en Cordova, de frameworks die gebruikt worden door de app.

-----

When Node.js is installed the following command can be executed. This command installs Ionic and Cordova, the frameworks used by the app.

`npm install -g ionic cordova`

### Code binnenhalen

Op de volgende manier kan je de code van de app binnen halen op je ontwikkelmachine:

- Clone het git-repository of download het als zip via [deze](https://github.com/HANICA-MAD/dha-nj-2018-sander-teunissen/archive/master.zip) link en pak deze uit.
- Open een terminal venster en navigeer naar de root folder van het net gedownloade project.
- Voer het volgende commando uit: `npm install`, hiermee worden alle benodigde dependecies geïnstalleerd.

-----

In the following way you can get the code from the app on your development machine:

- Clone the git-repository or download it as zip via [this] (https://github.com/HANICA-MAD/dha-nj-2018-sander-teunissen/archive/master.zip) link and extract it.
- Open a terminal window and navigate to the root folder of the newly downloaded project.
- Execute the following command: `npm install`, this will install all the required depts.


## Project structuur

```
.
 ├── resources                    # Build files van de verschillende platforms (iOS, Android) en app icons en splashscreens
 ├── src                          # Map met alle code van de applicatie
 ├── .editorconfig                # Configuratie file van de Visual Studio Code editor
 ├── .gitignore                   # Git bestand dat aangeeft welke folders niet in het repository moeten komen
 ├── .io-config.json              # Ionic ID
 ├── config.xml                   # Ionic configuratie file
 ├── ionic.config.json            # Configuratie bestand van de Ionic app
 ├── package.json                 # Node.js dependencies file
 ├── package.json                 # Node.js dependencies file
 ├── tsconfig.json                # TypeScript configuratie
 └── tslint.json                  # TypeScript linting opties
```

###src folder

```
.
   ├── ...
   ├── src                       
   │   ├── app                    # Map met globale modules en styling van de applicatie
   │   ├── assets                 # Map met alle afbeeldingen en andere assets die gebruikt worden
   |   ├── pages                  # Map met alle pagina's van de app
   |   ├── theme                  # Map met de thema's van de app
   |   ├── index.html             # Rootfile van de app
   |   ├── manifest.json          # Metadata voor de app
   │   └── service-worker.js      # Cache configuratie
   └── ...
```



## App draaien

### Draaien op ontwikkelmachine / Run on developmentmachine

Het is mogelijk om de app te draaien op een ontwikkelmachine en te bekijken in de browser, dit is te doen op de volgende manier:

- Open een terminal venster en navigeer naar de root folder van de app.
- Voer het volgende commando uit: `ionic serve`

De applicatie wordt vervolgens geopend in de als standaard ingestelde browser.

-----

It is possible to run the app on a development machine and view it in the browser, this can be done in the following way:

- Open a terminal window and navigate to the root folder of the app.
- Run the following command: `ionic serve`

The application is then opened in the default browser.

### Draaien op iOS apparaat / Run on iOS device

Om de applicatie te draaien op een iOS apparaat is het noodzakelijk dat Xcode geïnstalleerd is. Dit programma is te downloaden via de MacOS App Store: https://itunes.apple.com/nl/app/xcode/id497799835?mt=12. Wanneer Xcode geïnstalleerd is kan de applicatie door middel van de volgende stappen gedraaid worden op een iOS apparaat:

- Open een terminal venster en navigeer naar de root folder van de app.
- Voer het volgende commando uit: `ionic cordova build ios`. Hiermee wordt het builden van de iOS app gestart.
- Open het gegenereerde `.xcodeproj` bestand uit `platforms/ios` in Xcode.
- Click op de project naam in het linker menu, dit opent de `project editor`. 
- Selecteerd in de `general` sectie onder het kopje `signing` een developement team.
- Sluit een iOS apparaat via usb aan op de ontwikkelmachine.
- Klik op de play knop bovenin het scherm.

-----

To run the application on an iOS device it is necessary that Xcode is installed. This program can be downloaded from the MacOS App Store: https://itunes.apple.com/us/app/xcode/id497799835?mt=12. When Xcode is installed, the application can be run on an iOS device by means of the following steps:

- Open a terminal window and navigate to the root folder of the app.
- Run the following command: `ionic cordova build ios`. This starts the building of the iOS app.
- Open the generated `.xcodeproj` file from` platforms / ios` in Xcode.
- Click on the project name in the left menu, this opens the `project editor '.
- Select a developement team in the `general` section under the 'signing` heading.
- Connect an iOS device via USB to the development machine.
- Click on the play button at the top of the screen.

### Draaien op Android apparaat / Run on Android device

Om de applicatie te draaien op een Android apparaat is het noodzakelijk dat Android Studio geïnstalleerd is. Dit programma is te downloaden via deze link: https://developer.android.com/studio/#downloads. Wanneer Android Studio geïnstalleerd is kan de applicatie door middel van de volgende stappen gedraaid worden op een Android apparaat:

- Open een terminal venster en navigeer naar de root folder van de app.
- Voer het volgende commando uit: `ionic cordova build android`. Hiermee wordt het builden van de Android app gestart.
- Zorg ervoor dat usb debugging is ingeschakeld op het Android apparaat dat gebruikt wordt. Hoe dit ingeschakeld kan worden staat hier beschreven: https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html
- Sluit het Android apparaat via usb aan op de ontwikkelmachine.
- Voer het volgende commando uit: `ionic cordova run android`. De app wordt nu gestart op het apparaat. Als het apparaat niet gevonden wordt, voer het commando dan opnieuw uit maar voeg er
  `--device` aan toe.

-----

To run the application on an Android device it is necessary that Android Studio is installed. This program can be downloaded via this link: https://developer.android.com/studio/#downloads. When Android Studio is installed, the application can be run on an Android device using the following steps:

- Open a terminal window and navigate to the root folder of the app.
- Run the following command: `ionic cordova build android`. This will start the build of the Android app.
- Make sure USB debugging is enabled on the Android device being used. How this can be enabled is described here: https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html
- Connect the Android device to the development machine via USB.
- Run the following command: `ionic cordova run android`. The app is now started on the device. If the device is not found, run the command again but add it
  `--device`.
