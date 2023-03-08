const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

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
	//inputVal is the e.target.value from the searchHandler
	//filter through the fruits array
	const inputValLowerCase = inputVal.toLowerCase();

	let filteredResults = results.filter((fruit) => {
		//If the fruit in the fruit array contains an index of the input value, return true
		if (fruit.toLowerCase().indexOf(inputValLowerCase) !== -1) {
			return true;
		} else {
			return false;
		}
	});

	//loop through the filtered fruit, make a new li and have the innerText be the filtered fruit
	for (let i = 0; i < filteredResults.length; i++) {
		const newLi = document.createElement('li');
		let eachFruit = filteredResults[i].toLowerCase();
		//create substring so we can create bold letters
		const matchedSubStr = filteredResults[i].substring(
			eachFruit.indexOf(inputValLowerCase),
			inputVal.length + eachFruit.indexOf(inputValLowerCase));

		//replace the filteredResult[i] with the matched substring to make the input values bold
		newLi.innerHTML = filteredResults[i].replace(matchedSubStr, `<b>${matchedSubStr}</b>`);
		//capitalize the beginning of each input word
		input.value = capitalize(input.value);
		suggestions.appendChild(newLi);
	}
}

//clicking on the suggestion's ul will replace the input value with the target's innerText
function useSuggestion(e) {
	suggestions.replaceChildren();
	input.value = e.target.innerText;
}

//helper function for capitalizing the start of the strings
function capitalize(str) {
	const arr = str.split(" ");
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	const str2 = arr.join(" ");
	return str2;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

	