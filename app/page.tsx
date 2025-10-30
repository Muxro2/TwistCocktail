import Image from "next/image";
import logo from "@/public/twistOutline.svg"
import Searchbox from "@/components/Searchbox";
import Card from "@/components/Card";

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


  {drinks.map((drink: any) => (
        <div key={drink.idDrink} className="flex w-[100%]">
          <Card image={drink.strDrinkThumb} name={drink.strDrink} />
        </div>
  ))}


   
  </div>
  );
}
