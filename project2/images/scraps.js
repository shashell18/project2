//var puzzleArea = document.getElementById("puzzlearea").childNodes;
	
	//var box = $('overall').$$('div#overall div#puzzlearea div').addClassName("puzzlepiece").style.position='relative';;
	/*var puzzleArea = $$('div#overall div#puzzlearea div');
	for (var i = 0; i < puzzleArea.length; i++)
	{
	
		
		//puzzleArea[i].addClassName("puzzlepiece");
		
		//puzzleArea[i].addClassName("puzzlepiece").style.position='relative';
		//puzzleArea[i].addClassName("puzzlepiece").style.display='inline-block';
		//puzzleArea[i].addClassName("puzzlepiece").style.margin='0px -6px';
		//puzzleArea[i].addClassName("puzzlepiece").style.top='0px';
		//puzzleArea[i].addClassName("puzzlepiece").style.left='0px';
	}
	
	/////////////////////////////////////////////////////
	//box.push(puzzleArea[i]);*
	//var tiles = document.getElementById('puzzlearea').getElementsByTagName('div');
	var tiles = $$("div#overall div#puzzlearea div");
	for (var i = 0; i < tiles.length; i++)
	{
		//tiles[i].onmouseover = hover();
		tiles[i].observe('mouseover',hover);
		var box = $(div#overall);
	}*/
	var box = document.getElementById('overall');
	var chips = document.getElementById('puzzlearea').getElementsByTagName('div');
	for(var i = 0; i < chips.length; i++)
	{
		box.push(chips[i]).addClassName("puzzlepiece");
	}
///////////////////////////////////////////////////////////////////////////////////////////
/*function grid() 
{
	//document.getElementById('puzzlearea').getElementsByTagName('div');
	var puzzleArea = $$("div#overall div#puzzlearea div");
	for (var i=0; i < puzzleArea.length; i++) 
	{
		puzzleArea[i].addClassName("puzzlepiece");
		puzzleArea[i].style.position='relative';
		puzzleArea[i].style.display='inline-block';
		puzzleArea[i].style.margin='0px -6px';
	}
}
	
///////////////////////////////////////////////////////////////////////////////////////////
	//return box;
	
	
	
	
	//var tiles = $$("div#overall div#puzzlearea div");
/*
	for (var i = 0; i < tiles.length; i++)
	{
		//tiles[i].onmouseover = hover();
		tiles[i].onclick = getTitle();
	}
*	
tiles.each( function(e){
	e.onclick = console.log(e.innerHTML);
	return;
});*/
 /*var tiles = $$("div#overall div#puzzlearea div");
 tiles.each(function(e){
	e.onclick = getTiles;
	return;
});*/
//changepic();
//hover();
//getTile();





/*function getTile()
{
	//var tiles = $$("div#overall div#puzzlearea div");
    var tiles = document.getElementById('puzzlearea').getElementsByTagName('div');
	for (var i = 0; i < tiles.length; i++){
	return alert(tiles[i].innerHTML);
	
	}
	
	
}

/*function getTile(tile)
{
	console.log(tile.innerHTML);
}*/

//document.getElementById('puzzlearea').getElementsByTagName('div');


/*function hover()
{
	var puzzleArea = $$("div#overall div#puzzlearea div");
	for (var i=0; i<puzzleArea.length; i++) 
	{
		puzzleArea[i].addClassName("movablepiece:hover");
	}

}*
5395039.
function changepic() 
{
	var pic = $(div#puzzlearea).getStyle('background-image')
	var puzzleArea = $$("div#overall div#puzzlearea div")
	for (var i=0; i<puzzleArea.length; i++) 
	{
		puzzleArea[i].style.background-image='100px 0px 0px 100px';
		//puzzleArea[i].addClassName("puzzlepiece").background-image.clip='0px 100px 100px 0px';
		//puzzleArea[i].addClassName("puzzlepiece").style.background-image='absolute';
	}
}*/


/*
<div id="divid" style="width:250px; height:100px; background:#0809fe;"></div>
<br/><br/> Click to add the coordinates in this text field.<br/>
<input type="text" name="regcoords" id="regcoords" />
<div id="coords">Coords</div>*/

<script type="text/javascript"><!--
/*
 Here add the ID of the HTML elements for which to show the mouse coords
 Within quotes, separated by comma.
 E.g.:   ['imgid', 'divid'];
*/
var elmids = ['divid'];

var x, y = 0;       // variables that will contain the coordinates

// Get X and Y position of the elm (from: vishalsays.wordpress.com)
function getXYpos(elm) {
  x = elm.offsetLeft;        // set x to elm’s offsetLeft
  y = elm.offsetTop;         // set y to elm’s offsetTop

  elm = elm.offsetParent;    // set elm to its offsetParent

  //use while loop to check if elm is null
  // if not then add current elm’s offsetLeft to x
  //offsetTop to y and set elm to its offsetParent
  while(elm != null) {
    x = parseInt(x) + parseInt(elm.offsetLeft);
    y = parseInt(y) + parseInt(elm.offsetTop);
    elm = elm.offsetParent;
  }

  // returns an object with "xp" (Left), "=yp" (Top) position
  return {'xp':x, 'yp':y};
}

