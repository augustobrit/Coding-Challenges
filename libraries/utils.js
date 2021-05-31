const PRIMARY = '#9580FF';
const SECONDARY = '#80FFEA';
const BG = '#14141B';
const TITLE = '#F8F8F2';
const SUBTITLE = '#8A8F98';
function sqrDistance(x1, y1, x2, y2) {
	let dx = x2 - x1;
	let dy = y2 - y1;
	return dx * dx + dy * dy;
}

module.exports = [ sqrDistance ]