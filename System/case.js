/*
BASE BY SIPUTZX
BASE 2 BY RIFKYSHRE
RECODE BASE BY IKYYKZY (SHIIN) 

MY WEBSITE: https://ikyykzy.biz.id

HAPUS? YAPIT 7 TURUNAN
TAMBAHIN AJA CREDITS LU
*/

//===================[ TEMPAT MODULE ]=====================\\
require("../Settings/config")
const { downloadContentFromMessage,
proto,
generateWAMessage,
getContentType,
prepareWAMessageMedia,
generateWAMessageFromContent,
GroupSettingChange, 
jidDecode,
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
generateMessageID,
jidNormalizedUser,
generateForwardMessageContent,
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
delay,
WA_DEFAULT_EPHEMERAL,
WADefault,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaconnet,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WAconnet,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const path = require ('path');

module.exports = async (conn, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

//==================[ TEMPAT CONST LIB ]=====================\\
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('../Library/lib/myfunc')

//===================[ TAMPAT PREFIX / ADMIN / OWNER ]====================\\
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await conn.decodeJid(conn.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const groupMetadata = m.isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

//===================[ TAMPILAN CONSOLE ]=====================\\
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

//==================[ FUNCTION FITUR ]=====================\\
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

const totalfitur = () => {
    const mytext = fs.readFileSync("./System/case.js").toString();
 
    // Match all blocks from 'case' to 'break'
    const caseBlocks = mytext.match(/case\s+['"][^'"]+['"][\s\S]*?break/g) || [];
 
    // Set to store unique first cases
    const uniqueFirstCases = new Set();
 
    for (const block of caseBlocks) {
        const match = block.match(/case\s+['"]([^'"]+)['"]/);
        if (match && match[1]) {
            uniqueFirstCases.add(match[1]); // Only the first case is added
        }
    }
 
    return uniqueFirstCases.size;
};

conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await conn.getFile(path, true)
        let {
            res,
            data: file,
            filename: pathFile
        } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                }
            }
            catch (e) {
                if (e.json) throw e.json
            }
        }
        let opt = {
            filename
        }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '',
            mimetype = type.mime,
            convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime))(
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'

        delete options.asSticker
        delete options.asLocation
        delete options.asVideo
        delete options.asDocument
        delete options.asImage

        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: {
                url: pathFile
            },
            mimetype
        }
        let m
        try {
            m = await conn.sendMessage(jid, message, {
                ...opt,
                ...options
            })
        }
        catch (e) {
            //console.error(e)
            m = null
        }
        finally {
            if (!m) m = await conn.sendMessage(jid, {
                ...message,
                [mtype]: file
            }, {
                ...opt,
                ...options
            })
            file = null
            return m
        }
    }

//===================[ FUNCTION REPLY ]=====================\\


const reply = (teks) => { 
conn.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Rbotdow loader", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://", 
"sourceUrl": "https://" }}}, { quoted: m }) }

const reply2 = (teks) => {
conn.sendMessage(from, { text : teks }, { quoted : m })
}

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

//==================[ FUNCTION WAKTU ]======================\\
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}

// REACT SW
const Func = {
random: (arr) => arr[Math.floor(Math.random() * arr.length)]
}
conn.autoReactionSW = conn.autoReactionSW || true
if (conn.autoReactionSW) {
conn.storyJid = conn.storyJid ? conn.storyJid : []
if (
m.chat.endsWith('broadcast') &&
!conn.storyJid.includes(m.sender) &&
m.sender != conn.decodeJid(conn.user.id)
) {
conn.storyJid.push(m.sender)
}
if (
m.chat.endsWith('broadcast') &&
[...new Set(conn.storyJid)].includes(m.sender) &&
!/protocol/.test(m.mtype)
) {
await conn.sendMessage(
'status@broadcast',
{
react: {
text: Func.random(['🤣', '🥹', '😂', '😋', '😎', '🤓', '🤪', '🥳', '😠', '😱', '🤔', '🥶']),
key: m.key
}
},
{
statusJidList: [m.sender]
}
)
}
}

async function Enc(type) {
  return encodeURIComponent(type)
}

