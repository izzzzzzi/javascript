const con = document.getElementById('log');
const log = (...args) => (con.innerHTML += '<br>' + args.join(''));

const iterator = {
	next() {
		return {
			done: true,
			value: 1,
		};
	},
};

log(iterator.next);
