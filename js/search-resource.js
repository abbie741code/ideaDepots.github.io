const menuCover = document.querySelector('#menu-cover')
const box = document.querySelector('#box')
const header = document.querySelector('header')
const searchKeyword = document.querySelector('.search-keyword')
const bowSearch = document.querySelector('.bow-search')

// 點下搜尋框跑出來的關鍵字
menuCover.addEventListener('click', function (event) {
  // 如果點的是搜尋框，就跳出搜尋列
  if (event.target.classList.contains('search-keyword-text')) {
    searchKeyword.classList.add('display')
    bowSearch.classList.add('display')
    box.style.display = 'none'
  }
  // 如果點的是搜尋框以外的地方 或 點的是搜尋框黑底，就隱藏搜尋列
  else if (event.target.classList.contains('search-out') || event.target.classList.contains('bow-search')) {
    searchKeyword.classList.remove('display')
    bowSearch.classList.remove('display')
    box.style.display = 'block'
  }
})
// 如果點的是header，就隱藏搜尋列
header.addEventListener('click', function (event) {
  searchKeyword.classList.remove('display')
  bowSearch.classList.remove('display')
  box.style.display = 'block'
})

const keywordRangeDetail3 = document.querySelector('.keyword-range-detail3')
let keywordArr3 = [
  {
    "name": "內部公告",
    'id': 6001,
  },
  {
    "name": "影片教學",
    'id': 6002,
  },
  {
    "name": "線上課程",
    'id': 6003,
  },
  {
    "name": "設計素材",
    'id': 6004,
  }
]
// render關鍵字到選項裡
let keywordBtnHtml3 = ''
keywordArr3.forEach((keyword) => {
  console.log(keyword)
  keywordBtnHtml3 += `
    <label class="keywordBtnWrap">
      <input type="checkbox" name="${keyword.id}" id="${keyword.id}" class="keywordInput">
      <span class="keywordBtn">
      ${keyword.name.trim()}
      </span>
    </label>
  `
})
keywordRangeDetail3.innerHTML = keywordBtnHtml3



// 選取所有的關鍵字
let keywordRangeDetail = document.querySelectorAll('.keyword-range-detail .keywordBtnWrap input')
// console.log('keywordRangeDetail', keywordRangeDetail)


// 檢查所有的關鍵字, 如果被點選的話...
keywordRangeDetail.forEach(isClick => {
  isClick.addEventListener('click', function () {
    renderSearch()
  })
})
// 被點選的關鍵字們要放到搜尋框裡
function renderSearch() {

  // 被點選的關鍵字們的input
  const keywordRangeDetailClick = document.querySelectorAll('.keyword-range-detail .keywordBtnWrap input:checked')


  // 搜尋框本人
  const searchKeywordPickWrap = document.querySelector('.search-keyword-pick-wrap')

  // 插入搜尋框的html
  let searchKeywordHtml = ''

  //將關鍵字的資訊內容放進html
  keywordRangeDetailClick.forEach((clicked) => {
    searchKeywordHtml += `
      <label class="keywordBtnWrap">
        <input type="checkbox" name="${clicked.name}" id="" class="keywordInput" checked>
        <span class="keywordBtn isChecked">
        ${clicked.nextElementSibling.innerText}
        <i class="fa fa-times" aria-hidden="true"></i>
        </span>
      </label>
     `
  })
  // console.log(searchKeywordHtml)
  //最後加上搜尋的input
  searchKeywordHtml += `
    <input type="text" class="search-keyword-text" id="search-keyword-text" name="search-keyword-text" placeholder="請點選下方關鍵字或自行輸入...">
  `
  searchKeywordPickWrap.innerHTML = searchKeywordHtml


  //宣告位於搜尋框裡的關鍵字們
  let keywordInputInSearch = document.querySelectorAll('.search-keyword-pick-wrap .keywordInput')

  //宣告所有的關鍵字們
  let keywordInputAll = document.querySelectorAll('.keywordInput')

  //偵測搜尋框裡的關鍵字們
  keywordInputInSearch.forEach(input => {

    //點選了搜尋框裡的關鍵字們，若取消checked，就將所有的同名關鍵字一併取消checked
    input.addEventListener('change', function (e) {
      if (e.target.checked === false) {

        keywordInputAll.forEach(keywordInput => {

          if (keywordInput.name === e.target.name) {
            // console.log(555)
            keywordInput.checked = false

            // 完成以後要再重新跑renderSearch讓他可以再繼續偵測下一次
            renderSearch()
          }

        })

      }
    })

  })
}