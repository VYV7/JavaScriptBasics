// canvas related code
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics


const canvas = document.querySelector('.myCanvas') // store reference to canvas
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

// get reference (context) to the drawing area
// ctx contains a CanvasRenderingContext2D object
// all drawing will involve manipulating this object
const ctx = canvas.getContext('2d')

// set background to black by drawing a rectangle covernig entire area
ctx.fillStyle = 'rgb(0, 0, 0)'
ctx.fillRect(0, 0, width, height)

// add a red rectangle
ctx.fillStyle = 'rgb(255, 0, 0)'
ctx.fillRect(50, 50, 100, 150)
// add a green rectangle
ctx.fillStyle = 'rgb(0, 255, 0)'
ctx.fillRect(75, 75, 100, 100)
// add a transparent rectangle
ctx.fillStyle = 'rgba(255, 0, 255, 0.75)'
ctx.fillRect(25, 100, 175, 50)


// Up next:  Strokes and line widths
console.log(canvas)
