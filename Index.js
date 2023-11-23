/* Escrevendo as Classes de Um Jogo*/


// Declaração da Classe //
class tipoDeJogador{
       constructor(jogadorNome, jogadorIdade, jogadorTipo, jogadorNivel){
       		this.jogadorNome = jogadorNome;
        	this.jogadorIdade = jogadorIdade;
            this.jogadorTipo = jogadorTipo;
            this.jogadorNivel = jogadorNivel;
       }
       
       // Metodos //
       
       jogadorAtaque(jogadorAtaque){
       
            let mensagemSaida1 = "            ";
            
            if(tipoDeJogador.jogadorTipo = "Guerreiro") {
               mensagemSaida1 =`O tipo de Jugador é --> ${this.jogadorTipo} seu nome é --> ${this.jogadorNome} tem -- > ${this.jogadorIdade} anos e ataca usando --> ${jogadorAtaque}`;
            } else if(tipoDeJogador.jogadorTipo = "Mago") {
               mensagemSaida1 =`O tipo de Jugador é --> ${this.jogadorTipo} seu nome é --> ${this.jogadorNome} tem -- > ${this.jogadorIdade} anos e ataca usando --> ${jogadorAtaque}`;
            } else if(tipoDeJogador.jogadorTipo = "Convidado") {
               mensagemSaida1 =`O tipo de Jugador é --> ${this.jogadorTipo} seu nome é --> ${this.jogadorNome} tem -- > ${this.jogadorIdade} anos e ataca usando --> ${jogadorAtaque}`;
            }
                        
            
       		console.log("===================================================");
            console.log(mensagemSaida1);
            console.log("---------------------------------------------------");
       }
       
       
       jogadorDefensa(){
       
            let mensagemSaida2 = "         ";
            let jogadorArmadura = "        ";
            
            if(this.jogadorNivel === 0) {
               jogadorArmadura = "Nenhuma";             
            } else if(this.jogadorNivel > 0 && this.jogadorNivel <= 20) {
               		jogadorArmadura = "Ferro"; 
            } else if(this.jogadorNivel > 20 && this.jogadorNivel <= 40) {
               		jogadorArmadura = "Bronze"; 
            } else if(this.jogadorNivel > 40 && this.jogadorNivel <= 60) {
               		jogadorArmadura = "Prata"; 
            } else if(this.jogadorNivel > 60 && this.jogadorNivel <= 80) {
               		jogadorArmadura = "Ouro"; 
            } else if(this.jogadorNivel > 80 && this.jogadorNivel <= 100) {
               		jogadorArmadura = "Diamante"; 
            }
            
            mensagemSaida2 =`O tipo de Jugador é --> ${this.jogadorTipo} Seu nome é --> ${this.jogadorNome} é um jugador de Nivel -- > ${this.jogadorNivel} e seu tipo de Armadura é --> ${jogadorArmadura}`;                                  
            console.log(mensagemSaida2);
            console.log("===================================================");
       }      
       
}


// Instanciar a classe //
let jogadorGuerreiro = new tipoDeJogador("Richard", 52, "Guerreiro", 75);
let jogadorMonge = new tipoDeJogador("Gildo", 30, "Monge", 45);
let jogadorMago = new tipoDeJogador("Pedro", 25, "Mago", 90);
let jogadorNinja = new tipoDeJogador("Vitor", 28, "Ninja", 55);
let jogadorGuest = new tipoDeJogador("Sem Nome", 0, "Convidado", 0);


// Funções //
console.log("");
console.log("################################################################");
console.log("");
jogadorGuest.jogadorAtaque("Sem Ataque Nenhum");
jogadorGuest.jogadorDefensa();
console.log("");
console.log("################################################################");
console.log("");
jogadorMago.jogadorAtaque("Magia e feitiços");
jogadorMago.jogadorDefensa();
console.log("");
console.log("################################################################");
console.log("");
jogadorGuerreiro.jogadorAtaque("Espada e Faca");
jogadorGuerreiro.jogadorDefensa();