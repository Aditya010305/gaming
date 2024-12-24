let boxes = document.querySelectorAll(".button");
let resetBtn = document.querySelector("#reset_btn");
let newGame = document.querySelector("#new_game");
let para = document.querySelector("#para");
let div = document.querySelector(".new_g");
let returnBtn = document.querySelector("#return_btn");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerHTML = "<p style='font-size:5rem; color: #b0413e;'>O</p>";
            turnO = false;
        }
        else{
            box.innerHTML = "<p style='font-size:5rem; color: #b05e73;'>X</p>";
            turnO = true;
        }
        box.disabled=true;

        checkDraw();
        checkWinner();
    })
})

resetBtn.addEventListener("click",() => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    para.classList.add("hide");
    newGame.classList.add("hide");
    div.classList.add("hide");
})

returnBtn.addEventListener("click",() =>{
    window.location.href = "index.html";
})

const Winner = (winner) => {
    para.innerText = `Congratulations!
     Winner is ${winner}`;
    div.classList.remove("hide");
    para.classList.remove("hide");
    newGame.classList.remove("hide");
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner",pos1);
                disableBoxes();
                resetBtn.classList.add("hide");
                Winner(pos1);
            }
        }
    }
}

newGame.addEventListener("click",() => {
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled = false;
    })
    resetBtn.classList.remove("hide");
    newGame.classList.add("hide");
    para.classList.add("hide");
    div.classList.add("hide");
})
const checkDraw = () => {
    let i=0;
    for(let box of boxes){
        if(box.innerText!=""){
            i=i+1;
        }
    }
    if(i==9){
        boxes.forEach((box) => {
            para.innerText = `So Sad It's a DRAW`;
            resetBtn.classList.add("hide");
            div.classList.remove("hide");
            para.classList.remove("hide");
            newGame.classList.remove("hide");
        })
    }
}
