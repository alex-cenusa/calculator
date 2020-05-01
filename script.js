let btns = document.querySelectorAll(".button-item");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-area");
let clearBtn = document.querySelector("#clear");
let total = document.querySelector("#total");
let btnSpread = [...btns];
let btn = document.querySelectorAll('.button');

btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});

function evaluate(fn) {
  return new Function("return " + fn)();
}
total.addEventListener("click", () => {
  let allInputs = resultBox.innerHTML;
  resultBox.innerHTML = evaluate(allInputs);
});
clearBtn.addEventListener("click", () => {
  resultBox.innerHTML = "0";
});

for(var i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function(){
    for(var i = 0; i < btn.length; i++) {
       btn[i].classList.remove('active');
    }
    this.classList.add('active');
  });
}

