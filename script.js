let FIRSTCLICK = false;
let END_CHAR = null;
const outputContainer = document.getElementById("outt");
const ans = document.getElementById("ans");
const buttonArr = document.querySelectorAll(".btn");
const buttons = Array.from(buttonArr).map((button) => {
  button.addEventListener("click", () => {
    if (!FIRSTCLICK) {
      outputContainer.textContent = "";
      FIRSTCLICK = !FIRSTCLICK;
    }
    const v = button.getAttribute("data-value");
    if (
      ( END_CHAR == "+" ||
        END_CHAR == "-" ||
        END_CHAR == "*" ||
        END_CHAR == "/" ||
        END_CHAR == "%") &&
      (v == "+" || v == "-" || v == "*" || v == "/" || v == "%")
    ) {
        outputContainer.textContent = "Invalid Expression"
    }else{
        outputContainer.textContent = outputContainer.textContent + v;
        END_CHAR = outputContainer.textContent.charAt(
          outputContainer.textContent.length - 1
        );
    }
  });
});

function clearScreen() {
  outputContainer.textContent = "";
}

function calculateOutput() {
  const val = outputContainer.textContent;
  ans.textContent = parseFloat(eval(val));
}

function removeLast(){
    outputContainer.textContent = outputContainer.textContent.slice(0, -1);
}

const str = "rohit"
console.log(str.slice(0,-1));