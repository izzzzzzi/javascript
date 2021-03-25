const con = document.getElementById('log');
const log = (...args) => (con.innerHTML += '<br>' + args.join(''));

let a = 3,
	b = 0;
switch (true) {
	case a > 5:
		log('a', a);
		break;
	case a > 4:
		log('b', a);
		break;
	case a > 3:
		log('c', a);
		break;
	case a > 2:
		log('d', a);
		break;
	default:
}
