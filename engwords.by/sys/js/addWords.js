$(document).ready(function(){
	var nextid = 1;
	$('#addWordInp').click(function(){
		$('#addwordsform').append('\
			<div class="newword" id="newword_'+(nextid)+'">\
				<input type="text" name="eng_'+(nextid)+'" placeholder="word" maxlength="20" required>\
				<input type="text" name="rus_'+(nextid)+'" placeholder="перевод" maxlength="20" required>\
			</div>'
		);
		nextid++;
	});
	$('#sendWords').click(function(){
		//$('#addwordsform').submit();

		var words = {};
		$('#addwordsform').find ('input').each(function() {
			words[this.name] = $(this).val();
		});

		$.ajax({
			type:'POST',
			url:'/api/api.index.php?func=addWords',
			data: words,
			success: function(msg) {
				if(msg > 0)
					showMessage('.success', 'Слова успешно добавлены!', 1000);
				else
					showMessage('.error', 'Ошибка добавления!', 1000);
			}
		});
	});
});