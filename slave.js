$.getJSON('http://www.mocky.io/v2/594d18a61100008d23a3d25d',function(data){
		store(data);
	});

function store(data){
	console.log("hey");
	chrome.storage.local.set({"JSON_STRING":data},function()
		{
			console.log("saved sucessfully");
		});
}
function get(){
	
		chrome.storage.local.get("JSON_STRING",function(data)
		{
			var myArr=data;
			for(var i in myArr)
			{console.log(i);
				for(var j in myArr[i])
					console.log(j);
					console.log(myArr[i][j].title);
			}
		});
}
get();

var myIndex = 0;
var getJSON='[{"title":"Road Trip","year":"2000","url":"http:\/\/www.mymovierack.com\/show\/road-trip","backdrop":"\/6CvIM0Lp2gBppgoVoowqkyzhim7.jpg,\/nMql8efqLq5BubizOgxRlKrl5ri.jpg,\/bd37Q53FlDrjuSEfyNtF7ECNVdy.jpg,\/9yvKOIfXwPMg13qz0dLPVViCnT9.jpg,\/1u6L23WZRlJ9roNmzzbSgtKmuyC.jpg,\/vXT5Gw09k99o9XXqqxBPz9NKgsa.jpg,\/giQDUKiYAizK9DKwYuGaH8dyRAa.jpg"},{"title":"The Hangover","year":"2009","url":"http:\/\/www.mymovierack.com\/show\/the-hangover","backdrop":"\/39LohvXfll5dGCQIV9B9VJ16ImE.jpg,\/rl30cTC0C1cqOtXMHPOQenfZinl.jpg,\/hWVKbUWo7UcESN7E2jf7qgOMAe9.jpg,\/9bMd5gmFW4r56BdgAOY78rMlCUF.jpg,\/chkas43aa0KVdrd2mALYW2sYu4m.jpg,\/fPCm7jmlYQ3j1YHPA7cU36XdosE.jpg,\/xxKd56iFbMeRQARUosTGgxKxrnF.jpg,\/fH1yxcYJ8IB6rj3H2zJamsCZZ61.jpg,\/pTtIgNKkjGKX2s6EOCnlWzq6N3D.jpg,\/waGQKqVRDTdihRaIVm6m45fPBtp.jpg"},{"title":"The Descendants","year":"2011","url":"http:\/\/www.mymovierack.com\/show\/the-descendants","backdrop":"\/hqz7LxiEATVXgJZMWIHsnbLLAI5.jpg,\/bN6IiGpwhbEy7QTpFet6RJEpu7G.jpg,\/unMHEkcT41VDxXlxT8UX9kzoYMi.jpg,\/hYHTleQjrTnOU2iQaICiJFqWm6K.jpg,\/9MWp87V7egGeRGfauv23C7tIKPW.jpg,\/Aoig2MMDSdvMYNyV5c7lD5BusRk.jpg,\/2D1yW3VVOHVl5wiSCHR0ylZGDR2.jpg,\/4tcSkLQgwbUFjvdAVOp147P0KoW.jpg,\/2w9yK69jGKTA1HIb79OBICJdt7T.jpg,\/xr6cGqQ1NFEf5UZ8pP2uYmZhlr8.jpg,\/qKSEjFzUlkw5JQOZlOYMGiGsNcs.jpg,\/vYX2YcHXGu7rLd7KrUJQn2a0DSp.jpg,\/lCQundjtHNPsgYZiLgHdAvxUydy.jpg"},{"title":"The Big Bang Theory","year":"2007","url":"http:\/\/www.mymovierack.com\/show\/the-big-bang-theory","backdrop":""},{"title":"Kung Fu Panda","year":"2008","url":"http:\/\/www.mymovierack.com\/show\/kung-fu-panda","backdrop":"\/UJwhgwAxU42cm9XKncO9boFAEV.jpg,\/dWRy3NHHSjYP8bmuIyRebRg7wBz.jpg,\/iA5N8IBMpHKjZYDs1eDAszklPne.jpg,\/asYS6Nk4GQsawupu50XeG388UTq.jpg,\/wekK6HLUr58VyrZOFB7GU1HXlkW.jpg,\/8GS4K4u32NBnic1guiOQJqgZN86.jpg,\/rSL0kIydQyxf74n0rlcMsIegUBu.jpg,\/cyWxSTwai4D3FGYNfkjz3QtTPQI.jpg,\/4XBKM3cWk0pS20izLLWorVhp7Od.jpg,\/1xGYHCf4wuN41DK8YU4XdAxb3qy.jpg,\/rG0q85EkSXXHwfd3aDrKY2ka8lI.jpg"},{"title":"300","year":"2006","url":"http:\/\/www.mymovierack.com\/show\/300","backdrop":"\/oHOTQkTYgDuoCYMaBEzuB9DqguX.jpg,\/pDDMP33wHbbdE8uPQnY1o454bEc.jpg,\/pK3zjCLvP4iq1vqjPiTft0MjwXw.jpg,\/gMzVgnh1nfEaep00EdMBuC6pYRa.jpg,\/qbA5CtRVBWdJ1XMsbC21pyx0ZvT.jpg,\/oWHMkAjD2eVIOxwyPRw1JrPcnlz.jpg,\/h5e7MNspWUqxLjcgoGNzvh91FbZ.jpg,\/tGB68KQyS2ylfK7nIIerjoLn0sa.jpg,\/hni4p6kzg98NbHMYxp4LJ8GRmGZ.jpg,\/cxt4qxSVWGXFtOPbYFmsNJ32BU5.jpg,\/4Nbp5e1Ag36UoWONCslS8FhU4uk.jpg,\/lq4wBtfvV9l8ersO2tfaUWy4adr.jpg,\/wX7nSDUITmLon49qYfDWMTMi5fn.jpg,\/jLecPGdlcq8OyvtXO0uDlByRF57.jpg,\/eF2fwTGrgICNN1BAsrUYrlSRT9D.jpg"}]'; //storing JSON upon server request
var myJSON = '{"movies":'+getJSON+'}';
var myObj = JSON.parse(myJSON);

