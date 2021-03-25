const con = document.getElementById('log');
const log = (...args) => (con.innerHTML += '<br>' + args.join(''));

// 1. test라는 키를 갖고
// 2. 값으로 문자열인자를 1개 받아 불린결과를 반환하는 함수가 나온다.
const obj = {
	test(str) {
		return true;
	},
};

const Test = class {
	test(str) {
		return true;
	}
};

const test = new Test();
