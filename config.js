
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
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "918955898763";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
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
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUltaUVOTXFTOTFwU1dYM3Y0cHNiQjc0RWc4OXBXU3hVRS9XNmVvVWwxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXl3YlcyVmt1Tm50UzlyMEJBS2ZqWHRQOTEwSWRvYkxwdEJmTUVLQlIyVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySFM4SUtyYVFPMm1jVWNOUjAvb0JtUzZuMTBKdXNiTWxHeW9xSkZnNVVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQXpzbmN2bUdVYUNLbUJUbS9KMFFYaTBaaU9BMWZTUHA4VmxzRG9zeEM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHVnR3Ymd5RGxyZEpoc3BHbWQ1bXI2TUZyVGxWWmx1RFpyZ0JxdVFBV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink0azkvczdNU3J3RExpSGdFNjhsVDcwRHdpVlVyaHRKbFZidUYrdkV5V3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9WS3paWnhFbk5Bek4rVk5pOU5rUklMN2dmMFFneXFWZ1czYkpPZGQwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2p4eEdpWEx6R3NMRUJmSG9TZlNPLy9aRW00aWxnVnR1Mm1DR3FHcVloST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhnYW5iZHEwVGNFN1JkQjUyZUNuNFBjU3Ntay8zQm5meFBRa2dMd0UvY2krLzE3ZzJxK1BYbEJGVTRRS3BGMEtGYjhvSFhPbDdZMXppS2k3aW40UWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJzczNhUGtTZWJNeldLUjd6V3BLdkNPWTdvSjJMN3lLMWh4QUQ4OGw2MEZNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODk1NTg5ODc2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NzQzQUM1NEE4NEZGRTVBQkYzQzA0MEZBODY2NEYxMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NzY1MDIwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg5NTU4OTg3NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTA3Q0E3NzdBRENFMTBEQTIyRkIzMUVGOTI4QTdEQ0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTc2NTAyMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUnJhWnZNV2JRYkNTVWtzekxMYlBGdyIsInBob25lSWQiOiI5Y2VmODE3Ni0wMGVhLTQ5ZWMtOWFjOC1iMmE4YzA3NGRiMGUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicy9VbDV2dmM1YnNIV0lXYmMvcEhETVZ0VXFFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklHaDZNeG10RXRqcnRhS0pzNW5qeDBrR1JrZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCUlNDS0NHQyIsIm1lIjp7ImlkIjoiOTE4OTU1ODk4NzYzOjM0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJHwnZCa8J2QnfCdkKHwnZCeIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPUEpyY0lIRUpXUWhyUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJObC9NMDdTSk9YQzhIbHg4b1Vnd3QreFd0R3ZxVnRNNzdBdERVM1l3YXljPSIsImFjY291bnRTaWduYXR1cmUiOiJudGtxRmExM2tPYmJzem5INVFtVlNzWncvODZVem5MSEZFNVZ5N3RoYkZ4ZGFlTkpkM0dGR1U1MDJKVEdVby82ejFsZWlLVmtPbzJ6K2cwbWpDSEpDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoib2o2NnhSdkwrZm9wY3RGdmxGRnNrSXE3UEhXc1RRcHRSaWpob2JqRExpc0pxODhUV3FMUGRXcUdrU3pKejlZNTdJYllsOFl2NWU5RXduWkhrTDV6aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTg5NTU4OTg3NjM6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFpmek5PMGlUbHd2QjVjZktGSU1MZnNWclJyNmxiVE8rd0xRMU4yTUdzbiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTc2NTAxNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIZ3YifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
