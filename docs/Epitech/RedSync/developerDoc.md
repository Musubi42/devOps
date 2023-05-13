---
sidebar_position: 2
title: Developer documentation
---

# Developer documentation

## How to get started in the development

Clone the project 

```git
git clone https://github.com/EpitechMscProPromo2025/T-DEV-600-LIL-6-1-redditech-raphael.thibaut.git
```

#### Linux User

Switch to the main branch
```bash
git switch main
```

#### Mac User

Switch to the IOS branch
```bash
git switch IOS
```

### Install the dependencies

Run this command to install the pubspec.yml dependencies 

```bash
flutter pub get
```

###  Prerequisites to start the app

Download Flutter and Dart.

[Flutter installation guide](https://docs.flutter.dev/get-started/install)

To test if your installatin worked properly run this command

```bash
flutter doctor
```

If you've doned the installation properly you should see the same result.
![login](/img/RedSync/flutter_doctor.png)


As we are developping an Mobile app, it's better and simpler to connect a mobile throw USB to your computer.

##### Android developing device

Enable USB debugging
Go to your Options > System > Developer options > USB debugging

Install adb to enable debugging between your mobile device and your computer.
[Follow this link to do it](https://www.xda-developers.com/install-adb-windows-macos-linux/)

To check if your device is correctly connected to your computer and well configured, run

```bash
flutter devices
```

You should see something like this, a line with your phone 

![login](/img/RedSync/flutter_devices.png)

### Run the application

Ounce the prerequisites are fullfilled, run this command to start the application

```bash
flutter run 
```

If your phone is correctly connected to your computer, the app should automatically open your phone