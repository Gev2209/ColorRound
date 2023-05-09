 const roundColor = document.querySelector('.box')
 const roundColor1 = document.querySelector('.box1')
 const roundColor2 = document.querySelector('.box2')
 const roundColor3 = document.querySelector('.box3')
 const roundColor4 = document.querySelector('.box4')
 const body = document.querySelector('body')

 const handleBody = () => {
    document.body.style.backgroundColor = 'white'
 }
 body.addEventListener('mouseup',handleBody)

 //-----------------------------------------------------------

const handleGray = () => {
    document.body.style.backgroundColor = 'gray'
}
roundColor.addEventListener('click',handleGray)
const handleOrange = () => {
    document.body.style.backgroundColor = 'orange'
}
roundColor1.addEventListener('click', handleOrange)
const handleBlue = () => {
    document.body.style.backgroundColor = 'blue'
}
roundColor2.addEventListener('click', handleBlue)

const handleGreen = () => {
    document.body.style.backgroundColor = 'green'
}
roundColor3.addEventListener('click',handleGreen)

const handleRed = () => {
    document.body.style.backgroundColor = 'red'
}
roundColor4.addEventListener('click', handleRed)




// roundColor.addEventListener('click',function () {
//     const body = document.querySelector('.bodys')
//     body.addEventListener('click' , function () {
//         body.style.backgroundColor = 'grey' 
//      })
// })

// roundColor1.addEventListener('click', function () {
//     const bodyOrange = document.querySelector('.bodys')
//     bodyOrange.addEventListener('click', function () {
//          bodyOrange.style.backgroundColor = 'orange'
//     })    
// })

// roundColor2.addEventListener('click', function () {
//     const bodyBlue = document.querySelector('.bodys')
//      bodyBlue.style.backgroundColor = 'blue'
// })

// roundColor3.addEventListener('click' , function () {
//     const bodyGreen = document.querySelector('.bodys')
//      bodyGreen.style.backgroundColor = 'green'
// })

// roundColor4.addEventListener('click', function () {
//     const bodyRed = document.querySelector('.bodys')
//      bodyRed.style.backgroundColor = 'red'
// })