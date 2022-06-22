// function text(){
//   return `<div>hello</div>`
// }

// function section(){
//   return `<section>hi bye</section>`
// }

// let timerA = setTimeout(()=>{
//   let timerB = setTimeout(()=>{
//     console.log(section())
//   },0)
//   console.log(text())
// },1000)

// console.log(text())


// function a(){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       console.log("지금 함수 a()가 실행 되었습니다")
//       resolve("tjdalsTl apfhd")
//     },4000)
//   });
// }

// // console.log(a())
// a()
//   .then(function(data){
//     return new Promise(function(resolve,reject){
//       setTimeout(function(){
//         console.log("지금 여기는 then이라는 함수 안에서 실행된겁니다1")
//         resolve(data)
//       },1000)
//     })
//   })



let nuri = 100;
// memo 1. 1초 뒤에 1번 행동에는 nuri가 10이 덧셈되고 콘솔에 출력된다
// memo 3. 1초 뒤에 2번 행동에는 nuri가 30을 빼고 콘솔에 출력된다
function a(){
  return new Promise(function (resolve,reject){
    setTimeout(()=>{
      console.log(nuri +10)
      resolve(nuri+10)
    ,1000})
  })
}
a().then((value)=>{
  setTimeout(()=>{
    console.log(value-30)
  },1000)
})