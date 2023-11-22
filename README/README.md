# separar Times 

Para rodar o codigo deve passar esse comando
$ yarn dev

Neste codigo deve passar um payload no insomnia / Postman da seguinte forma
Responsible: quem esta reponsavel por separar os times;
Players: nome dos jogadores, dentro de array[], separado por virgula(,);
TotalTeams: quantos times voce gostaria de montar;

EX:
{
	"responsible": "xxxx",
	"players":[xxxx,xxxx,xxxx,xxxx],
	"totalTeams": 2
}


Codigo ira separar os jogadores de forma aleatoria pela quantidade de times que for passado, ou seja, se passar 6 jogadores e 2 quantidade de times, teremos 2 times com 3 jogadores em cada times;

Apos executar as quantidade de times sao armazenadas em um object sendo separado em time A e time B assim por diate conforme a quantidade de times que for passado em seu payload