//================== [ PLUGINS ] ==================//
const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`${filePath}:`, error);
                    }
                }
            });
            return plugins;
        };

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "./plugins"));
        const plug = { conn, prefix, command, reply, reply2, text, isCreator, isGroup: m.isGroup, isPrivate: !m.isGroup, pushname, mime, quoted, sleep, fetchJson };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !isCreator) {
                    return reply(mess.OnlyOwner);
                }
                if (plugin.group && !plug.isGroup) {
                    return reply(mess.OnlyGrup);
                }
                if (plugin.private && !plug.isPrivate) {
                    return reply(mess.private);
                }
                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }

        if (!pluginsDisable) return;


//=================[ TEMPAT CASE DI BAWAH INI ]=================\\
switch(command) {


case 'menu': case 'help': case 'shiin':{
let anu = `
Hi ${pushname} 🍁, I am a whatsapp bot designed to help your day to day. Please use me to download videos, play music, and more. Don't forget to donate to keep this bot running.

\`INFORMATION BOT\`
 ◈ \`Name:\` ${botname}
 ◈ \`Owner:\` ${ownerNumber}
 ◈ \`Version:\` ${botver}
 ◈ \`TotalFitur:\` ${totalfitur()}
 ◈ \`Type:\` Case × Plugins

——————————————————
> 🄾 = For Owner
> 🅄 = For User
——————————————————

——————————————————
> .ᴘᴜʙʟɪᴄ - sᴏᴍᴇᴏɴᴇ
> .sᴇʟғ - ᴘᴇʀsᴏɴᴀʟ
——————————————————
\`〘 ᴏᴡɴᴇʀ 〙\`
╔ ᴄʟᴇᴀʀsᴇssɪᴏɴ | 🄾
╠ ʙᴀᴄᴋᴜᴘsᴄ | 🄾
╚ ᴀᴜᴛᴏʀᴇᴀᴄᴛsᴡ | 🄾

\`〘 ᴘʟᴜɢɪɴs 〙\`
╔ ᴀᴅᴅᴘʟᴜɢɪɴs | 🄾
╠ ᴅᴇʟᴘʟᴜɢɪɴs | 🄾
╠ ɢᴇᴛᴘʟᴜɢɪɴs | 🄾
╠ ʟɪsᴛᴘʟᴜɢɪɴs | 🄾
╚ sᴀᴠᴇᴘʟᴜɢɪɴs | 🄾

\`〘 ᴅᴏᴡɴʟᴏᴀᴅ 〙\`
╔ ᴘʟᴀʏ | 🅄
╠ ᴛɪᴋᴛᴏᴋ | 🅄
╚

\`〘 sᴛɪᴄᴋᴇʀ 〙\`
╔ sᴛɪᴄᴋᴇʀ | 🅄
╠ sᴛɪᴄᴋᴇʀᴡᴍ | 🅄
╚

> © *Rahadi*`
conn.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "kyyyzx",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: anu,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: newsletterName,
                            newsletterJid: "120363400306866480@newsletter",
                        },
                        externalAdReply: {
                            title: "MiaTwilight",
                            body: "Script by Rbot",
                            thumbnailUrl: `https://o.uguu.se/uUuLMmLA.jpg`,
                            sourceUrl: "https://www.gakada.id",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m });
                break;
            }

case 'self': {
if (!isCreator) return reply(mess.OnlyOwner)
conn.public = false
reply('Sukses Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return reply(mess.OnlyOwner)
conn.public = true
reply('Sukses Change To Public Mode')
}
break

case 'upchmp3':
case 'upchaudio': {
    if (!isCreator) return reply(mess.OnlyOwner);
    if (!/video/.test(mime) && !/audio/.test(mime)) 
        return reply(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`);
    if (!quoted) 
        return reply(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`);
    await conn.sendMessage(m.chat, { 
        react: { text: "⏱️", key: m.key }
    });
    let media = await quoted.download();
    let { toAudio } = require('../Library/lib/converter');
    let audio = await toAudio(media, 'mp4');
    await conn.sendMessage(global.idch, { 
        audio, 
        mimetype: 'audio/mpeg', 
        ptt: true,
        contextInfo: {
            mentionedJid: [m.sender], 
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: idch,
                newsletterName: newsletterName,
                serverMessageId: 145
            }
        }
    }, { quoted: m });
    await conn.sendMessage(m.chat, { 
        react: { text: "✅", key: m.key } 
    });
    }
    break;

