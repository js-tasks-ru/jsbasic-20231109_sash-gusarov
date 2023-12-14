function highlight(table) {

	let tds = table.getElementsByTagName('td');
	let trs = table.getElementsByTagName('tr');


	for (let i = 0; i < tds.length; i++) {
		let num = (tds.length / trs.length);

		if (tds[i].hasAttribute('data-available')) {
			if (tds[i].getAttribute('data-available') === 'true') {
				trs[Math.floor(i / num)].classList.add('available');
			} else {
				trs[Math.floor(i / num)].classList.add('unavailable');
			}
		} else {
			trs[Math.floor(i / num)].setAttribute('hidden', 'hidden');
		}

		if (tds[i].textContent === 'm') {
			trs[Math.floor(i / num)].classList.add('male');
		} else {
			trs[Math.floor(i / num)].classList.add('female');
		}

		if (Number(tds[i].textContent) < 18) {
			trs[Math.floor(i / num)].style.textDecoration = 'line-through';
		}

	}
}
