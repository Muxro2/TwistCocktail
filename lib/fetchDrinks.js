export async function fetchDrinks(name){
	const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(name)}`);
	const data = await res.json();
	
	if (!data.drinks || data.drinks.length === 0) {
		return null;
	}

	return data.drinks;
}

export async function fetchDrinkById(id){
	const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
	const data = await res.json()
	return data.drinks[0] || null;
}