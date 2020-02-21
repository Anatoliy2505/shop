import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getPosts } from '../../redux/actions'
import { postsSelector } from '../../redux/selctors'
import { VkPostsItem } from '../VkPostsItem'

const VkPosts = ({ postsData, getPosts }) => {
	useEffect(() => {
		if (!postsData) {
			getPosts()
		}
	}, [postsData, getPosts])

	const postsList = posts =>
		posts.map(item => <VkPostsItem key={item.id} {...item} />)

	return (
		<section className="vk-posts">
			{postsData ? postsList(postsData) : null}
		</section>
	)
}

export default connect(
	state => ({
		postsData: postsSelector(state),
	}),
	{ getPosts }
)(VkPosts)
