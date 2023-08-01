const tbody = document.querySelector('tbody')
const addSalaryRecordBtn = document.querySelector('.addSalaryRecord-btn')
const contentRight = document.querySelector('.content-right')
const faTrash = document.querySelector('.fa-trash')

contentRight.addEventListener('click', function (event) {

  if (event.target.matches('.addSalaryRecord-btn') || event.target.matches('.fa-plus') || event.target.matches('.addSalaryRecord')) {
    let tr = document.createElement('tr')
    tr.className = 'salary-record'
    tr.innerHTML = `
	<td data-label="開始時間">
		<div class="input-group">
			<input class="salary-date" name="fDate[]">
			<i class="fa fa-calendar" aria-hidden="true"></i>
		</div>
	</td>
	<td data-label="本薪"><input type="text" name="fSalary[]"></td>
	<td data-label="職務加給"><input type="text" name="fExtra[]"></td>
	<td data-label="合計薪資"><input type="text" name="fTotal[]"></td>
	<td data-label="刪除"><i style="cursor: pointer;" onClick="$(this).closest('tr.salary-record').remove();" class="fas fa-trash-alt"></i></td>
    `
    tbody.append(tr)

    // 新增薪資格子後也要偵測到時間
    $(function () {
      $("#datepicker, #datepicker2, .salary-date").datetimepicker({
        locale: "zh-tw",
        ignoreReadonly: true,
        format: "YYYY-MM-DD",
      });
    });

  }


  // 點選"刪除"按鈕 
  // 若有disable類別者，不得刪除
  const salaryRecord = document.querySelectorAll('.salary-record')
  if (event.target.matches('.fa-trash') && !event.target.matches('.disable')) {
    event.target.parentElement.parentElement.remove()
  }

  //ifsalaryRecordOnly()


})
