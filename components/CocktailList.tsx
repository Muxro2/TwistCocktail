"use client";

import { useEffect, useState } from "react";
import Searchbox from "@/components/Searchbox";
import Card from "@/components/Card";

export default function CocktailList() {
	const [query, setQuery] = useState("old");
	const [drinks, setDrinks] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchDrinks() {
			setLoading(true);
			const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
			const data = await res.json();
			setDrinks(data.drinks || []);
			setLoading(false);
		}

		fetchDrinks();
	}, [query]);

	return (
		<div className="w-full h-full">
			<div className="w-full flex justify-center mb-5">
				<Searchbox query={query} setQuery={setQuery}/>
			</div>

			{loading && <p className="text-center">Loading...</p>}

			<div className="flex flex-col gap-2">
				{drinks.length === 0 && !loading ? (
					<p className="text-center">No drinks found.</p>
				) : (
					drinks.map((drink) => (
						<Card
							key={drink.idDrink}
							image={drink.strDrinkThumb}
							name={drink.strDrink}
						/>
					))
				)}
			</div>
		</div>
	);
}