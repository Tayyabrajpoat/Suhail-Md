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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_05_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY0LFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg0LFxuICAgICAgICA4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlR3b2JWbUxFVUhBVzkrazRQVklyTHB0TjJpelpUSVRuSWpwb3ZCbXRjT1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDk3NDE1MzE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4OEM4QTY1NTNFNEJENDFEMTZCMzRGNTM1RTMxQjVCRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MjAzNDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicEJoTE5Ec1VTMzZfYnc5X1FZSTdJQVwiLFxuICBcInBob25lSWRcIjogXCIwYjBjMjhlYS0yYjA3LTRmODYtYjVlZS04YWQ3ZGVhYzk4ZDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMjMxLFxuICAgICAgNzcsXG4gICAgICAxOTksXG4gICAgICAxMTEsXG4gICAgICAxNDMsXG4gICAgICAxNzgsXG4gICAgICAxMjAsXG4gICAgICAxMTksXG4gICAgICAxMTYsXG4gICAgICAyNDEsXG4gICAgICAxNixcbiAgICAgIDI3LFxuICAgICAgOTUsXG4gICAgICAxNTEsXG4gICAgICAxMDgsXG4gICAgICAxNzEsXG4gICAgICAxOTksXG4gICAgICA2OSxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDExOSxcbiAgICAgIDMxLFxuICAgICAgMSxcbiAgICAgIDE1OCxcbiAgICAgIDIzNSxcbiAgICAgIDIyNixcbiAgICAgIDE0NCxcbiAgICAgIDE2NSxcbiAgICAgIDE2MyxcbiAgICAgIDcsXG4gICAgICAzOCxcbiAgICAgIDIzNSxcbiAgICAgIDU0LFxuICAgICAgMTc5LFxuICAgICAgMTUxLFxuICAgICAgMzYsXG4gICAgICAyMTgsXG4gICAgICAzMCxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJKSjYxOVI2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwOTc0MTUzMTg6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNb3ZpZSAmIFNlcmllc1wiLFxuICAgIFwibGlkXCI6IFwiMTQwMzcyNzUxNjc5NTgzOjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ095bWpla0NFS3lxdXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWDZpU3VFQVNkQk05QUI3ZWNoajd5SGgwKzM4SmUzOE5VU1htVjV3WjlpUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTSGR4SzZON1RzWGpuR2UzUEhMdXhSai9tUWJQSW9EUDNEclRGZlgwY2VvOTNsR2oxNks2VXFxbC8rMUFyOWxBelNoa0I1amx1eGR2Z2V0QTBzRlRDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMV0dHejNnSlFKVXEydEMwbjMwalAydEx0d1FOdjZCQVlSK0RjWjBGY1VPaTlySVpYUWl4cEYvY1pic2E2VVcyT3gvLzArRmJwQlVCVTJTcFU1N2ZpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTc0MTUzMTg6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjIwMzM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTU5yXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNTnIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGVlNrRklscVlaaTdGZUE5ZFgzcGZwbCtONytXUWRBT1pVYTB1ejV1M2JFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc1NzI4OTgzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTM1OTg2MDI2XCJ9Igp9"  // PUT your SESSION_ID 


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
