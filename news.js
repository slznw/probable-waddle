function news_script1() {
	var inputText = document.getElementById("text");
	var inputAuthor = document.getElementById("author");
	localStorage.setItem("text", inputText.value);
	localStorage.setItem("author", inputAuthor.value);
	alert("Успешно добавлено!")
	const newsText = document.getElementById('news-text')
	const newsAuthor = document.getElementById('news-author')
	newsText.innerText = localStorage.getItem("text")
	newsAuthor.innerText = localStorage.getItem("author")
}
function news_script2() {
	var inputText2 = document.getElementById("text");
	var inputAuthor2 = document.getElementById("author");
	localStorage.setItem("text2", inputText2.value);
	localStorage.setItem("author2", inputAuthor2.value);
	alert("Успешно добавлено!")
	const newsText2 = document.getElementById('news-text2')
	const newsAuthor2 = document.getElementById('news-author2')
	newsText2.innerText = localStorage.getItem("text2")
	newsAuthor2.innerText = localStorage.getItem("author2")

}
function news_script3() {
	var inputText3 = document.getElementById("text");
	var inputAuthor3 = document.getElementById("author");
	localStorage.setItem("text3", inputText3.value);
	localStorage.setItem("author3", inputAuthor3.value);
	alert("Успешно добавлено!")
	const newsText3 = document.getElementById('news-text3')
	const newsAuthor3 = document.getElementById('news-author3')
	newsText3.innerText = localStorage.getItem("text3")
	newsAuthor3.innerText = localStorage.getItem("author3")

}
function news_script4() {
	var inputText4 = document.getElementById("text");
	var inputAuthor4 = document.getElementById("author");
	localStorage.setItem("text4", inputText4.value);
	localStorage.setItem("author4", inputAuthor4.value);
	alert("Успешно добавлено!")
	const newsText4 = document.getElementById('news-text4')
	const newsAuthor4 = document.getElementById('news-author4')
	newsText4.innerText = localStorage.getItem("text4")
	newsAuthor4.innerText = localStorage.getItem("author4")

}
function news_script5() {
	var inputText5 = document.getElementById("text");
	var inputAuthor5 = document.getElementById("author");
	localStorage.setItem("text5", inputText5.value);
	localStorage.setItem("author5", inputAuthor5.value);
	alert("Успешно добавлено!")
	const newsText5 = document.getElementById('news-text5')
	const newsAuthor5 = document.getElementById('news-author5')
	newsText5.innerText = localStorage.getItem("text5")
	newsAuthor5.innerText = localStorage.getItem("author5")

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
