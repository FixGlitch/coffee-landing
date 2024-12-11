import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function NewsletterSection() {
  return (
    <section className="relative py-20 h-[500px] text-white">
      <Image
        src="/newsletter.png"
        alt="newsletter background"
        fill={true}
        className="absolute inset-0 object-cover z-0"
        priority
      />
      <div className="container mx-auto flex justify-center items-center h-full relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold">
            Subscribe to get the Latest News
          </h2>
          <p className="mb-8">
            Don&apos;t miss out on our latest news, updates, tips, and special
            offers
          </p>
          <form className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 text-white placeholder:text-gray-400"
            />
            <Button className="bg-amber-500 hover:bg-amber-600 rounded-full">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
