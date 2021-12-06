const rpc = require('./rpc')
const bot = require('./bot')

const dotenv = require('dotenv')

// Loading Bot Settings
dotenv.config()

const TIMER_RANGE = process.env.TIMER_RANGE

// Cache last commit for checking
let last_sha_commit = ''

/**
 * Run Loop with RPC Request to GitHub Repository
 */
async function initServer() {

    let int_msg = "🔥 Telegram Bot Ready..."
    bot.sendToMaster(int_msg)
    console.log(int_msg)

    while(true) {
        console.log("Init RPC...")

        try {

            let jsonData = await rpc.getRepoStatus()        
            let rpc_sha = rpc.parseJsonData(jsonData)
            
            console.log("RPC SHA....: ", rpc_sha)
            console.log("LAST SHA...: ", last_sha_commit)
    
            console.log("")
    
            if (rpc_sha != last_sha_commit) {
                last_sha_commit = rpc_sha
    
                console.log("Found Update...🙄")
    
                // Send Update Message
                let commit_msg = jsonData.commit.message
                let commit_author = jsonData.commit.author.name
                bot.sendToMaster(`🚀 GitHub Update***\nFrom: ${commit_author} | Commit:\n\n${commit_msg}`)
    
                console.log("Message Send...🚀")
                console.log()
            }
            
            // Wait for next Status Check
            await rpc.wait(TIMER_RANGE)
            
        } catch (error) {
            console.log("⚡ERROR: (Maybe 'API rate limit exceeded'). Wait 50 min. for next Status Check.")
            // Wait 50 min.
            await rpc.wait(300000)
        }

    }

}

// Starting...
initServer()