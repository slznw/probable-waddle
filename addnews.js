function addnews(){
	var inputText= document.getElementById("text");
	localStorage.setItem("text", inputText.value);
   alert("Успешно добавлено!")
   }
function getnews() {
	localStorage.getItem("text")
	console.log("Обновлено!");
}