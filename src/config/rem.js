(function () {
  var html = document.documentElement
  function onWindowResize () {
    html.style.fontSize = html.getBoundingClientRect().width / 20 + 'px'
  }
  window.addEventListener('resize', onWindowResize)
  onWindowResize()
})()

/*(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 640) {
      docEl.style.fontSize = '1rem'
    } else {
      docEl.style.fontSize = 1 * (clientWidth / 640) + 'rem'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)*/
