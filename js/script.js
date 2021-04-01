'use strict';

const input = document.querySelector('.calc__input');

const bracket1 = document.querySelector('.bracket1');
const bracket2 = document.querySelector('.bracket2');
const C = document.querySelector('.C');
const CE = document.querySelector('.CE');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const divine = document.querySelector('.divine');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const multiply = document.querySelector('.multiply');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const minus = document.querySelector('.minus');
const zero = document.querySelector('.zero');
const dot = document.querySelector('.dot');
const equals = document.querySelector('.equals');
const plus = document.querySelector('.plus');

one.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += '1';
}

two.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += '2';
}

three.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += '3';
}

four.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += '4';
}

five.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += '5';
}

six.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += '6';
}

seven.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += '7';
}

eight.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += '8';
}

nine.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += '9';
}

zero.onclick = () => {
	if (input.value.slice(-1) === '0' && input.value.length === 1) {
		return
	}
	input.value += '0';
}

plus.onclick = () => {
	input.value += ' + ';
}

minus.onclick = () => {
	input.value += ' - ';
}

divine.onclick = () => {
	input.value += ' / ';
}

multiply.onclick = () => {
	input.value += ' * ';
}

C.onclick = () => {
	if (input.value.length === 1) {
		input.value = '0';
		return;
	}
	if (input.value.slice(-1) === ' ') {
		input.value = input.value.replace(input.value.slice(-3), '');
		return
	}
	input.value = input.value.replace(input.value.slice(-1), '');
}

bracket1.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += '(';
}

bracket2.onclick = () => {
	if (input.value === '0') {
		input.value = '';
	}
	input.value += ')';
}

dot.onclick = () => {
	if (input.value.slice(-1) === '.') {
		return
	}
	input.value += '.';
}

CE.onclick = () => {
	input.value = '0';
}

equals.onclick = () => {
	let result = input.value = eval(input.value).toPrecision(8).replace(/0*$/, "");

	if (input.value.slice(-1) === '.') {
		console.log(input.value.slice(-1));
		input.value = result.replace(".", "");
	} else {
		input.value = result;
	}
}
