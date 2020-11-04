import Heroi from "./Heroi";

export default class Personagem {
    constructor(
        public nome: string,
        public vida: number,
        public ataque: number,
        public defesa: number
    
    ) {}

    status(): void {
        console.log("Nome: ", this.nome);
        console.log("Vida: ", this.vida);
        console.log("Ataque: ", this.ataque)
        console.log("Defesa: ", this.defesa)
    }


    treinarAtaque(): void {
        this.ataque += 5;
    }

    treinarDefesa(): void {
        this.defesa += 2;
    }

    rolarAtacar(): number {
       return Math.floor(Math.random() * 20) + 1;
    }

    recuperarVida(): void {
        this.vida += Math.floor(Math.random() * 10) + 1;
    }

    morreu(): boolean {
        if( this.vida <= 0){
            return true;
        } else {
            return false;
        }
    }

    definirAtributos(vida: number, ataque: number, defesa: number): void {
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    fightClub( oponente: Personagem) {
        let dice = Math.floor(Math.random() * 20) + 1;
        
        if( dice > oponente.defesa){
            console.log("O ataque acertou!!")
            oponente.vida -= this.ataque;
        } else {
            console.log("O ataque errou!!")
        }
    }

}







