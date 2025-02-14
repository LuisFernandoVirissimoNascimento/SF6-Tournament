// Sample data for news blocks
const newsData = [
    { title: "🔥 Ryu vs Ken: A Batalha Épica no Torneio de São Paulo", content: "Ryu derrota Ken em uma final eletrizante, conquistando o título do SF6 Masters SP." },
    { title: "🎉 Campeonato 'Hadouken Cup' Anunciado com Premiação Recorde!", content: "O torneio terá um prêmio de R$ 100 mil e transmissão ao vivo." },
    { title: "💥 Chun-Li Surpreende no 'Rio Fighters' com Combos Insanos!", content: "A jogadora brasileira 'ChunLícia' domina o campeonato com perfeição." },
    { title: "⚡ Nova DLC: Rashid Chega Voando com Novos Movimentos!", content: "A Capcom revela Rashid com habilidades aéreas impressionantes." },
    { title: "🏆 'Guile King Invitational' tem Final Polêmica com Desconexão!", content: "Os fãs reclamam após erro técnico na partida decisiva." },
    { title: "🔥 Torneio 'Ultra Instinct BR' Atrai Lendas do Street Fighter", content: "Jogadores internacionais confirmam presença no evento em Salvador." },
    { title: "🎮 Atualização Traz Nova Arena: 'Favela Showdown' com Visual Brasileiro!", content: "A nova arena homenageia o Brasil com música de funk carioca." },
    { title: "💪 Luke é Buffado e Deixa a Comunidade Furiosa!", content: "Novos ajustes tornam Luke uma máquina de destruir adversários." },
    { title: "🔥 Brasileiros Dominam Top 8 no 'Copa Street Fighter 6'", content: "Quatro jogadores brasileiros chegam às finais, mostrando a força da cena nacional." },
    { title: "👊 Cammy Mostra Que É a Rainha do Meta no 'FightFest Recife'", content: "Cammy domina com velocidade e precisão em todas as lutas." },
    { title: "💥 Evento 'SF6 All Stars' Terá Confronto de Times Inédito!", content: "Times de streamers enfrentarão profissionais em batalhas épicas." },
    { title: "🎊 Torneio Beneficente 'Hadouken do Bem' Arrecada R$ 50 Mil!", content: "Evento ao vivo une caridade e competição em prol de ONGs." },
    { title: "⚔️ Akuma Confirmado: Chega com Visual Sombrio e Golpes Devastadores!", content: "O trailer de Akuma deixa a comunidade ansiosa para testar o personagem." },
    { title: "🚀 'FightStreamers Cup' Bate Recorde de Audiência no Twitch!", content: "Mais de 200 mil pessoas assistem ao vivo o confronto entre influenciadores." },
    { title: "💥 Zangief Levanta a Galera no 'Brasília Brawlers' com Suplexes Insanos!", content: "A comunidade vibra com as jogadas do lutador russo." },
    { title: "🎉 Torneio Amador 'Noob Fighters' Revela Novos Talentos", content: "Competição aberta surpreende com jovens promessas do SF6." },
    { title: "⚡ 'Combo Breaker Brasil' Terá Show de Funk e Rap ao Vivo!", content: "Além das lutas, o evento promete muita música e diversão." },
    { title: "🔥 Jogadora Brasileira 'Shoryulinda' Surpreende no EVO!", content: "Ela elimina três campeões mundiais em uma campanha histórica." },
    { title: "👊 Clássico Confirmado: Blanka vs Ryu no 'Amazonas Fight Challenge'!", content: "O duelo Brasil vs Japão promete fortes emoções." },
    { title: "🚀 Capcom Promete Balanceamento: 'Adeus, Spammers de Hadouken!'", content: "Próximo patch trará mudanças no uso de projéteis." },
    { title: "💥 Primeiro Mod Brasileiro Traz Blanka com Camisa da Seleção", content: "A comunidade ama a skin temática e pede inclusão oficial." },
    { title: "🎉 Final do Torneio 'Sonic Boom Brasil' Tem Virada Épica!", content: "Um comeback histórico faz a plateia explodir em gritos." },
    { title: "⚡ 'Combo Breaker Brasil' Terá Show de Funk e Rap ao Vivo!", content: "Além das lutas, o evento promete muita música e diversão." },
    { title: "🔥 Jogadora Brasileira 'Shoryulinda' Surpreende no EVO!", content: "Ela elimina três campeões mundiais em uma campanha histórica." },
    { title: "👊 Clássico Confirmado: Blanka vs Ryu no 'Amazonas Fight Challenge'!", content: "O duelo Brasil vs Japão promete fortes emoções." },
    { title: "🚀 Capcom Promete Balanceamento: 'Adeus, Spammers de Hadouken!'", content: "Próximo patch trará mudanças no uso de projéteis." },
    { title: "💥 Primeiro Mod Brasileiro Traz Blanka com Camisa da Seleção", content: "A comunidade ama a skin temática e pede inclusão oficial." },
    { title: "🎉 Final do Torneio 'Sonic Boom Brasil' Tem Virada Épica!", content: "Um comeback histórico faz a plateia explodir em gritos." },
    { title: "⚡ 'Combo Breaker Brasil' Terá Show de Funk e Rap ao Vivo!", content: "Além das lutas, o evento promete muita música e diversão." },
    { title: "🔥 Jogadora Brasileira 'Shoryulinda' Surpreende no EVO!", content: "Ela elimina três campeões mundiais em uma campanha histórica." },
    { title: "👊 Clássico Confirmado: Blanka vs Ryu no 'Amazonas Fight Challenge'!", content: "O duelo Brasil vs Japão promete fortes emoções." },
    { title: "🚀 Capcom Promete Balanceamento: 'Adeus, Spammers de Hadouken!'", content: "Próximo patch trará mudanças no uso de projéteis." },
    { title: "💥 Primeiro Mod Brasileiro Traz Blanka com Camisa da Seleção", content: "A comunidade ama a skin temática e pede inclusão oficial." },
    { title: "🎉 Final do Torneio 'Sonic Boom Brasil' Tem Virada Épica!", content: "Um comeback histórico faz a plateia explodir em gritos." },
    { title: "⚡ 'Combo Breaker Brasil' Terá Show de Funk e Rap ao Vivo!", content: "Além das lutas, o evento promete muita música e diversão." },
    { title: "🔥 Jogadora Brasileira 'Shoryulinda' Surpreende no EVO!", content: "Ela elimina três campeões mundiais em uma campanha histórica." },
    { title: "👊 Clássico Confirmado: Blanka vs Ryu no 'Amazonas Fight Challenge'!", content: "O duelo Brasil vs Japão promete fortes emoções." },
    { title: "🚀 Capcom Promete Balanceamento: 'Adeus, Spammers de Hadouken!'", content: "Próximo patch trará mudanças no uso de projéteis." },
    { title: "💥 Primeiro Mod Brasileiro Traz Blanka com Camisa da Seleção", content: "A comunidade ama a skin temática e pede inclusão oficial." },
    { title: "🎉 Final do Torneio 'Sonic Boom Brasil' Tem Virada Épica!", content: "Um comeback histórico faz a plateia explodir em gritos." },
    { title: "⚡ 'Combo Breaker Brasil' Terá Show de Funk e Rap ao Vivo!", content: "Além das lutas, o evento promete muita música e diversão." },
    { title: "🔥 Jogadora Brasileira 'Shoryulinda' Surpreende no EVO!", content: "Ela elimina três campeões mundiais em uma campanha histórica." },
    { title: "👊 Clássico Confirmado: Blanka vs Ryu no 'Amazonas Fight Challenge'!", content: "O duelo Brasil vs Japão promete fortes emoções." },
    { title: "🚀 Capcom Promete Balanceamento: 'Adeus, Spammers de Hadouken!'", content: "Próximo patch trará mudanças no uso de projéteis." },
    { title: "💥 Primeiro Mod Brasileiro Traz Blanka com Camisa da Seleção", content: "A comunidade ama a skin temática e pede inclusão oficial." },
    { title: "🎉 Final do Torneio 'Sonic Boom Brasil' Tem Virada Épica!", content: "Um comeback histórico faz a plateia explodir em gritos." },
    { title: "⚡ 'Combo Breaker Brasil' Terá Show de Funk e Rap ao Vivo!", content: "Além das lutas, o evento promete muita música e diversão." },
    { title: "🔥 Jogadora Brasileira 'Shoryulinda' Surpreende no EVO!", content: "Ela elimina três campeões mundiais em uma campanha histórica." },
    { title: "👊 Clássico Confirmado: Blanka vs Ryu no 'Amazonas Fight Challenge'!", content: "O duelo Brasil vs Japão promete fortes emoções." },
    { title: "🚀 Capcom Promete Balanceamento: 'Adeus, Spammers de Hadouken!'", content: "Próximo patch trará mudanças no uso de projéteis." },
    { title: "💥 Primeiro Mod Brasileiro Traz Blanka com Camisa da Seleção", content: "A comunidade ama a skin temática e pede inclusão oficial." },
    { title: "🎉 Final do Torneio 'Sonic Boom Brasil' Tem Virada Épica!", content: "Um comeback histórico faz a plateia explodir em gritos." },
    { title: "⚡ 'Combo Breaker Brasil' Terá Show de Funk e Rap ao Vivo!", content: "Além das lutas, o evento promete muita música e diversão." },
    { title: "🔥 Jogadora Brasileira 'Shoryulinda' Surpreende no EVO!", content: "Ela elimina três campeões mundiais em uma campanha histórica." },
    { title: "👊 Clássico Confirmado: Blanka vs Ryu no 'Amazonas Fight Challenge'!", content: "O duelo Brasil vs Japão promete fortes emoções." },
    { title: "🚀 Capcom Promete Balanceamento: 'Adeus, Spammers de Hadouken!'", content: "Próximo patch trará mudanças no uso de projéteis." },
    { title: "💥 Primeiro Mod Brasileiro Traz Blanka com Camisa da Seleção", content: "A comunidade ama a skin temática e pede inclusão oficial." },
    { title: "🎉 Final do Torneio 'Sonic Boom Brasil' Tem Virada Épica!", content: "Um comeback histórico faz a plateia explodir em gritos." },
    { title: "⚡ 'Combo Breaker Brasil' Terá Show de Funk e Rap ao Vivo!", content: "Além das lutas, o evento promete muita música e diversão." },
    { title: "🔥 Jogadora Brasileira 'Shoryulinda' Surpreende no EVO!", content: "Ela elimina três campeões mundiais em uma campanha histórica." },
    { title: "👊 Clássico Confirmado: Blanka vs Ryu no 'Amazonas Fight Challenge'!", content: "O duelo Brasil vs Japão promete fortes emoções." },
    { title: "🚀 Capcom Promete Balanceamento: 'Adeus, Spammers de Hadouken!'", content: "Próximo patch trará mudanças no uso de projéteis." },
    { title: "💥 Primeiro Mod Brasileiro Traz Blanka com Camisa da Seleção", content: "A comunidade ama a skin temática e pede inclusão oficial." },
    { title: "🎉 Final do Torneio 'Sonic Boom Brasil' Tem Virada Épica!", content: "Um comeback histórico faz a plateia explodir em gritos." },
    { title: "⚡ 'Combo Breaker Brasil' Terá Show de Funk e Rap ao Vivo!", content: "Além das lutas, o evento promete muita música e diversão." },
    { title: "🔥 Jogadora Brasileira 'Shoryulinda' Surpreende no EVO!", content: "Ela elimina três campeões mundiais em uma campanha histórica." },
    { title: "👊 Clássico Confirmado: Blanka vs Ryu no 'Amazonas Fight Challenge'!", content: "O duelo Brasil vs Japão promete fortes emoções." },
    { title: "🚀 Capcom Promete Balanceamento: 'Adeus, Spammers de Hadouken!'", content: "Próximo patch trará mudanças no uso de projéteis." },
    { title: "💥 Primeiro Mod Brasileiro Traz Blanka com Camisa da Seleção", content: "A comunidade ama a skin temática e pede inclusão oficial." },
    { title: "🎉 Final do Torneio 'Sonic Boom Brasil' Tem Virada Épica!", content: "Um comeback histórico faz a plateia explodir em gritos." },
    { title: "⚡ 'Combo Breaker Brasil' Terá Show de Funk e Rap ao Vivo!", content: "Além das lutas, o evento promete muita música e diversão." },
    { title: "🔥 Jogadora Brasileira 'Shoryulinda' Surpreende no EVO!", content: "Ela elimina três campeões mundiais em uma campanha histórica." },
    { title: "👊 Clássico Confirmado: Blanka vs Ryu no 'Amazonas Fight Challenge'!", content: "O duelo Brasil vs Japão promete fortes emoções." },
    { title: "🚀 Capcom Promete Balanceamento: 'Adeus, Spammers de Hadouken!'", content: "Próximo patch trará mudanças no uso de projéteis." },
    { title: "💥 Primeiro Mod Brasileiro Traz Blanka com Camisa da Seleção", content: "A comunidade ama a skin temática e pede inclusão oficial." },
    { title: "🎉 Final do Torneio 'Sonic Boom Brasil' Tem Virada Épica!", content: "Um comeback histórico faz a plateia explodir em gritos." }
  ];
  

// Constants
const newsPerPage = 20;
const newsContainer = document.querySelector('.news-container');
const pagination = document.querySelector('.pagination');

// Function to display news blocks for a specific page
function displayNews(page) {
    newsContainer.innerHTML = ''; // Clear existing news blocks
    const start = (page - 1) * newsPerPage;
    const end = start + newsPerPage;
    const newsToShow = newsData.slice(start, end);

    newsToShow.forEach(news => {
        const newsBlock = document.createElement('div');
        newsBlock.classList.add('news-block');
        newsBlock.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.content}</p>
        `;
        newsContainer.appendChild(newsBlock);
    });
}

// Function to generate pagination links
function generatePagination() {
    const totalPages = Math.ceil(newsData.length / newsPerPage);
    pagination.innerHTML = ''; // Clear existing pagination links

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.classList.add('page-link');
        pageLink.textContent = i;
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            displayNews(i);
            setActivePage(i);
        });
        pagination.appendChild(pageLink);
    }
}

// Function to set the active page link
function setActivePage(page) {
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.classList.remove('active');
        if (link.textContent == page) {
            link.classList.add('active');
        }
    });
}

// Initial setup
displayNews(1); // Display first page
generatePagination(); // Generate pagination links
setActivePage(1); // Set first page as active