//  DOM  is a document object model
// 4 plares of dom
//  2. Selection of an Element                select  html element in javascript
//  2. changing HTML
//  3. changing css
//  4. Event listener


// let a = document.querySelector("h1")
// console.log(a);
// a.innerhtml = "hello world"


// document.querySelector("h1").innerHTML = "hello javascript"


// let a = document.querySelector("h1")
// console.log(a);
// a.innerHTML = "Hello javascript"
// a.style.color = "yellow"
// a.style.backgroundColor = "black"
// a.addEventListener("click",function(){
//    a.innerHTML = 'may badal gya hooo bhi tari ex kie trah'
//    a.style.color = "yellow"
//    a.style.backgroundColor = "black"
   
// })



// let a = document.querySelector(".bulb")
//  let b = document.querySelector("button")

//  b.addEventListener('click',function(){
//     a.style.backgroundColor = "red"
//  })

// Dom document object model
 
// four parts of dom
//  1 Selection of an Element
//  2 change html document
//  3 change css style
//  4 Event Listener

//     adding on html element like this
//         document.querySelector("he")

//     adding css style
//         .style.color = "red"
//     adding event listnear
//         .addeventlistener("click",function(){

//         })  these re called dom  




let bulb = document.querySelector(".bulb")
let btn = document.querySelector("button")

btn.addEventListener("click",function(){
    bulb.innerHTML = "Hello javascript"
    bulb.style.backgroundColor = "yellow"
})
