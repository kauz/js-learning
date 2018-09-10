// Storage Controller
const StorageCtrl = (function() {
	
	// Public methods
	return {
		storeItem: function(item) {
			let items;
			// Check if any items in ls
			if (localStorage.getItem('items') === null) {
				items = [];
				// Push new item
				items.push(item);
				// Set ls
				localStorage.setItem('items', JSON.stringify(items));
			} else {
				items = JSON.parse(localStorage.getItem('items'));
				// Push new item
				items.push(item);

				// Re set ls
				localStorage.setItem('items', JSON.stringify(items));

			}
		},

		getItemsFromStorage: function() {
			let items;

			if (localStorage.getItem('items') === null) {
				items = [];
			} else {
				items = JSON.parse(localStorage.getItem('items'));
			}

			return items;
		},
		updateStorageItem: function (updatedItem, remove = false) {
			let items = JSON.parse(localStorage.getItem('items'));

			items.forEach( function(item, index) {
				if (remove === true) {
					if (updatedItem.id === item.id) {
						items.splice(index, 1);
					}
				} else {
					if (updatedItem.id === item.id) {
						items.splice(index, 1, updatedItem);
					}
				}
				
			});

			localStorage.setItem('items', JSON.stringify(items));

		},
		clearItemsFromStorage: function() {
			localStorage.removeItem('items');
		}
	}
})();

// Item Controller
const ItemCtrl = (function() {
	// Item Constructor
	const Item = function(id, name, calories) {
		this.id = id;
		this.name = name;
		this.calories = calories;
	}

	// Data Structure / State
	const data = {
		items: StorageCtrl.getItemsFromStorage(),
		currentItem: null,
		totalCalories: 0
	}

	// Public methods
	return {
		getItems: function() {
			return data.items;
		},
		addItem: function(name, calories) {
			let ID;
			// Create ID
			if(data.items.length > 0) {
				ID = data.items[data.items.length - 1].id + 1;
			} else {
				ID = 0;
			}

			// Calories to number
			calories = parseInt(calories);

			// Create new item
			newItem = new Item(ID, name, calories);
			// Add to items array
			data.items.push(newItem);
			return newItem;
		},
		getItemById: function(id) {
			let found = null;
			// Loop through items
			data.items.forEach( function(item) {

				if(item.id === id) {

					found = item;
				}
			});

			return found;
		},
		updateItem: function(name, calories) {
			// Calories to number
			calories = parseInt(calories);

			let found = null;

			data.items.forEach(function(item) {
				if(item.id === data.currentItem.id) {
					item.name = name;
					item.calories = calories;
					found = item;
				}
			});

			return found;
		},
		deleteItem : function(id) {
			// Get ids
			let ids = data.items.map(function(item) {
				return item.id;
			});

			// Get index
			let index = ids.indexOf(id);

			// Remove item
			data.items.splice(index, 1);
		},
		clearAllItems: function() {
			data.items = [];
		},
		setCurrentItem: function(item) {
			data.currentItem = item;
		},
		getCurrentItem: function() {
			return data.currentItem;
		},
		getTotalCalories: function() {
			let total = 0;
			// Loop through items & add cals to total
			data.items.forEach(function(item) {
				total += item.calories;
			});
			// Set total cal in data structure
			data.totalCalories = total;

			return data.totalCalories;
		},
		logData: function() {
			return data;
		}
	}
})();

// UI Controller
const UICtrl = (function() {

	const UISelectors = {
		itemList: '#item-list',
		listItems: '#item-list li',
		addBtn: '.add-btn',
		updateBtn: '.update-btn',
		deleteBtn: '.delete-btn',
		backBtn: '.back-btn',
		clearBtn: '.clear-btn',
		itemNameInput: '#item-name',
		itemCaloriesInput: '#item-calories',
		totalCalories: '.total-calories'
	}
	
	// Public methods 
	return {
		populateItemList: function(items) {
			let html = '';
			items.forEach(function(item) {
				html += `
				<li class="collection-item " id="item-${item.id}">
					<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
					<a href="#" class="secondary-content">
						<i class="edit-item fa fa-pencil-alt"></i>
					</a>
				</li>
				`;
			});

			// Insert list items
			document.querySelector(UISelectors.itemList).innerHTML = html;
		},

		getItemInput: function() {
			return {
				name: document.querySelector(UISelectors.itemNameInput).value,
				calories: document.querySelector(UISelectors.itemCaloriesInput).value
			}
		},
		addListItem: function(item) {
			// Show the list
			document.querySelector(UISelectors.itemList).style.display = 'block';
			// Create li element
			let li = document.createElement('li');
			li.classList.add('collection-item'); 
			li.id = `item-${item.id}`;

			// Add HTML
			li.innerHTML = `
				<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
				<a href="#" class="secondary-content">
					<i class="edit-item fa fa-pencil-alt"></i>
				</a>
			`;

			// Insert item 
			document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
		},
		updateListItem: function(item) {
			let listItems = document.querySelectorAll(UISelectors .listItems);

			// Turn node list into array
			listItems = Array.from(listItems);

			listItems.forEach( function(listItem) {
				let itemID = listItem.getAttribute('id');

				if (itemID === `item-${item.id}`) {
					document.querySelector(`#${itemID}`).innerHTML = `
				<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
				<a href="#" class="secondary-content">
					<i class="edit-item fa fa-pencil-alt"></i>
				</a>
			`;
				}
			});
		},
		deleteListItem: function(id) {
			let itemID = `#item-${id}`;
			let item = document.querySelector(itemID);
			item.remove();
		},
		clearInput: function() {
			document.querySelector(UISelectors.itemNameInput).value = '';
			document.querySelector(UISelectors.itemCaloriesInput).value = '';
		},
		addItemToForm: function() {
			document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
			document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
			UICtrl.showEditState();
		},
		removeItems: function() {
			let listItems = document.querySelectorAll(UISelectors.listItems);
			// Tutn node list into array
			listItems = Array.from(listItems);

			listItems.forEach( function(item) {
				item.remove();
			});
		},
		hideList: function() {
			document.querySelector(UISelectors.itemList).style.display = 'none';
		},
		showTotalCalories: function(total) {
			document.querySelector(UISelectors.totalCalories).textContent = total;
		},
		clearEditState: function() {
			UICtrl.clearInput();
			document.querySelector(UISelectors.updateBtn).style.display = 'none';
			document.querySelector(UISelectors.deleteBtn).style.display = 'none';
			document.querySelector(UISelectors.backBtn).style.display = 'none';
			document.querySelector(UISelectors.addBtn).style.display = 'inline';
		},
		showEditState: function() {
			document.querySelector(UISelectors.updateBtn).style.display = 'inline';
			document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
			document.querySelector(UISelectors.backBtn).style.display = 'inline';
			document.querySelector(UISelectors.addBtn).style.display = 'none';
		},
		getSelectors: function() {
			return UISelectors;
		}
	}
})();

