
let turn="X";
let gameover=false;
let counter=0;

function changeTurn(){
	
	counter++;
	document.getElementById("turn").innerText=turn;
	if(turn==="X"){
		return turn="O";
	}
	else{
		return turn="X";
	}

}

// check win 
const checkWin=()=>{
	let boxText=document.getElementsByClassName("box");
	let win=[
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[2,4,6],
		[0,4,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		];

	win.forEach(check =>{
		
		if(boxText[check[0]].innerText !== ""){
			if((boxText[check[0]].innerText === boxText[check[1]].innerText) && (boxText[check[2]].innerText === boxText[check[1]].innerText) ){
				
				alert("won");
				gameover=true;
				}
			

		}
		
	})
}

function gameover1(){
	if(counter===9){
		gameover=true;
		alert("Draw");
	}
}

// game logic 
const boxes=document.getElementsByClassName("boxMain");
Array.from(boxes).forEach(e =>{
	let boxText=e.querySelector(".box");
	e.addEventListener("click",()=>{
		if(boxText.innerText===''){
			boxText.innerText=turn;

			
			changeTurn();
			checkWin();
			gameover1();

		

		}
		

	})




})

// reset
let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
	Array.from(boxes).forEach(e =>{
		
		let boxText=e.querySelector(".box");
		boxText.innerText="";
	})







})