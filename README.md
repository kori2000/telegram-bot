# telegram-bot
Basic Telegram Bot - Checking GitHub Repository Status


## Installation

Please adjust the .env file before.

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

- API Dokumentaion: https://core.telegram.org/api/obtaining_api_id

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