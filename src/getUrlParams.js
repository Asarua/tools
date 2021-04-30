function getUrlParams (name, url) {
	let results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url || window.location.href)
	if (!results) {
		return ''
	}
	return results[1] || ''
}

module.exports = getUrlParams
