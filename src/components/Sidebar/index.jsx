import React, { useState } from 'react';

import './Sidebar.scss';
import { Social } from '../Social';

const Sidebar = ({ data, isLoading, errorMsg }) => {
	const [ activeItem, setActiveItem ] = useState(null);

	const onSelectItem = (e) => {
		const id = e.target.dataset.id;
		activeItem === id ? setActiveItem(null) : setActiveItem(id);
	};

	const createTree = (data, itemId, cb) => {
		return data.map((item) => {
			return (
				<li key={item.id} className={'sidebar-catalog__parent ' + (itemId === item.id ? 'active' : '')}>
					<div className={'sidebar-catalog__parent-wrap'}>
						<a className={'sidebar-catalog__item'} href={'/' + item.name}>
							<span
								className={'sidebar-catalog__parent-img'}
								style={{ backgroundPosition: item.bg_position }}
							/>
							{item.title}
						</a>
						<span className={'sidebar-catalog__parent-open'} data-id={item.id} onClick={cb} />
					</div>
					<ul className={'sidebar-catalog__children-list'}>
						{item.children.map((item) => {
							return (
								<li key={item.id}>
									<a className={'sidebar-catalog__children-item'} href={'/'}>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				</li>
			);
		});
	};
	return (
		<aside className={'sidebar'}>
			<nav className={'sidebar-catalog'}>
				<h2 className={'sidebar-catalog__title'}>
					<span className={'sidebar-catalog__title-text'}>Каталог товаров</span>
					<span className={'sidebar-catalog__title-button'}>
						<i className={'fas fa-bars float-right'} />
					</span>
				</h2>
				{isLoading ? (
					<h3 className={'loading'}>Loading...</h3>
				) : data ? (
					<ul className={'sidebar-catalog__list'}>{createTree(data, activeItem, onSelectItem)}</ul>
				) : errorMsg ? (
					<h3 className={'error'}>{errorMsg}</h3>
				) : <div>Empty</div>}
			</nav>
			<div className="sidebar__social">
				<h3 className="sidebar__social-title">Следите за нами в соцсетях</h3>
				<Social />
			</div>
		</aside>
	);
};

// Sidebar.defaultProps = {
// 	catalog: [
// 		{
// 			id: '1',
// 			name: 'catalog',
// 			title: 'Материалы для мушек',
// 			children: [
// 				{
// 					id: '2',
// 					title: 'Крючки'
// 				},
// 				{
// 					id: '3',
// 					title: 'Мормышки'
// 				},
// 				{
// 					id: '4',
// 					title: 'Монтажные нити'
// 				},
// 				{
// 					id: '5',
// 					title: 'Перья'
// 				},
// 				{
// 					id: '6',
// 					title: 'Спинки, Лапки, Крылья'
// 				},
// 				{
// 					id: '7',
// 					title: 'Плёнки для тела'
// 				},
// 				{
// 					id: '8',
// 					title: 'Головки'
// 				},
// 				{
// 					id: '9',
// 					title: 'Меха'
// 				},
// 				{
// 					id: '10',
// 					title: 'Пенки'
// 				},
// 				{
// 					id: '11',
// 					title: 'Даббинги'
// 				},
// 				{
// 					id: '12',
// 					title: 'Синели'
// 				},
// 				{
// 					id: '13',
// 					title: 'Шерстяные нити'
// 				},
// 				{
// 					id: '14',
// 					title: 'Люрексы'
// 				},
// 				{
// 					id: '15',
// 					title: 'Огрузочные материалы'
// 				},
// 				{
// 					id: '16',
// 					title: 'Силиконовые плёнки/нити'
// 				},
// 				{
// 					id: '17',
// 					title: 'Лаки'
// 				},
// 				{
// 					id: '18',
// 					title: 'Синтетические волокна'
// 				}
// 			]
// 		},
// 		{
// 			id: '19',
// 			name: 'catalog',
// 			title: 'Рыболовные снасти',
// 			children: [
// 				{
// 					id: '20',
// 					title: 'Леска'
// 				},
// 				{
// 					id: '21',
// 					title: 'Поплавки'
// 				},
// 				{
// 					id: '22',
// 					title: 'Карабины/вертлюжки'
// 				},
// 				{
// 					id: '23',
// 					title: 'Тирольские палочки'
// 				},
// 				{
// 					id: '24',
// 					title: 'Коробочки/ящики'
// 				},
// 				{
// 					id: '25',
// 					title: 'Гермочехлы/сумки'
// 				},
// 				{
// 					id: '26',
// 					title: 'Мотовила'
// 				}
// 			]
// 		},
// 		{
// 			id: '27',
// 			name: 'catalog',
// 			title: 'Экипировка',
// 			children: [
// 				{
// 					id: '28',
// 					title: 'Забродная экипировка'
// 				},
// 				{
// 					id: '29',
// 					title: 'Головные уборы'
// 				},
// 				{
// 					id: '30',
// 					title: 'Термобельё'
// 				},
// 				{
// 					id: '31',
// 					title: 'Защита от насекомых'
// 				},
// 				{
// 					id: '32',
// 					title: 'Ремкомплекты'
// 				}
// 			]
// 		},
// 		{
// 			id: '33',
// 			name: 'catalog',
// 			title: 'Инструменты',
// 			children: [
// 				{
// 					id: '34',
// 					title: 'Для вязания мушек'
// 				},
// 				{
// 					id: '35',
// 					title: 'Для рыбалки'
// 				}
// 			]
// 		}
// 	]
// };

export { Sidebar };
