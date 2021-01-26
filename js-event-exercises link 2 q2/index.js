thumbs.onclick = function(event) {
  let target = event.target
  let link = target.closest('a')
  if (!link) return
  let href = link.getAttribute('href')
  largeImg.src = href
  event.preventDefault()
}