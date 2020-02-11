import React from 'react';
import { Link } from 'react-router-dom';

import './NewsList.scss';

const NewsList = () => {
	return (
		<section className={'news'}>
			<h2 className={'section-title'}>
				<Link to={'/news'} className={'section-title__wrap'} title={'Перейти ко всем новостям'}>
					Новости
				</Link>
			</h2>
			<div className={'news-list'}>
				<Link to={'/'} className={'news-item'} title={'Перейти к новости'}>
					<div className={'news-item__inner'}>
						<div className={'news-item__img'}>
							<img
								src={'http://dir-sp42.ru/upload/iblock/fc9/fc9cb5e2c3759f641d8d1edacc462eb8.jpg'}
								alt={'text'}
							/>
						</div>
						<div className={'news-item__desc'}>
							VI Открытый региональный чемпионат WorldSkills Russia проходил в двух возрастных категориях:
							основная возрастная группа — от 16 до 22 лет соревновалась в 61 компетенции, а юниоры (16
							лет и младше) в 27 компетенциях.
						</div>
						<div className={'news-item__date'}>22.01.2020 г.</div>
					</div>
				</Link>
				<Link to={'/'} className={'news-item'} title={'Перейти к новости'}>
					<div className={'news-item__inner'}>
						<div className={'news-item__img'}>
							<img
								src={'http://dir-sp42.ru/upload/iblock/fc9/fc9cb5e2c3759f641d8d1edacc462eb8.jpg'}
								alt={'text'}
							/>
						</div>
						<div className={'news-item__desc'}>
							VI Открытый региональный чемпионат WorldSkills Russia проходил в двух возрастных категориях:
							основная возрастная группа — от 16 до 22 лет соревновалась в 61 компетенции, а юниоры (16
							лет и младше) в 27 компетенциях.
						</div>
						<div className={'news-item__date'}>22.01.2020 г.</div>
					</div>
				</Link>
			</div>
		</section>
	);
};

export { NewsList };
