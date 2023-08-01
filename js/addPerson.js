const employeeWrap0 = document.querySelectorAll('.employee-wrap')[0]
const employeeWrap1 = document.querySelectorAll('.employee-wrap')[1]

const projectReview = document.querySelector('.project-review')

let faMinusSales = document.querySelectorAll('.fa-minus-sales')
let faMinusDesign = document.querySelectorAll('.fa-minus-design')
let addSales = document.querySelector('.addSales')

// 偵測業務是否只剩一個, 若是, 要將減號disable
ifSalesMinusOnly()
function ifSalesMinusOnly() {
	
	return false;
	
  const employeSalesWrapInner = document.querySelectorAll('.employeeSales-wrap-inner')
  if (employeSalesWrapInner.length === 1) {
    employeSalesWrapInner[0].children[1].style.color = "#ddd"

    //若剩一個select, 要加上required
    employeSalesWrapInner[0].children[0].required = true
  } else if (employeSalesWrapInner.length > 1) {
    faMinusSales.forEach(item => {
      employeSalesWrapInner[0].children[1].style.color = "#5c5c5c"

    })
  }
}


// 偵測設計是否只剩一個, 若是, 要將減號disable
ifDesignMinusOnly()
function ifDesignMinusOnly() {
  const employeDesignWrapInner = document.querySelectorAll('.employeeDesign-wrap-inner')
  if (employeDesignWrapInner.length === 1) {
    employeDesignWrapInner[0].children[1].style.color = "#ddd"
    //若剩一個select, 要加上required
    employeDesignWrapInner[0].children[0].required = true
  } else if (employeDesignWrapInner.length > 1) {
    faMinusDesign.forEach(item => {
      employeDesignWrapInner[0].children[1].style.color = "#5c5c5c"

    })
  }
}
projectReview.addEventListener('click', function addPersnnel(event) {

  //⭐️點選“新增業務”按鈕, 新增一位業務
  if (event.target.matches('.addSales') || event.target.matches('.fa-plus-sales') || event.target.matches('.addPersonSales')) {
    let div = document.createElement('div')
    div.className = 'employeeSales-wrap-inner'
    div.innerHTML = `
    <select class="designer custom-select" name="employee">
      <option value="" disabled selected>請選擇負責業務...</option>
      <option value="Sigur">
        Sigur
      </option>
      <option value="Ism">
        Ism
      </option>
      <option value="Yanhua">
        Yanhua
      </option>
    </select> 
		<i aria-hidden="true" class="fa fa-minus fa-minus-sales"></i>
    <div class="invalid-tooltip addPreson">
    此欄位必須選擇一項
    </div>
		`
    employeeWrap0.insertBefore(div, employeeWrap0.lastElementChild)

  }

  // 如果點選"刪除"按鈕 & 業務數量>1, 可以刪除
  // 如果業務只剩下1位, 則不能刪除
  const employeSalesWrapInner = document.querySelectorAll('.employeeSales-wrap-inner')
  if (event.target.matches('.fa-minus-sales') && employeSalesWrapInner.length > 1) {
    event.target.parentElement.remove()
  }
  ifSalesMinusOnly()


  //⭐️點選“新增設計”按鈕, 新增一位設計
  if (event.target.matches('.addDesign') || event.target.matches('.fa-plus-design') || event.target.matches('.addPersonDesign')) {
    let div = document.createElement('div')
    div.className = 'employeeDesign-wrap-inner'
    div.innerHTML = `
    <select class="designer custom-select" name="fOther[]">
      <option value="" disabled selected>請選擇協助設計...</option>
      <option value="Sigur">
        Sigur
      </option>
      <option value="Ism">
        Ism
      </option>
      <option value="Yanhua">
        Yanhua
      </option>
    </select> 
		<i aria-hidden="true" class="fa fa-minus fa-minus-design"></i>
    <div class="invalid-tooltip addPreson">
    此欄位必須選擇一項
    </div>
		`
    employeeWrap1.insertBefore(div, employeeWrap1.lastElementChild)

  }

  // 如果點選"刪除"按鈕 & 設計師數量>1, 可以刪除
  // 如果設計師只剩下1位, 則不能刪除
  const employeDesignWrapInner = document.querySelectorAll('.employeeDesign-wrap-inner')
  if (event.target.matches('.fa-minus-design') && employeDesignWrapInner.length > 1) {
    event.target.parentElement.remove()
  }
  ifDesignMinusOnly()
})
