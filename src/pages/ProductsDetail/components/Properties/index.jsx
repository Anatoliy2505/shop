import React from 'react'

export const Properties = ({ properties, title, name, mainField, price }) => {
	const propertiesList = properties =>
		properties.map(item => (
			<div key={item.title} className="products-properties__item">
				<span className={'products-properties__name'}>{item.title}:</span>
				{item.value}
			</div>
		))

	return (
		<div className="products-properties">
			<h3 className="products-title">Характеристики:</h3>
			<div className="products-properties__item">
				<span className={'products-properties__name'}>Название:</span>
				{title}
			</div>
			<div className="products-properties__item">
				<span className={'products-properties__name'}>{mainField}:</span>
				{name}
			</div>
			{propertiesList(properties)}
			<div className="products-properties__item">
				<span className={'products-properties__name'}>Цена:</span>
				{price} руб
			</div>
		</div>
	)
}
