const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=lVRkSSJR#0otLScEeO3iY5lb0PMfwEc6esAv2dYwc71CqzH9R4IE' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
SUDO: process.env.SUDO === undefined ? '94718461889' : process.env.SUDO,
MODE: process.env.MODE === undefined ?"privet" : process.env.MODE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS
};
