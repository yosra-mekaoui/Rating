var count = 0;

function result(){
	if(count != 0){
		document.getElementById('result').innerHTML = 
		"<h4>Rating: <label class='text-primary'>" + count + "</label></h4>"
		+ "<h4>Review</h4>"
		+ "<p>"+document.getElementById("review").value+"</p>";
	}else{
		
	}
}

function startRating(item){
	count=item.id[0];
	sessionStorage.star = count;
	for(var i=0;i<5;i++){
		if(i<count){
			document.getElementById((i+1)).style.color="yellow";
		}
		else{
			document.getElementById((i+1)).style.color="black";
		}
	}
}