var content = document.getElementById("content");
var jsData = JSON.parse(data);
console.log(jsData)
for (i = 0; i < jsData.length; i++) {
	content.children[i].children[1].innerHTML = 
	jsData[i].author + ": " + jsData[i].title + ". Read: " + jsData[i].read;
};