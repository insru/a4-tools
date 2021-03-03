# A4-TOOLS

* Tool for IAS API output simplification. Needed to import API data to vMix.

## Configuration

* Configuration file is `appConfig.json`
* Configuration params:

    * `apiLink` — link to IAS Api
    * `port` — app port

## How to install

* Download and install [NodeJS LTS](https://nodejs.org/en/)
* Download repo (Code -> Download ZIP)
* Unzip
* Copy `a4-tools` folder to disc C.
* Run `C:\a4-tools\install.cmd`
* App will start automatically on windows startup
* Also you could control it from windows `cmd`
    * `pm2 stop a4-tools` — stop app till system restart
    * `pm2 start a4-tools` — start app

## How to use

Make req to `http://localhost:3000/game?id=17975` set needed game id in request
