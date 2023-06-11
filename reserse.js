let input = document.getElementById('input');
let button = document.getElementById('reverse');
let result = document.getElementById('result');
function reverse(){
    let inputValue = input.value;
    let list = [];
    for(let i = inputValue.length - 1; i >= 0; i -=1){
        list.push(inputValue[i])
    }
    result.innerHTML = list.join('');
    input.value = '';
}