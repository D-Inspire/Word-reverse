let input = document.getElementById('input');
let button = document.getElementById('reverse');
let result = document.getElementById('result');
let initial = document.getElementById('Original');
let arrow = document.getElementById('p');
function reverse(){
    initial.innerHTML = input.value;
    arrow.innerHTML = '===>'
    let inputValue = input.value;
    let list = [];
    for(let i = inputValue.length - 1; i >= 0; i -=1){
        list.push(inputValue[i])
    }
    
    result.innerHTML = list.join('');
    input.value = '';
}