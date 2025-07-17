import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Handshake, Rocket } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Removed the outer div and nested main tag. Content flows directly. */}
      <section className="w-full py-12 md:py-24 ...">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-cyber-blue drop-shadow-lg">
                  Empower Malaysian Music with TuneFund
                </h1>
                <p className="max-w-[600px] text-cyber-gray md:text-xl">
                  A decentralized crowdfunding platform connecting Malaysian musicians with their fans and supporters,
                  powered by blockchain.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-cyber-blue px-8 text-sm font-medium text-dark-bg shadow-lg transition-colors hover:bg-neon-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explore Campaigns
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-cyber-purple bg-transparent px-8 text-sm font-medium text-cyber-purple shadow-sm transition-colors hover:bg-cyber-purple/20 hover:text-neon-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Start a Campaign
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=550"
              width="550"
              height="400"
              alt="Futuristic Music Visualizer"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square border border-cyber-blue/20 shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-cyber-blue">How TuneFund Works</h2>
              <p className="max-w-[900px] text-cyber-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                TuneFund leverages blockchain technology to provide a transparent and secure platform for musicians and
                their supporters.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-10">
            <Card className="flex flex-col items-center text-center p-6 bg-card border border-cyber-purple/30 shadow-lg hover:shadow-cyber-purple/30 transition-shadow">
              <CardHeader>
                <Music className="h-12 w-12 text-neon-green mb-4" />
                <CardTitle className="text-cyber-blue">Create Your Campaign</CardTitle>
              </CardHeader>
              <CardContent className="text-cyber-gray">
                Musicians can easily set up campaigns for new albums, tours, or music videos, defining their goals and
                rewards.
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6 bg-card border border-cyber-purple/30 shadow-lg hover:shadow-cyber-purple/30 transition-shadow">
              <CardHeader>
                <Handshake className="h-12 w-12 text-neon-green mb-4" />
                <CardTitle className="text-cyber-blue">Support Musicians</CardTitle>
              </CardHeader>
              <CardContent className="text-cyber-gray">
                Fans can discover and support their favorite Malaysian artists by contributing directly to their
                campaigns using cryptocurrency.
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6 bg-card border border-cyber-purple/30 shadow-lg hover:shadow-cyber-purple/30 transition-shadow">
              <CardHeader>
                <Rocket className="h-12 w-12 text-neon-green mb-4" />
                <CardTitle className="text-cyber-blue">Decentralized & Transparent</CardTitle>
              </CardHeader>
              <CardContent className="text-cyber-gray">
                All transactions are recorded on the blockchain, ensuring transparency and security for both musicians
                and supporters.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-dark-bg to-cyber-blue/20 border-t border-cyber-purple/10">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-neon-green">
            Join the TuneFund Community
          </h2>
          <p className="max-w-[700px] mx-auto text-cyber-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Be part of a movement that empowers Malaysian musicians and brings their art to the world.
          </p>
          <div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-cyber-blue px-8 text-sm font-medium text-dark-bg shadow-lg transition-colors hover:bg-neon-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-cyber-purple bg-transparent px-8 text-sm font-medium text-cyber-purple shadow-sm transition-colors hover:bg-cyber-purple/20 hover:text-neon-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