case "backupsc":
case "bck":
case "backup": {
    if (!isCreator)
        return reply("Fitur ini hanya untuk owner pemilik bot!");

    try {
        // Bersihkan direktori sementara
        const tmpDir = "../tmp";
        if (fs.existsSync(tmpDir)) {
            const files = fs.readdirSync(tmpDir).filter(f => !f.endsWith(".txt"));
            for (let file of files) {
                fs.unlinkSync(`${tmpDir}/${file}`);
            }
        }

        await reply("Processing Backup Script . .");

        const tgl = func.getTime().split("T")[0];
        let jam = func.getTime().split("T")[1].split("+")[0].split(":").slice(0, 2).join(":");
        const name = `Backup-${tgl}#${jam.replace(":", ".")}`; // replace ":" to avoid filename issue

        const exclude = ["node_modules", "session", "package-lock.json", "yarn.lock", ".npm", ".cache"];
        const filesToZip = fs.readdirSync(".").filter(f => !exclude.includes(f) && f !== "");

        if (!filesToZip.length) return reply("Tidak ada file yang dapat di-backup.");

        execSync(`zip -r ${name}.zip ${filesToZip.join(" ")}`);

        await conn.sendMessage(m.sender, {
            document: fs.readFileSync(`./${name}.zip`),
            fileName: `${name}.zip`,
            mimetype: "application/zip"
        }, { quoted: m });

        fs.unlinkSync(`./${name}.zip`);

        if (m.chat !== m.sender) reply("Script bot berhasil dikirim ke private chat.");
    } catch (err) {
        console.error("Backup Error:", err);
        reply("Terjadi kesalahan saat melakukan backup.");
    }
}
break;

case 'autoreactsw':
if (!isCreator) return reply(mess.OnlyOwner)
   if (!text) return reply(`*Contoh:* autoreactsw on / off`)
   if (text.toLowerCase() === 'on') {
      conn.autoReactionSW = true
      reply(`Fitur auto reaction di status WhatsApp *aktif*`)
   } else if (text.toLowerCase() === 'off') {
      conn.autoReactionSW = false
      reply(`Fitur auto reaction di status WhatsApp *nonaktif*`)
   } else {
      reply(`Pilihan hanya *on* atau *off*`)
   }
   break

case 'tiktok':
case 'tt': {
if (!text) {
  let input = `[!] *wrong input*\nEx : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`;
  return reply(input);
}
if (!(text.includes("http://") || text.includes("https://"))) {
  return reply(`url invalid, please input a valid url. Try with add http:// or https://`);
}
if (!text.includes("tiktok.com")) {
  return reply(`Invalid Tiktok URL.`);
}

async function tiktokDl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      let data = [];
      function formatNumber(integer) {
        let numb = parseInt(integer);
        return Number(numb).toLocaleString().replace(/,/g, ".");
      }
      function formatDate(n, locale = "en") {
        let d = new Date(n);
        return d.toLocaleDateString(locale, {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        });
      }
      let domain = "https://www.tikwm.com/api/";
      let res = await (
        await axios.post(
          domain,
          {},
          {
            headers: {
              Accept: "application/json, text/javascript, */*; q=0.01",
              "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              Origin: "https://www.tikwm.com",
              Referer: "https://www.tikwm.com/",
              "Sec-Ch-Ua": '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
              "Sec-Ch-Ua-Mobile": "?1",
              "Sec-Ch-Ua-Platform": "Android",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-origin",
              "User-Agent":
                "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
              "X-Requested-With": "XMLHttpRequest",
            },
            params: {
              url: url,
              count: 12,
              cursor: 0,
              web: 1,
              hd: 1,
            },
          }
        )
      ).data.data;
      if (res && !res.size && !res.wm_size && !res.hd_size) {
        res.images.map((v) => {
          data.push({ type: "photo", url: v });
        });
      } else {
        if (res && res.wmplay) {
          data.push({
            type: "watermark",
            url: "https://www.tikwm.com" + res.wmplay,
          });
        }
        if (res && res.play) {
          data.push({
            type: "nowatermark",
            url: "https://www.tikwm.com" + res.play,
          });
        }
        if (res && res.hdplay) {
          data.push({
            type: "nowatermark_hd",
            url: "https://www.tikwm.com" + res.hdplay,
          });
        }
      }
      let json = {
        status: true,
        title: res.title,
        taken_at: formatDate(res.create_time).replace("1970", ""),
        region: res.region,
        id: res.id,
        durations: res.duration,
        duration: res.duration + " Seconds",
        cover: "https://www.tikwm.com" + res.cover,
        size_wm: res.wm_size,
        size_nowm: res.size,
        size_nowm_hd: res.hd_size,
        data: data,
        music_info: {
          id: res.music_info.id,
          title: res.music_info.title,
          author: res.music_info.author,
          album: res.music_info.album ? res.music_info.album : null,
          url: "https://www.tikwm.com" + res.music || res.music_info.play,
        },
        stats: {
          views: formatNumber(res.play_count),
          likes: formatNumber(res.digg_count),
          comment: formatNumber(res.comment_count),
          share: formatNumber(res.share_count),
          download: formatNumber(res.download_count),
        },
        author: {
          id: res.author.id,
          fullname: res.author.unique_id,
          nickname: res.author.nickname,
          avatar: "https://www.tikwm.com" + res.author.avatar,
        },
      };
      resolve(json);
    } catch (e) {
      reject(e);
    }
  });
}

