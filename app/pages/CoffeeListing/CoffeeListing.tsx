import { useEffect, useState } from "react";
import { getCoffeeList } from "~/services/coffee.service";
import { Coffee } from "~/components/CardCoffee/Coffee";

export function CoffeeListing(){
  const [Coffees, setCoffees] = useState([]);

  const getData = async () => {
    const coffees = await getCoffeeList();
    console.log(coffees);
    setCoffees(coffees);
  };

  useEffect(() => {
    // This is where you would add any code that needs to run when the page is first loaded.
    getData();
  }, []);

  return (
    <div>
      {Coffees.map((coffee:ICoffee) => (
        <Coffee
          available={coffee.available??false}
          id={coffee.id}
          image={coffee.image}
          name={coffee.name}
          popular={coffee.popular??false}
          price={coffee.price}
          rating={coffee.rating}
          votes={coffee.votes}
        />
      ))}
    </div>
  )
};