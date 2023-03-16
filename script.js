var progress = document.getElementById("bar");
const input = document.querySelector(".input");
const maxInput = document.querySelector(".maxInput");
let finalValue=0;
let max=0;

function changeHeight(){

    progress.style.height = `${(finalValue / max) * 100}%`;
    console.log(progress.style.height);

}
input.addEventListener("keyup", () => {
    finalValue = parseInt(input.value, 10);
    if (finalValue>max) {
        alert("Input Value is greater than Max Value"); 
        console.log(progress.style.height);
        location. reload();
    }
        changeHeight();

    });
maxInput.addEventListener("keyup", () => {
        max = parseInt(maxInput.value, 10);
        changeHeight();
    });