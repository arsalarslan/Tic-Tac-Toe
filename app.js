console.log(" welcome to tic tac toe")

// let music = new Audio("music.mp3")
// let audioturn = new Audio("ting.mp3")
// let gameover = new Audio("gameover.mp3")
let turn ="X"

let isgameover = false


 // to chnge the turn
const changeTurn = ()=>{
    return turn==="X" ?"O" : "X"
}

// function to check win

const checkwin=()=>{
    let boxtext = document.getElementsByClassName("boxtext")
 let win =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ]
 win.forEach(e =>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText ===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
        document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won"
        isgameover = true
        document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "150px"
    }
 })
}

// main logic

let boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click",(e)=>{
        if(boxtext.innerText==""){
            boxtext.innerText = turn
             turn = changeTurn()
            // audioturn.play()
            checkwin()
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
        }
    })
})

// reset
// let reset =document.querySelector("botton")
restart.addEventListener("click",()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(e=>{
        e.innerText = ""
    })
    turn ="X"
    isgameover = false
    
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
        document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "0px"
    
})