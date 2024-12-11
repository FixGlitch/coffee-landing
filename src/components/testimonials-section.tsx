import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-[#603809]">
          Our coffee perfection feedback
        </h2>
        <p className="mb-8 text-center text-gray-700">
          Our customers has amazing things to say about us
        </p>
        <div className="relative mx-auto max-w-2xl h-1/2 bg-amber-50 border border-amber-500 p-12">
          <div className="flex flex-col justify-start items-center">
            <blockquote className="w-2/3 text-center text-lg text-gray-600">
              &quot;Lorem ipsum is simply dummy text of the printing and
              typesetting industry. Lorem ipsum has been the industry&apos;s
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book.&quot;
            </blockquote>
          </div>
          <div className="flex flex-col-reverse items-center justify-center mt-10">
            <Image
              src="/testimonial.png"
              alt="Testimonial"
              width={112}
              height={112}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-[#603809] text-2xl">
                Mary Smith
              </p>
              <p className="text-lg text-gray-600">Coffe Enthusiast</p>
            </div>
          </div>
          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between">
            <Button
              size="lg"
              variant="ghost"
              className="h-20 bg-amber-500 hover:bg-amber-600 -translate-x-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-20 bg-amber-500 hover:bg-amber-600 translate-x-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
