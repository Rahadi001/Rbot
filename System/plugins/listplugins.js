const fs = require("fs")
const path = require('path');

let handler = async (m, { conn, reply2, example }) => {
let dir = fs.readdirSync('./System/plugins')
if (dir.length < 1) return reply2("Tidak ada file plugins")
let teks = "\n"
for (let e of dir) {
teks += `* ${e}\n`
}
reply2(teks)
}

handler.command = ["listplugin", "listplugins"]
handler.owner = true

module.exports = handler