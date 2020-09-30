import React from 'react'
import { UpdateCollection } from './UpdateCollection'
import { ChangeRecommendations } from './ChangeRecommendations'

// import { useSetToast } from '../../../../../hooks'

export const UpdateCollectionPage = ({
	groups,
	rawData,
	changeCollection,
	deleteRecommendations,
	addRecommendations,
}) => {
	return (
		<div>
			<UpdateCollection
				groups={groups}
				rawData={rawData}
				changeCollection={changeCollection}
			/>
			<ChangeRecommendations
				groups={groups}
				rawData={rawData}
				deleteRecommendations={deleteRecommendations}
				addRecommendations={addRecommendations}
			/>
		</div>
	)
}
