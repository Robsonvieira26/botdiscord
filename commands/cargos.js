
module.exports = {
  name: 'cargos',
  description: "Sets up a reaction role message!",
 async  execute(message, args, Discord, client, channel) {
  //1p
  const iccRole = message.guild.roles.cache.find(role => role.name === "ICC");
  const c1Role = message.guild.roles.cache.find(role => role.name === "Cálculo I");
  const gaalRole = message.guild.roles.cache.find(role => role.name === "GAAL");
  const logicaRole = message.guild.roles.cache.find(role => role.name === "Lógica");
  const ppRole = message.guild.roles.cache.find(role => role.name === "Programação Procedimental");
  const empRole = message.guild.roles.cache.find(role => role.name === "Empreendedorismo");
  //2p
  const pciRole = message.guild.roles.cache.find(role => role.name === "PCI");
  const c2Role = message.guild.roles.cache.find(role => role.name === "Cálculo II");
  const mccRole = message.guild.roles.cache.find(role => role.name === "MCC");
  const aed1Role = message.guild.roles.cache.find(role => role.name === "AED I");
  const plRole = message.guild.roles.cache.find(role => role.name === "Prolog");
  const sdRole = message.guild.roles.cache.find(role => role.name === "SD");
  //3p
  const pfRole = message.guild.roles.cache.find(role => role.name === "Programação Funcional");
  const aed2Role = message.guild.roles.cache.find(role => role.name === "AED II");
  const poo1Role = message.guild.roles.cache.find(role => role.name === "POO I");
  const aoc1Role = message.guild.roles.cache.find(role => role.name === "AOC I");
  const estRole = message.guild.roles.cache.find(role => role.name === "Estatística");
  const c3Role = message.guild.roles.cache.find(role => role.name === "Cálculo III");
//4p
const grafosRole = message.guild.roles.cache.find(role => role.name === "Grafos");
      const sbdRole = message.guild.roles.cache.find(role => role.name === "SBD");
      const automatosRole = message.guild.roles.cache.find(role=> role.name === "Autômatos");
      const aoc2Role = message.guild.roles.cache.find(role=> role.name === "AOC 2");
      const soRole = message.guild.roles.cache.find(role=> role.name === "Sistemas Operacionais");
      const estCompRole = message.guild.roles.cache.find(role=> role.name === "Estátistica Comp");

//5p
const ccoRole = message.guild.roles.cache.find(role => role.name === "CCO");
const aaRole = message.guild.roles.cache.find(role => role.name === "Análise de Algoritmos");
const gbdRole = message.guild.roles.cache.find(role=> role.name === "GBD");
const mdsRole = message.guild.roles.cache.find(role=> role.name === "Modelagem de Software");
const poo2Role = message.guild.roles.cache.find(role=> role.name === "POO II");
const arcRole = message.guild.roles.cache.find(role=> role.name === "Arq. Redes de Comp.");


//6p
const gestaoRole = message.guild.roles.cache.find(role => role.name === "Gestão Empresarial");
      const tcRole = message.guild.roles.cache.find(role => role.name === "Teoria da Comp.");
      const iaRole = message.guild.roles.cache.find(role=> role.name === "Inteligência Artificial");
      const engSofRole = message.guild.roles.cache.find(role=> role.name === "Engenharia de Software");
      const msRole = message.guild.roles.cache.find(role=> role.name === "Modelagem e Simulação");
      const arTcpRole = message.guild.roles.cache.find(role=> role.name === "Arquitetura TCP/IP");

//7p
const grad1Role = message.guild.roles.cache.find(role => role.name === "Graduação I");
      const compiRole = message.guild.roles.cache.find(role => role.name === "Const. Compiladores");
      const icRole = message.guild.roles.cache.find(role=> role.name === "Inteligência Computacional");
      const sdistRole = message.guild.roles.cache.find(role=> role.name === "Sistemas Distribuídos");
     

//8p
const dirlegRole = message.guild.roles.cache.find(role => role.name === "Direito e Legislação");
      const grad2Role = message.guild.roles.cache.find(role => role.name === "Graduação II");
      const sisInfRole = message.guild.roles.cache.find(role=> role.name === "Segurança da Informação");
      const ppiRole = message.guild.roles.cache.find(role=> role.name === "Programação Web");

//hobies
const otakuRole = message.guild.roles.cache.find(role => role.name === "Otaku");
      const mineRole = message.guild.roles.cache.find(role => role.name === "Minecrafter");
      const trampoRole = message.guild.roles.cache.find(role=> role.name === "Buscando Trampo");
      const noticiasRole = message.guild.roles.cache.find(role=> role.name === "Noticias");





  const iccEmoji = '0️⃣';
  const c1Emoji = '1️⃣';
  const gaalEmoji = '2️⃣';
  const logicaEmoji = '3️⃣';
  const ppEmoji = '4️⃣';
  const empEmoji = '5️⃣';
  //2p
  const pciEmoji = '🔘';
  const c2Emoji = '🔴';
  const mccEmoji = '🟠';
  const aedEmoji = '🟡';
  const plEmoji = '🟢';
  const sdEmoji = '🔵';
  //3p
  const pfEmoji = '🟥';
  const aed2Emoji = '🟧';
  const poo1Emoji = '🟪';
  const aoc1Emoji = '🟦';
  const estEmoji = '🟨';
  const c3Emoji = '🟩';
  //4p
  const grafosEmoji = '📔';
      const sbdEmoji = '📒';
      const automatosEmoji = '📕';
      const aoc2Emoji ='📗';
      const soEmoji ='📘';
      const estCompEmoji ='📙';

//5p
const ccoEmoji = '🇦';
      const aaEmoji = '🇧';
      const gbdEmoji = '🇨';
      const mdsEmoji ='🇩';
      const poo2Emoji ='🇪';
      const arcEmoji ='🇫';
//6p
const gestaoEmoji = '❤️';
      const tcEmoji = '🧡';
      const iaEmoji = '💛';
      const engSofEmoji ='💚';
      const msEmoji ='💙';
      const arTcpEmoji ='💜';
//7p

const grad1Emoji = '🖤';
const compiEmoji = '🤍';
const icEmoji = '🤎';
const sdistEmoji ='💔';

//8p

const dirlegEmoji = '🔶';
const grad2Emoji = '🔷';
const sisInfEmoji = '🔳';
const ppiEmoji ='🔲';
      

//hobies
const otakuEmoji = '🎌';
      const mineEmoji = '🌎';
      const trampoEmoji = '💻';
      const noticiasEmoji ='📰';


//1p
  let embed = new Discord.MessageEmbed()
    .setColor('#e42643')
    .setTitle('1º PERÍODO')
    .setDescription(
      `${iccEmoji} para Introdução à Ciência da Computação\n\n` +
      `${c1Emoji} para Cálculo Integral e Diferencial I\n\n` +
      `${gaalEmoji} para Geometria Analítica e Algebra Linear\n\n` +
      `${logicaEmoji} para Lógica para Computação\n\n` +
      `${ppEmoji} para Programação Procedimental\n\n` +
      `${empEmoji} para Empreendedorismo em Informática\n\n`
    );

  let messageEmbed = await message.channel.send(embed);
  messageEmbed.react(iccEmoji);
  messageEmbed.react(c1Emoji);
  messageEmbed.react(gaalEmoji);
  messageEmbed.react(logicaEmoji);
  messageEmbed.react(ppEmoji);
  messageEmbed.react(empEmoji);
//2p
  let embed2 = new Discord.MessageEmbed()
    .setColor('#99DDC8')
    .setTitle('2º PERÍODO')
    .setDescription(
      `${pciEmoji} para Profissão em Computação e Informática\n\n` +
      `${c2Emoji} para Cálculo Integral e Diferencial II\n\n` +
      `${mccEmoji} para Matemática para Ciência da Computação\n\n` +
      `${aedEmoji} para Algoritmos e Estruturas de Dados I\n\n` +
      `${plEmoji} para Programação Lógica\n\n` +
      `${sdEmoji} para Sistemas Digitais\n\n`
    );

  let messageEmbed2 = await message.channel.send(embed2);
  messageEmbed2.react(pciEmoji);
  messageEmbed2.react(c2Emoji);
  messageEmbed2.react(mccEmoji);
  messageEmbed2.react(aedEmoji);
  messageEmbed2.react(plEmoji);
  messageEmbed2.react(sdEmoji);
//3p
let embed3 = new Discord.MessageEmbed()
.setColor('#99DDC8')
.setTitle('3º PERÍODO')
.setDescription(
  `${pfEmoji} para Programação Funcional\n\n`+
   `${aed2Emoji} para Algoritmos e Estruturas de Dados II\n\n`+
   `${poo1Emoji} para Programação Orientada a Objetos I\n\n`+
   `${aoc1Emoji} para Arquitetura e Organização de Computadores I\n\n`+
   `${estEmoji} para Estatística\n\n`+
   `${c3Emoji}  para Cálculo Integral e Diferencial III\n\n`
        );

let messageEmbed3 = await message.channel.send(embed3);
messageEmbed3.react(pfEmoji);
messageEmbed3.react(aed2Emoji);
messageEmbed3.react(poo1Emoji);
messageEmbed3.react(aoc1Emoji);
messageEmbed3.react(estEmoji);
messageEmbed3.react(c3Emoji);

//4p
let embed4 = new Discord.MessageEmbed()
.setColor('#99DDC8')
.setTitle('4º PERÍODO')
.setDescription(
  `${grafosEmoji} para Teoria dos Grafos\n\n`+
   `${sbdEmoji} para Sistemas de Banco de Dados\n\n`+
   `${automatosEmoji} para Linguagens Formais e Autômatos\n\n`+
   `${aoc2Emoji} para Arquitetura e Organização de Computadores II\n\n`+
   `${soEmoji} para Sistemas Operacionais\n\n`+
   `${estCompEmoji}  para Estatística Computacional\n\n`
        );

let messageEmbed4 = await message.channel.send(embed4);
messageEmbed4.react(grafosEmoji);
messageEmbed4.react(sbdEmoji);
messageEmbed4.react(automatosEmoji);
messageEmbed4.react(aoc2Emoji);
messageEmbed4.react(soEmoji);
messageEmbed4.react(estCompEmoji);

//5p
let embed5 = new Discord.MessageEmbed()
          .setColor('#99DDC8')
          .setTitle('5º PERÍODO')
          .setDescription(
            `${ccoEmoji} para Computação Científica e Otimização\n\n`+
             `${aaEmoji} para Análise de Algoritmos\n\n`+
             `${gbdEmoji} para Gerenciamento de Banco de Dados\n\n`+
             `${mdsEmoji} para Modelagem de Software\n\n`+
             `${poo2Emoji} para Programação Orientada a Objetos II\n\n`+
             `${arcEmoji} para Arquitetura de Redes de Computadores\n\n`
                  );

      let messageEmbed5 = await message.channel.send(embed5);
      messageEmbed5.react(ccoEmoji);
      messageEmbed5.react(aaEmoji);
      messageEmbed5.react(gbdEmoji);
      messageEmbed5.react(mdsEmoji);
      messageEmbed5.react(poo2Emoji);
      messageEmbed5.react(arcEmoji);
//6p
let embed6 = new Discord.MessageEmbed()
          .setColor('#99DDC8')
          .setTitle('6º PERÍODO')
          .setDescription(
            `${gestaoEmoji} para Gestão Empresarial\n\n`+
             `${tcEmoji} para Teoria da Computação\n\n`+
             `${iaEmoji} para Inteligência Artificial\n\n`+
             `${engSofEmoji} para Engenharia de Software\n\n`+
             `${msEmoji} para Modelagem e Simulação\n\n`+
             `${arTcpEmoji} para Arquitetura de Redes TCP/IP\n\n`
                  );

      let messageEmbed6 = await message.channel.send(embed6);
      messageEmbed6.react(gestaoEmoji);
      messageEmbed6.react(tcEmoji);
      messageEmbed6.react(iaEmoji);
      messageEmbed6.react(engSofEmoji);
      messageEmbed6.react(msEmoji);
      messageEmbed6.react(arTcpEmoji);
//7p
let embed7 = new Discord.MessageEmbed()
.setColor('#99DDC8')
.setTitle('7º PERÍODO')
.setDescription(
  `${grad1Emoji} para Projeto de Graduação I\n\n`+
   `${compiEmoji} para Construção de Compiladores\n\n`+
   `${icEmoji} para Inteligência Computacional\n\n`+
   `${sdistEmoji} para Sistemas Distribuídos\n\n`
        );

let messageEmbed7 = await message.channel.send(embed7);
messageEmbed7.react(grad1Emoji);
messageEmbed7.react(compiEmoji);
messageEmbed7.react(icEmoji);
messageEmbed7.react(sdistEmoji);


//8p
 
let embed8 = new Discord.MessageEmbed()
.setColor('#99DDC8')
.setTitle('8º PERÍODO')
.setDescription(
  `${dirlegEmoji} para Direito e Legislação\n\n`+
   `${grad2Emoji} para Projeto de Graduação II\n\n`+
   `${sisInfEmoji} para Segurança na Informação\n\n`+
   `${ppiEmoji} para Programação para Internet\n\n`
        );

let messageEmbed8 = await message.channel.send(embed8);
messageEmbed8.react(dirlegEmoji);
messageEmbed8.react(grad2Emoji);
messageEmbed8.react(sisInfEmoji);
messageEmbed8.react(ppiEmoji);


//hobies
let embedOUTROS = new Discord.MessageEmbed()
          .setColor('#e42643')
          .setTitle('OUTROS')
          .setDescription(
            `${otakuEmoji} para Mangás, Novels e Animes\n\n ${mineEmoji} para Minecraft\n\n ${trampoEmoji} para Buscando Trampo\n\n ${noticiasEmoji} para Noticias`//${reactEmojis[2]} para Buscando Trampo\n\n  ${reactEmojis[3]}para Noticias
                  );

      let messageEmbedOutros = await message.channel.send(embedOUTROS);
      messageEmbedOutros.react(otakuEmoji);
      messageEmbedOutros.react(mineEmoji);
      messageEmbedOutros.react(trampoEmoji);
      messageEmbedOutros.react(noticiasEmoji);

  client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial)
      await reaction.message.fetch();
    if (reaction.partial)
      await reaction.fetch();
    if (user.bot)
      return;
    if (!reaction.message.guild)
      return;

    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === iccEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(iccRole);
      }
      if (reaction.emoji.name === c1Emoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(c1Role);
      }
      if (reaction.emoji.name === gaalEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(gaalRole);
      }
      if (reaction.emoji.name === logicaEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(logicaRole);
      }
      if (reaction.emoji.name === logicaEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(ppRole);
      }
      if (reaction.emoji.name === logicaEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(empRole);
      } 
      //2p
      if (reaction.emoji.name === pciEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(pciRole);
      }
      if (reaction.emoji.name === c2Emoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(c2Role);
      }
      if (reaction.emoji.name === mccEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(mccRole);
      }
      if (reaction.emoji.name === aedEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(aed1Role);
      }
      if (reaction.emoji.name === plEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(plRole);
      }
      if (reaction.emoji.name === sdEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(sdRole);
      }
      //3p
      if (reaction.emoji.name === pfEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(pfRole);
    }
    if (reaction.emoji.name === aed2Emoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.add(aed2Role);
    }
    if (reaction.emoji.name === poo1Emoji) {
      await reaction.message.guild.members.cache.get(user.id).roles.add(poo1Role);
  }
  if (reaction.emoji.name === aoc1Emoji) {
    await reaction.message.guild.members.cache.get(user.id).roles.add(aoc1Role);
}
if (reaction.emoji.name === estEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(estRole);
}
if (reaction.emoji.name === c3Emoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(c3Role);
}

