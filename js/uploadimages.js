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
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    let div = document.createElement('div')
    div.classList.add('content-bo-add-element')

    let deleteDiv = document.createElement('div')
    deleteDiv.classList.add('delete-img')
    
    let img = document.createElement('img')
    img.src = reader.result
    
    div.appendChild(deleteDiv)
    div.appendChild(img)
    document.getElementById('avatars').appendChild(div)

    deleteImages()
  }
}





function handleInvoice(files) {
  files = [...files]
  files.forEach(previewInvoice)
}

function previewInvoice(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    let div = document.createElement('div')
    div.classList.add('content-bo-add-element', 'invoice')
    let deleteDiv = document.createElement('div')
    deleteDiv.classList.add('delete-img', 'invoice')
    let img = document.createElement('img')
    img.src = reader.result
    div.appendChild(deleteDiv)
    div.appendChild(img)
    document.getElementById('avatars').appendChild(div)

    deleteImages()
  }
}






function deleteImages() {
  const deleteImg = document.querySelectorAll('.delete-img')
  deleteImg.forEach(function (btn) {
    console.log(btn)
    btn.addEventListener('click', function (event) {
      console.log(event.target)
      event.target.parentElement.remove()
    })
  })

}


