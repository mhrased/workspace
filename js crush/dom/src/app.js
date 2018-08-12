// let x = 'Hello Everyone!'
// console.log(x);

// alert('This is rased')


function $(sel){
   return document.querySelector(sel)
}



let h1 = $('#header')
let btn = $('#my-btn')
let para = $('#my-para')


// console.dir(h1)
// console.dir(btn)
// console.dir(para)

let bg = ['yellow','salmon','#eee','red','green','purple','#e3f']
let colors = ['#e3f','purple','green','yellow','salmon','#eee','red',]

let i=0

btn.addEventListener('click', () => {
   h1.style.background = bg[i];
   h1.style.color = colors[i];


   console.log(i);
   
   
   if( i >= bg.length){
      i = 0
   } else{
      i++
   }
})


const parastyle = {
   color : 'red',
   fontSize : '20px',
   fontFamily : 'Roboto'
}

Object.assign(para.style , parastyle)

const headstyle = { textAlign : 'center' }

Object.assign(h1.style , headstyle)

para.addEventListener('dblclick',() => {
   let pstyle = { color : 'green' }
   Object.assign(para.style, pstyle)
})


btn.addEventListener('mouseover', ()=>{
   btn.style.color = 'red'

   setTimeout(()=>{
      btn.style.color = 'blue'
   }, 4000)
   setTimeout(()=>{
      btn.style.color = ''
   }, 8000)
})