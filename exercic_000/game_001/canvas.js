var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth - 10
canvas.height = window.innerHeight - 10

var c = canvas.getContext('2d')

/// SQUARES
// c.fillStyle = "rgba(255, 0, 0, 0.5)"
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = "rgba(0, 0, 255, 0.5)"
// c.fillRect(400, 100, 100, 100)
// c.fillStyle = "rgba(0, 255, 0, 0.5)"
// c.fillRect(300, 300, 100, 100)
// console.log(canvas)

// /// LINES
// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = "#ff0000"
// c.stroke()

// /// ARC / CIRCLE
// for (let nI = 0; nI < 100; nI++) {
//     var xI = Math.random() * window.innerWidth
//     var yI = Math.random() * window.innerHeight
//     c.beginPath()
//     c.arc(xI, yI, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = '#0000FF'
//     c.stroke()
// }

var minRadius = 2
var maxRadius = 40
var mouse = {
    xI: undefined,
    yI: undefined
}
var colorArray = ['#FF00FF', '#FF0000', '#00FF00', '#0000FF', '#00FFFF']

window.addEventListener('mousemove', function (event) {
    mouse.xI = event.x
    mouse.yI = event.y
    // console.log(mouse)
})

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth - 10
    canvas.height = window.innerHeight - 10

})

function Circle(xI, yI, wI, hI, radius) {
    this.xI = xI
    this.yI = yI
    this.wI = wI
    this.hI = hI
    this.radius = radius
    // this.minRadius = radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function () {
        c.beginPath()
        c.arc(this.xI, this.yI, this.radius, 0, Math.PI * 2, false)
        // c.strokeStyle = '#FFFF00'
        // c.stroke()
        c.fillStyle = this.color
        c.fill()
    }

    this.update = function () {
        if (this.xI + this.radius > innerWidth || this.xI - this.radius < 0) {
            this.wI = -this.wI
        }

        if (this.yI + this.radius > innerHeight || this.yI - this.radius < 0) {
            this.hI = -this.hI
        }

        this.xI += this.wI
        this.yI += this.hI

        /// INTERACTIVITY
        if ((mouse.xI - this.xI) < 50 && (mouse.xI - this.xI) > -50 && (mouse.yI - this.yI) < 50 && (mouse.yI + this.yI) > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1
            }
        } else if (this.radius > minRadius) {
            this.radius -= 1
        }

        this.draw()

    }
}


var circleArray = []
for (let nI = 0; nI < 800; nI++) {

    var radius = Math.random() * 3 + 1
    var xI = Math.random() * (window.innerWidth - (radius * 2)) + radius
    var yI = Math.random() * (window.innerHeight - (radius * 2)) + radius
    var wI = (Math.random() - 0.5)// * 8
    var hI = (Math.random() - 0.5)// * 8
    // var circle = new Circle(xI, yI, wI, hI, radius);
    circleArray.push(new Circle(xI, yI, wI, hI, radius))
}

// console.log(circleArray)

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)

    for (let nI = 0; nI < circleArray.length; nI++) {

        circleArray[nI].update()

    }
}

animate()




/*

var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


// var cCorAtu = ''
// var c = canvas.getContext('2d')
// for (let aI = 0; aI < 2; aI++) {
//     for (let bI = 0; bI < 5; bI++) {
//         for (let cI = 0; cI < 255; cI++) {

//             cCorAtu = 'rgb(' + aI + ',' + bI + ',' + cI + ')'
//             console.log(cCorAtu)
//             // c.beginPath()
//             // c.arc(1+aI, 1+aI, 30, 0, Math.PI * 2, false)
//             // c.strokeStyle = cCorAtu
//             // c.stroke()
//             // c.fillStyle = cCorAtu
//             // c.fill()
//         }
//     }
// }






c.fillStyle = 'rgba(255, 0, 0, 0.5)'
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'rgba(0, 0, 255, 0.5)'
c.fillRect(400, 100, 100, 100)
c.fillStyle = 'rgba(0, 255, 0, 0.5)'
c.fillRect(300, 300, 100, 100)

console.log(canvas)

line
c.beginPath()
c.moveTo(50, 300)
c.lineTo(300, 100)
c.lineTo(400, 300)
c.strokeStyle = '#0000ff'
c.stroke()

circle
c.beginPath()
c.arc(300, 300, 30, 0, Math.PI * 2, false)
c.strokeStyle = 'red'
c.stroke()


for (let nI = 0; nI < 500; nI++) {
let xI = Math.random() * window.innerWidth
let yI = Math.random() * window.innerHeight
c.beginPath()
c.arc(xI, yI, 30, 0, Math.PI * 2, false)
c.strokeStyle = 'green'
c.stroke()
}

var nMinRad = 20
var nMaxRad = 15
var aColors = [
    '#99ffaa',
    '#4411aa',
    '#ffaa33',
    '#00ff00',
    '#ff1100'
]
var oMouse = {
    xI: undefined,
    yI: undefined
}

window.addEventListener('mousemove', function (oEvent) {
    oMouse.xI = oEvent.x
    oMouse.yI = oEvent.y
    // console.log(oMouse)
})


function fCircle(xI, yI, wI, hI, nRad) {
    this.xI = xI
    this.yI = yI
    this.wI = wI
    this.hI = hI
    this.nRad = nRad

    this.draw = function () {
        c.beginPath()
        c.arc(this.xI, this.yI, this.nRad, 0, Math.PI * 2, false)
        c.fillStyle = aColors[Math.floor(Math.random()) * aColors.length]
        c.fill()
        // c.strokeStyle = aColors[Math.floor(Math.random()) * aColors.length]
        // c.stroke()
        // console.log(Math.floor(Math.PI * 2))
        // console.log(aColors[Math.floor(Math.random()) * aColors.length])
    }

    this.update = function () {
        if (((this.xI + this.nRad) > innerWidth) || this.xI - this.nRad < 0) {
            this.wI = -this.wI
        }
        if (((this.yI + this.nRad) > innerHeight) || this.yI - this.nRad < 0) {
            this.hI = -this.hI
        }
        this.xI += this.wI
        this.yI += this.hI

        //INTERACTIVITY
        if (oMouse.xI - this.xI < 50 && oMouse.xI - this.xI > -50 &&
            oMouse.yI - this.yI < 50 && oMouse.yI - this.yI > -50) {
            if (this.nRad < nMaxRad) {
                this.nRad += 1
            }
            this.nRad += 1
        } else if (this.nRad > nMinRad) {
            this.nRad -= 1
        }

        this.draw()
    }
}

var aCircle = [];

for (let nI = 0; nI < 100; nI++) {

    let nRad = (Math.random() * 30)
    let xI = Math.random() * (window.innerWidth - nRad * 2) + nRad
    let yI = Math.random() * (window.innerHeight - nRad * 2) + nRad
    let wI = 8 * (Math.random() - 0.5)
    let hI = 8 * (Math.random() - 0.5)

    aCircle.push(new fCircle(xI, yI, wI, hI, nRad))

}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)

    for (let nI = 0; nI < aCircle.length; nI++) {
        aCircle[nI].update()
    }
}

animate()

*/