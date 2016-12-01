//Use NYT API to visualize the trending book categories
//Parse by category

//The URL for the JSON data
var apikey = "fa0c1f3a10524a6e9d54f92780f1d630";//for best selling books
var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
//var query =
  

function preload()
{
  json = loadJSON(url+query+"&api-key="+apiKey);
}//end of preload


function setup()
{
  createCanvas(400, 400);
}//end of setup

function draw() 
{
  background(102,255,388);//blue
  
  
}//end of draw




