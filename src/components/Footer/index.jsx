import React from 'react';

import './Footer.scss';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer className={'footer'}>
			<div className={'footer-nav'}>
				<div className={'container'}>adfdffsdfdsf</div>
			</div>
			<div className={'footer-contact'}>adfdffsdfdsf </div>
			<div className={'footer-copyright'}>
				<div className={'container'}>
					<div className={'footer-copyright__line'} />
					<div className={'footer-copyright__name footer-copyright__item'}>
						© 2017-{year} Sibirskylov — товары для рыбалки и активного отдыха
					</div>
					<div className={'footer-copyright__item'}>
						Получение и обработка персональных данных происходит в соответствии с Федеральным законом от
						27.07.2006 года №152-ФЗ "О персональных данных", на условиях и для целей, определенных Политикой
						конфиденциальности.
					</div>
					<div className={'footer-copyright__item'}>
						Вся информация на сайте собственность интернет-магазина Sibirskylov. Все права защищены.
					</div>
					<div className={'footer-copyright__item'}>
						Использование информации с сайта без разрешения запрещено. Информация, указанная на сайте, не
						является публичной офертой.
					</div>
					<div className={'footer-copyright__item footer-copyright__data'}>
						ООО "Сибирскайлов" ИНН: 5190900000 ОГРН: 1095190000000
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