let down = await tiktokDl(text);

let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Judul: ${down.title}
Server: ${down.region}
ID: ${down.id}
Durasi: ${down.duration}
Size: ${down.size_nowm_hd}

Music Info:
ID: ${down.music_info.id}
Judul: ${down.music_info.title}
Pemilik Musik: ${down.music_info.author}

Stats: 
Views: ${down.stats.views}
Likes: ${down.stats.likes}
Comment: ${down.stats.comment}
Share: ${down.stats.share}
Download: ${down.stats.download}

Author: 
ID: ${down.author.id}
Full Name: ${down.author.fullname}
Nickname: ${down.author.nickname}
Avatar: ${down.author.avatar}
`;

const MAX_FILE_SIZE = 50 * 1024 * 1024;

if (down.size_nowm_hd && down.size_nowm_hd > MAX_FILE_SIZE) {
  await kyy.reply(`Video size (${(down.size_nowm_hd / (1024 * 1024)).toFixed(2)} MB) exceeds WhatsApp limit. Please download it here: ${down.data[2].url}`);
} else {
  await conn.sendMessage(m.chat, {video: {url: down.data[2].url }, mimetype: 'video/mp4', caption: berak }, {quoted: m})
}

if (down.music_info && down.music_info.url) {
  // For audio, size info is not always available, so we send ddirectl
  await conn.sendMessage(m.chat, {audio: {url: down.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
}

};
break

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

case 'mediafiredown':
    case 'mfdown':
    case 'mf':
    case 'mediafire':
    case 'mfdl': {
      try {
        if (!text) return reply(`Contoh: ${prefix + command} linknya`)
        if (!text.includes('mediafire.com')) return reply('Harus berupa link mediafire!')

        let api = await fetchJson(`https://api.vreden.web.id/api/mediafiredl?url=${text}`)
        let data = api.result?.[0]

        let fileNama = decodeURIComponent(data.nama || 'file.zip')
        let extension = fileNama.split('.').pop().toLowerCase()

        let res = await axios.get(data.link, {
          responseType: 'arraybuffer'
        })
        let media = Buffer.from(res.data)

        let mimetype = ''
        if (extension === 'mp4') mimetype = 'video/mp4'
        else if (extension === 'mp3') mimetype = 'audio/mp3'
        else mimetype = `application/${extension}`

        conn.sendMessage(m.chat, {
          document: media,
          fileName: fileNama,
          mimetype: mimetype
        }, {
          quoted: m
        })

      } catch (err) {
        reply('Terjadi kesalahan: ' + err)
      }
    }
    break
    
case 'fb':
    case 'fbdl':
    case 'facebook': {
      try {
        if (!text) return reply(`Contoh: ${prefix+command} linknya`)
        if (!text.includes('facebook.com')) return reply('Harus berupa link facebook!')
        let jor = await fetchJson(`https://api.agatz.xyz/api/facebook?url=${Enc(text)}`)
        await conn.sendMessage(m.chat, {
          video: {
            url: jor.data.sd
          },
          caption: `© ${wm}`
        }, {
          quoted: m
        })
      } catch (err) {
        console.error('Terjadi kesalahan: ', err)
        reply('Terjadi kesalahan')
      }
    }
    break

