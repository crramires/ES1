import Personagem from "./Personagem";

export default class Heroi extends Personagem {
    constructor(name: string, chooseChar: number ) {
       
        super(name, 0, 0, 0);

            switch(chooseChar){
                case 1:
                    super.definirAtributos(120, 10, 15);
                    break;
                case 2:
                    super.definirAtributos(90, 15, 12);
                    break;
                case 3:
                    super.definirAtributos(100, 14, 16); 
                    break;
                default:
                    break;                   
            }
        
    }


}