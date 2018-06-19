// EVENT BUBBLING

/*document.querySelector('.card-title').addEventListener('click', function () {
	console.log('card title')
});

document.querySelector('.card-content').addEventListener('click', function () {
	console.log('card content')
});*/


// EVENT DELEGATION

let collectionItem = document.querySelectorAll('.collection-item');

collectionItem.forEach(function (item) {
	item.addEventListener('click', deleteItem);
});

function deleteItem(e) {
	if(e.target.parentElement.classList.contains('delete-item')) {
		console.log('delete item');
		e.path[2].remove();
		// e.target.parentElement.parentElement.remove();
	}
	e.preventDefault();
}