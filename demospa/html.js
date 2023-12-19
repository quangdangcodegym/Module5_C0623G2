// Đang thực hiện render bằng JS

const div = document.createElement("div");
div.className = 'row';


const label = document.createElement('label');
label.innerText = 'Cân nặng:';

const input = document.createElement('input');
input.type = 'text';


const button = document.createElement('button');
button.innerText = 'Tính size quần';



div.appendChild(label);
div.appendChild(input);
div.appendChild(button);


document.querySelector('#root').appendChild(div);