//4p
if (reaction.emoji.name === grafosEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(grafosRole);
}
if (reaction.emoji.name === sbdEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(sbdRole);
}
if (reaction.emoji.name === automatosEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(automatosRole);
}
if (reaction.emoji.name === aoc2Emoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(aoc2Role);
}
if (reaction.emoji.name === soEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(soRole);
}
if (reaction.emoji.name === estCompEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(estCompRole);
}
//5p
if (reaction.emoji.name === ccoEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(ccoRole);
}
if (reaction.emoji.name === aaEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(aaRole);
}
if (reaction.emoji.name === gbdEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(gbdRole);
}
if (reaction.emoji.name === mdsEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(mdsRole);
}
if (reaction.emoji.name === poo2Emoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(poo2Role);
}
if (reaction.emoji.name === arcEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(arcRole);
}
//6p
if (reaction.emoji.name === gestaoEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(gestaoRole);
}
if (reaction.emoji.name === tcEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(tcRole);
}
if (reaction.emoji.name === iaEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(iaRole);
}
if (reaction.emoji.name === engSofEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(engSofRole);
}
if (reaction.emoji.name === msEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(msRole);
}
if (reaction.emoji.name === arTcpEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(arTcpRole);
}
//7p
if (reaction.emoji.name === grad1Emoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(grad1Role);
}
if (reaction.emoji.name === compiEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(compiRole);
}
if (reaction.emoji.name === icEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(icRole);
}
if (reaction.emoji.name === sdistEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(sdistRole);
}

