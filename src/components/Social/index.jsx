import React from 'react';

import './Social.scss';

export const Social = () => {
	return (
		<ul className={'social'}>
			<li className={'social__item social__item-youtube'}>
				<a
					rel={'noopener noreferrer'}
					target={'_blank'}
					title={'Наш Youtube-канал'}
					href={'https://www.youtube.com/sibirskylov'}
				>
					<i className={'fab fa-youtube'} />
				</a>
			</li>
			<li className={'social__item social__item-ondoklassniki'}>
				<a
					rel={'noopener noreferrer'}
					target={'_blank'}
					title={'Мы в Одноклассниках'}
					href={'https://ok.ru/sibirskylov'}
				>
					<i className={'fab fa-odnoklassniki'} />
				</a>
			</li>
			<li className={'social__item social__item-facebook'}>
				<a
					rel={'noopener noreferrer'}
					target={'_blank'}
					title={'Мы в Фейсбуке'}
					href={'https://www.facebook.com/groups/hariusfly/'}
				>
					<i className={'fab fa-facebook'} />
				</a>
			</li>
			<li className={'social__item social__item-instagram'}>
				<a
					rel={'noopener noreferrer'}
					target={'_blank'}
					title={'Мы в Инстаграмме'}
					href={'https://www.instagram.com/pavelgorohovrus/'}
				>
					<i className={'fab fa-instagram'} />
				</a>
			</li>
			<li className={'social__item social__item-vk'}>
				<a
					rel={'noopener noreferrer'}
					target={'_blank'}
					title={'Мы в Контакте'}
					href={'https://vk.com/sibirskylov'}
				>
					<i className={'fab fa-vk'} />
				</a>
			</li>
		</ul>
	);
};