case 'twdl':
    case 'twitter': {
      try {
        if (!text) return reply(`Contoh: ${prefix+command} linknya`)
        lyreact()

        const response = await fetchJson(`https://api.agatz.xyz/api/twitter?url=${Enc(text)}`)

        const videoUrl = response.data.video_sd || response.data.video_hd || response.data.audio

        await conn.sendMessage(m.chat, {
          video: {
            url: videoUrl
          },
          caption: `© ${wm}`,
        }, {
          quoted: m
        })
      } catch (err) {
        reply(`Terjadi kesalahan: ${err}`)
      }
    }
    break

case 'thdl':
    case 'threads': {
    async function Threads(link) {
  const { data } = await axios.get('https://threads.snapsave.app/api/action', {
    params: { url: link },
    headers: {
      'accept': 'application/json, text/plain, */*',
      'referer': 'https://threads.snapsave.app/',
      'user-agent': 'Postify/1.0.0',
    },
    timeout: 10000,
  });

  const type = (type) => ({
    GraphImage: 'Photo',
    GraphVideo: 'Video',
    GraphSidecar: 'Gallery',
  }[type] || type);

  return {
    postInfo: {
      id: data.postinfo.id,
      username: data.postinfo.username,
      avatarUrl: data.postinfo.avatar_url,
      mediaTitle: data.postinfo.media_title,
      type: type(data.postinfo.__type),
    },
    media: data.items.map((item) => ({
      type: type(item.__type),
      id: item.id,
      url: item.url,
      width: item.width,
      height: item.height,
      ...(item.__type === 'GraphVideo' && {
        thumbnailUrl: item.display_url,
        videoUrl: item.video_url,
        duration: item.video_duration,
      }),
    })),
  };
}
      try {
        if (!text) return reply(`Contoh: ${prefix+command} linknya`)

        const response = await Threads(text)

        const {
          postInfo,
          media
        } = response

        const videoUrl = media.find(item => item.type === 'Video')?.videoUrl || media.find(item => item.type === 'Gallery')?.url

        await conn.sendMessage(m.chat, {
          video: {
            url: videoUrl
          },
          caption: `© ${wm}`,
        }, {
          quoted: m
        })
      } catch (err) {
        reply(`Terjadi kesalahan: ${err}`)
      }
    }
    break
    
case 'ccdl':
    case 'capcut': {
    async function Capcut(url) {
    const BASE_URI = "https://snapsave.cc/wp-json/aio-dl/video-data"
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json;charset=UTF-8',
        'Connection': 'keep-alive',
        'Referer': 'https://snapsave.cc/capcut-video-downloader/',
        'Origin': 'https://snapsave.cc',
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'DNT': '1'
    }

    try {
        const response = await axios.get(`https://snapsave.cc/capcut-video-downloader/#url=${encodeURIComponent(url)}`, { headers })
        const $ = cheerio.load(response.data)
        const token = $("#token").val()

        if (!token) {
            throw new Error("Unable to retrieve token. Please check the source or provided URL.")
        }

        const payload = {
            url,
            token,
            hash: "aHR0cHM6Ly93d3cuY2FwY3V0LmNvbS9pZC1pZC90ZW1wbGF0ZS1kZXRhaWwvRm9yLXlvdS0vNzQxNDE2Mjk3MzU3ODU2MjgyMg==1073YWlvLWRs"
        }

        const { data: videoData } = await axios.post(BASE_URI, payload, { headers })
        return videoData
    } catch (error) {
        console.error("Error fetching CapCut video data:", error.message || error)
        return null
    }
}
      try {
        if (!text) return reply(`Contoh: ${prefix+command} linknya`)
        if (!text.includes('capcut.com') && !text.includes('capcut.net')) return reply('Harus berupa link capcut!')

        const videoData = await Capcut(text)

        if (videoData && videoData.medias && videoData.medias.length > 0) {
          const videoUrl = videoData.medias[0].url
          return await conn.sendMessage(m.chat, {
            video: {
              url: videoUrl
            },
            caption: `© ${wm}`
          }, {
            quoted: m
          })
        } else {
          return reply('Video tidak ditemukan.')
        }
      } catch (err) {
        console.error(err)
        reply('Terjadi kesalahan')
      }
    }
    break

