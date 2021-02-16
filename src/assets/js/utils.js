// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num

const calcWinsize = () => {
  return { width: window.innerWidth, height: window.innerHeight }
}

// Gets the mouse position
const getMousePos = (e) => {
  let posx = 0
  let posy = 0
  if (!e) e = window.event
  if (e.pageX || e.pageY) {
    posx = e.pageX
    posy = e.pageY
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }

  return { x: posx, y: posy }
}

const distance = (x1, y1, x2, y2) => {
  var a = x1 - x2
  var b = y1 - y2

  return Math.hypot(a, b)
}

// Generate a random float.
const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2)

const getWindowWidth = () => {
  if (document.compatMode === 'CSS1Compat') {
    return document.documentElement.clientWidth
  } else {
    return document.body.clientWidth
  }
}

const getWindowHeight = () => {
  if (document.compatMode === 'CSS1Compat') {
    return document.documentElement.clientHeight
  } else {
    return document.body.clientHeight
  }
}

const antiClick = (fn, el, ...args) => {
  if (el.getAttribute('data-have-click') === 'true') {
    return
  }
  const time = el.getAttribute('data-time') * 1 || 400
  setTimeout(() => {
    el.setAttribute('data-have-click', 'false')
  }, time)
  el.setAttribute('data-have-click', 'true')
  fn.call(this, ...args)
}

const randomFloat = (min, max) => parseFloat(Math.min(min + (Math.random() * (max - min)), max).toFixed(2))

export {
  map,
  lerp,
  randomNumber,
  clamp,
  calcWinsize,
  getMousePos,
  distance,
  getRandomFloat,
  randomFloat,
  getWindowWidth,
  getWindowHeight,
  antiClick
}
