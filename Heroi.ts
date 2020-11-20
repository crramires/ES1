import Personagem from "./Personagem";

export default class Heroi extends Personagem {
    constructor(name: string, chooseChar: number ) {
       
        super(name, 0, 0, 0);

            switch(chooseChar){
                case 1:
                    console.log("############################")
                    console.log("Guerreiro foi a sua escolha!")
                    console.log("############################")
                    super.definirAtributos(120, 10, 15);
                    break;
                case 2:
                    console.log("#######################")
                    console.log("Mago foi a sua escolha!")
                    console.log("#######################")
                    super.definirAtributos(90, 15, 12);
                    break;
                case 3:
                    console.log("###########################")
                    console.log("Paladino foi a sua escolha!")
                    console.log("###########################")
                    super.definirAtributos(100, 14, 16); 
                    break;
                default:
                    break;                   
            }
        
    }

}