# telegram-bot
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/kori2000/telegram-bot/blob/main/LICENSE)
[![Unicorn](https://img.shields.io/badge/nyancat-approved-ff69b4.svg)](https://www.youtube.com/watch?v=QH2-TGUlwu4)

Basic Telegram Bot - Checking GitHub Repository Status


## Installation

Please adjust the .env file before starting the Container.

```bash
# Replace .ent.test with .env to work in prod enviroment

# Bot Token
API_TOKEN=xxxxxxxxxxxxxxxxxxxxx

# Master Phone
MASTER_ID=xxxxxxxxxxxxxxxxxxxxx

# Monitor GitHub Repo
GITHUB_REPO=https://api.github.com/repos/--user--/--repo--/commits

# Time Range to Check Repository Status (in ms) 20 min
TIMER_RANGE=1200000
```

A Telegram Bot API token is required. Create a new one with the Telegram BOT Father: [BotFather](https://telegram.me/BotFather)

- Telegram API Documentaion: https://core.telegram.org/api/obtaining_api_id
- NPM Modul: https://www.npmjs.com/package/node-telegram-bot-api

```bash
# Build Docker Image
make build

# Start Docker Container
make up
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)