

let versionapp = "Modif: 19.09.2024"


let GlobalClave = '123'

let map; //mapa de leaflet

let GlobalUrlCalls = '';
let GlobalUrlServicioLocal = 'http://192.168.1.16:8080'

let GlobalUsuario = '';
let GlobalPass = '';
let GlobalNivelUsuario = 0;


let selected_codcliente = 0;
let selected_codempresa = 0;


let GlobalSignoMoneda = 'Q'


let root = document.getElementById('root');

let navmenu = document.getElementById('js-nav-menu');


let GlobalLoader = `

                <div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-border text-secondary" role="status"><span class="sr-only">Loading...</span></div>
                </div>
                `
               
function get_button_loader(texto){
    let str = '';

    str = `${texto}<div>
                <div class="spinner-grow text-naranja" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-grow text-naranja" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-grow text-naranja" role="status"><span class="sr-only">Loading...</span></div>
            </div>`


    return str;

}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

