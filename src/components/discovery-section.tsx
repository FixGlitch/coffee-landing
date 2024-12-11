import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DiscoverySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-brown-900">Discover the best coffee</h2>
            <p className="mb-8 text-gray-600">
              Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps
              build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater.
            </p>
            <Button className="w-fit bg-amber-500 hover:bg-amber-600 rounded-full">Learn More</Button>
          </div>
          <div className="relative">
            <Image
              src="/discovery.png"
              alt="Coffee beans in heart shape"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

