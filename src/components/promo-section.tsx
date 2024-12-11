import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PromoSection() {
  return (
    <section className="relative h-[574px] w-full">
      <div className="absolute inset-0">
        <Image
          src="/coffee-morning.png"
          alt="Coffee cup"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
      </div>
      <div className="relative container mx-auto flex h-full items-center">
        <div className="flex flex-col w-1/4 justify-center bg-white/75 p-6 rounded-lg shadow-lg">
          <h2 className="mb-6 font-serif text-4xl font-bold text-[#603809]">
            Get a chance to have an Amazing morning
          </h2>
          <p className="mb-8 text-gray-700">
            We are giving you the opportunity to enhance your productivity and
            build your mood with a perfect coffee to start your day.
          </p>
          <Button className="w-fit bg-amber-500 hover:bg-amber-600 rounded-full">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
