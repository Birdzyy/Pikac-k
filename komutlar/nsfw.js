const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000) //komutu alıp asıl botunuza atabilirsiniz
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()
  
.setColor("RANDOM")
.setTitle("**Kendy**")
.setThumbnail("https://cdn.discordapp.com/attachments/779099271441809420/780001661166813204/gif_lencor.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/f9EdEJgNs5)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=908373544596029511&permissions=8&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **k!yardım**

**• Komutlar**
> [k!sex](https://discord.gg/qzHTkhjQgT) → sex gifi atar.
> [k!twork](https://discord.gg/qzHTkhjQgT) → twork gifi atar.
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['nfsw','nsfw','NFSW'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'NSFW', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-NSFW'
};