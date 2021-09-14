<h1 align="center">
    <img alt="PlantManager" title="Logo" src="assets/logo.svg" width="300px" />
</h1>

<h4 align="center">
  🚀 Next Level Week #5 - PlantManager
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/BrunoMSts/plantmanager">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/BrunoMSts/plantmanager">

  <a href="https://github.com/BrunoMSts/plantmanager/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/BrunoMSts/plantmanager">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando">Starting</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">License</a>
</p>
<br>

## 💻 Project

The project was build during the Next Level Week #05 provided by Rocketseat.
This project has the purpouse to remind you to water your plants registered in the App.
And just like that, your plants will be not forgotten.

## 🎨 Layout

You can see the mockup here 👉  [Mockup](https://www.figma.com/file/IhQRtrOZdu3TrvkPYREzOy/PlantManager/duplicate)

## 🚀 Techs

Techs that was used to build the project

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)<br>
![React Native](https://img.shields.io/badge/React_Native-007ACC?style=for-the-badge&logo=react&logoColor=white) <br>
![Expo](https://img.shields.io/badge/Expo-007ACC?style=for-the-badge&logo=expo&logoColor=white)

## 🌱 Starting

### Backend 🚧
```bash
# Run
$ npm install -g json-server 
# Get the ip from your PC
# NOTE: If this code doesn't work, simply do a search on google and discover how to find your ip 😜
$ ipconfig getifaddr en0  
# inside of package.json change the following line of code and where is '<IP_ADDRESS>' change to your IP.
$ json-server ./src/services/server.json --host <IP_ADDRESS> --port 3333 --delay 700
# Then run
$ yarn dev
```

### Frontend 🌾
```bash
# Clone this repo
$ git clone https://github.com/BrunoMSts/plantmanager
# Access the project folder on your terminal
$ cd plantmanager
# Install all dependencies
$ yarn install
# Install iOS dependencies
$ cd ios && pod install
# Start the app
$ yarn start
```

## :memo: License

This project is under MIT license.

---
