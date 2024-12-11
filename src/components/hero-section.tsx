import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="h-screen w-full">
      <Image
        src="/overlay.png"
        alt="Overlay background"
        layout="fill"
        className="absolute inset-0 object-cover"
        priority
      />
      <div className="container mx-auto relative flex h-full items-center">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 font-serif text-6xl font-bold leading-tight">
            We&apos;ve got your morning covered with
            <span className="block text-8xl italic text-amber-400">Coffee</span>
          </h1>
          <p className="mb-8 text-lg text-gray-200">
            It is best to start your day with a cup of coffee. Discover the best
            flavors coffee you&apos;ll ever have.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
