# Requirements

## iOS

Latest XCode installed

## Android

Android Studio installed
Latest Android SDK installed

## NodeJS

You will need latest version of NodeJS installed. We recommend [Node Version Manager](https://github.com/creationix/nvm) for easier management of NodeJS versions:

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

or

    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash


After that you need to enable it (You can add this to your `.bashrc` or `.zshrc` For automatic inintialization after opening your command line):

    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

After `nvm` is available in your command line, you can easily install and switch between NodeJS versions, examples:

    nvm install 10     # installs NodeJS version 10
    nvm use 9          # switches to NodeJS version 9

# Installation

    git clone https://github.com/Gruberod/PhoneWordsApp.git
    cd PhoneWordsApp
    npm install

# Running

    cd PhoneWordsApp
    npm start           # runs the javascript packager for development purposes

## Backend
    cd  server
    node app.js         # backend runs on: `http://localhost:3000`
    # for Android localhost needs to be changed for IP adress in App.js fetch call (e.g. 172.18.14.110:3000 instead of localhost:3000)

# iOS

    Open `PhoneWordsApp/ios/PhoneWordsApp.xcodeproj` in your XCode and press `Build and Run`

# Android

    cd android
    ./gradlew assembleDebug
    emulator -avd Nexus_RN_API_23   # runs the android emulator
    adb install {yourProjectFolderPath}/android/app/build/outputs/apk/app-debug.apk #installs the app to emulator