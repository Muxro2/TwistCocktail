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
		
		

      <div className="absolute inset-0 z-20 ml-2 mt-2">
				<Link href="/" className="text-title text-accent">&lt;</Link>
				<h1 className="w-1/2 ml-3 my-4 text-title text-accent font-serif">{drink.strDrink}</h1>

				<p className="ml-4 text-info font-serif">Ingredients:</p>
				<ul className="ml-6 mb-4">
					{getIngredients(drink).map((ingredient: any, index: number) => (
						<li key={index} className="text-info font-serif">• {ingredient}</li>
					))}
				</ul>

				
				<p className="text-body font-serif w-3/4">{drink.strInstructions}</p>

				
			</div>
			</div>
	);
}