"use client";

import { useState, useEffect } from "react"
import Image from "next/image";
import logo from "@/public/twistOutline.svg"
import Searchbox from "@/components/Searchbox";
import Card from "@/components/Card";
import { fetchDrinks } from "@/lib/fetchDrinks";

export default function Home() {
  const [query, setQuery] = useState("Margarita");
  const [drinks, setDrinks] = useState([]);

  const [searchFocused, setSearchFocused] = useState(false)

  useEffect(() => {
    if (!query) return;
    async function drinksData() {
      const data = await fetchDrinks(query);
      setDrinks(data || []);
    }
    drinksData();
  }, [query])
  
  
  return (
  <div className="w-full h-full">

    
  <div className="fixed w-[100%] h-20 pt-3 flex justify-center bg-[#111] z-100">
  <div className={`relative h-full transition-all duration-300 ease-in-out ${searchFocused ? "w-0" : "w-[40%] gap-10"}`}>
    <Image
    src={logo}
    alt="Twist"
    fill
    className="object-cover"
    />
  </div>
  <Searchbox query={query} setQuery={setQuery} setSearchFocused={setSearchFocused}/>
  </div>

  <div className="w-full h-20"></div>
  <div className="flex flex-col gap-1 overflow-hidden">
  {drinks.map((drink: any) => (
          <Card image={drink.strDrinkThumb} name={drink.strDrink} id={drink.idDrink} key={drink.idDrink}/>
  ))}
  </div>

    
  </div>
  );
}
