const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');
const gnbSearchHistorylistBlank = gnbSearchHistory.querySelector('.search-history-content.is-blank');

const deleteAllbutton = gnbSearchHistory.querySelector('.search-history-header button');


function closeGnbSearchHistoryOnClickingOutside(e) {
	if (!gnbSearch.contains(e.target)) {
		gnbSearchHistory.classList.remove('is-active');
		window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside);
	}
}

function openGnbSearchHistory() {
	if(gnbSearchHistoryList.children.length === 0) {
		gnbSearchHistorylistBlank.classList.remove('is-blank');
	}
	if (!gnbSearch.classList.contains('is-active')) {
		window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside);
	}
	gnbSearchHistory.classList.add('is-active');
}

function deleteAllSearchHistoryItems(){
	gnbSearchHistoryList.innerHTML = '';
	gnbSearchHistory.classList.remove('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);

deleteAllbutton.addEventListener('click',deleteAllSearchHistoryItems );

