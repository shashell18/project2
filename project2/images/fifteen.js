/*window.onload = function() // RUNNING THE COMMENTED SECTION WILL DISPLAY IMAGE PROPERLY HOWEVER IT WAS PROVEN
//DIFFICULT TO IMPLENT THE SHUFFLE AND CAN MOVE FUNCTIONS USING THIS IMPLENTAATION OF CALLING THE CHILD NODES OF
//PUZZLEAREA
{
    
    
    var puzzlearea = $("puzzlearea").childNodes;

    var id=1;
    var ran=1;
    var x=0;
    var y=0;
    var r=3;
    
    for (var i = 3; i < puzzlearea.length; i=i+2)
    {
        puzzlearea[i].className='puzzlepiece';
        puzzlearea[i].id=id+'';
        id+=1;
    }

    for (var t = 0; t < 4; t++)
    {
        for (var l = 0; l < 4; l++)
        {
            y=100*(t);
            x=100*(l);

            $(ran+"").style.top=y+'px';
            $(ran+"").style.left=x+'px';
            ran=ran+1;
            
            puzzlearea[r].style.backgroundPosition=-x+"px"+" "+-y+"px";
            r=r+2;
        }*/
window.onload = myFunction;
//proved difficult to show image properly.


function myFunction()
{
	var puzz = document.getElementById("puzzlearea");
	var puzzdiv = puzz.getElementsByTagName("div");
	var blank = document.createElement("div");
	var shufflebutton = document.getElementById("shufflebutton");
	
	blank.id = "blank";
	puzz.appendChild(blank);

	var blankspc = document.getElementById("blank");

	blankspc.style.backgroundImage = "none";
	blankspc.style.borderColor = "transparent";
	
	for (var i = 0; i <puzzdiv.length; i++) 
	{
		puzzdiv[i].className ="puzzlepiece";
		puzzdiv[i].style.position = "relative";
		puzzdiv[i].style.float = "left";
		//puzzdiv[i].style.backgroundImage="url('pic.jpg')";
	}
 // for (var k = 0; k < puzzleDivs.length; k++)
  //puzzleDivs[k].style.backgroundImage = 'url("http://www.iphonejd.com/.a/6a010535fde333970c0120a90cc5b9970b-pi")';
  //////////////////////////////////////////////////////////
  /*var body = document.getElementById("overall");
  var choice = document.createElement("div");
  choice.id = "pics";
  body.appendChild(choice);

	var selectBox  = document.getElementById("pics");
	var selector = document.createElement("div");
	selector.id = "dropdown";
	selectBox.appendChild(selector);

	var val = document.getElementById("dropdown");
  val.style.height = "20px";
  //val.style.cssFloat = "left";
  val.style.top = "100px";
  val.style.right = "100px";
  val.style.paddingTop = "20px";
  val.style.paddingLeft = "10px";
  val.append("<select><optgroup><option >Ferrari Rim</option><option>Flower</option><option>Leopard</option></optgroup></select>");
*/
 ///////////////////////////////////////////////////////////
 var option = document.createElement("select");
 option.setAttribute("id", "list");
 //var opt1 = document.createElement("option");
 //option.style.cssFloat = 'middle';
 var optionlist = ["one", "two", "three", "four"];
 var optiontext = ["Background 1", "Background 2", "Background 3", "Background 4"];
 for (var i = 0; i < optionlist.length; i++) 
 {
  optionlist[i] = document.createElement("option");
  optionlist[i].text = optiontext[i];
 }
 for (var k = 0; k < optionlist.length; k++) 
 {
  option.appendChild(optionlist[k]);
 }
var box = $("controls");
 box.appendChild(option);


//for (var k = 0; k < puzzleDivs.length; k++) 
//
var pic1 = $('puzzleDivs').css('background-image', 'url(' + pic.jpg + ')');
for (var k = 0; k < puzzleDivs.length; k++)
 {
	puzzleDivs[k].style.backgroundImage = pic1;
}




  //////////////////////////////////////////////////////////
//function to set background image by coordinate x-y values.

var n = 0;

for(var l = 0; l <= 300; l+=100)
	for(var j = 0; j <= 300; j+=100)
	{
		y=l;
		x=j;

		puzzdiv[n].style.backgroundPosition = -x + "px" + " " + -y + "px";
		n++;


	}



  
  ////////////////////////////////////////////////////////	
	for (var i = 0 ; i <puzzdiv.length; i++) 
	{
		var nxt = puzzdiv[i].nextSibling;
		puzz.replaceChild(puzzdiv[i+1],nxt);
	}
	
  ////////////////////////////////////////////////////////

	for (var i = 0; i <puzzdiv.length; i++) 
	{
		
		puzzdiv[i].onclick = tileSwitch;
	}
	shufflebutton.onclick = shuffle;
/////////////////////////////////////////////////////////
	/*var puzzleDivs = $$("div#overall div#puzzlearea div");
	for (var i=0; i<puzzleDivs.length; i++) 
	{
 		if (canmove(this)) 
 		{
  			this.addClassName("moveablepiece");
 		}
	}
	puzzleDivs.onmouseover = hover;*/
  ////////////////////////////////////////////////////////
  /*for (var i = 0; i <puzzdiv.length; i++) 
	{
		if(canMove(puzzdiv[i]))
		{
			puzzdiv[i].onmouseover = hover;
		}*/
	
 //////////////////////////////////////////////////////////

	for (var i = 0; i <3; i++) 
	{
		var space = document.createElement("br");
		puzz.appendChild(space);
	}
};
	

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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
		var ran = Math.floor((Math.random()*15)+0);
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
//////////////////////////////////////////////////////////////////////////////////////////////////
/*function hover()
{
	//var puzzleArea = $$("div#overall div#puzzlearea div");
	for (var i = 0 ; i <puzzdiv.length; i++)
	{
		this.addClassName('movablepiece');
	}*/
