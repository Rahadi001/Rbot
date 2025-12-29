const fs = require("fs")
const path = require("path")

let handler = async (m, { conn, reply2, text, example }) => {
    if (!text) return reply2(example("namafile plugins nya"))
    if (!text.endsWith(".js")) return reply2("Nama file harus berformat .js")
    
    let pluginDir = "./System/plugins"
    let filePath = path.join(pluginDir, text.toLowerCase())
    
    // Check if the plugins directory exists
    if (!fs.existsSync(pluginDir)) {
        return reply2("Directory System/plugins tidak ditemukan!")
    }
    
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return reply2("File plugins tidak ditemukan!")
    }
    
    try {
        // Read the file content
        let res = await fs.readFileSync(filePath, 'utf8')
        
        // Check if file is empty
        if (!res || res.trim() === '') {
            return reply2("File plugins kosong!")
        }
        
        // Return the file content with proper formatting
        return reply2(`*Isi file ${text.toLowerCase()}:*\n\n\`\`\`javascript\n${res}\n\`\`\``)
    } catch (error) {
        return reply2(`Gagal membaca file: ${error.message}`)
    }
}

handler.command = ["getp", "gp", "getplugins", "getplugin"]
handler.owner = true

module.exports = handler