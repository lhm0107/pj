const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');
const gnbSearchHistorylistBlank = gnbSearchHistory.querySelector('.search-history-content.is-blank');

const deleteAllbutton = gnbSearchHistory.querySelector('.search-history-header button');

const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button');

function closeGnbSearchHistory() {
	gnbSearchHistory.classList.remove('is-active');
		window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside);
}

function closeGnbSearchHistoryOnClickingOutside(e) {
	if (!gnbSearch.contains(e.target)) {
		closeGnbSearchHistory()}
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
	closeGnbSearchHistory()
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);

deleteAllbutton.addEventListener('click',deleteAllSearchHistoryItems );

function deleteSearchHistoryItem(e){
	e.stopPropagation();
	const itrmToDelete = this.parentNode;
	gnbSearchHistoryList.removeChild(itrmToDelete);

	if(gnbSearchHistoryList.children.length === 0) {
		closeGnbSearchHistory()}
}

deleteButtonList.forEach((button) => {button.addEventListener('click',deleteSearchHistoryItem )})