// App Controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl) {

	// Load event listeners
	const loadEventListeners = function(){
		// Get UI selectors
		let UISelectors = UICtrl.getSelectors();
	
		// Add item event
		document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
	
		// Disable submit on enter
		document.addEventListener('keypress', function(e) {
			if (e.keyCode === 13 || e.which === 13) {
				e.preventDefault();
				return false;
			}
		});

		// Edit icon click event
		document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
	
		// Update item event
		document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

		// Delete item event
		document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

		// Back button event
		document.querySelector(UISelectors.backBtn).addEventListener('click', function(e) {
			UICtrl.clearEditState();
			e.preventDefault();
		});

		// Clear items event
		document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);


	}

	// Add item submit
	let itemAddSubmit = function(e){
		// Get form input from UI Controller
		let input = UICtrl.getItemInput();

		// Check for name and calorie input
		if(input.name !== '' && input.calories !== '' && !isNaN(parseInt(input.calories))) {
			// Add item
			let newItem = ItemCtrl.addItem(input.name, input.calories);
			// Add item to UI list
			UICtrl.addListItem(newItem);
			// Get total calories
			let totalCalories = ItemCtrl.getTotalCalories();
			// Add total calories to UI
			UICtrl.showTotalCalories(totalCalories);
			
			// Store in localStorage
			StorageCtrl.storeItem(newItem);

			// Clear fields
			UICtrl.clearInput();
		}

		e.preventDefault();
	}

	// Click edit icon
	let itemEditClick = function(e) {
		if(e.target.classList.contains('edit-item')) {
			// Get list item id
			let listId = e.target.parentNode.parentNode.id;
			listId = parseInt(listId.split('-')[1]);

			// Get item
			let itemToEdit = ItemCtrl.getItemById(listId);

			// Set current item
			ItemCtrl.setCurrentItem(itemToEdit);

			// Add item to form
			UICtrl.addItemToForm();
					
		}

		e.preventDefault();
	}

	// Item update submit
	let itemUpdateSubmit = function(e) {

		// Get item input
		let input = UICtrl.getItemInput();

		// Update item
		let updatedItem = ItemCtrl.updateItem(input.name, input.calories);

		// Update UI
		UICtrl.updateListItem(updatedItem);

		// Get total calories
		let totalCalories = ItemCtrl.getTotalCalories();
		// Add total calories to UI
		UICtrl.showTotalCalories(totalCalories);
		
		// Update local storage
		StorageCtrl.updateStorageItem(updatedItem);

		// Clear fields
		UICtrl.clearEditState();

		e.preventDefault();
	}


	// Delete button event 
	let itemDeleteSubmit = function (e) {

		// Get current item
		let currentItem = ItemCtrl.getCurrentItem();

		// Delete from data structure
		ItemCtrl.deleteItem(currentItem.id);

		// Delete from UI
		UICtrl.deleteListItem(currentItem.id);

		// Get total calories
		let totalCalories = ItemCtrl.getTotalCalories();
		// Add total calories to UI
		UICtrl.showTotalCalories(totalCalories);
		// Clear fields

		// Delete from storage
		StorageCtrl.updateStorageItem(currentItem, true);

		UICtrl.clearEditState();

		e.preventDefault();
	}

	// Clear items event
	let clearAllItemsClick = function (e) {

		// Delete all items from data structure
		ItemCtrl.clearAllItems();

		// Get total calories
		let totalCalories = ItemCtrl.getTotalCalories();
		// Add total calories to UI
		UICtrl.showTotalCalories(totalCalories);

		// Remove from UI
		UICtrl.removeItems();

		// Hide ul
		UICtrl.hideList();

		// Remove from storage
		StorageCtrl.clearItemsFromStorage();

		e.preventDefault();
	}
	
	// Public methods
	return {
		init: function() {

			// Clear edit state
			UICtrl.clearEditState();

			// Fetch items from data structure
			const items = ItemCtrl.getItems();

			// Check if any items
			if(items.length === 0) {
				UICtrl.hideList();
			} else {
				// Populate list with items
				UICtrl.populateItemList(items);
			}

			let totalCalories = ItemCtrl.getTotalCalories();
			UICtrl.showTotalCalories(totalCalories);

			// Load event listeners
			loadEventListeners();
		}
	}
})(ItemCtrl, StorageCtrl, UICtrl);


// Initialize App
App.init();