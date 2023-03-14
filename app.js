const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(fruitsArr){
	return fruitsArr.filter((fruit) => {
		//If the fruit in the fruit array contains an index of the input value, return true
		if (fruit.toLowerCase().indexOf(input.value) !== -1) {
			return true;
		} else {
			return false;
		}
	});

}

function searchHandler(e) {
	let fruitInput = e.target.value;
	if (fruitInput === '') {
		//so the whole darn list doesn't show up when deleting all that you typed in
		suggestions.replaceChildren();
	} else {
		//each key event 
		showSuggestions(fruits, fruitInput);
	}
}

function showSuggestions(results, inputVal) {
	//replaces children so the list doesn't keep adding onto itself
	suggestions.replaceChildren();
	let filteredFruit = search(results);
	
	//create an array with the search results being bolded
	return filteredFruit.map((fruit) => {
		const newLi = document.createElement('li');
		suggestions.appendChild(newLi);
		const matchedSubStr = fruit.substring(
			fruit.indexOf(inputVal),
			inputVal.length + fruit.indexOf(inputVal)
		);
		newLi.innerHTML = fruit.replace(matchedSubStr, `<b>${matchedSubStr}</b>`);
		console.log(fruit);
	});
}

//clicking on the suggestion's ul will replace the input value with the target's innerText
function useSuggestion(e) {
	suggestions.replaceChildren();
	input.value = e.target.innerText;
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

	