
const contentLeave = document.querySelector('.content-leave')
const tbody = document.querySelector('tbody')

contentLeave.addEventListener('click', function (event) {
  //點選“新增窗口”按鈕, 新增一位空白聯絡人
  if (event.target.matches('.fa-plus') || event.target.matches('.addContact') || event.target.matches('.addPersonContact')) {
    let tr = document.createElement('tr')
    tr.className = 'contact-person'
    tr.innerHTML = `
	        <td data-label="中文姓名"><input type="text" name="fContactName[]"></td>
				<td data-label="英文姓名"><input type="text" name="fContactNameEng[]"></td>
				<td data-label="職稱"><input type="text" name="fContactTitle[]"></td>
				<td data-label="分機"><input type="text" name="fContactExt[]"></td>
				<td data-label="行動電話"><input type="tel" name="fContactPhone[]"></td>
				<td data-label="mail"><input type="email" name="fContactEmail[]"></td>
				<td data-label="狀態">
					<select name="fContactState[]">
						<option value="">請選擇</option>
						<option>在職中</option>
						<option>產假中</option>
						<option>離職</option>
					</select>
				</td>
				<td data-label="特殊備註"><input type="text" name="fContactNote[]" ></td>
				<td data-label="刪除"><i style="cursor: pointer;" onClick="$(this).closest('tr.contact-person').remove();" class="fas fa-trash-alt"></i></td>
			`
    tbody.append(tr)
  }


  // 如果點選"刪除"按鈕 & 聯絡人數量>1, 可以刪除
  // 如果聯絡人只剩下1位, 則不能刪除
  const contactPerson = document.querySelectorAll('.contact-person')
  if (event.target.matches('.fa-trash') && !event.target.matches('.disable')) {
    event.target.parentElement.parentElement.remove()
  }


  //ifContactPersonOnly()
})


