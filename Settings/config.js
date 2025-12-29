//===================[ OWNER ]=====================\\
global.owner = [
  "6281248845231", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]
global.ownername = "IkyyKzy"
global.ownerNumber = "6281248845231"

//===================[ FUNCTION BOT ]=====================\\
global.botname = "MiaTwilight"
global.botver = "1.0.0"
global.idch = "120363400306866480@newsletter"
global.newsletterName = "ɪᴋʏʏᴋᴢʏ || ᴜᴘᴅᴀᴛᴇ"
        //Isi pake id channel kalian

//===================[ FUNCTION STICKER ]=====================\\
global.packname = "MiaTwilight"
global.author = "Sticker Creator"
global.wm = "Mia Bot - Md"

//===================[ MESS ]=====================\\
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
	owner: '_*Khusus Owner*_',
    premium: '_*Khusus Premium" Mau Prem? Chat Owner*_'
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})