let dropZone = document.getElementById("drop-zone")

  // Prevent default drag behaviors
  ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false)
    document.body.addEventListener(eventName, preventDefaults, false)
  })

  // Highlight drop area when item is dragged over it
  ;['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false)
  })

  ;['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false)
  })

// Handle dropped files
dropZone.addEventListener('drop', handleDrop, false)

function preventDefaults(e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  dropZone.classList.add('highlight')
}

function unhighlight(e) {
  dropZone.classList.remove('active')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles(files)
}

function handleFiles(files) {
  files = [...files]
  files.forEach(previewFile)
}

function previewFile(file) {
  console.log(file.name)
  let reader = new FileReader()
  let name = file.name
  reader.readAsDataURL(file)
  reader.onload = function () {
    // 新增一個div用來放入圖片
    let div = document.createElement('div')
    div.classList.add('uploadImage')

    // 新增一個div做為刪除的按鈕
    let deleteDiv = document.createElement('div')
    deleteDiv.classList.add('delete-img')

    // 新增一個img放入圖片本人
    // let img = document.createElement('img')
    // img.src = reader.result
    let span = document.createElement('span')
    span.textContent = name
    div.appendChild(deleteDiv)
    div.appendChild(span)
    document.getElementById('avatars').appendChild(div)

    deleteImages()

  }
}


// 圖片刪除功能
function deleteImages() {
  const deleteImg = document.querySelectorAll('.delete-img')
  deleteImg.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.target.parentElement.remove()
    })
  })

}