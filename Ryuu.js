/*
sc baru niCh

base ori (Bot Dhani ?) 
recode (RyuukaBotz) 

tq to
Bot Dhani ? 
RyuukaBotz
Fbotz
Zeeone Ofc
Lexxy Official

sc nya jelek? baru belajar ngab*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const hx = require('hxz-api')
const { removeBackgroundFromImageFile } = require('remove.bg')
//══════════[ Lib ]══════════//
const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const { y2mateA, y2mateV } = require('./lib/y2mate')
//══════════[ Setting ]══════════//
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
monkey = setting.MonKey
fake = setting.Fake
fakeyoi = setting.Fake
Yt = setting.yt
zerokey = 'ZeroYT7'
const fakeimage = fs.readFileSync ('./media/Ryuu.jpg')
gambar = fs.readFileSync('./media/Ryuu.jpg')
tamnel = fs.readFileSync('./media/Ryuu.jpg')
const fakeRyuu = fs.readFileSync ('./media/thumb.jpg')
const dona = fs.readFileSync ('./media/donasi.jpg')
banChats = true
autobio = true
//══════════[ Data Base ]══════════//
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let public_mode = setting. public_mode
//══════════[ Module Export ]══════════//
		
module.exports = Ryuu = async (Ryuu, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Ryuu.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283891921787@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Ryuu.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Ryuu.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const status = `${public_mode ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const senderNumber = sender.split("@")[0]
        const hour_now = moment().format('HH:mm:ss')
		const conts = mek.key.fromMe ? Ryuu.user.jid : Ryuu.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Ryuu.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await Ryuu.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}

//══════════[ Mess Dll ]══════════//
mess = {
wait: 'Tunggu Sedang Di Proses',
eror: 'Terjadi Kesalahan',
success: 'Success️',
error: {
stick: 'Khusus Sticker',
Iv: 'Link Invalid!'
},
only: {
group: 'Fitur Hanya Bisa Di Gunakan Di Group',
owner: 'Khusu Owner Ngab',
admin: 'Khusus Admin Ngab',
Badmin: 'Kamu Harus Jadi Admin Kalo Mau Menggunakan FiturNya', 
}
}

		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Ryuu.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Ryuu.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Ryuu.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ryuu.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			Ryuu.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		function clockString(ms) {
        let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
        let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
        let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
        return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
        }
        if (autobio){
        if (autobio === false) return           
        let settingstatus = 0;
        if (new Date() * 1 - settingstatus > 1000) {
        let _uptime = process.uptime() * 1000;
        let uptimer = clockString(_uptime);
        await Ryuu.setStatus(`${botname} | ⏲️ ${uptimer}`).catch((_) => _);
        settingstatus = new Date() * 1;
        }}
//═════════[ VERIFY ]══════════//

//═════════[ Button ]══════════//

  const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Ryuu.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ryuu.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
       );
       };
       
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await Ryuu.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            Ryuu.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await Ryuu.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Ryuu.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Ryuu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//══════════[ Fake ]══════════//

(function(_0x1b8915,_0x57a6bf){const _0x412a16=_0x2b09,_0x122aa7=_0x1b8915();while(!![]){try{const _0x20e0de=-parseInt(_0x412a16(0x1ee))/0x1+parseInt(_0x412a16(0x1f2))/0x2+-parseInt(_0x412a16(0x1ed))/0x3+parseInt(_0x412a16(0x1ea))/0x4+parseInt(_0x412a16(0x1f3))/0x5*(-parseInt(_0x412a16(0x1e9))/0x6)+parseInt(_0x412a16(0x1e8))/0x7*(-parseInt(_0x412a16(0x1ef))/0x8)+parseInt(_0x412a16(0x1ec))/0x9*(parseInt(_0x412a16(0x1eb))/0xa);if(_0x20e0de===_0x57a6bf)break;else _0x122aa7['push'](_0x122aa7['shift']());}catch(_0x2c65a0){_0x122aa7['push'](_0x122aa7['shift']());}}}(_0x4ba3,0xccdb9));function _0x4ba3(){const _0x1a8e93=['1955ZVqozT','Jangan\x20Lupa\x20Subscribe','3934jqJVjq','3606qsWnmD','4756988iNrMmE','10CjixGd','12275199dSoNvX','1429758sTvhoJ','1337935mmuKuU','7968ZGgjmP','sendMessage','https://telegra.ph/file/64a3f4a3ea76ee25e201a.jpg','1790406UzTXHm'];_0x4ba3=function(){return _0x1a8e93;};return _0x4ba3();}function _0x2b09(_0x355e2e,_0x45886d){const _0x4ba36f=_0x4ba3();return _0x2b09=function(_0x2b099b,_0x2e8bfd){_0x2b099b=_0x2b099b-0x1e8;let _0x1f5df4=_0x4ba36f[_0x2b099b];return _0x1f5df4;},_0x2b09(_0x355e2e,_0x45886d);}const fakeyt=_0x476008=>{const _0x5afc32=_0x2b09;Ryuu[_0x5afc32(0x1f0)](from,_0x476008,text,{'contextInfo':{'text':'hi','forwardingScore':0x3b9aca00,'isForwarded':![],'sendEphemeral':![],'externalAdReply':{'title':''+tanggal,'body':_0x5afc32(0x1f4),'mediaType':'10','mediaUrl':''+Yt,'thumbnailUrl':_0x5afc32(0x1f1),'thumbnail':fakeimage,'sourceUrl':''+Yt},'mentionedJid':[sender]},'quoted':mek});};

        const fakestatus = (teks) => {
            Ryuu.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/Ryuu.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            Ryuu.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/Ryuu.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilTanggal}`, 
                            orderTitle: `${botname}`,
                            thumbnail: fakeRyuu, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
     
        
//══════════[ database ]══════════//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Ryuu.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Ryuu.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Ryuu.sendMessage(from, hasil, type, options).catch(e => {
	       Ryuu.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
            })
           })
          })
         })
        }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ryuu.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  

//══════════[ Grup ]══════════//
const hideTag = async function(from, text){
           let anu = await Ryuu.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           Ryuu.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Ryuu.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Ryuu.groupRemove(from, [kic]).catch((e) => { fakeyt(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Ryuu.groupRemove(from, [sender])
}     

//══════════[ Waktu Dll ]══════════//
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan) {
case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
                 case 2: bulan = "Maret"; break;
                          case 3: bulan = "April"; break;
                                   case 4: bulan = "Mei"; break;
                                            case 5: bulan = "Juni"; break;
                                                     case 6: bulan = "Juli"; break;
                                                              case 7: bulan = "Agustus"; break;
                                                                       case 8: bulan = "September"; break;
                                                                                case 9: bulan = "Oktober"; break;
                                                                                         case 10: bulan = "November"; break;
                                                                                                  case 11: bulan = "Desember"; break;
        }
switch(jams){
case 0: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 1: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 2: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 3: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 4: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break; 
case 5: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 6: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 7: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 8: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 9: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 10: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 11: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break; 
case 12: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 13: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 14: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 15: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 16: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 17: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 18: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
case 19: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 20: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 21: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 22: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
case 23: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
			}
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//══════════[ FITUR FITUR OY ]══════════//
      case 'menu': case 'help':
            listMsg = {
            buttonText: 'MENU DISINI 💻',
            footerText: fake,
            description: `*Hai Kak* @${sender.split('@')[0]} ${jams}
            
🕊♪ 𝙉𝙖𝙢𝙚𝙐𝙨𝙚𝙧 : @${sender.split('@')[0]}
🕊♪ 𝙊𝙬𝙣𝙚𝙧 / 𝙪𝙨𝙚𝙧 : ${isOwner ? 'Owner' : 'User'}
🕊♪ 𝙏𝙖𝙝𝙪𝙣 :${tahun}
🕊♪ 𝘽𝙪𝙡𝙖𝙣 : ${bulan}
🕊‍♪ 𝙏𝙖𝙣𝙜𝙜𝙖𝙡 : ${tanggal}
🕊♪ 𝙃𝙖𝙧𝙞 : ${hari}

𝗡𝗼𝘁𝗲 : 𝗝𝗶𝗸𝗮 𝗦𝗮𝗹𝗮𝗵 𝗦𝗮𝘁𝘂 𝗙𝗶𝘁𝘂𝗿 𝗔𝘁𝗮𝘂 𝗠𝗲𝗻𝘂 𝗘𝗿𝗿𝗼𝗿 𝗛𝘂𝗯𝘂𝗻𝗴𝗶 𝗢𝘄𝗻𝗲𝗿 𝗔𝗴𝗮𝗿 𝗗𝗶 𝗙𝗶𝘅 𝗩𝟮 𝗡𝗮𝗻𝘁𝗶

𝙈𝙚𝙣𝙪 𝘼𝙙𝙖 𝘿𝙞 𝘽𝙖𝙬𝙖𝙝 𝙄𝙣𝙞 𝙔𝙖 𝙆𝙖𝙠 <3`, 
            sections: [
            {
            "title": `Silahkan Dipilih Kak ${pushname} 🤗`,
            rows: [
            {
              "title": "ALL MENU [🏘️]",
              "rowId": `${prefix}allmenu`
            },
            {
              "title": "SHOP MENU [💎]",
              "rowId": `${prefix}storemenu`
            },
            {
              "title": "SOUND MENU [💿]",
              "rowId": `${prefix}soundmenu`
            },
            {
              "title": "VN MENU [🎙]",
              "rowId": `${prefix}vnmenu`
            },
            {
              "title": "NEKOPOI MENU [🎞]",
              "rowId": `${prefix}storemenu`
            },
            {
              "title": "GROUP MENU [👨]‍‍",
              "rowId": `${prefix}groupmenu`
            },
            {
              "title": "OWNER MENU [👤]",
              "rowId": `${prefix}ownermenu`
            },
            {
              "title": "‍NSFW MENU [🔞]",
              "rowId": `${prefix}nsfwmenu`
            },
            {
              "title": "FUN MENU [🚲]",
              "rowId": `${prefix}funmenu`
            },
            {
              "title": "DOWNLOAD MENU [💾]",
              "rowId": `${prefix}downloadmenu`
            },
            {
              "title": "DONASI [🎁]",
              "rowId": `${prefix}donasi`
            },
            {
              "title": "SOURCE CODE [💻]",
              "rowId": `${prefix}sc`
            },
            {
              "title": "BIG THANKS TO [🏆]",
              "rowId": `${prefix}tqto`
            },
            {
              "title": "RULES [📚]",
              "rowId": `${prefix}rules`
            }
            ]
            }],
            listType: 1
            }
            Ryuu.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
            break
case 'allmenu':
menu =
`*Haiii @${sender.split('@')[0]} ${jams}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

  [ 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 ]
🕊♪ 𝙉𝙖𝙢𝙚𝙐𝙨𝙚𝙧 : @${sender.split('@')[0]}
🕊♪ 𝙊𝙬𝙣𝙚𝙧 / 𝙪𝙨𝙚𝙧 : ${isOwner ? 'Owner' : 'User'}
🕊♪ 𝙏𝙖𝙝𝙪𝙣 :${tahun}
🕊♪ 𝘽𝙪𝙡𝙖𝙣 : ${bulan}
🕊♪ 𝙏𝙖𝙣𝙜𝙜𝙖𝙡 : ${tanggal}
🕊♪ 𝙃𝙖𝙧𝙞 : ${hari}
🕊♪ 𝙒𝙖𝙠𝙩𝙪 : ${jams}

  [ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
🕊♪ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
🕊♪ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
🕊♪ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
🕊♪ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
🕊♪ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
🕊♪ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨


「 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}owner
🕊♪ ${prefix}bc *Teks*
🕊♪ ${prefix}report
🕊♪ ${prefix}rules
🕊♪ ${prefix}ping / speed
🕊♪ ${prefix}donasi

「 𝗚𝗥𝗨𝗣 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}antilink *on / off*
🕊♪ ${prefix}antivirtex *on / off*
🕊♪ ${prefix}welcome *on / off*
🕊♪ ${prefix}group *buka / tutup*
🕊♪ ${prefix}promote *@tag / reply*
🕊♪ ${prefix}demote *@tag / reply*
🕊♪ ${prefix}add *628xx*
🕊♪ ${prefix}kick *@tag / reply*
🕊♪ ${prefix}setpp *reply / cap*
🕊♪ ${prefix}setdesc *teks*
🕊♪ ${prefix}setname *teks*
🕊♪ ${prefix}hidetag *teks*
🕊♪ ${prefix}linkgrup
🕊♪ ${prefix}infogrup
🕊♪ ${prefix}listonline
🕊♪ ${prefix}resetlinkgrup

「 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}ytmp3 *Link*
🕊♪ ${prefix}ytmp4 *Link*
🕊♪ ${prefix}playstore

「 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}sticker *reply / cap*
🕊♪ ${prefix}toimg *reply*

「 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 」
🕊♪ ${prefix}dmff [diamond ff]
🕊♪ ${prefix}dmml [diamond ml]
🕊♪ ${prefix}jadiowner
🕊♪ ${prefix}menu

「 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}suit
🕊♪ ${prefix}beban
🕊♪ ${prefix}babi
🕊♪ ${prefix}ganteng
🕊♪ ${prefix}cantik
🕊♪ ${prefix}jadian
🕊♪ ${prefix}kapankah
🕊♪ ${prefix}bisakah
🕊♪ ${prefix}cekwatak
🕊♪ ${prefix}cekcantik
🕊♪ ${prefix}cekganteng
🕊♪ ${prefix}rate
🕊♪ ${prefix}apakah
🕊♪ ${prefix}slot
🕊♪ ${prefix}dare
🕊♪ ${prefix}truth

「 𝗩𝗡 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}bass
🕊♪ ${prefix}slow
🕊♪ ${prefix}fast
🕊♪ ${prefix}robot

「 𝗡𝗘𝗞𝗢𝗣𝗢𝗜 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}nekopoi1
🕊♪ ${prefix}nekopoi2
🕊♪ ${prefix}nekopoi3
🕊♪ ${prefix}nekopoi4
🕊♪ ${prefix}nekopoi5
🕊♪ ${prefix}nekopoi6
🕊♪ ${prefix}nekopoi7
🕊♪ ${prefix}nekopoi8
🕊♪ ${prefix}nekopoi8
🕊♪ ${prefix}nekopoi9

「 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}neko
🕊♪ ${prefix}loli
🕊♪ ${prefix}nekoh
🕊♪ ${prefix}blowjob
🕊♪ ${prefix}megumin
🕊♪ ${prefix}awoo
🕊♪ ${prefix}trapnime
🕊♪ ${prefix}hentai
🕊♪ ${prefix}waifu
🕊♪ ${prefix}waifuh
🕊♪ ${prefix}shinobu

「 𝗦𝗢𝗨𝗡𝗗 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}sound1
🕊♪ ${prefix}sound2
🕊♪ ${prefix}sound3
🕊♪ ${prefix}sound4
🕊♪ ${prefix}sound5
🕊♪ ${prefix}sound6
🕊♪ ${prefix}sound7
🕊♪ ${prefix}sound8
🕊♪ ${prefix}sound9
🕊♪ ${prefix}sound10
🕊♪ ${prefix}sound11
🕊♪ ${prefix}sound12
🕊♪ ${prefix}sound13
🕊♪ ${prefix}sound14
🕊♪ ${prefix}sound15
🕊♪ ${prefix}sound16
🕊♪ ${prefix}sound17
🕊♪ ${prefix}sound18`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}rules`, buttonText: { displayText: 'Rules' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'donasi':
menu =
`*╭─❒ 「 Donasi 」 ──────*
    *⬡ *OVO*     : 081938473345 (AN Mxx Axxxx)
*│*⬡ *DANA*    : 085746061673 (AN Mxx Axxxx)
*│*⬡ *GOPAY*    : Minta Ke Raff/Owner
*└───────────────────*
Scan QR di atas bila pengguna Dana`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: dona, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
break
case 'nsfwmenu':
menu =
`*「 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 」*
🕊♪ ${prefix}neko
🕊♪ ${prefix}nekoh
🕊♪ ${prefix}blowjob
🕊♪ ${prefix}megumin
🕊♪ ${prefix}trapnime
🕊♪ ${prefix}waifu
🕊♪ ${prefix}waifuh
🕊♪ ${prefix}awoo
🕊♪ ${prefix}hentai`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'grupmenu':
menu =
`*Haiii @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

  [ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
🕊♪ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
🕊♪ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
🕊♪ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
🕊♪ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
🕊♪ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
🕊♪ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨

*「 𝗚𝗥𝗨𝗣 𝗠𝗘𝗡𝗨 」*
🕊♪ ${prefix}antilink *on / off*
🕊♪ ${prefix}antivirtex *on / off*
🕊♪ ${prefix}welcome *on / off*
🕊♪ ${prefix}group *buka / tutup*
🕊♪ ${prefix}promote *@tag / reply*
🕊♪ ${prefix}demote *@tag / reply*
🕊♪ ${prefix}add *628xx*
🕊♪ ${prefix}kick *@tag / reply*
🕊♪ ${prefix}setpp *reply / cap*
🕊♪ ${prefix}setdesc *teks*
🕊♪ ${prefix}setname *teks*
🕊♪ ${prefix}hidetag *teks*
🕊♪ ${prefix}linkgrup
🕊♪ ${prefix}infogrup
🕊♪ ${prefix}listonline
🕊♪ ${prefix}resetlinkgrup`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'downloadmenu':
menu =
`*Haiii @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

  [ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
🕊♪ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
🕊♪ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
🕊♪ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
🕊♪ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
🕊♪ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
🕊♪ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨

*「 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 」*
🕊♪ ${prefix}ytmp3 *Link*
🕊♪ ${prefix}ytmp4 *Link*`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ownermenu':
menu =
`*Haiii @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

  [ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
🕊♪ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
🕊♪ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
🕊♪ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
🕊♪ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
🕊♪ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
🕊♪ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨

「 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}owner
🕊♪ ${prefix}bc *Teks*
🕊♪ ${prefix}report
🕊♪ ${prefix}rules
🕊♪ ${prefix}ping / speed
🕊♪ ${prefix}donasi`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'storemenu':
menu =
`*Haiii @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

  [ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
🕊♪ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
🕊♪ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
🕊♪ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
🕊♪ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
🕊♪ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
🕊♪ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨

*「 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 」*
🕊♪ ${prefix}dmff [diamond ff]
🕊♪ ${prefix}dmml [diamond ml]
🕊♪ ${prefix}jasashare
🕊♪ ${prefix}jadiowner
🕊♪ ${prefix}menu`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'funmenu':
menu =
`*Haiii @${sender.split('@')[0]}*

𝙟𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙗𝙖𝙝𝙖𝙜𝙞𝙖🍵

  [ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
🕊♪ 𝙋𝙧𝙚𝙛𝙞𝙭 𝘽𝙤𝙩 : ⌜  *${prefix}*  ⌟
🕊♪ 𝙉𝙖𝙢𝙚𝘽𝙤𝙩 : ${botname}
🕊♪ 𝙉𝙖𝙢𝙚𝙊𝙬𝙣𝙚𝙧 : ${ownername}
🕊♪ 𝙒𝙖𝙠𝙩𝙪 : ${jams}
🕊♪ 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())}
🕊♪ 𝙇𝙞𝙗 : 𝘽𝙖𝙞𝙡𝙚𝙮𝙨

*「 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 」*
🕊♪ ${prefix}suit
🕊♪ ${prefix}beban
🕊♪ ${prefix}babi
🕊♪ ${prefix}ganteng
🕊♪ ${prefix}cantik
🕊♪ ${prefix}jadian
🕊♪ ${prefix}kapankah
🕊♪ ${prefix}bisakah
🕊♪ ${prefix}cekwatak
🕊♪ ${prefix}cekcantik
🕊♪ ${prefix}cekganteng
🕊♪ ${prefix}rate
🕊♪ ${prefix}apakah
🕊♪ ${prefix}slot
🕊♪ ${prefix}dare
🕊♪ ${prefix}truth`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nekopoimenu':
menu =
`「 𝗡𝗘𝗞𝗢𝗣𝗢𝗜 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}nekopoi1
🕊♪ ${prefix}nekopoi2
🕊♪ ${prefix}nekopoi3
🕊♪ ${prefix}nekopoi4
🕊♪ ${prefix}nekopoi5
🕊♪ ${prefix}nekopoi6
🕊♪ ${prefix}nekopoi7
🕊♪ ${prefix}nekopoi8
🕊♪ ${prefix}nekopoi8
🕊♪ ${prefix}nekopoi9`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'vnmenu':
menu =
`「 𝗩𝗡 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}bass
🕊♪ ${prefix}slow
🕊♪ ${prefix}fast
🕊♪ ${prefix}robot`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'soundmenu':
menu =
`「 𝗦𝗢𝗨𝗡𝗗 𝗠𝗘𝗡𝗨 」
🕊♪ ${prefix}sound1
🕊♪ ${prefix}sound2
🕊♪ ${prefix}sound3
🕊♪ ${prefix}sound4
🕊♪ ${prefix}sound5
🕊♪ ${prefix}sound6
🕊♪ ${prefix}sound7
🕊♪ ${prefix}sound8
🕊♪ ${prefix}sound9
🕊♪ ${prefix}sound10
🕊♪ ${prefix}sound11
🕊♪ ${prefix}sound12
🕊♪ ${prefix}sound13
🕊♪ ${prefix}sound14
🕊♪ ${prefix}sound15
🕊♪ ${prefix}sound16
🕊♪ ${prefix}sound17
🕊♪ ${prefix}sound18`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'rules':
menu =
`*RULES BAGI PENGGUNA BOT*  
➤ DiLarang Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.
➤ Call/VC Bot Auto Block.
➤ Jangan Call/VC Bot Kalau Tidak aktif.
➤ Bot tidak selalu aktif 24 jam, jadi tergantung kalau ownernya lagi ada waktu botnya juga on. 

𝙇𝙞𝙣𝙠 𝙂𝙧𝙤𝙪𝙥 : https://chat.whatsapp.com/KYFdPsjHKIr5ToVIqOAunE
`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'Allmenu💻' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tqto':
menu =
`𝗧𝗘𝗥𝗜𝗠𝗔 𝗞𝗔𝗦𝗜𝗛 𝗨𝗡𝗧𝗨𝗞

🕊♪ 𝗕𝗢𝗧 𝗗𝗛𝗔𝗡𝗜 ? 
🕊♪ 𝗥𝗬𝗨𝗨𝗞𝗔 𝗕𝗢𝗧𝗭
🕊♪ 𝗙𝗕𝗢𝗧𝗭
🕊♪ 𝗭𝗘𝗘𝗢𝗡𝗘𝗢𝗙𝗖
🕊♪ 𝗟𝗘𝗫𝗫𝗬`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
man = fs.readFileSync('./assets/viral.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ping':
          case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              fakestatus(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
              case 'report':
case 'lapor': 
					const laporan = body.slice(7)
					if (args.length > 300) return Ryuu.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					Ryuu.sendMessage(`${owner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
case 'dmff':
case 'diamondff':
menu =
`𝐏𝐑𝐈𝐂𝐄 𝐋𝐈𝐒𝐓 𝐃𝐈𝐀𝐌𝐎𝐍𝐃
       𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄

𝟭𝟬𝟬%  𝘼𝙈𝘼𝙉 𝘿𝘼𝙉 𝙏𝙀𝙍𝙋𝙀𝙍𝘾𝘼𝙔𝘼 𝙊𝙉𝙇𝙔 𝙄𝘿 + 𝙉𝙄𝘾𝙆𝙉𝘼𝙈𝙀
      🌷𝙈𝙄𝙉𝘼𝙏 𝙆𝙀𝙏𝙄𝙆 𝙊𝙒𝙉𝙀𝙍🌷

_*PRICE LIST FF*_
5      💎 822
20    💎 2,740
50    💎 6,576
70    💎 9,042
100  💎 13,152
120  💎 15,618
140  💎 18,084
150  💎 19,728
210  💎 27,126
250  💎 32,606
280  💎 36,168
355  💎 45,210
500  💎 64,116
720  💎 90,420
1000💎 126,588
1075💎 135,630
2000💎 246.6000
M.M     27,400
M.B     137,000

*PROSES 1-1 MENIT*
 _VIA ID + NICK NAME_
*KESALAHAN MENGISI ID BUKAN*
*TANGGUNG JAWAB ADMIN*

     
    🎫Member M = 28.000`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'Allmenu💻' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'dmml':
case 'diamondml':
menu =
`𝐏𝐑𝐈𝐂𝐄 𝐋𝐈𝐒𝐓 𝐃𝐈𝐀𝐌𝐎𝐍𝐃
   *MOBILE LEGENEDS*
*_PRICE LIST MLBB_*

86💎   Rp.19.950
172💎   Rp.39.999
257💎   Rp.59.850
344💎   Rp.79.800
429💎   Rp.99.750
514💎   Rp.119.700
600💎   Rp.139.650
706💎   Rp.159.600
792💎   Rp.179.550
878💎   Rp.199.500
963💎   Rp.219.450
1050💎  Rp.239.400
1135💎  Rp.259.350
1220💎  Rp.279.300
1306💎  Rp.299.250
1412💎  Rp.319.200
1669💎  Rp.379.050
1841💎  Rp.418.950
1926💎  Rp.438.900
2195💎  Rp.474.525
3073💎  Rp.674.025
3688💎  Rp.789.450
4394💎  Rp.949.050
5100💎  Rp.1.108.650
SL/TW            Rp.131.670
SL PLUS         Rp.299.250

*PROSES 5-20 MENIT MAX 3 JAM*
 _VIA ID (SERVER) + NICK NAME_
*KESALAHAN MENGISI ID BUKAN*
*TANGGUNG JAWAB ADMIN*

 
     
    🎫SL/TW = 122.000
    🎟️STARTJT B = 270.500
*Jika ingin memesan chat owner*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'Allmenu💻' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'jadiowner':
case 'jadibot':
menu =
`*${jams} @${sender.split('@')[0]}*

╭──「 *_JADI BOT + OWNER_* 」
│❏   RP : IDR 30.000 (30K)
╰────
╭─ [ FASILITAS ]
│❏  CUMA SCAN QR DOANG JADI                
│     BOT + OWNER
│❏  FITUR BOT NYA BANYAK
│❏  BANYAK FITUR LANGKA
╰────
╭─[ KEUNTUNGAN ]
│❏  BISA OPEN SEWA BOT
╰────
╭─[ *MINAT CHAT* ]
│❏  📮 KETIK OWNER
╰─── `
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'Allmenu💻' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'sewabot':
menu =
`*${jams} @${sender.split('@')[0]}*
𝗢 𝗣 𝗘 𝗡  𝗦 𝗘 𝗪 𝗔  𝗕 𝗢 𝗧

🕊♪ *1 Minggu : 5.000 ( 5K )*
🕊♪ *1 Bulan : 10.000 ( 10K )*
🕊♪ *Permanen : 15.000 ( 15K )*
🕊♪ *Join Murid Bot : 20.000 ( 20K )*`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'Allmenu💻' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
//══════════[ NEKOPOI MENU ]══════════//
case 'nekopoi1':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi2':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi3':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi4':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi5':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi6':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi7':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi8':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi9':
qute = fs.readFileSync('./media/Ryuu.jpg') 
Ryuu.sendMessage(from, qute, image, { quoted: ftrol, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
//══════════[ Fitur Nfsw ]══════════//
									case 'loli': case 'neko': 
              reply('Sabar Ya...')
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              let kk = await getBuffer(loli.url)
Ryuu.sendMessage(from, kk, image, {quoted: mek ,})
		break			
		case 'hentai':
              reply('Sabar Ya...')
              let hentai = await fetchJson(`https://akaneko-api.herokuapp.com/api/hentai`)
              let ht = await getBuffer(hentai.url)
Ryuu.sendMessage(from, ht, image, {quoted: mek ,})
		break
case  'awoo':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
Ryuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/Ryuu.jpg')})
break
case  'blowjob':
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
Ryuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/Ryuu.jpg')})
break
case  'megumin':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
Ryuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/Ryuu.jpg')})
break
case  'trapnime':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
Ryuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/Ryuu.jpg')})
break
case  'waifu':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
buffer = await getBuffer(anu.url)
Ryuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/Ryuu.jpg')})
break
case  'shinobu':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/shinobu`)
buffer = await getBuffer(anu.url)
Ryuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/Ryuu.jpg')})
break
case  'nekoh':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
Ryuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/Ryuu.jpg')})
break
case  'waifuh':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/waifu`)
buffer = await getBuffer(anu.url)
Ryuu.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./media/Ryuu.jpg')})
break
//══════════[ Fitur Sticker ]══════════//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
fakeyt('error')
})
.on('end', function () {
console.log('Finish')
Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
fakeyt(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
fakeyt(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Ryuu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
fakeyt(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'toimg':
if (!isQuotedSticker) return fakeyt('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakeyt('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Ryuu.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
case 'addcmd': 
			case 'setcmd':
			if (isQuotedSticker) {
			if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
			var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
			addCmd(kodenya, q)
			reply("Done")
			} else {
			reply('tag stickernya')
			}

			break
//══════════[ Fitur fun]══════════//
case 'suit':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'sc':
case 'infosc':
case 'info':
menu = 
`━➤ 「 𝙄𝙉𝙁𝙊 𝘿𝙀𝙑 」
✍️ 𝙎𝙘𝙧𝙞𝙥𝙩 𝙈𝙖𝙙𝙚 𝙞𝙣 𝘽𝙮 𝙍𝙮𝙪𝙪𝙠𝙖𝘽𝙤𝙩𝙯
🌟 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : 1.5
📈 𝙇𝙖𝙨𝙩 𝙐𝙥𝙙𝙖𝙩𝙚 : 1.0
📃 𝙇𝙞𝙣𝙠 𝙎𝙘 : https://www.mediafire.com/file/k68rofwe6464q85/RyuBotzV1.zip/file

📦 𝙂𝙧𝙤𝙪𝙥 :
https://𝙘𝙝𝙖𝙩.𝙬𝙝𝙖𝙩𝙨𝙖𝙥𝙥.𝙘𝙤𝙢/𝙆𝙔𝙁𝙙𝙋𝙨𝙟𝙃𝙆𝙄𝙧5𝙏𝙤𝙑𝙄𝙦𝙊𝘼𝙪𝙣𝙀

🌐 𝙔𝙤𝙪𝙩𝙪𝙗𝙚 :
https://youtube.com/c/RyuukaBotz

𝑺𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆 𝑭𝒐𝒓 𝑵𝒆𝒘 𝑼𝒑𝒅𝒂𝒕𝒆!`
teks =
`*『 ${botname} 』*
*${tampilTanggal}*`
Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back Menu' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
       case 'cekwatak':
              var namao = pushname
              var prfx = await Ryuu. getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await fakestatus(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              Ryuu.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
              case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Yang Paling Ganteng Adalah :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
              case 'cekbapak': //             
		    const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#Candabos', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Canda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk']
		    const tai = bapak[Math.floor(Math.random() * bapak.length)]
		    Ryuu.sendMessage(from, tai, text, { quoted: mek })
			break
		case 'cekemak': //             
		    const emak = ['Wah Mantap Lu Masih Punya Emak\nPasti Emaknya Nya Open Bo :v\nAwowkwokwwok\n#Candabos', 'Aowkwwo Disini Ada Piatu :v\nLu Piatu Bro? Awowkwowk\nSabar Bro Ga Punya Emak\n#Canda', 'Bjir Emak Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Piatu Aowkwowkw Ngakak :v', 'Jangan CekEmak Mulu Broo :v\nKasian Yang Piatu\nNtar Tersinggung Kan\nYahahaha Hayyuk']
		    const tahu = emak[Math.floor(Math.random() * emak.length)]
		    Ryuu.sendMessage(from, tahu, text, { quoted: mek })
			break
			case 'slot':
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
if (somtoyy  == '🍌 : 🍌 : 🍌') {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
} else if (somtoyy == '?? : 🍒 : 🍒') {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
} else if (somtoyy == '🔔 : ?? : 🔔') {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
} else if (somtoyy == '?? : 🍐 : 🍐') {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
} else if (somtoyy == '🍇 : 🍇 : 🍇') {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
} else {
  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
break
case 'truth':
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
Ryuu.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
break
case 'dare':
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
Ryuu.sendMessage(from, buff, image, { caption: '*Dare*\n\n'+ der, quoted: mek })
break
case 'darkjokes':
            if (!isGroup) return reply(mess.only.group)
           let data = fs.readFileSync('./lib/darkjokes.js');
	       jsonData = JSON.parse(data);
		   randIndex = Math.floor(Math.random() * jsonData.length);
		   randKey = jsonData[randIndex];
		   hasil = await getBuffer(randKey.result)
		   gbutsan = [{buttonId: `${prefix}darkjokes`, buttonText: {displayText: 'NEXT⏩'}, type: 1}]
           pto =await Ryuu.prepareMessage(from, hasil, image)    
           gbuttonan = {
           imageMessage: pto.message.imageMessage,
           contentText: `Gelap Yh`,
           footerText: 'Klik Next Untuk Gambar Selanjutnya☕',
           buttons: gbutsan,
           headerType: 4
           }
           await Ryuu.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
		   break		
		   case 'faktaunik':
									const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
									const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
									sendButMessage(from, `${ran_faktau}`, `${jams}`, [
									{
										buttonId: `${prefix}faktaunik`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);

									break
						case 'pantun':
									const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
									const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
									sendButMessage(from, `${ran_pantun}`, `${jams}`, [
									{
										buttonId: `${prefix}pantun`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
		
									break
									case 'bagaimanakah':
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					Ryuu.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					break
//══════════[ Fitur Sound  ]══════════//
      case 'sound1':
      menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound1.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound2.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound3.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound4.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound5.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound6.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound7.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound8.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound9.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound10.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound11.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound12.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound13.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound14.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound15.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound16.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound17.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
menu =`Tunggu Beberapa Detik Ya Kak..`
      teks =`Ryuuka <3`
      Ryuu.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'back menu' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
      man = fs.readFileSync('./assets/sound18.mp3');
Ryuu.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//══════════[ Fitur Download ]══════════//

case 'ytmp3':
            if (args.length < 1) return fakeyt('Link Nya Mana ?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            fakeyt(mess.wait)
            res = await y2mateA(teks).catch(e => {
            fakeyt('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP3 🎵*

*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP3_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
case 'ytmp4':
            if (args.length < 1) return fakeyt('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            fakeyt(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP4 🎥*

*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP4_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
case 'playstore':
            if(!c) return reply('*Mau Cari Aplikasi Apa?!?!? Bangsat kau..!!🤬*')
            let play = await hx.playstore(c)
            let store = '\n❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
            }
            reply(store)
            break
            case 'bass': 
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
										fs.unlinkSync(ran)
										})
										break
						case 'slowmo': case 'slow':
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											Ryuu.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}
									break
						case 'fast':
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
									break
						case 'robot':
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Ryuu.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Ryuu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
									break
//══════════[ Fitur Owner ]══════════//

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Ryuu.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
fakeyt(`_Tuh Kak Ownerku_`)
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Ryuu.chats.all()
             if (isMedia && !Ryuu.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ryuu).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ryuu
             bc100 = await Ryuu.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Ryuu.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Ryuu.sendMessage(_.jid, 
			{"contentText": `*「 𝐏𝐄𝐒𝐀𝐍 𝐒𝐈𝐀𝐑𝐀𝐍 𝐁𝐎𝐓 」*\n\n${body.slice(4)}`,
			"footerText": `${tampilTanggal}`,
			"buttons": [
			{"buttonId": `${prefix}allmenu`,
			"buttonText": {"displayText": "Allmenu💻"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             fakeyt('Suksess broadcast')
}
             break 
//══════════[ Fitur Grup ]══════════//

case 'welcome':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (args.length < 1) return fakeyt(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return fakeyt('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return fakeyt('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return fakeyt(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return fakeyt(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args[0] === 'buka') {
fakeyt(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Ryuu.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
fakeyt(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Ryuu.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
linkgc = await Ryuu.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Ryuu.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ryuu.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Ryuu.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ryuu.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Ryuu.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args.length < 1) return fakeyt('Yang mau di add siapa??')
if (args[0].startsWith('08')) return fakeyt('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Ryuu.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
fakeyt('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return fakeyt("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Ryuu.groupRemove(from, mentioned);
fakeyt(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Ryuu.groupRemove(from, [anu]);
fakeyt(mess.success);
} else {
Ryuu.groupRemove(from, mentioned);
fakeyt(mess.success);
}
break;
case 'tagall':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
Ryuu.groupUpdateSubject(from, `${body.slice(9)}`)
Ryuu.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
Ryuu.groupUpdateDescription(from, `${body.slice(9)}`)
Ryuu.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Ryuu.downloadMediaMessage(encmedia)
Ryuu.updateProfilePicture(from, media)
.then((res) => fakeyt(jsonformat(res)))
.catch((err) => fakeyt(jsonformat(err)))
} else {
fakeyt(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return fakeyt(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return fakeyt(mess.only.group)
try {
var pic = await Ryuu.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Ryuu.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Ryuu.query({json, expect200: true})
fakeyt('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return fakeyt(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Ryuu.chats.get(ido).presences), Ryuu.user.jid]
Ryuu.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
fakeyt(`${e}`)
}
break
//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
