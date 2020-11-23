var output="";
var result=0;
function validate()
{
 
  var Quantity= document.getElementById('fquant').value;
  var Goals= document.getElementById('lgoal').value;	
  if(Goals!=""&&Quantity!="")
  {
	if(isNaN(Quantity))
	{
		alert("In space quantity exists a letter, please correct it");
	}else
	{
		if(isNaN(Goals))
		{
			alert("In space goals exists a letter, please correct it");
		}else
		{
			result=100/Goals*Quantity;
			output=result.toString();
			update();
		}
	}
  }
}

function update() 
{ 
  var Quantity= document.getElementById('fquant').value;
  var Goals= document.getElementById('lgoal').value;
  result=100/Goals*Quantity;
  if(result<100)
  {
	  var element = document.getElementById("myprogressBar");    
	  var width = 1; 
	  var identity = setInterval(scene, 10); 
	  function scene() 
	  { 
		if (width >= result) { 
		  clearInterval(identity); 
		} else 
		{ 
		  width++;  
		  element.style.width =  width + '%';  
		  document.getElementById("countNumber").innerHTML=width + '%';
		}
	  }
  }
} 

function myHideShow()
{
	var x = document.getElementById("Progress_Status");
	  if (x.style.display === "none") {
		x.style.display = "block";
	  } else {
		x.style.display = "none";
	  }  
}

function clearAll()
{
	alert("Cleaning results");
	document.getElementById("fquant").value="";
	document.getElementById("lgoal").value="";
	document.getElementById("countNumber").innerHTML=1 + '%';
	document.getElementById("myprogressBar").style.width =  1+ '%';
}