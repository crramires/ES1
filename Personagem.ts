import Heroi from "./Heroi";

export default class Personagem {
    constructor(
        protected nome: string,
        protected vida: number,
        protected ataque: number,
        protected defesa: number
    
    ) {}


    public status(): void {
        console.log("Nome: ", this.nome);
        console.log("Vida: ", this.vida);
        console.log("Ataque: ", this.ataque)
        console.log("Defesa: ", this.defesa)
    }


   private rolarAtaque(): number {
       return Math.floor(Math.random() * 20) + 1;
    }

    public morreu(): boolean {
        if( this.vida <= 0){
            return true;
        } else {
            return false;
        }
    }

    protected definirAtributos(vida: number, ataque: number, defesa: number): void {
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;

    }

    public fightClub( oponente: Personagem) {
        let dice = this.rolarAtaque();
        
        
        if(oponente.vida <= 0){
            console.log("Você morreu!!");
        } else {
            
            if( dice > oponente.defesa){
                console.log("#################")
                console.log("O ataque acertou!!")
                console.log("#################")
                oponente.vida -= this.ataque;
                
            } else {
                console.log("#################")
                console.log("O ataque errou!!")
                console.log("#################")
            }
        }

    }
}