var duration=1;
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) 
	{
		if(x.length==1){
			myIndex=1;
		}
		else{
		myIndex = 2;
		}
	}    
    x[myIndex-1].style.display = "block"; 
    setTimeout(carousel, duration);
	duration=2000;
}
function update_data(x){
	console.log(x);
	x+=1;
	if(x>myObj.movies.length-1){
	x=0;
	}
	var title = myObj.movies[x].title;
	var year = myObj.movies[x].year;
	var url = myObj.movies[x].url;
	var backdrop_whole = myObj.movies[x].backdrop;
	var backdrop = backdrop_whole.split(",");
	for(var i=0;i<backdrop.length;i++){
	if(!(backdrop[i]=="")){
	var background='https://image.tmdb.org/t/p/w780'+backdrop[i];
	document.getElementById("image_generator").innerHTML+='<img class="mySlides" src= "'+background+'">';
	}}
	document.getElementById("url").action = url;
	document.getElementById("title").innerHTML = "<h1>"+title+" ("+year+")</h1>";
	chrome.storage.local.set({"serial_state":true,"serial_value":x},function(){
	console.log("new value updated successfully");
	});
	chrome.storage.local.get("serial_value",function(data){
		console.log(data.serial_value);
	});
	
}
function save_state(){
	
	chrome.storage.local.get("serial_state",function(data)
	{
		var flag;
		if(data.serial_state==true)
		{
				console.log("thats true");
				//get ini value
				chrome.storage.local.get("serial_value",function(data)
				{
				flag = data.serial_value;
				update_data(flag);
				});	
		}
		else
		{		
				//set ini value
				chrome.storage.local.set({"serial_state":true,"serial_value":0},function(){
				console.log("saved serial state successfully");
				update_data(-1);
				});
					
		}
		carousel();
			
	});
	
}
//chrome.storage.local.clear(function(){
//console.log("cleared successfully");
//});
save_state();