// Get X, Y coords, and displays Mouse coordinates
function getCoords(e) {
 // coursesweb.net/
  var xy_pos = getXYpos(this);

  // if IE
  if(navigator.appVersion.indexOf("MSIE") != -1) {
    // in IE scrolling page affects mouse coordinates into an element
    // This gets the page element that will be used to add scrolling value to correct mouse coords
    var standardBody = (document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;

    x = event.clientX + standardBody.scrollLeft;
    y = event.clientY + standardBody.scrollTop;
  }
  else {
    x = e.pageX;
    y = e.pageY;
  }

  x = x - xy_pos['xp'];
  y = y - xy_pos['yp'];

  // displays x and y coords in the #coords element
  document.getElementById('coords').innerHTML = 'X= '+ x+ ' ,Y= ' +y;
}

// register onmousemove, and onclick the each element with ID stored in elmids
for(var i=0; i<elmids.length; i++) {
  if(document.getElementById(elmids[i])) {
    // calls the getCoords() function when mousemove
    document.getElementById(elmids[i]).onmousemove = getCoords;

    // execute a function when click
    document.getElementById(elmids[i]).onclick = function() {
      document.getElementById('regcoords').value = x+ ' , ' +y;
    };
  }
}
--></script>


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


window.onload = function()
{

	var gameBoard = $("puzzlearea");
	var puzzleDivs = gameBoard.getElementsByTagName("div");
	//var puzzleDivs = $$("div#overall div#puzzlearea div");
	var shuffleUp = $("shufflebutton");
	
	var blankDiv = document.createElement("div");
	blankDiv.id = "blank";
	gameBoard.appendChild(blankDiv);
	
	var blankspace = $("blank");
	blankspace.style.backgroundImage = "none";
	// blankspc.style.position = "relative";
    // blankspc.style.display = "inline-block";
    blankspace.style.border = "hidden";
    // blankspc.style.width = "96px";
    // blankspc.style.height = "96px";
	// blankspc.style.backgroundImage = "none";
	//blankspc.style.borderColor = "transparent";
	
//...................................................................
	//var puzzleDivs = $$("div#overall div#puzzlearea div");
	for (var i=0; i < puzzleDivs.length; i++) 
	{
		puzzleDivs[i].addClassName("puzzlepiece");
		puzzleDivs[i].style.position='relative';
		puzzleDivs[i].style.float = "left";
		//puzzleDivs[i].style.display='inline-block';
		//puzzleDivs[i].style.margin='0px -6px';
	}
//.................................................................. 
	// for (var i=0; i < puzzleDivs.length; i++) 
	// {
		// puzzleDivs[i].onclick = getTile;
	// }
//..................................................................
// var puzzleDivs = $$("div#overall div#puzzlearea div");
// for (var i=0; i<puzzleDivs.length; i++) 
// {
 // if (canmove(this)) 
 // {
  // this.addClassName("moveablepiece");
 // }
// }
// puzzleDivs.onmouseover = hover;
//..................................................................
	// for (var i=0; i < puzzleDivs.length; i++)
	// {
		// puzzleDivs[i].onmouseover = hover;
	// }
//..................................................................
	n = 0;
	for(var l = 400; l >= 100; l-=100)
	{
		for(var j = 400; j >= 100; j-=100)
		{
			y=l;
			x=j;

			puzzleDivs[n].style.backgroundPosition = +x + "px" + " " + +y + "px";
			n++;
		}
	}
//..................................................................
	for (var i = 0; i < puzzleDivs.length; i++) 
	{
		var nextSib = puzzleDivs[i].nextSibling;
		var oneUp = puzzleDivs[i+1];
		gameBoard.replaceChild(oneUp,nextSib);
	}
//..................................................................
	for (var i = 0; i < puzzleDivs.length; i++) 
	{
		puzzleDivs[i].onclick = tileSwitch;
	}
	shuffleUp.onclick = shuffle;
//..................................................................
// for (var i = 0; i <3; i++) 
	// {
		// var space = document.createElement("br");
		// gameBoard.appendChild(space);
	// }
// }
//...........................................................................
};

//.............................................................................
// function getTile()
// {
	// var tiles = $$("div#overall div#puzzlearea div");
	// alert(this.innerHTML);
	
// }
//.............................................................................
// function hover()
// {
	// var puzzleDivs = $$("div#overall div#puzzlearea div");
	// for (var i=0; i < puzzleDivs.length; i++) 
	// {
		// this.addClassName('movablepiece');
	// }
// }


//.............................................................................
function tileSwitch()
{
	var blank = document.getElementById("blank");
	//var puzz = document.getElementById("puzzlearea");
	var puzz = $("puzzlearea");
	//var bnext = blank.nextSibling;
	//var bprev = blank.previousSibling;
	
	if (canMove(this)) 
	{

		var elnext = this.nextSibling;
		var bnext = blank.nextSibling;
		puzz.insertBefore(blank,elnext);
		puzz.insertBefore(this,bnext);
	}	
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
function canMove(n)
{
	
	

	var blank = document.getElementById("blank");
	var puzz = document.getElementById("puzzlearea");
	var bprev = blank.previousSibling;
	var bnext = blank.nextSibling;
	//bprev.addClassName('movablepiece');
	//bnext.addClassName('movablepiece');

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
			
			if (bp!=null) 
			{
				if (n.isSameNode(bp))
				{
					return true;
				}
				
			}

			bn = bn.nextSibling.nextSibling.nextSibling;
			
			if (bn!=null) 
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

///////////////////////////////////////////////////////////////////////////////////////////////////
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



/*function swopTile()
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

}*/