//8p
if (reaction.emoji.name === dirlegEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(dirlegRole);
}
if (reaction.emoji.name === grad2Emoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(grad2Role);
}
if (reaction.emoji.name === sisInfEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(sisInfRole);
}
if (reaction.emoji.name === ppiEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(ppiRole);
}
//hobies
if (reaction.emoji.name === otakuEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(otakuRole);
}
if (reaction.emoji.name === mineEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.add(mineRole);
}
if (reaction.emoji.name === trampoEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(trampoRole);
}
if (reaction.emoji.name === noticiasEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.add(noticiasRole);
}
    } else {
      return;
    }

  });

  client.on('messageReactionRemove', async (reaction, user) => {

    if (reaction.message.partial)
      await reaction.message.fetch();
    if (reaction.partial)
      await reaction.fetch();
    if (user.bot)
      return;
    if (!reaction.message.guild)
      return;


    if (reaction.message.channel.id == channel) {
      if (reaction.emoji.name === iccEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(iccRole);
      }
      if (reaction.emoji.name === c1Emoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(c1Role);
      }
      if (reaction.emoji.name === gaalEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(gaalRole);
      }
      if (reaction.emoji.name === logicaEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(logicaRole);
      }
      if (reaction.emoji.name === logicaEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(ppRole);
      }
      if (reaction.emoji.name === logicaEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(empRole);
      } 
      //2p
      if (reaction.emoji.name === pciEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(pciRole);
      }
      if (reaction.emoji.name === c2Emoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(c2Role);
      }
      if (reaction.emoji.name === mccEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(mccRole);
      }
      if (reaction.emoji.name === aedEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(aed1Role);
      }
      if (reaction.emoji.name === plEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(plRole);
      }
      if (reaction.emoji.name === sdEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(sdRole);
      }
      //3p
      if (reaction.emoji.name === pfEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(pfRole);
    }
    if (reaction.emoji.name === aed2Emoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(aed2Role);
    }
    if (reaction.emoji.name === poo1Emoji) {
      await reaction.message.guild.members.cache.get(user.id).roles.remove(poo1Role);
  }
  if (reaction.emoji.name === aoc1Emoji) {
    await reaction.message.guild.members.cache.get(user.id).roles.remove(aoc1Role);
}
if (reaction.emoji.name === estEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(estRole);
}
if (reaction.emoji.name === c3Emoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(c3Role);
}
      //4p
      if (reaction.emoji.name === grafosEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(grafosRole);
    }
    if (reaction.emoji.name === sbdEmoji) {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(sbdRole);
    }
    if (reaction.emoji.name === automatosEmoji) {
      await reaction.message.guild.members.cache.get(user.id).roles.remove(automatosRole);
  }
  if (reaction.emoji.name === aoc2Emoji) {
    await reaction.message.guild.members.cache.get(user.id).roles.remove(aoc2Role);
}
if (reaction.emoji.name === soEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(soRole);
}
if (reaction.emoji.name === estCompEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(estCompRole);
}
//5p
if (reaction.emoji.name === ccoEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(ccoRole);
}
if (reaction.emoji.name === aaEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(aaRole);
}
if (reaction.emoji.name === gbdEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(gbdRole);
}
if (reaction.emoji.name === mdsEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(mdsRole);
}
if (reaction.emoji.name === poo2Emoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(poo2Role);
}
if (reaction.emoji.name === arcEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(arcRole);
}
//6p
if (reaction.emoji.name === gestaoEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(gestaoRole);
}
if (reaction.emoji.name === tcEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(tcRole);
}
if (reaction.emoji.name === iaEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(iaRole);
}
if (reaction.emoji.name === engSofEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(engSofRole);
}
if (reaction.emoji.name === msEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(msRole);
}
if (reaction.emoji.name === arTcpEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(arTcpRole);
}
//7p
if (reaction.emoji.name === grad1Emoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(grad1Role);
}
if (reaction.emoji.name === compiEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(compiRole);
}
if (reaction.emoji.name === icEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(icRole);
}
if (reaction.emoji.name === sdistEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(sdistRole);
}
//8p
if (reaction.emoji.name === dirlegEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(dirlegRole);
}
if (reaction.emoji.name === grad2Emoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(grad2Role);
}
if (reaction.emoji.name === sisInfEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(sisInfRole);
}
if (reaction.emoji.name === ppiEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(ppiRole);
}
//hobies
if (reaction.emoji.name === otakuEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(otakuRole);
}
if (reaction.emoji.name === mineEmoji) {
  await reaction.message.guild.members.cache.get(user.id).roles.remove(mineRole);
}
if (reaction.emoji.name === trampoEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(trampoRole);
}
if (reaction.emoji.name === noticiasEmoji) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(noticiasRole);
}
    } else {
      return;
    }
  });
}   
}