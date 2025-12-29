const fs = require("fs")
const path = require("path")

let handler = async (m, { conn, text, reply2, example }) => {
    if (!text) return reply2(example("namafile plugins"))
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
        // Delete the file
        await fs.unlinkSync(filePath)
        
        // Clear from require cache if it was loaded
        const resolvedPath = require.resolve(path.resolve(filePath))
        if (require.cache[resolvedPath]) {
            delete require.cache[resolvedPath]
        }
        
        return reply2(`Berhasil menghapus file plugins *${text.toLowerCase()}* dari directory System/plugins`)
    } catch (error) {
        return reply2(`Gagal menghapus file: ${error.message}`)
    }
}

handler.command = ["delplugins", "delplugin", "delp", "delplug"]
handler.owner = true

module.exports = handler