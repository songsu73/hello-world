const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./token.json"); 
const request = require('request')

function myfunc(){
    return request(url,function(err,res,body){})
    
}

client.on('ready', () => {
    myfunc()
  console.log(`Logged in as ${client.user.tag}!`);
});

function endsWithStr(msg, str, content){
  if(msg.content.endsWith(str)){
    msg.channel.send(content);
  }
}
function includesStr(msg, str, content){
  if(msg.content.includes(str)){
    msg.channel.send(content);
  }
}
function myrequest(cyplayer){
   
}

client.on('message', msg => {
  if(msg.author.username == '숭의관 봇') return;
  else if(msg.author.username == '꿀벌') return;
  switch ( msg.content ) {
    case '테스트':
      msg.reply(
        myfunc()
        );
      break;
    
    default: ;
    
  }
  

});

client.login(token.token);