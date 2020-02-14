export const checkResponse = res => {
	if (res.status === 'ok') {
		return true
	}
	return false
}
