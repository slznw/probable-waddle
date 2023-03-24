		var news = document.getElementsByName('text').value;
		function addnews() {
			localStorage.setItem("news", news.value )
			console.log('Записал');
		} 