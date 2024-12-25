const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SEON-MD=6dU0wZIR#JGTEPBAapsbMNABBUwdigY8y0PRNDC0FpuVa43RDAgo' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'NETHU-MD8': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
