const fs = require("fs")
const path = require("path")

let handler = async (m, { conn, text, reply2, example }) => {
if (!text) return reply2(example("namafile & reply code"))
if (!m.quoted || !m.quoted.text) return reply2(example("namafile & reply code"))
if (!text.endsWith(".js")) return reply2("Nama file harus berformat .js")

let kondisi = "menambah"
let pluginDir = "./System/plugins"
let filePath = path.join(pluginDir, text)

// Create directory if it doesn't exist
if (!fs.existsSync(pluginDir)) {
    fs.mkdirSync(pluginDir, { recursive: true })
}

// Check if file already exists
if (fs.existsSync(filePath)) return reply2("Nama file plugins sudah terdaftar di dalam folder plugins!")

let teks = m.quoted.text

try {
    await fs.writeFileSync(filePath, teks)
    return reply2(`Berhasil ${kondisi} file plugins *${text}* ke directory System/plugins`)
} catch (error) {
    return reply2(`Gagal menambahkan file: ${error.message}`)
}
}

handler.command = ["addplugins", "addplugin", "addp", "addplug"]
handler.owner = true

module.exports = handler