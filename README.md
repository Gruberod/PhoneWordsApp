# Dependencies

**iOS**

Latest XCode installed

**Android**

Android Studio installed
Latest Android SDK installed

**NodeJS**

Latest version of NodeJS installed.

# Installation

Clone the repository:

    $ git clone https://github.com/Gruberod/PhoneWordsApp.git
    
Navigate to a project folder:

    cd PhoneWordsApp
    
Install dependencies:

    npm install

# Running the App on iOS

## Running the javascript packager

Navigate to project folder and start the packager for development purposes

    cd PhoneWordsApp
    npm start

## Running the backend

Navigate to the server folder within the project and run the server

    cd  server
    node app.js         # backend runs on: `http://localhost:3000`

## Building the App on simulator

    Open `PhoneWordsApp/ios/PhoneWordsApp.xcodeproj` in your XCode and press `Build and Run`

# Running the App on Android

## Running the javascript packager

Navigate to project folder and start the packager for development purposes

    cd PhoneWordsApp
    npm start
    
## Running the backend

First in App.js, in fetch function, change "localhost" for IP adress of your computer (more info where to find IP address here http://www.howtofindmyipaddress.com/). (e.g. 172.18.14.110:3000 instead of localhost:3000) Than navigate to the server folder within the project and run the server.

    cd  server
    node app.js         # backend runs on: `http://{yourIPaddress}:3000`
    
## Building the App on simulator

Navigate to andrid folder whithin your project. Build the app. Run the android emulator and install the app there.

    cd android
    ./gradlew assembleDebug
    emulator -avd Nexus_RN_API_23   # runs the android emulator
    adb install {yourProjectFolderPath}/android/app/build/outputs/apk/app-debug.apk #installs the app to emulator
    
