let piece;

let board=document.getElementById("board");

console.log(board)

const btnClick=(event)=>
	{
	let btn=event.target,
	val=btn.innerHTML;
	if(!val)
		btn.innerHTML=sel.value
	}

const sel=document.getElementsByTagName("select")[0]

for(let x=0; x<9; x++)
	{
	if(x%3==0)
		{
		let br=document.createElement("br");
		board.appendChild(br);
		}
	let btn=document.createElement("button");
	btn.id="b"+x;
	btn.style.width="20px";
	btn.style.height="28px";
	btn.onclick=btnClick
	board.appendChild(btn);
	}

