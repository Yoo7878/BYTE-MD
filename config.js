
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "918955898763@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "918955898763";
global.owner = process.env.OWNER_NUMBER || "918955898763";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdJb015VGlJN1UwaFpDQ0QvTVhTSmpLaDBhTmE1MFVCKzdyeHloLzNWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTNXMEpvQ1VrZHErZ3llL2VQamFpR1U4N0NHSmJuSVVsbEtnR3Y1NGRtZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUHFSa2pyYkxDNEtTSEFLZWdEdEozZVg5Q254NFg3b3ZzREQ4M2svWFV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJURTJ4RXV4Q200cmxqanh0QW15V05KNThWSE1BSGEvREdmbmlMUnBDM0hJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPb05RSnlKYVBwWGVDOFZ2TVp4WGtqV21HYlIxVWVIWmdxZzlyNkxaMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlluanhUNi9yR1QwdFhhZTBYUFgreXNsSjJVNDdmQTh0ZU5JRGlEWkNWV2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09hR2ZUbXVaT1R1SkRud3crYjdpNTI1aXdobXJ2OUhJY2NvenBMNG8zVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTCsxNU41TDFxaS9YbzZxM1lKK3N4TjhuWWEyTGljNTZueWIzdTJLSENtYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxKTWhFMjIrWFNYd0lPbkZHc2lMeHFBOEMvVzhZQkt0YXJMVFFvTDZxaEhRZmRyL1V5bGc4dkRIaHlSM2ErUUNnRUJKSE9KOVdkQ0RXZjRRZHJiMmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6Imt5QWg3M080bzRJbHZidUF3dkwwTmlLekNZZXR3MS80d1NQRkQvL3FGTFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFDR2FHaUw3UXFXRlRMZnhGTzg3QUEiLCJwaG9uZUlkIjoiNjMwMmI3ODQtMWFiNi00YTUzLWI3NjQtZDEwYzBkNTg5OWYxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZpNFc3cURqUXN0VVZFT05adUpXWVFFRkhsMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0VEF5SW8yTjd2MjZMWjhHUHQ2bFVHRDRpV0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMkNFRVlFNkciLCJtZSI6eyJpZCI6IjkxODk1NTg5ODc2MzozOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLigJQgejRraG0xLkJhYmEuby5vLm8gIDM6KSA6KSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT25KcmNJSEVOLzBuclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTmwvTTA3U0pPWEM4SGx4OG9VZ3d0K3hXdEd2cVZ0TTc3QXREVTNZd2F5Yz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNFZaOExEbU9MeldqN1E0R09zNkpiaFVXNFFiREcrNVN6THpOMlhLZndQcUNPU2tWU09JdGtlUDJzUlIwWFQxU2w4U0VwUU1DUm5FckdPMXMwY25hQnc9PSIsImRldmljZVNpZ25hdHVyZSI6InNCUGhtMmgyd3N1ZW84WjBZR3BIV0lrTlJ5WXB3Zm5SSXhaU0dNVmpaS2E4NWZTNGp3alhCVjlqbTl6NzFWYWdwaXhUclpGYmxOWFNNZGpKU0RydWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4OTU1ODk4NzYzOjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRaZnpOTzBpVGx3dkI1Y2ZLRklNTGZzVnJScjZsYlRPK3dMUTFOMk1Hc24ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxNzExMDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTYrIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "RADHE VIBEZZZ",
  ownername: process.env.OWNER_NAME || "— z4khm1.Baba.o.o.o  3:) :)",
  errorChat: process.env.ERROR_CHAT || "918955898763",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
