

if(typeof($.validator)!=="undefined"){
	
	$.validator.setDefaults({
		errorElement: 'div',
		errorPlacement: function (error, element) {
		  error.addClass('invalid-tooltip');
		  element.closest('.form-control').append(error);
			//(error).insertAfter(element.closest('.form-control'));
		},
		highlight: function (element, errorClass, validClass) {
		  $(element).addClass('is-invalid');
		},
		unhighlight: function (element, errorClass, validClass) {
		  $(element).removeClass('is-invalid');
		  $(element).addClass('is-valid');
		},
		submitHandler: function(form) {
			form.submit();
		}	
	});
	
	// 身份證字號
	$.validator.addMethod("lettersOnly", function(value, element){ 
		 return this.optional(element) || /^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$/i.test(value);
	}, "只能輸入中英文字");	

	
	// 輸入內容中不可有空白字元
	$.validator.addMethod("noSpace", function(value, element) { 
		if(value){
		  return value.match(/\s+/g)==null;
		}else{
		  return false;
		}
	}, "輸入內容中不可有空白字元");	
	
	//手機
	$.validator.addMethod("validPhone", function(value, element) { 
		if(value){
		  let regex = /^09[0-9]{8}$/;
		  return regex.test(value);
		}else{
		  return false;
		}
	}, "請輸入正確的手機號碼");	
	
	//EMAIL
	$.validator.addMethod("validEmail", function(value, element) { 
		if(value){
		  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		  return regex.test(value);
		}else{
		  return false;
		}
	}, "請輸入有效的電子郵件");	
	
	$.extend($.validator.messages, {
		required: "此欄位必須填寫",
		remote: "請修正此欄位",
		email: "請輸入有效的電子郵件",
		url: "請輸入有效的網址",
		date: "請輸入有效的日期",
		dateISO: "請輸入有效的日期 (YYYY-MM-DD)",
		number: "請輸入正確的數值",
		digits: "只可輸入數字",
		creditcard: "請輸入有效的信用卡號碼",
		equalTo: "不相符，請重複輸入一次",
		accept: "請輸入有效的副檔名",
		maxlength: $.validator.format("最多輸入 {0} 個字"),
		minlength: $.validator.format("最少輸入 {0} 個字"),
		rangelength: $.validator.format("請輸入長度為 {0} 至 {1} 之間的字串"),
		range: $.validator.format("請輸入 {0} 至 {1} 之間的數值"),
		max: $.validator.format("請輸入不大於 {0} 的數值"),
		min: $.validator.format("請輸入不小於 {0} 的數值")
	});	
}