//wait for document to be ready
$(document).ready(function(){
  
  //click New Quote button when page loads
 $(function(){ document.getElementById('newQuote').click();
             });
  
  //function to start on click of New Quote button
  $("#newQuote").on("click", function(){
   
    //extract JSON file containing quotes
 $.getJSON("https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json", function(json){

   //create empty variable to store HTML text
   var htmlCode = "";
   //create empty arrays to store quote, source and context from json file
   var jsonquote = [];
   var jsonsource =[];
   var jsoncontext =[];
  
   //loop through each value in json file   
   json.forEach(function(val){
   
     //add each quote to jsonquote array 
jsonquote.push(val["quote"]);

     //add each source to jsonsource array 
     jsonsource.push(val["source"]);
  
// add each context to jsoncontext array
     jsoncontext.push(val["context"]);
     
     });

//create random variable with max corresponding to length of jsonquote array 
   var random = Math.floor(Math.random()*jsonquote.length);
   
     //htmlCode variable updated with content and relevant html elements   
     htmlCode = "<div class='title'>" +'"' + jsonquote[random] + '"' +"</div>"+ "<div class='author'>- "+ jsonsource[random]+", "+"<em>"+jsoncontext[random]+"</em>"+ "</div>";
      
   //Class title elements' HTML updated with content of htmlCode
      $(".title").html(htmlCode);
   
 // create variable which contains twitter URL containing quote, source and context
   var html2 ='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22' + jsonquote[random] + '%22%20'+ jsonsource[random]+',%20'+jsoncontext[random];
   
  //assign URL to href element in Twitter button
document.getElementById('twit').setAttribute('href', html2);  
    });
   
    //extract JSON file containing colors 
$.getJSON("https://raw.githubusercontent.com/zeplin/zeplin-palette/master/colors.json", function(json2){
      
   //create array containing list of colors from JSON file
      var color = Object.keys(json2);
      //create random number with max equal to number of colors in "color" array
      var random2 = Math.floor(Math.random()*color.length);
      //create variable with occurences of class "changeColor" in HTML
      var mycolor = document.querySelectorAll(".changeColor");
  
     //loop to change background color and border color of all elements with class ".changeColor" in HTML
     for (var i=0;i<mycolor.length;i++) { 
       mycolor[i].style.backgroundColor = color[random2];
                                   mycolor[i].style.borderColor = color[random2];
     };
       
       //change color of text according to background color
       var mytextcolor = document.querySelector(".title");
       mytextcolor.style.color = color[random2];
                                   
    });  
  });
});

//https://raw.githubusercontent.com/zeplin/zeplin-palette/master/colors.json

//https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json