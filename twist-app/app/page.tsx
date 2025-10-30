import Image from "next/image";
import logo from "@/public/twistOutline.svg"
import Searchbox from "@/components/Searchbox";

export default async function Home() {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
  const data = await res.json();
  const drinks = data.drinks || [];
  
  return (
  <div className="w-full h-full py-5 ">
  
  <div className="w-[100%] h-[10%] flex justify-between content-center gap-10">
  <div className="relative w-[40%] h-full ">
    <Image
    src={logo}
    alt="Twist"
    fill
    className="object-cover"
    />
  </div>
  <Searchbox />
  </div>

  <div className="w-[100%]">
    <h1>Margaritas</h1>
    <div className="w-[100%] flex flex-col gap-4">
      {drinks.map((drink: any) => (
        <div key={drink.idDrink} className="flex w-[100%]">
          <Image
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            width={100}
            height={100}
          />
          <h2 className="flex-1 font-semibold">{drink.strDrink}</h2>
        </div>
      ))}
    </div>
  </div>
   
  </div>
  );
}
