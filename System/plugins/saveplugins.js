const fs = require("fs")
const path = require("path")

let handler = async (m, { conn, reply2, text, example }) => {
    if (!text) return reply2(example("namafile & reply code"))
    if (!m.quoted || !m.quoted.text) return reply2(example("namafile & reply code"))
    if (!text.endsWith(".js")) return reply2("Nama file harus berformat .js")
    
    let pluginDir = "./System/plugins"
    let filePath = path.join(pluginDir, text.toLowerCase())
    let kondisi = "mengedit"
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(pluginDir)) {
        fs.mkdirSync(pluginDir, { recursive: true })
    }
    
    // Check if file exists to determine action
    if (!fs.existsSync(filePath)) {
        kondisi = "membuat"
    }
    
    let teks = m.quoted.text
    
    try {
        // Save/edit the file
        await fs.writeFileSync(filePath, teks, 'utf8')
        
        // Clear from require cache if it was previously loaded
        try {
            const resolvedPath = require.resolve(path.resolve(filePath))
            if (require.cache[resolvedPath]) {
                delete require.cache[resolvedPath]
            }
        } catch (e) {
            // File might not have been required before, ignore error
        }
        
        return reply2(`Berhasil ${kondisi} file plugins *${text.toLowerCase()}* di directory System/plugins`)
    } catch (error) {
        return reply2(`Gagal ${kondisi} file: ${error.message}`)
    }
}

handler.command = ["sp", "svp", "saveplugins", "saveplugin", "editplugin", "editp"]
handler.owner = true

module.exports = handler