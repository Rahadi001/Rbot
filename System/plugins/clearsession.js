const fs = require("fs")

let handler = async (m, { reply2 }) => {
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
reply2(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session file`)
}

handler.command = ["boost", "clearsession", "clsesi", "clearsesi"]
handler.owner = true

module.exports = handler