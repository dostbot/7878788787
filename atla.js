const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Oynatılan bir müziği atlayabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
const sarki = await client.player.skip(message.guild.id);
message.channel.send({embed: {color: FynxDogru, description: `<a:tik:734892939737694239>  | Müzik Atlandı:\n\`${sarki.name}\`` }})
};

module.exports.config = {
    name: "atla",
    aliases: ["geç"]
};
