let musicas = [
    {titulo:'Eu só volto tarde', artista:'Sidoka', src:'music/Sidoka - Eu Só Volto Tarde (Legendado).mp3',
img:'img/imgcar.jpg'},
{titulo:'INDUSTRY BABY', artista:'Lil Nas feat Jack Harlow', src:'music/INDUSTRY BABY Lil Nas feat Jack Harlow   Slowed  Edited  Reverb.mp3',
img:'img/imgcar01.jpg'},
{titulo:'Corvos da Karasuno | Hinata & Kageyama', artista:'Kaito ft Basara', src:'music/Corvos da Karasuno  Hinata  Kageyama (Haikyuu)  Kaito ft. Basara.mp3',
img:'img/imgcar10.png'},
{titulo:'OLHA NA MINHA CARA', artista:'GORDÃO DO PC, MC PEPEU E MC GAROTO', src:'music/GORDÃO DO PC, MC PEPEU E MC GAROTO - OLHA NA MINHA CARA (Doug Filmes) DJ 2K DO TAQUARIL.mp3',
img:'img/imgcar05.jpg'}
]


let musica = document.querySelector('audio');  // Adiconando a musica
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let indexMusica = 0;
renderizarMusica(indexMusica);

//Eventos:
document.querySelector('.botao-play').addEventListener('click', tocarMusica); 
document.querySelector('.botao-pause').addEventListener('click', pauseMusica);
musica.addEventListener('timeupdate', atualizarBarra);
document.querySelector('#anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 3;
    }
    renderizarMusica(indexMusica);
});
document.querySelector('#proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 3){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//Funções:
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
    })
}

function tocarMusica(){
    musica.play();
    document.querySelector('i#pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pauseMusica(){
    musica.pause();
    document.querySelector('i#pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.innerHTML = segundosParaMinutos(Math.floor(musica.currentTime));
    let tempoFinal = document.querySelector('.fim');
    tempoFinal.innerHTML = segundosParaMinutos(Math.floor(musica.duration));

}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}
function duration(){
    let duracaoMusica = document.querySelector('.fim');

    duracaoMusica.textContent = segundosParaMinutos(Math.floor(currentSong.duration));
}
