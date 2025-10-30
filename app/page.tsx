"use client";

import { useState, useEffect } from "react"
import Image from "next/image";
import logo from "@/public/twistOutline.svg"
import Searchbox from "@/components/Searchbox";
import Card from "@/components/Card";

export default function Home() {
  const [query, setQuery] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false)

  useEffect(() => {
    if (!query) return;

    async function fetchDrinks() {
      setLoading(true);
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
    const data = await res.json();
    setDrinks(data.drinks || []);
      setLoading(false);
    }

    fetchDrinks();
  }, [query])
  
  
  return (
  <div className="w-full h-full py-5 ">
  
  <div className="w-[100%] h-[10%] flex justify-center mb-4">
  <div className={`relative h-full transition-all duration-500 ease-in-out ${searchFocused ? "w-0" : "w-[40%] gap-10"}`}>
    <Image
    src={logo}
    alt="Twist"
    fill
    className="object-cover"
    />
  </div>
  <Searchbox query={query} setQuery={setQuery} setSearchFocused={setSearchFocused}/>
  </div>

  <div className="flex flex-col gap-1">
  {drinks.map((drink: any) => (
        <div key={drink.idDrink} className="flex-col w-[100%]">
          <Card image={drink.strDrinkThumb} name={drink.strDrink} />
        </div>
  ))}
  </div>


   
  </div>
  );
}
