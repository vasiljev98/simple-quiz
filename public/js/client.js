$( document ).ready( ()=>{
	appendQuestion('Сколько у тебя свободного времени в день?', 'timing', ['1 час','2 часа','3 часа', 'Больше четырех часов'])
	appendQuestion('Сколько ты сейчас зарабатываешь в месяц?', 'salary', ['100 рублей','тыщу','сто тыщ', 'Миллион'])
	appendQuestion('Сколько ты в месяц можешь откладывать денег?', 'deposit', ['100 рублей','тыщу','сто тыщ'])

	// $('#start-quiz').bind('click', ()=> {
	// 	alert('Started');
	// });

})


appendQuestion =(header, name, ansArray)=>{ 
	var code = `<h4 class="quiz-header">${header}</h4>
	<div class="col-sm-10">`
	for(i in ansArray){
    		code += `<div class="form-check">
			<label class="form-check-label">
				<input class="form-check-input" type="radio" name="${name}" id="${name}${i}" value="${i}">
				${ansArray[i]}
			</label>
		</div>`
	}	
	code += '</div>'	
	$('#quiz').append(code)

}