/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '743648144832',
}

// Other
global.owner = ['62859193578139']
global.premium = ['62859193578139']
global.packname = '@ ALVYN-BOTZ'
global.author = 'ｖｙｎｕｔｚｘｘ２２'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '❑'
global.mess = {
    success: '✅ *Selesai*',
    admin: '🙅 *Fitur Khusus Admin Group!*',
    botAdmin: '🙏 *Bot Harus Menjadi Admin Terlebih Dahulu!*',
    owner: '🙅 *Fitur Khusus Owner Bot*',
    group: '*Maaf 🙏, Untuk saat ini bot hanya bisa digunakan didalam Grup 👥, Silahkan Join Grup Bot : https://chat.whatsapp.com/JSf6GXURju36sAo7Us0PLB*',
    private: '👤 *Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '❎ *Fitur Khusus Pengguna Nomor Bot*',
    wait: '⏳ *Loading...*',
    endLimit: '⚠️ *Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12*',
}
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