case 'spotify':
case 'spotifydl': {
async function spotifyDl(url) {
    let cookie = null
    let token = null

    const Visit = async () => {
        try {
            const response = await axios.get('https://spotmate.online/en', {
                headers: {
                    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36'
                }
            })

            const setCookieHeader = response.headers['set-cookie']
            if (setCookieHeader) {
                cookie = setCookieHeader.map(cookie => cookie.split(';')[0]).join('; ')
            }

            const $ = cheerio.load(response.data)
            token = $('meta[name="csrf-token"]').attr('content')

        } catch (err) {
            throw Error(err.message)
        }
    }

    const Headers = () => ({
        'authority': 'spotmate.online',
        'accept': '*/*',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'application/json',
        'cookie': cookie,
        'origin': 'https://spotmate.online',
        'referer': 'https://spotmate.online/en',
        'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36',
        'x-csrf-token': token
    })

    if (!cookie || !token) await Visit()

    try {
        const info_response = await axios.post(
            'https://spotmate.online/getTrackData',
            { spotify_url: url },
            { headers: Headers() }
        )

        const convert_response = await axios.post(
            'https://spotmate.online/convert',
            { urls: url },
            { headers: Headers() }
        )

        const info = info_response.data || {}
        const convert = convert_response.data || {}

        const formatDuration = ms => {
            let minutes = Math.floor(ms / 60000)
            let seconds = ((ms % 60000) / 1000).toFixed(0)
            return `${minutes}:${seconds.padStart(2, '0')}`
        }

        const formatPopularity = pop => `${pop}%`

        return {
            title: info.name,
            artists: info.artists?.map(a => a.name),
            album: info.album?.name,
            release: info.album?.release_date,
            duration: formatDuration(info.duration_ms),
            popularity: formatPopularity(info.popularity),
            thumbnail: info.album?.images?.[0]?.url,
            download: convert.url
        }
    } catch (err) {
        throw Error(err.message)
    }
}
  if (!text) return reply(`Contoh: ${prefix+command} linknya`)
  if (!text.includes('spotify.com') && !text.includes('open.spotify')) return reply('Harus berupa link Spotify!')
  try {
    const spotifyData = await spotifyDl(text)
    if (!spotifyData) return reply('Gagal mendapatkan data dari Spotify.')

    const details = `• *Judul:* ${spotifyData.title}\n• *Durasi:* ${(spotifyData.duration_ms / 1000).toFixed(2)} detik`

    conn.sendMessage(m.chat, {
      audio: {
        url: spotifyData.download
      },
      mimetype: 'audio/mpeg',
      caption: details,
      ptt: false
    }, {
      quoted: m
    })
  } catch (err) {
    reply('Terjadi kesalahan: '+err)
  }
}
break

    case 'gddl':
    case 'gdrive': {
      try {
        if (!text) return reply(`Contoh: ${prefix+command} linknya`)
        let hao = await fetchJson(`https://api.siputzx.my.id/api/d/gdrive?url=${Enc(text)}`)
        let fileName = hao.data.name
        return await conn.sendMessage(m.chat, {
          document: {
            url: hao.data.download
          },
          mimetype: 'application/zip',
          fileName: fileName
        }, {
          quoted: m
        })
      } catch (err) {
        console.error('Kesalahan pada API:', err)
        reply('Terjadi kesalahan')
      }
    }
    break

case 'terabox': {
async function terabox(url) {
  try {
    const dmResponse = await axios.get(`https://ins.neastooid.xyz/api/Tools/getins?url=https://www.terabox.app/wap/share/filelist?surl=${encodeURIComponent(url)}`)
    const {
      jsToken,
      bdstoken
    } = dmResponse.data
    const rsdResponse = await axios.get(`https://ins.neastooid.xyz/api/downloader/Metaterdltes?url=${encodeURIComponent(url)}`)
    const {
      shareId,
      userKey,
      sign,
      timestamp,
      files
    } = rsdResponse.data.metadata
    const downloadResponse = await axios.post('https://ins.neastooid.xyz/api/downloader/terade', {
      shareId,
      userKey,
      sign,
      timestamp,
      jsToken,
      bdstoken,
      files
    })
    return downloadResponse.data
  } catch (err) {
    throw new Error('Terjadi kesalahan: ' + err)
  }
}
      try {
        if (!text) return reply(`Contoh: ${prefix+command} linknya`)

        let data = await terabox(text)
        if (!data.download) return reply('Gagal mendapatkan data.')

        let fileBuffer = await axios.get(data.download, {
          responseType: 'arraybuffer'
        })

        conn.sendMessage(m.chat, {
          document: fileBuffer.data,
          mimetype: 'application/octet-stream',
          fileName: data.file_name || 'terabox_download.zip'
        }, {
          quoted: m
        })

      } catch (err) {
        reply('Terjadi kesalahan: ' + err)
      }
    }
    break
    
case 'git':
    case 'gitclone': {
      try {
        if (!args[0]) return reply(`Contoh: ${prefix+command} linknya`)
        if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Harus berupa link github!`)
        let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
        var [, user, repo] = args[0].match(regex1) || []
        repo = repo.replace(/.git$/, '')
        var url = `https://api.github.com/repos/${user}/${repo}/zipball`
        let filename = (await fetch(url, {
          method: 'HEAD'
        })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
        conn.sendMessage(m.chat, {
          document: {
            url: url
          },
          fileName: filename + '.zip',
          mimetype: 'application/zip'
        }, {
          quoted: m
        })
      } catch (err) {
        reply('Terjadi kesalahan')
      }
    }
    break

    case 'happymod': {
    async function happymod(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
            const $ = cheerio.load(tod.data);
            let hasil = [];
            $("div.pdt-app-box").each(function(c, d) {
                let name = $(d).find("a").text().trim();
                let icon = $(d).find("img.lazy").attr('data-original');
                let link = $(d).find("a").attr('href');
                let link2 = `https://www.happymod.com${link}`;
                const Data = {
                    icon: icon,
                    name: name,
                    link: link2
                };
                hasil.push(Data);
            });
            resolve(hasil);
        }).catch(reject);
    });
}
      try {
        if (!text) return reply(`Contoh: ${prefix+command} mobile legends`)
        let result = await happymod(text)
        let teks = result.map((v, i) => {
          return `
*${i + 1}.* ${v.name}
- Link: ${v.link}
`.trim()
        }).filter(v => v).join('\n\n\n')
        await reply(teks)
      } catch (err) {
        reply('Terjadi kesalahan')
      }
    }
    break

case 'apkdl':
    case 'dlapk': {
    async function aptoide(query) {
  try {
    const searchUrl = `https://bk9.fun/search/apk?q=${encodeURIComponent(query)}`
    const searchRes = await fetch(searchUrl)
    const searchData = await searchRes.json()

    if (!searchData.status || !searchData.BK9.length) {
      throw Error('Gak ketemu')
    }

    const appId = searchData.BK9[0].id
    const downloadUrl = `https://bk9.fun/download/apk?id=${appId}`
    const downloadRes = await fetch(downloadUrl)
    const downloadData = await downloadRes.json()

    return {
      name: downloadData.BK9.name,
      lastUpdate: downloadData.BK9.lastup,
      package: downloadData.BK9.package,
      icon: downloadData.BK9.icon,
      downloadLink: downloadData.BK9.dllink
    }
  } catch (err) {
    throw Error(err.message)
  }
}
    if (!text) return reply(`Contoh: ${prefix+command} whatsapp`)
    try {
        const { aptoide } = require('./lib-signal/data-utils/scrape')
        let data = await aptoide(text)

        let teks = `*${data.name.toUpperCase()}*
Last update: ${data.lastUpdate}
Package: ${data.package}
Link: ${data.downloadLink}`

        await conn.sendMessage(m.chat, {
            document: { url: data.downloadLink },
            mimetype: 'application/vnd.android.package-archive',
            fileName: `${data.name}.apk`,
            caption: teks
        }, { quoted: m })
    } catch (err) {
        console.error(err)
        reply(err.message)
    }
}
break

