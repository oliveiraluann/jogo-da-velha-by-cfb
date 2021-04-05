let jogo=[];
let tabuleiro=[];
let quemJoga=0; //0=jogador  1=cpu
let verifica;
let jogando=true;
let nivel=1;
let jogadaCpu=1;
let quemComeca;

function jogar(p) {
    if(jogando && quemJoga==0) {
        switch(p) {
            case 1:
                if(jogo[0][0]=="") {
                    jogo[0][0]="X";
                    quemJoga=1;
                }
            break;
        }
    }
}

function iniciar() {
    jogando=true;
    jogadaCpu=1;
    jogo=[
        ["","",""],
        ["","",""],
        ["","",""]
    ];
}