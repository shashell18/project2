

window.onload = function()
{
//..................................................................
//.......Variable assignments and creation of blank div.
//..................................................................

	var gameBoard = $("puzzlearea");
	var puzzleDivs = gameBoard.getElementsByTagName("div");
	var shuffleUp = $("shufflebutton");
	
	var blankDiv = document.createElement("div");
	blankDiv.id = "blank";
	gameBoard.appendChild(blankDiv);
	
	var blankspace = $("blank");
	blankspace.style.backgroundImage = "none";
	blankspace.style.borderColor = "transparent";
	
//...................................................................
//.......Application of the class puzzlepiece to each div.
//...................................................................
	for (var i=0; i < puzzleDivs.length; i++) 
	{
		puzzleDivs[i].addClassName("puzzlepiece");
		puzzleDivs[i].style.position='relative';
		//puzzleDivs[i].style.float = "left";
		puzzleDivs[i].style.display='inline-block';
	}
//.................................................................. 
//.......Assigning (x-y) coordinates to each div.
//..................................................................
	n = 0;
	for(var l = 0; l <= 300; l+=100)
	{
		for(var j = 0; j <= 300; j+=100)
		{
			y=l;
			x=j;

			puzzleDivs[n].style.backgroundPosition = -x + "px" + " " + -y + "px";
			n++;
		}
	}
//..................................................................
//.............
//..................................................................
	for (var i = 0; i < puzzleDivs.length; i++) 
	{
		var nextSib = puzzleDivs[i].nextSibling;
		var oneUp = puzzleDivs[i+1];
		gameBoard.replaceChild(oneUp,nextSib);
	}
//..................................................................
//........event handler for the shuffle button.
//..................................................................
	    
	// var blankspace = document.getElementById("blank");
	// var gameBoard = $("puzzlearea");
	// //for (var i=0; i < puzzleDivs.length; i++)
	// {
		// if (canMove(this)) 
		
		// var neighbors = [];
		// var leftTile = this.previousSibling;
		// var rightTile = this.nextSibling;
		// var topTile = leftTile;
		// var tileBelow = rightTile;
		// topTile = topTile.previousSibling.previousSibling.previousSibling;
		// tileBelow = tileBelow.nextSibling.nextSibling.nextSibling;
		
		// // // leftTile.onmouseover = hover;
		// // // rightTile.onmouseover = hover;
		// // // topTile.onmouseover = hover;
		// // // tileBelow.onmouseover = hover;
	
		// neighbors.push(leftTile,rightTile,topTile,tileBelow);
		// for(var i = 0;i<neighbors.length;i++)
		// {
			// if(neighbors[i] == blankspace)
			// {
				// this.onmouseover = hover;
				// //neighbors[i].onmouseover = hover;
				// //neighbors[i].onclick = normal;
			// }
		// }
		
	// }
//..................................................................
	for (var i = 0; i < puzzleDivs.length; i++) 
	{
		
		puzzleDivs[i].onmouseover = tmove;
		puzzleDivs[i].onclick = swop;
		//puzzleDivs[i].onclick = normal;
	}
	
	shuffleUp.onclick = shuffle;
//..................................................................
//..............
//..................................................................
for (var i = 0; i <3; i++) 
	{
		var space = document.createElement("br");
		gameBoard.appendChild(space);
	}

//...........................................................................
};

