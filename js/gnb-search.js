const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');

function closeGnbSearchHistoryOnClickingOutside(e) {
	if (!gnbSearch.contains(e.target)) {
		window.removeEventListener('ckick', closeGnbSearchHistoryOnClickingOutside);
		gnbSearchHistory.classList.remove('is-active');
	}
}

function openGnbSearchHistoryOpen() {
	if (!gnbSearch.classList.contains('is-active')) {
		window.addEventListener('ckick', closeGnbSearchHistoryOnClickingOutside);
		gnbSearchHistory.classList.add('is-active');
	}
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistoryOpen);

window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside);
