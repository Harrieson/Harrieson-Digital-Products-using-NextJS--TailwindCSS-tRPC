import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../components/ui/button";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your assets delivered right in your email"
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description: 'Superior Quality Products.'
  }
]
export default function Home() {
  return ( 
    <>
  <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Go To Market For <span className="text-blue-600">Digital products</span>.</h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to Digital Thames
        All Digital products are checked to ensure no harmful information is hidden, verification by SHA-256 and MD5 hashing ensures products is in its original state of packaging.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href='/products' className={buttonVariants()}>Browse Top Products</Link>
        <Button variant='secondary'>Our Quality Guarantee &rarr;</Button>
      </div>
    </div>
  </MaxWidthWrapper>
  <section className="border-t border-gray-200 bg-gray-50">
    <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">

      </div>
    </MaxWidthWrapper>
  </section>
  </>
)}