//...........................................................................
//............
//...........................................................................
function canMove(n)
{
	var blank = document.getElementById("blank");
	var puzz = document.getElementById("puzzlearea");
	var bprev = blank.previousSibling;
	var bnext = blank.nextSibling;
	
	if (n.isSameNode(bprev)) 
	{
		return true;
	}
	else if(n.isSameNode(bnext))
	{
		return true;
	}
	else
	{
		var bp = bprev;
		var bn = bnext;
		//while(bp!= null){

			bp = bp.previousSibling.previousSibling.previousSibling;
			
			if (bp != null) 
			{
				if (n.isSameNode(bp))
				{
					return true;
				}
			}

			bn = bn.nextSibling.nextSibling.nextSibling;
			
			if (bn != null) 
			{
				if (n.isSameNode(bn)) 
				{
					return true;
				}
				else
				{
					return false;
				}
			}
	}
}
//.............................................................................
//..........
//.............................................................................
function swop()
{
	var blankspace = document.getElementById("blank");
	var gameBoard = $("puzzlearea");
	var neighbors = [];

	if (canMove(this)) 
	{
	
		
	
		var nextTile = this.nextSibling;
		var nextBlank = blank.nextSibling;
		gameBoard.insertBefore(blankspace,nextTile);
		gameBoard.insertBefore(this,nextBlank);
	}
	
	
}
//.............................................................................
//............
//.............................................................................
function shuffle()
{
	var puzz = document.getElementById("puzzlearea");
	var blank = document.getElementById("blank");
	var puzzlepieces = puzz.getElementsByTagName("div");
	for (var i = 0; i <200; i++) 
	{
		var ran = Math.floor((Math.random()*14)+0);
		var rantile = puzzlepieces[ran];
		if (canMove(rantile)) 
		{
			var rtnext = rantile.nextSibling;
			var bnext = blank.nextSibling;
			puzz.insertBefore(blank,rtnext);
			puzz.insertBefore(rantile,bnext);
		}
    }
}
//............................................................................
 /*function hover()
{
	var puzzleDivs = $$("div#overall div#puzzlearea div");
	for (var i=0; i < puzzleDivs.length; i++) 
	{
		if (canMove(this)) {
			this.addClassName('movablepiece');
		}
		
	}
}*/
//............................................................................
/*function normal()
{
	var puzzleDivs = $$("div#overall div#puzzlearea div");
	for (var i=0; i < puzzleDivs.length; i++) 
	{
		this.removeClassName('movablepiece');
	}
}*/
//............................................................................
function tmove()
{
	var blankspace = document.getElementById("blank");
	var neighbors = [];

	if(canMove(this))
	{
		var leftTile = blankspace.previousSibling;
		var rightTile = blankspace.nextSibling;
		var topTile = leftTile;
		var tileBelow = rightTile;
		topTile = topTile.previousSibling.previousSibling.previousSibling;
		tileBelow = tileBelow.nextSibling.nextSibling.nextSibling;
		
		neighbors.push(leftTile,rightTile,topTile,tileBelow);

		for(var i = 0;i<neighbors.length;i++)
		{
			neighbors[i].addClassName("movablepiece");
		}
	}
	else {
		var puzzleDivs = $$("div#overall div#puzzlearea div");
		for (var i=0; i < puzzleDivs.length; i++) {
			this.removeClassName('movablepiece');
		}
	}
}
/*function tMove()
{
	var neighbors = [];

	if(canMove(this))
	{
		var leftTile = this.previousSibling;
		var rightTile = this.nextSibling;
		var topTile = leftTile;
		var tileBelow = rightTile;
		topTile = topTile.previousSibling.previousSibling.previousSibling;
		tileBelow = tileBelow.nextSibling.nextSibling.nextSibling;
		
		neighbors.push(leftTile,rightTile,topTile,tileBelow);

		for(var i = 0;i<neighbors.length;i++)
		{
			neighbors[i].onmouseover = hover;
		}
	}
	neighbors[i].onmouseover = normal;

}                                                                                                                                                                        /*)
{
	var neighbors = [];

	var leftTile = this.previousSibling;
	var rightTile = this.nextSibling;
	var topTile = leftTile;
	var tileBelow = rightTile;
	topTile = topTile.previousSibling.previousSibling.previousSibling;
	tileBelow = tileBelow.nextSibling.nextSibling.nextSibling;

	if(canMove(this))
	{
		neighbors.push(leftTile,rightTile,topTile,tileBelow);

		for(var i = 0;i<neighbors.length;i++)
		{
			neighbors[i].onmouseover = hover;
		}

		neighbors[i].onmouseover = normal;
	}

}
*/












