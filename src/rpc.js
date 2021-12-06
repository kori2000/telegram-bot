const axios = require('axios')

const dotenv = require('dotenv')

// Loading Bot Settings
dotenv.config()

const GITHUB_REPO = process.env.GITHUB_REPO

/**
 * Get all commits from GitHub Repository
 * @returns all commits as json
 */
function getRepoStatus() {
    
    return new Promise( (resolve, reject) => {

        axios.get(GITHUB_REPO)
        .then(response => {
            let jsonData = response.data[0]
            //console.log(jsonData)
            resolve(jsonData)
        })
        .catch(err => {
            //console.log(err)
            reject(err)
        })
    })
}

/**
 * Filter json and return specific data only
 * @param {} jsonData 
 * @returns 
 */
function parseJsonData(jsonData) {
    return jsonData.sha
}

function wait(ms) {
    console.log(`WAIT [${ms}MS]`)
    return new Promise(resolve =>         
        setTimeout(resolve, ms)
    )
}

module.exports = {
    getRepoStatus,
    parseJsonData,
    wait
}