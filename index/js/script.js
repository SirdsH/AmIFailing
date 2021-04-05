$(document).ready(function(){
	$('#add').on('click', function(){
		var newField = $('<br /><input type="number" placeholder="Enter a number" class="form-control grade" min="0" max="100"/>');
		newField.appendTo($('#data'));
	});
	
	$('#reset').on('click', function(){
		window.location = "index.html";
	});
	
	$('#calculate').on('click', function(){
		var grades = [];
		$('.grade').each(function(){
			if($(this).val() == ""){
				return false;
			}

			grades.push($(this).val());
		});
		
		var sum = eval(grades.join('+')), avg = sum / grades.length;
		if(avg >= 75){
			$('#result').html("<center>You're grade is "+ avg.toFixed(0) +" You passed!</center>");
		}else if(avg < 75){
			$('#result').html("<center>You're grade is "+ avg.toFixed(0) +" You failed!</center>");
		}
		if (avg > 100){
			$('#result').html("<center>Please enter numbers between 0-100!</center>");
		}
	});
});