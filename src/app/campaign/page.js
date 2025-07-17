import { Search, Heart, Share2, Users } from 'lucide-react'
import Link from 'next/link'

export default function CampaignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-screen -ml-31 -mt-16">
        <div className="w-full bg-gradient-to-r from-[#4361EE] to-[#7209B7] pt-32 pb-24">
          <div className="max-w-[1200px] mx-auto px-4">
            {/* Header Content */}
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Discover Amazing Campaigns
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Support Malaysian musicians and help bring their creative visions to life
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {/* Active Campaigns */}
              <div className="text-center">
                <div className="text-5xl md:text-5xl font-bold text-white mb-2">6</div>
                <div className="text-white/80 text-lg">Active Campaigns</div>
              </div>

              {/* Total Raised */}
              <div className="text-center">
                <div className="text-5xl md:text-5xl font-bold text-white mb-2 whitespace-nowrap">
                  90.8 ETH
                </div>
                <div className="text-white/80 text-lg">Total Raised</div>
              </div>

              {/* Total Backers */}
              <div className="text-center">
                <div className="text-5xl md:text-5xl font-bold text-white mb-2">770</div>
                <div className="text-white/80 text-lg">Total Backers</div>
              </div>

              {/* Average Funding */}
              <div className="text-center">
                <div className="text-5xl md:text-5xl font-bold text-white mb-2">59%</div>
                <div className="text-white/80 text-lg">Avg. Funding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Listing Section */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search campaigns, artists, or keywords..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#0B1120] text-white rounded-lg border border-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Filter Buttons */}
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-[#0B1120] text-white rounded-lg border border-gray-800 hover:bg-gray-800">
                All
              </button>
              <button className="px-6 py-2.5 bg-[#0B1120] text-white rounded-lg border border-gray-800 hover:bg-gray-800">
                Newest First
              </button>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-400 mb-6">Showing 6 of 6 campaigns</p>

          {/* Campaign Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Campaign Card 1 */}
            <div className="bg-[#0B1120] rounded-lg overflow-hidden border border-gray-800">
              <div className="relative aspect-video bg-gray-800">
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Album Production
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
                  Image Placeholder
                </span>
              </div>
              <div className="p-5">
                <div className="inline-block px-2 py-1 bg-red-500/10 text-red-500 text-xs rounded-md mb-3">
                  Featured
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Debut Album: Malaysian Rhythms
                </h3>
                <p className="text-blue-400 mb-3">by Aisha Rahman</p>
                <p className="text-gray-400 text-sm mb-4">
                  A fusion of traditional Malaysian sounds with modern beats, celebrating our rich cultural heritage through...
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">53% funded</span>
                    <span className="text-gray-400">18 days left</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[53%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-500 font-bold">8.2 ETH</p>
                      <p className="text-gray-400 text-sm">of 15.5 ETH goal</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>124 backers</span>
                    </div>
                  </div>
                  <Link
                    href="/campaigns/malaysian-rhythms"
                    className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                  >
                    Support Campaign
                  </Link>
                </div>
              </div>
            </div>

            {/* Campaign Card 2 */}
            <div className="bg-[#0B1120] rounded-lg overflow-hidden border border-gray-800">
              <div className="relative aspect-video bg-gray-800">
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Cultural Heritage
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
                  Image Placeholder
                </span>
              </div>
              <div className="p-5">
                <div className="inline-block px-2 py-1 bg-red-500/10 text-red-500 text-xs rounded-md mb-3">
                  Featured
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Traditional Instruments Revival
                </h3>
                <p className="text-blue-400 mb-3">by The KL Collective</p>
                <p className="text-gray-400 text-sm mb-4">
                  Preserving Malaysian traditional music by recording with authentic gamelan and kompang instruments...
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">67% funded</span>
                    <span className="text-gray-400">25 days left</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[67%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-500 font-bold">14.7 ETH</p>
                      <p className="text-gray-400 text-sm">of 22 ETH goal</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>89 backers</span>
                    </div>
                  </div>
                  <Link
                    href="/campaigns/traditional-instruments"
                    className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                  >
                    Support Campaign
                  </Link>
                </div>
              </div>
            </div>

            {/* Campaign Card 3 */}
            <div className="bg-[#0B1120] rounded-lg overflow-hidden border border-gray-800">
              <div className="relative aspect-video bg-gray-800">
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Concert Tour
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
                  Image Placeholder
                </span>
              </div>
              <div className="p-5">
                <div className="inline-block px-2 py-1 bg-red-500/10 text-red-500 text-xs rounded-md mb-3">
                  Featured
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Indie Rock Concert Tour
                </h3>
                <p className="text-blue-400 mb-3">by Faizal Tahir</p>
                <p className="text-gray-400 text-sm mb-4">
                  Bringing Malaysian rock music to every state with a nationwide concert tour...
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">81% funded</span>
                    <span className="text-gray-400">12 days left</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[81%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-500 font-bold">28.3 ETH</p>
                      <p className="text-gray-400 text-sm">of 35 ETH goal</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>256 backers</span>
                    </div>
                  </div>
                  <Link
                    href="/campaigns/indie-rock-tour"
                    className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                  >
                    Support Campaign
                  </Link>
                </div>
              </div>
            </div>

            {/* Campaign Card 4 */}
            <div className="bg-[#0B1120] rounded-lg overflow-hidden border border-gray-800">
              <div className="relative aspect-video bg-gray-800">
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Documentary
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
                  Image Placeholder
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-1">
                  Hip-Hop Documentary Project
                </h3>
                <p className="text-blue-400 mb-3">by Mizz Nina</p>
                <p className="text-gray-400 text-sm mb-4">
                  Documenting the evolution of Malaysian hip-hop culture and its impact on society...
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">42% funded</span>
                    <span className="text-gray-400">32 days left</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[42%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-500 font-bold">12.6 ETH</p>
                      <p className="text-gray-400 text-sm">of 30 ETH goal</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>67 backers</span>
                    </div>
                  </div>
                  <Link
                    href="/campaigns/hip-hop-documentary"
                    className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                  >
                    Support Campaign
                  </Link>
                </div>
              </div>
            </div>

            {/* Campaign Card 5 */}
            <div className="bg-[#0B1120] rounded-lg overflow-hidden border border-gray-800">
              <div className="relative aspect-video bg-gray-800">
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Album Production
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
                  Image Placeholder
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-1">
                  Jazz Fusion Album
                </h3>
                <p className="text-blue-400 mb-3">by Sheila Majid</p>
                <p className="text-gray-400 text-sm mb-4">
                  A contemporary jazz album featuring collaborations with international artists...
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">79% funded</span>
                    <span className="text-gray-400">8 days left</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[79%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-500 font-bold">19.8 ETH</p>
                      <p className="text-gray-400 text-sm">of 25 ETH goal</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>145 backers</span>
                    </div>
                  </div>
                  <Link
                    href="/campaigns/jazz-fusion"
                    className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                  >
                    Support Campaign
                  </Link>
                </div>
              </div>
            </div>

            {/* Campaign Card 6 */}
            <div className="bg-[#0B1120] rounded-lg overflow-hidden border border-gray-800">
              <div className="relative aspect-video bg-gray-800">
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Education
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-black/50 rounded-full hover:bg-black/70">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
                  Image Placeholder
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-1">
                  Music Education Program
                </h3>
                <p className="text-blue-400 mb-3">by Malaysian Music Foundation</p>
                <p className="text-gray-400 text-sm mb-4">
                  Providing music education and instruments to underprivileged children across Malaysia...
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white">31% funded</span>
                    <span className="text-gray-400">45 days left</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[31%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-500 font-bold">15.5 ETH</p>
                      <p className="text-gray-400 text-sm">of 50 ETH goal</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>89 backers</span>
                    </div>
                  </div>
                  <Link
                    href="/campaigns/music-education"
                    className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                  >
                    Support Campaign
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
