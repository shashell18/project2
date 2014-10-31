

//var space = null;
window.onload = function()
{
	var puzzleArea = $$("div#overall div#puzzlearea div");
	var gameBoard = $("puzzlearea");
	
	var space = document.createElement("div");
	//space.id = "blank";
	space.setAttribute("id","blank");
	$("puzzlearea").appendChild(space);
	
	$("blank").style.position = "relative";
    $("blank").style.display = "inline-block";
    $("blank").style.border = "hidden";
    $("blank").style.width = "96px";
    $("blank").style.height = "96px";
// ///////////////////////////////////////////////////////////////////////////	
	//var puzzleArea = $$("div#overall div#puzzlearea div");
	for (var i=0; i < puzzleArea.length; i++) 
	{
		puzzleArea[i].onclick = getTile;
	}
////////////////////////////////////////////////////////////////////////////	
	//var tiles = $$("div#overall div#puzzlearea div");
	for (var i=0; i < puzzleArea.length; i++)
	{
		puzzleArea[i].onmouseover = hover;
	}
/////////////////////////////////////////////////////////////////////////////
	/*	for (var i = 0 ; i <puzzleArea.length; i++) 
	{
		var nxt = puzzleArea[i].nextSibling;
		puzz.replaceChild(puzzdiv[i+1],nxt);
	}
	
  ////////////////////////////////////////////////////////

	for (var i = 0; i <puzzdiv.length; i++) 
	{
		puzzdiv[i].onclick = tileSwitch;
	}
	shufflebutton.onclick = shuffle;
  ////////////////////////////////////////////////////////

	for (var i = 0; i <3; i++) 
	{
		var space = document.createElement("br");
		puzz.appendChild(space);
	}
} */



///////////////////////////////////////////////////////////////////

grid();
lable();
};
////////////////////////////////////////////////////////////////////////////
function grid() 
{
	var puzzleArea = $$("div#overall div#puzzlearea div");
	for (var i=0; i < puzzleArea.length; i++) 
	{
		puzzleArea[i].addClassName("puzzlepiece");
		puzzleArea[i].style.position='relative';
		puzzleArea[i].style.display='inline-block';
		puzzleArea[i].style.margin='0px -6px';
	}
}
// //////////////////////////////////////////////////////////////////////////////
function lable()
{
	var puzzleArea = $$("div#overall div#puzzlearea div");
	var index = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","blank"];
    for (var t = 0; t < puzzleArea.length; t++) 
	{
		puzzleArea[t].setAttribute("id",index[t]);
    }
}
// /////////////////////////////////////////////////////////////////////////
function getTile()
{
	var tiles = $$("div#overall div#puzzlearea div");
	alert(this.innerHTML);
	
}
//////////////////////////////////////////////////////////////////////////////
function hover()
{
	var puzzleArea = $$("div#overall div#puzzlearea div");
	for (var i=0; i < puzzleArea.length; i++) 
	{
		this.addClassName('movablepiece');
	}
}
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
/*function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
/*GET
x=$("#elementName").offset().left;
y=$("#elementName").offset().top;
SET
$("#anotherElementName").css({left:x,top:y});*/
/*function coords(e)
{
	var puzzleArea = $$("div#overall div#puzzlearea div");
	for (var x=0, y=0, i=0; i < puzzleArea.length; x+=100, y+=100, i++)
	{
		
	}

}*/
//////////////////////////////////////////////////////////////////////
/*function getXYpos(elm) 
{
  
  x = elm.offsetLeft;        // set x to elm’s offsetLeft
  y = elm.offsetTop;         // set y to elm’s offsetTop

  elm = elm.offsetParent;
}
//////////////////////////////////////////////////////////////////////
function getCoords(e) 
{
  //this.getXYpos(e);
  //var xy_pos = getXYpos(e);
  this.getXYpos(e);
}*/
/////////////////////////////////////////////////////////////////////
/*function setCoords(val) 
{
	
	{
		val.css({left:x,top:y});
	}
}*/


/*function movePiece(val)
{
	getCoords(val);
	setCoords(val);
	if(isEmpty(val))
	{
		
	}
}*/


function swopTile()
{
	var blankspace = $("blank");
	var gameBoard = $("puzzlearea");
	//var bnext = blank.nextSibling;
	//var bprev = blank.previousSibling;
	
	if (canMove(this)) 
	{
		var nxtTile = this.nextSibling;
		var nxtBlank = blank.nextSibling;
		gameBoard.insertBefore(nxtBlank,nxtTile);
		gameBoard.insertBefore(this,nxtBlank);
		//this.onmouseover = hover;
	}	
}
//......................................................................................................
function canMove(val)
{
	var blankspace = $("blank");
	var gameBoard = $("puzzlearea");
	var prevblksib = blankspace.previousSibling;
	var nxtblksib = blankspace.nextSibling;

	if (val.isSameNode(prevblksib)) 
	{
		return true;
	}
	else if(val.isSameNode(nxtblksib))
	{
		return true;
	}
	else
	{
		var topprev = prevblksib;
		var bottomnxt = nxtblksib;
		//while(bp!= null){

			topprev = topprev.previousSibling.previousSibling.previousSibling;
			
			if (topprev != null) 
			{
				if (val.isSameNode(topprev))
				{
					return true;
				}
				
			}

			bottomnxt = bottomnxt.nextSibling.nextSibling.nextSibling;
			
			if (bottomnxt != null) 
			{
				if (val.isSameNode(bottomnxt)) 
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

//...................................................................................................
function shuffle()
{
	var blankspace = $("blank");
	var gameBoard = $("puzzlearea");
	//var puzzleDivs = $$("div#overall div#puzzlearea div");
	var puzzleDivs = gameBoard.getElementsByTagName("div");
	for (var i = 0; i < 200; i++) 
	{
		var ran = Math.floor((Math.random()*14)+0);
		var rantile = puzzleDivs[ran];
		if (canMove(rantile)) 
		{
			var rtnext = rantile.nextSibling;
			var bnext = blank.nextSibling;
			puzz.insertBefore(blankspace,rtnext);
			puzz.insertBefore(rantile,bnext);
		}

	}

}










































