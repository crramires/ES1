import Personagem from "./Personagem";
import prompt from 'prompt-sync';
import Vilao from "./Vilao";
import Heroi from "./Heroi"


let teclado = prompt();
let option: number = 0;

let heroi: Heroi = new Heroi("NoName", criarPersonagem());
let vilao: Personagem = new Personagem("Unknown", 30, 10, 12); // Objeto criado para testar onde seria inserido o vilão

while( option != 9){
    console.log('1. Combate');
    console.log('3. Mostrar Atributos');
    console.log('5. Criar Personagem');
    console.log('9. Sair');

    option = +teclado("Escolha uma tarefa: ");

    switch(option){
         case 1:
             lutar();
             break;
        
        case 3:
             heroi.status();
             vilao.status(); 
             break;   

        case 5:
            criarPersonagem();
            break;
        
        default:
            break;
    }

}

function criarPersonagem() {
    let chooseChar = 0;
    try {
        
        do{
            
            console.log("################### Escolha sua classe ########################");
            console.log("1. Guerreiro: Inflige pouco dano, mas é bastante resistente");
            console.log("--------------------------------------------------------------")
            console.log("2. Mago: Inflige grandes quantidades de dano, mas é mais vulnerável");
            console.log("--------------------------------------------------------------")
            console.log("3. Paladino: Classe para noobs extremamente equilibrado.")
            console.log("################################################################")
            
            chooseChar = +teclado("Escolha sua class: ");

        }while( chooseChar > 3 || chooseChar <  1);


    } catch(err){
        console.log("err :>>", err);
    }

    return chooseChar;
}

function lutar (){
    
    heroi.fightClub(vilao);

    if(!vilao.morreu){
        vilao.fightClub(heroi);
     }
}


