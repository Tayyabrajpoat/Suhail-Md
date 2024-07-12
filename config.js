const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_04_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxODQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg3LFxuICAgICAgICA3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDg0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICA0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllGbWtHZGU2YzNHUTB1NHcxc3V2NWZxVEdWbDdDMDBEYlRGUElpNnpqTmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpTcW5jNlp2UTdpRjN4SGRldzBWWFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjNlNjM4MDktZWZlNC00Njc5LWE2NDQtNjJkYzFmNTM3MWRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMTUwLFxuICAgICAgMjQsXG4gICAgICAxNTgsXG4gICAgICAyMzAsXG4gICAgICAxNjAsXG4gICAgICAxMzIsXG4gICAgICAyMjgsXG4gICAgICAyMTUsXG4gICAgICAyMzksXG4gICAgICA5NixcbiAgICAgIDE3NixcbiAgICAgIDI0MyxcbiAgICAgIDExLFxuICAgICAgMjgsXG4gICAgICA1LFxuICAgICAgMjIwLFxuICAgICAgMTQ0LFxuICAgICAgNjgsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAyMzIsXG4gICAgICAyNDEsXG4gICAgICAyNTMsXG4gICAgICAxOSxcbiAgICAgIDE0LFxuICAgICAgMTAsXG4gICAgICAyNDAsXG4gICAgICAxODAsXG4gICAgICAyMTIsXG4gICAgICAxNzUsXG4gICAgICAyNDcsXG4gICAgICAxMzUsXG4gICAgICAxMDcsXG4gICAgICAzLFxuICAgICAgMjMxLFxuICAgICAgNyxcbiAgICAgIDI1NSxcbiAgICAgIDEyMyxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5MkRKTk5GMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDk3NDE1MzE4OjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTW92aWUgJiBTZXJpZXNcIixcbiAgICBcImxpZFwiOiBcIjE0MDM3Mjc1MTY3OTU4Mzo1NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcW1qZWtDRUl6dHhyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlg2aVN1RUFTZEJNOUFCN2VjaGo3eUhoMCszOEplMzhOVVNYbVY1d1o5aVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOC9QdThIWi8vdmtwc0NFTWxrSUlMejhUSGtWNU9UWC9WeXVtbXhBcnRlY3BZdVBHWE16cWR3WXBEa21jdnlMOEJVdFBHaGVzeXIxUHFNdzNGdzhZQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUmhKOC9aVzBNQ2lDbWUzU3Z2V2FBU0w3blFpTlpybCtHMmxKejZhWTUydTZhQUVNdUVJRW5ta1I2dUROT0ZocHNVd0pMZG1YUVpOYytLR09TNVBJZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDk3NDE1MzE4OjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgyNTQ4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1ON1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU43Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiS3IvTVBGUlFyTUJMTmJoL0lMOU8zS3NuVzRwMGNPZ1R2dThzZTUyaXBGND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTcyODk4MzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDY0MzIzMjkyM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