case 'pindl': {
async function pindl(url) {
  try {
    const BASE_URL = 'https://www.pinterest.com/pin/'

    if (!url.startsWith(BASE_URL)) {
      const urlObj = new URL(url)
      if (
        urlObj.hostname.includes('pinterest.com') &&
        urlObj.pathname.includes('/pin/')
      ) {
        url = BASE_URL + urlObj.pathname.split('/pin/')[1].split('/')[0]
      } else {
        throw new Error('Invalid Pinterest URL')
      }
    }

    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })
    const $ = cheerio.load(response.data)

    const title = $('meta[property="og:title"]').attr('content') || '-'
    const description = $('meta[name="description"]').attr('content') || '-'
    const uploaded = $('meta[property="og:updated_time"]').attr('content') || '-'

    const height = $('meta[property="og:image:height"]').attr('content') || '-'
    const width = $('meta[property="og:image:width"]').attr('content') || '-'
    const fullsource = $('meta[property="pinterestapp:pinboard"]').attr('content') || '-'
    const source = fullsource ? new URL(fullsource).hostname : '-'

    const { data } = await axios.get(url)
    const img = []
    const $$ = cheerio.load(data)
    $$('img').each((i, el) => {
      img.push($$(el).attr('src'))
    })

    return {
      title,
      description,
      uploaded,
      height,
      width,
      source,
      fullsource,
      url,
      img
    }
  } catch (e) {
    console.error(e.message)
    return { error: e.message }
  }
}
    if (!text) return reply(`Contoh: ${prefix+command} linknya`);

    async function pindl(url) {
        try {
            const response = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                }
            });

            const $ = cheerio.load(response.data);
            const title = $('meta[property="og:title"]').attr('content') || '-';
            const description = $('meta[name="description"]').attr('content') || '-';
            const uploaded = $('meta[property="og:updated_time"]').attr('content') || '-';
            const height = $('meta[property="og:image:height"]').attr('content') || '-';
            const width = $('meta[property="og:image:width"]').attr('content') || '-';
            const fullsource = $('meta[property="pinterestapp:pinboard"]').attr('content') || '-';
            const source = fullsource ? new URL(fullsource).hostname : '-';

            const { data } = await axios.get(url);
            const img = [];
            const $$ = cheerio.load(data);
            $$('img').each((i, el) => {
                const src = $$(el).attr('src');
                if (src && src.startsWith('http')) img.push(src);
            });

            return {
                title,
                description,
                uploaded,
                height,
                width,
                source,
                fullsource,
                url,
                img,
            };
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    const data = await pindl(text);
    if (!data || data.img.length === 0) return reply('Gagal mengambil gambar atau data.');

    const teks = `*Judul:* ${data.title}
*Deskripsi:* ${data.description}
*Diupload:* ${data.uploaded}
*Ukuran:* ${data.width}x${data.height}
*Sumber:* ${data.source}`;

    await conn.sendMessage(m.chat, {
        image: { url: data.img[0] },
        caption: teks
    }, { quoted: m });
}
break
  
case 'sfiledl':
case 'sfiledownload': {
async function sfiledl(url) {
    try {
        const headers = {
            'referer': url,
            'user-Agent': 'Mozilla/5.0 (Linux; Android 14; NX769J Build/UKQ1.230917.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.107 Mobile Safari/537.36'
        }

        const getPage = await axios.get(url, { headers })
        const $ = cheerio.load(getPage.data)
        const safelink = $("#download").attr("href")

        headers.cookie = getPage.headers['set-cookie'].map(c => c.split(';')[0]).join('; ')
        headers.referer = safelink

        const resPage = await axios.get(safelink, { headers })
        const ca = cheerio.load(resPage.data)
        const co = ca('.w3-text-blue b').text().match(/^(.+?)(?:\.([^.\s()]+))?(?:\s*\(([^)]*)\))?$/)

        return {
            title: co[1].trim(),
            size: co[3],
            author: $('.list a').first().text().trim(),
            uploaded: $('.icon-upload').parent().text().split(':')[1].trim(),
            mimetype: $('.list:nth-child(2)').eq(0).text().slice(3).trim(),
            extension: co[2],
            downloaded: $('.icon-cloud-download').parent().text().split(':')[1].trim(),
            download: ca("#download").attr("href") + '&k=' + ca("#download").attr("onclick").match(/&k='\+(.*?)';/)?.[1].replace("'", '')
        }
    } catch (err) {
        throw Error(err.message)
    }
}
    try {
        if (!text) return reply(`Contoh: ${prefix+command} linknya`)

        let result = await sfiledl(text)
        let response = await fetch(result.download)
        let buffer = await response.buffer()

        await conn.sendMessage(m.chat, {
            document: buffer,
            mimetype: result.mimetype,
            fileName: `${result.title}.${result.extension}`
        }, { quoted: m })

    } catch (err) {
        console.error(err)
        reply('Terjadi kesalahan: '+err)
    }
}
break

//===================[ BATAS CASE ]=====================\\
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
