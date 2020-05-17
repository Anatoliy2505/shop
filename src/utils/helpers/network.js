import { API_ROOT } from '../constants'

export const httpGet = async endPoint => {
	try {
		const response = await fetch(`${API_ROOT}/${endPoint}`)
		if (response.ok) {
			const json = await response.json()
			return json
		} else {
			throw new Error(response.status)
		}
	} catch (err) {
		console.warn('httpGet error ', err)
	}
}

// without async/await
export const httpGetWithoutAsyncAwait = endPoint => {
	return fetch(`${API_ROOT}/${endPoint}`)
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error(response.status)
			}
		})
		.then(json => json)
		.catch(err => console.warn('httpGetWithoutAsyncAwait error ', err))
}

export const postData = (url, data) => {
	// from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
	return fetch(url, {
		body: JSON.stringify(data),
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'content-type': 'application/json',
		},
		method: 'POST',
		mode: 'cors',
		redirect: 'follow',
		referrer: 'no-referrer',
	}).then(response => response.json()) // parses response to JSON
}

export const request = async (
	endPoint,
	method = 'GET',
	body = null,
	headers = {}
) => {
	try {
		if (body) {
			body = JSON.stringify(body)
			headers['Content-Type'] = 'application/json'
		}
		const API_ROOT = 'http://localhost:3000'
		const response = await fetch(`${API_ROOT}/${endPoint}`, {
			method,
			body,
			headers,
		})
		if (!response.ok) {
			throw new Error(response.message || 'При запросе что-то пошло не так')
		}
		const data = await response.json()
		return data
	} catch (e) {
		throw e
	}
}
