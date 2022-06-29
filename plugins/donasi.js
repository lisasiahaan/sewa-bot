let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [088291551330]
│ •  [088291551330]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler