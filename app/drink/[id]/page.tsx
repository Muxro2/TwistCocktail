import Image from 'next/image';
import Link from 'next/link';
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
			<div className="relative w-full h-[100dvh]">
			<Image
				src={drink.strDrinkThumb}
				alt={drink.strDrink}
				fill
				className="object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-[#111] to-transparent z-10"/>
		
		

      <div className="absolute inset-0 z-20">
				<Link href="/" className="underline">Back</Link>
				<h1>{drink.strDrink}</h1>


				<p>{drink.strInstructions}</p>

				<p>Ingredients:</p>
				<ul>
					{getIngredients(drink).map((ingredient: any, index: number) => (
						<li key={index}>{ingredient}</li>
					))}
				</ul>
			</div>
			</div>
	);
}