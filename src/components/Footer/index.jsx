import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import pay_img from './img/pay.png';
import { Social } from '../Social';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer className={'footer'}>
			<div className={'footer-top'}>
				<div className={'container'}>
					<div className="flex-container">
						<div className={'flex-container__item footer-pay'}>
							<Link to={'/help/delivery'} className={'footer-top__title'} title={'Условия оплаты'}>
								Безопасная оплата
							</Link>
							<div className={'footer-top__desc'}>
								При оплате онлайн, данные банковской карты надежно защищены
							</div>
							<Link to={'/help/delivery'} className={'footer-top__img'} title={'Безопасная оплата'}>
								<img
									src={pay_img}
									alt={'При оплате онлайн, данные банковской карты надежно защищены'}
								/>
							</Link>
						</div>
						<div className={'flex-container__item'}>
							<ul className={'footer-nav'}>
								<li className={'footer-nav__item'}>
									<Link to={'/news'}>Новости</Link>
								</li>
								<li className={'footer-nav__item'}>
									<Link to={'/sale'}>Товары со скидками</Link>
								</li>
								<li className={'footer-nav__item'}>
									<Link to={'/hits'}>Хиты продаж</Link>
								</li>
							</ul>
						</div>
						<div className={'flex-container__item'}>
							<ul className={'footer-nav'}>
								<li className="footer-nav__item">
									<Link to={'/help/order'}>Как сделать заказ</Link>
								</li>
								<li className={'footer-nav__item'}>
									<Link to={'/help/delivery'}>Условия доставки и оплаты</Link>
								</li>
								<li className={'footer-nav__item'}>
									<Link to={'/help/return'}>Возврат товара</Link>
								</li>
							</ul>
						</div>
						<div className={'flex-container__item'}>
							<div className={'footer-top__title'}>Следите за нами в соцсетях</div>
							<Social />
						</div>
					</div>
				</div>
			</div>
			<div className={'footer-contact'}>
				<div className="container">
					<h3 className={'footer-contact__title'}>Наши контакты</h3>
					<div className="flex-container">
						<div className={'flex-container__item'}>
							<div className="footer-contact__item footer-contact__item-title">Торговый зал</div>
							<div className="footer-contact__item">Кемерово, Проспект Кузнецкий, 36</div>
							<div className="footer-contact__item">650000</div>
						</div>
						<div className={'flex-container__item'}>
							<div className="footer-contact__item footer-contact__item-title">E-mail</div>
							<div className="footer-contact__item">sibirskylov@bk.ru</div>
							<div className="footer-contact__item">sibirskylov@mail.ru</div>
						</div>
						<div className={'flex-container__item footer-contact__phone'}>
							<div className="footer-contact__item footer-contact__item-title">Tel/Viber/WhatsApp</div>
							<div className="footer-contact__item">8-923-621-67-38</div>
							<div className="footer-contact__item">8-908-952-42-91</div>
						</div>
						<div className={'flex-container__item footer-contact__mode'}>
							<div className="footer-contact__item footer-contact__item-title">Режим работы</div>
							<div className="footer-contact__item">Пн-Пт: 10:00-18:00</div>
							<div className="footer-contact__item">Сб-Вс: Выходной</div>
						</div>
					</div>
				</div>
			</div>
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
						ООО "Сибирский лов" ИНН: 4205367046 ОГРН: 1184205005830
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
