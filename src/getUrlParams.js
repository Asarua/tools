function getUrlParams (name, url) {
	if (!url && typeof window === 'undefined') return ''
	let results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url || window.location.href)
	if (!results) {
		return ''
	}
	return results[1] || ''
}

module.exports = getUrlParams
