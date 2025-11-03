import Image from 'next/image';
import { fetchDrinkById } from '@/lib/fetchDrinks';

export default async function Drink({ params }: any) {
	const { id } = await params;

	function getIngredients(drink: any) {
		const ingredients = [];
		for (let i = 1; i <= 15; i++) {
			const ingredient = drink[`strIngredient${i}`];
			const measure = drink[`strMeasure${i}`]
			if (ingredient) {
				ingredients.push(measure + " " + ingredient);
			}
		}
		return ingredients;
	}
	
	if (!id) {
		return <h1>{id} not a valid drink id</h1>;
	}

	const drink = await fetchDrinkById(id);
	console.log("Fetched Drink:", drink)
	if (!drink) {
		return <h1>No drink found</h1>;
	}

	return (
		<div>
			<h1>{drink.strDrink}</h1>
			<Image
				src={drink.strDrinkThumb}
				alt={drink.strDrink}
				width={200}
				height={200}
			/>
			
			<p>{drink.strInstructions}</p>

			<p>Ingredients:</p>
			<ul>
				{getIngredients(drink).map((ingredient: any, index: number) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul>
		</div>
	);
}