function news_script1(){
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
   function news_script2(){
	var inputText2= document.getElementById("text2");
	var inputAuthor2= document.getElementById("author2");
	localStorage.setItem("text", inputText2.value);
	localStorage.setItem("author", inputAuthor2.value);
	alert("Успешно добавлено!")
	const newsText2 = document.getElementById('news-text2')
	const newsAuthor2 = document.getElementById('news-author2')
	newsText2.innerText = localStorage.getItem("text2")
	newsAuthor2.innerText = localStorage.getItem("author2")

   }
   function news_script3(){
	var inputText3= document.getElementById("text3");
	var inputAuthor3= document.getElementById("author3");
	localStorage.setItem("text", inputText3.value);
	localStorage.setItem("author", inputAuthor3.value);
	alert("Успешно добавлено!")
	const newsText3 = document.getElementById('news-text3')
	const newsAuthor3 = document.getElementById('news-author3')
	newsText3.innerText = localStorage.getItem("text3")
	newsAuthor3.innerText = localStorage.getItem("author3")

   }
function clearfield() {
	alert("Поле успешно очищено")
}
function clearnews() {
	localStorage.removeItem("text")
	localStorage.removeItem("author")
	alert("Новость успешно удалена.")
	const newsText = document.getElementById('news-text')
	const newsAuthor = document.getElementById('news-author')
	newsText.innerText = "Текст новости"
	newsAuthor.innerText = "Автор новости" 

}
function boom() {
	document.write("ERROR 404 <br> Сайт не найден! <br> Обновите позже или попробуйте страницу.")
}
