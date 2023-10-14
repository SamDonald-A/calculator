

const num1 = document.getElementById('number-1');
const num2 = document.getElementById('number-2');
const num3 = document.getElementById('number-3');
const num4 = document.getElementById('number-4');
const num5 = document.getElementById('number-5');
const num6 = document.getElementById('number-6');
const num7 = document.getElementById('number-7');
const num8 = document.getElementById('number-8');
const num9 = document.getElementById('number-9');
const num10 = document.getElementById('number-10');
const num11 = document.getElementById('number-11');
const num12 = document.getElementById('number-12');
const num13 = document.getElementById('number-13');
const num14 = document.getElementById('number-14');
const num15 = document.getElementById('number-15');
const num16 = document.getElementById('number-16');
const num17 = document.getElementById('number-17');
const num18 = document.getElementById('number-18');
const num19 = document.getElementById('number-19');

const Input = document.getElementById('input-values');
const result = document.getElementById('result-value');
const clearInput = document.getElementById('clear-input');

function getNum1(){
    Input.value += num1.innerText;
}
function getNum2(){
    Input.value += num2.innerText;
}
function getNum3(){
    Input.value += num3.innerText;
}
function getNum4(){
    Input.value += num4.innerText;
}
function getNum5(){
    Input.value += num5.innerText;
}
function getNum6(){
    Input.value += num6.innerText;
}
function getNum7(){
    Input.value += num7.innerText;
}
function getNum8(){
    Input.value += num8.innerText;
}
function getNum9(){
    Input.value += num9.innerText;
}
function getNum10(){
    Input.value += num10.innerText;
}
function getNum11(){
    Input.value += num11.innerText;
}
function getNum12(){
    Input.value += num12.innerText;
}
function getNum13(){
    Input.value += num13.innerText;
}
function getNum14(){
    Input.value += num14.innerText;
}
function getNum15(){
    result.innerText = eval(Input.value);
    result.style.opacity = "100%";
}
function getNum16(){
    Input.value += num16.innerText;
}
function getNum17(){
    Input.value += num17.innerText;
}
function getNum18(){
    Input.value += num18.innerText;
}
function getNum19(){
    Input.value = Input.value.toString().slice(0,-1);
}
function clr(){
    Input.value = "";
    result.innerText = "Calculator...";
    result.style.opacity = "20%";
}