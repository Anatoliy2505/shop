import React, { useMemo } from 'react'

export const Properties = ({
	price,
	title,
	container,
	salePrice,
	properties,
	mainFieldTitle,
	mainFieldValue,
}) => {
	const propertiesList = useMemo(() => {
		if (properties && properties.length > 0) {
			const newPropList = properties.map(item => (
				<div key={item.key} className="products-properties__item">
					<span className={'products-properties__name'}>{item.title}:</span>
					{item.value}
				</div>
			))
			return newPropList
		}
		return null
	}, [properties])

	return (
		<div className="products-properties">
			<h3 className="products-title">Характеристики:</h3>
			<div className="products-properties__item">
				<span className={'products-properties__name'}>Название:</span>
				{title}
			</div>
			<div className="products-properties__item">
				<span className={'products-properties__name'}>Упаковка:</span>
				{container}
			</div>
			<div className="products-properties__item">
				<span className={'products-properties__name'}>{mainFieldTitle}:</span>
				{mainFieldValue}
			</div>
			{propertiesList}
			<div className="products-properties__item">
				<span className={'products-properties__name'}>
					Цена{salePrice ? <span> со скидкой</span> : null}:
				</span>
				{salePrice ? (
					<>
						<span className={'sale-product'}>{price} руб</span>
						<span>{salePrice} </span>
					</>
				) : (
					<>{price} </>
				)}
				руб
			</div>
		</div>
	)
}
