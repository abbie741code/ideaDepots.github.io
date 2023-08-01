const inputKeyword = document.querySelector('.input-keyword')
const inputKeywordBtn = document.querySelector('.input-keyword-btn')
const inputKeywordDist = document.querySelector('.input-keyword-dist')


// 當輸入區被按下鍵盤時
inputKeyword.addEventListener('keyup', function(){
	// 當按下的盤是enter時
    if(event.keyCode == 13) {
    	inputKeywordSetting()
    }
})

inputKeywordBtn.addEventListener("click", inputKeywordSetting)

function inputKeywordSetting(){
	let arr = new Array();
    if(inputKeyword.value.trim().length > 0){
        const A = document.createElement('a')
        A.innerHTML = `${inputKeyword.value}
                        <i class="fa fa-times" aria-hidden="true"></i>
                        `
        A.setAttribute('href', 'javascript:;');
		A.setAttribute('data-val', inputKeyword.value);
        A.classList.add('inputKeyword-pick')
		//$("input[name='fKeyword']").val(inputKeyword.value);
        inputKeywordDist.appendChild(A);
        inputKeyword.value = '';
        inputKeywordDele();
		$("a.inputKeyword-pick").each(function(){
			arr.push($(this).data("val"));
		});
		$("input[name='fKeyword']").val(arr.join());
    }

}

inputKeywordDele()

function inputKeywordDele(){
    let inputKeywordPickAll = document.querySelectorAll('.inputKeyword-pick')
    let inputKeywordPick = document.querySelector('.inputKeyword-pick')
	console.log("del");
    inputKeywordPickAll.forEach(function(inputKeywordPick){
        inputKeywordPick.addEventListener('click', function(){
            if(event.target.tagName === 'A'){
                event.target.remove()
            }else if(event.target.tagName === 'I'){
                event.target.parentElement.remove()
            }
			let arr=new Array();
			$("a.inputKeyword-pick").each(function(){
				arr.push($(this).data("val"));
			});
			console.log(arr);
			$("input[name='fKeyword']").val(arr.join());
			
        })
    })
	
	
}