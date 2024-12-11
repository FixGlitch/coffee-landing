import Image from "next/image";
import { Button } from "@/components/ui/button";

const coffeeItems = [
  {
    name: "Cappuccino",
    price: "$8.50",
    image: "/coffee-1.png",
  },
  {
    name: "Chai Latte",
    price: "$7.50",
    image: "/coffee-2.png",
  },
  {
    name: "Macchiato",
    price: "$6.50",
    image: "/coffee-3.png",
  },
  {
    name: "Espresso",
    price: "$5.50",
    image: "/coffee-4.png",
  },
];

export function MenuSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="mb-2 text-center font-serif text-4xl font-bold text-[#603809]">
          Enjoy a new blend of coffee style
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coffeeItems.map((item) => (
            <div
              key={item.name}
              className="rounded-lg bg-amber-50 shadow-lg flex flex-col items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
                className="mb-4"
              />
              <h3 className="mb-2 text-center text-xl font-semibold">
                {item.name}
              </h3>
              <p className="mb-4 text-center text-amber-500">{item.price}</p>
              <div className="w-full flex justify-center translate-y-6">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 rounded-full"
                >
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
