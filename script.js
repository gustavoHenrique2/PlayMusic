let musica = [
    {titulo:'Pé na areia', artista: 'Diogo Nogueira', src:'musicas/Diogo Nogueira - Pé Na Areia (Ao vivo).mp3', img:'imagens/beer.jpg'},
    {titulo:' Habits (Stay High) ', artista: 'Tove Lo ', src:'musicas/Tove Lo - Habits (Stay High) - Hippie Sabotage Remix.mp3', img:'imagens/tove.jpg'}
];

let musicas = document.querySelector('audio');
let indexmusica = 0;


//variáveis
let duracaomusicas = document.querySelector('.fim');
let imagens = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarmusicas(indexmusica);


//eventos 
document.querySelector('.botao-play').addEventListener('click', tocarmusica);

document.querySelector('.botao-pause').addEventListener('click', pausarmusica);

musicas.addEventListener('timeupdate', atualizarbarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexmusica--;
    if (indexmusica < 0) {
        indexmusica = 2;
    }
    renderizarmusicas(indexmusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexmusica++;
    if(indexmusica > 2) {
        indexmusica = 0;
    }
    renderizarmusicas(indexmusica);
});

//funções

function renderizarmusicas(index){
    musicas.setAttribute('src', musica[index].src);
    musicas.addEventListener('loadeddata', () => {
    nomeMusica.textContent = musica[index].titulo;
    nomeArtista.textContent = musica[index].artista;
    imagens.src = musica[index].img;
    duracaomusicas.textContent = segundosParaMinutos(Math.floor(musicas.duration));
    });
}

function tocarmusica(){
    musicas.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarmusica(){
    musicas.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}


//barra de progess
function atualizarbarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor ((musicas.currentTime / musicas.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos (Math.floor (musicas.currentTime));
}

//conversão de segundos para minutos
function segundosParaMinutos(segundos){
    let campoMinuto = Math.floor (segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }
    
return campoMinuto+ ':' +campoSegundos;
}




