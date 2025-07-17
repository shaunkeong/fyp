import Link from "next/link"
import { Music, Target, TrendingUp, Users, Star, Heart, Share2 } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#C026D3] -ml-31">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-yellow-500 mb-8 leading-tight text-center">
            Fund Malaysian Music
                </h1>
          <p className="text-lg md:text-xl text-[var(--foreground)]/80 max-w-[800px] text-center mb-12 leading-relaxed">
            The first blockchain-powered crowdfunding platform dedicated to Malaysian
            musicians. Support local talent, discover new sounds, and be part of Malaysia's
            music revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md">
                <Link
              href="/campaigns" 
              className="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 text-[var(--background)] rounded-md font-medium hover:bg-yellow-600 transition-colors text-center"
                >
                  Explore Campaigns
                </Link>
                <Link
              href="/start-campaign" 
              className="w-full sm:w-auto px-8 py-3.5 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-colors text-center"
            >
              Start Your Campaign
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-screen py-16 bg-white -ml-31">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,247 ETH</h3>
              <p className="text-gray-600">Total Raised</p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">156</h3>
              <p className="text-gray-600">Active Campaigns</p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">89</h3>
              <p className="text-gray-600">Artists Supported</p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2,341</h3>
              <p className="text-gray-600">Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="w-screen py-20 bg-[#0a0a0a] -ml-31">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Campaigns</h2>
            <p className="text-gray-400 text-lg">Discover and support the most promising Malaysian music projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Campaign Card 1 */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gray-800"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">Album Production</span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Debut Album: Malaysian Rhythms</h3>
                <p className="text-blue-500 mb-4">by Aisha Rahman</p>
                <p className="text-gray-400 text-sm mb-6">A fusion of traditional Malaysian sounds with modern beats, celebrating our rich cultural heritage through...</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">53% funded</span>
                    <span className="text-gray-400">18 days left</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '53%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-500 text-xl font-bold">8.2 ETH</p>
                      <p className="text-gray-400 text-sm">of 15.5 ETH goal</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-xl font-bold">124</p>
                      <p className="text-gray-400 text-sm">backers</p>
                    </div>
                  </div>
                  <Link 
                    href="/campaigns/malaysian-rhythms"
                    className="block w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-center font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    View Campaign
                  </Link>
                </div>
              </div>
            </div>

            {/* Campaign Card 2 */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gray-800"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">Cultural Heritage</span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Traditional Instruments Revival</h3>
                <p className="text-blue-500 mb-4">by The KL Collective</p>
                <p className="text-gray-400 text-sm mb-6">Preserving Malaysian traditional music by recording with authentic gamelan and kompang instruments...</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">67% funded</span>
                    <span className="text-gray-400">25 days left</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-500 text-xl font-bold">14.7 ETH</p>
                      <p className="text-gray-400 text-sm">of 22 ETH goal</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-xl font-bold">89</p>
                      <p className="text-gray-400 text-sm">backers</p>
                    </div>
                  </div>
                  <Link 
                    href="/campaigns/traditional-instruments"
                    className="block w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-center font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    View Campaign
                  </Link>
                </div>
              </div>
            </div>

            {/* Campaign Card 3 */}
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gray-800"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">Concert Tour</span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Indie Rock Concert Tour</h3>
                <p className="text-blue-500 mb-4">by Faizal Tahir</p>
                <p className="text-gray-400 text-sm mb-6">Bringing Malaysian rock music to every state with a nationwide concert tour...</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">81% funded</span>
                    <span className="text-gray-400">12 days left</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '81%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-500 text-xl font-bold">28.3 ETH</p>
                      <p className="text-gray-400 text-sm">of 35 ETH goal</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-xl font-bold">256</p>
                      <p className="text-gray-400 text-sm">backers</p>
                    </div>
                  </div>
                  <Link 
                    href="/campaigns/indie-rock-tour"
                    className="block w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-center font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    View Campaign
                </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/campaigns"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-colors"
            >
              View All Campaigns
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-screen py-20 bg-white -ml-31">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">
              Simple steps to support Malaysian musicians or launch your own campaign
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <p className="text-gray-700">
                Connect your Ethereum wallet to start supporting campaigns or create your own
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <p className="text-gray-700">
                Browse campaigns, listen to demos, and support artists with ETH contributions
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <p className="text-gray-700">
                Receive exclusive merchandise, early access, and special perks from artists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Make Music History Section */}
      <section className="w-screen py-20 bg-gradient-to-r from-blue-600 to-purple-600 -ml-31">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Make Music History?</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of music lovers supporting Malaysian talent through blockchain technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/campaigns"
              className="px-8 py-3.5 bg-white text-[var(--background)] rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Start Supporting Artists
            </Link>
            <Link
              href="/start-campaign"
              className="px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Launch Your Campaign
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
