import { Coffee, Award, Star, DollarSign } from "lucide-react";

const features = [
  {
    title: "Supreme Beans",
    description: "Beans that provides great taste",
    icon: Coffee,
  },
  {
    title: "High Quality",
    description: "We provide the highest quality",
    icon: Award,
  },
  {
    title: "Extraordinary",
    description: "Coffee like no other",
    icon: Star,
  },
  {
    title: "Affordable Price",
    description: "Our coffee prices are easy to afford",
    icon: DollarSign,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-[#603809]">
          Why are we different?
        </h2>
        <p className="mb-12 text-center text-gray-600">
          We don’t just make your coffee, we make your day!
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col justify-center items-center bg-amber-50 h-[280px] w-[280px] p-6 text-center border border-amber-500 hover:bg-amber-300"
            >
              <feature.icon className="mx-auto mb-4 h-16 w-16 text-black" />
              <h3 className="mb-2 font-semibold text-[#603809] text-3xl">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
