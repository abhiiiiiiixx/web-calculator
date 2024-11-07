
let x = Number.parseInt(prompt("value of x "))

let y = Number.parseInt(prompt("  value of y "));
let a = document.getElementById("btn")
a.addEventListener("click", function (e) {

    alert(x + y)
})
 let q = document.getElementsByClassName("btm")[0]
 q.addEventListener("click", function (e) {

    alert(x - y)
})
 let w = document.getElementsByClassName("btm")[1]
 w.addEventListener("click", function (e) {

    alert(x * y)
})
 let e = document.getElementsByClassName("btm")[2]
  e.addEventListener("click", function (e) {

    alert(x / y)
})
