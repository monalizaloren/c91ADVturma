//Digite o id do canva
//Para descobrir, volte até a linha 18 do html
canvas = document.getElementById('???');
ctx = canvas.getContext("2d");

//Defina a largura e altura do rover
roverWidth = ???;
roverHeight = ???;

//Escreva o nome da imagem de fundo
backgroundImage = "???";
//Escreva o nome da imagem do rover
roverImage = "???";

//Na linha abaixo, você está definindo a posição do rover no eixo X , faça o mesmo para o eixo Y
roverX = 10;
???

function add() {
	backgroundImgTag = new Image(); //Adicionando uma nova imagem
	backgroundImgTag.onload = uploadBackground; // o código 'onload' tem a função de carregar a imagem
	backgroundImgTag.src = backgroundImage;   // 'backgroundImgTag.src' guardará a imagem que você deseja mostrar. A imagem que você deseja mostrar, está dentro da variável 'backgroundImage'

	//Faça o mesmo com o rover
	roverImgTag =???
	roverImgTag.onload = uploadrover; 
	roverImgTag.src = ???

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

//Digite o nome da função que está sendo criada na linha 40
window.addEventListener("keydown", ???);

function my_keydown(e)
{
	//As teclas do seu teclado possuem códigos que identificam elas
	//38= seta para cima
	//40= seta para baixo
	//37= seta para esquerda
	//39= seta para direita
	//'if key pressed' significa ' se a chave pressionada for...'
	//Complete os próximos códigos de acordo com a instrução da linha anterior
	keyPressed = e.keyCode;
		if(keyPressed == '38')
		{
			up();
			
		}
		???(??? == '40')
		{
			down();
			
		}

		???(??? == '37')
		{
			left();
			
		}
		???(??? == '39')
		{
			right();
			
		}
		
}

function up()
{
	if(roverY >=0)
	{
		//Quando o rover vai para cima, o número é negativo ou positivo?
		//Adicione apenas o operador númerico
		roverY = roverY ??? 10;
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(roverY <=500)
	{
		//Quando o rover vai para baixo, o número é negativo ou positivo?
		roverY =roverY ??? 10;
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(roverX >= 0)
	{
		//Quando o rover vai para esquerda, o número é negativo ou positivo?
		roverX =roverX ??? 10;
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	////Quando o rover vai para direita, o número é negativo ou positivo?
	if(roverX <= 700)
	{
		roverX =roverX ???10;
		uploadBackground();
		uploadrover();
   }
}
	