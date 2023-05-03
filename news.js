function news(){
	var inputText= document.getElementById("text");
	var inputAuthor= document.getElementById("author");
	localStorage.setItem("text", inputText.value);
	localStorage.setItem("author", inputAuthor.value);
	alert("Успешно добавлено!")
	const newsText = document.getElementById('news-text')
	const newsAuthor = document.getElementById('news-author')
	newsText.innerText = localStorage.getItem("text")
	newsAuthor.innerText = localStorage.getItem("author")

   }
function clearfield() {
	alert("Поле успешно очищено")
}
function clearnews() {
	alert("Новость успешно удалена.")
	localStorage.removeItem("text")
	localStorage.removeItem("author")

}
function boom() {
	document.write("ERROR 404 <br> Сайт не найден! <br> Обновите позже или попробуйте страницу.")
}
