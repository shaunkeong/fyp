'use client'
import { Filter, ShoppingCart, Package, Search, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function MerchPage() {
  const [activeTab, setActiveTab] = useState('campaigns') // 'campaigns' or 'all'

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-screen -ml-31 -mt-16">
        <div className="w-full bg-gradient-to-r from-[#4361EE] to-[#7209B7] pt-32 pb-24">
          <div className="max-w-[1200px] mx-auto px-4">
            {/* Header Content */}
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Malaysian Musicians Merchandise
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Support local artists by purchasing exclusive merchandise from their campaigns
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {/* Active Campaigns */}
              <div className="text-center">
                <div className="text-5xl md:text-5xl font-bold text-white mb-2">3</div>
                <div className="text-white/80 text-lg">Active Campaigns</div>
              </div>

              {/* Total Backers */}
              <div className="text-center">
                <div className="text-5xl md:text-5xl font-bold text-white mb-2">469</div>
                <div className="text-white/80 text-lg">Total Backers</div>
              </div>

              {/* Funds Raised */}
              <div className="text-center">
                <div className="text-5xl md:text-5xl font-bold text-white mb-2 whitespace-nowrap">
                  51.2 ETH
                </div>
                <div className="text-white/80 text-lg">Funds Raised</div>
              </div>

              {/* Merchandise Items */}
              <div className="text-center">
                <div className="text-5xl md:text-5xl font-bold text-white mb-2">6</div>
                <div className="text-white/80 text-lg">Merchandise Items</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-screen -ml-31 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-16">
          {/* Action Bar */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-12">
            <div className="relative flex-grow max-w-3xl">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search campaigns, artists, or merchandise..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-900/60 text-gray-900"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
              </button>
              <div className="relative">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors">
                  All
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors">
                  Newest First
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Browse Navigation */}
          <div className="flex justify-between items-center border-b border-gray-200 mb-12">
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`pb-4 px-1 text-lg font-medium relative ${
                activeTab === 'campaigns'
                  ? 'text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Browse by Campaigns
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`pb-4 px-1 text-lg font-medium relative ${
                activeTab === 'all'
                  ? 'text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              All Merchandise
            </button>
          </div>

          {/* Campaign Content - Only show when campaigns tab is active */}
          {activeTab === 'campaigns' && (
            <>
              {/* First Campaign Section */}
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 hover:shadow-md transition-all">
                {/* Campaign Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="space-y-6">
                    <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                      {/* Campaign Image Placeholder */}
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400">Album Image</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-black text-white text-sm font-semibold tracking-wide inline-block px-4 py-2 rounded-full">Album Production</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Debut Album: Malaysian Rhythms</h3>
                        <p className="text-lg font-medium text-blue-600 mb-1">by Aisha Rahman</p>
                        <p className="text-base text-gray-600 leading-relaxed">A fusion of traditional Malaysian sounds with modern beats</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-5 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm font-medium text-gray-600">
                            <span>Progress</span>
                            <span>53%</span>
                          </div>
                          <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 rounded-full w-[53%]"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-blue-100 pt-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Raised</p>
                            <p className="text-xl font-bold text-gray-900">8.2 ETH</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600 mb-1">Backers</p>
                            <p className="text-xl font-bold text-gray-900">124</p>
                          </div>
                        </div>
                      </div>
                      <button className="w-full text-center border-2 border-gray-200 py-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-semibold">
                        View Campaign
                      </button>
                    </div>
                  </div>

                  {/* Campaign Merchandise */}
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Campaign Merchandise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Apparel Card */}
                      <div className="space-y-5">
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
                          <button className="absolute top-4 right-4 p-2.5 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">Apparel</div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900">Limited Edition T-Shirt</h3>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-yellow-400">
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                            </div>
                            <p className="text-base">
                              <span className="font-semibold text-gray-900">4.8</span>
                              <span className="text-gray-500 ml-1">(24 reviews)</span>
                            </p>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Price</p>
                              <p className="text-xl font-bold text-green-600">0.045 ETH</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500 mb-1">Stock</p>
                              <p className="text-lg font-semibold text-gray-900">25 left</p>
                            </div>
                          </div>
                          <button className="w-full py-3.5 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 font-semibold text-base shadow-lg hover:shadow-xl">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      {/* Music Card */}
                      <div className="space-y-5">
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
                          <button className="absolute top-4 right-4 p-2.5 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">Music</div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900">Signed Album Pre-order</h3>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-yellow-400">
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                            </div>
                            <p className="text-base">
                              <span className="font-semibold text-gray-900">4.8</span>
                              <span className="text-gray-500 ml-1">(24 reviews)</span>
                            </p>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Price</p>
                              <p className="text-xl font-bold text-green-600">0.085 ETH</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500 mb-1">Stock</p>
                              <p className="text-lg font-semibold text-gray-900">50 left</p>
                            </div>
                          </div>
                          <button className="w-full py-3.5 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 font-semibold text-base shadow-lg hover:shadow-xl">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Campaign Section */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
                {/* Campaign Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="space-y-6">
                    <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                      {/* Campaign Image Placeholder */}
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400">Campaign Image</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-purple-600 text-white text-sm font-semibold tracking-wide inline-block px-4 py-2 rounded-full">Cultural Heritage</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Traditional Instruments Revival</h3>
                        <p className="text-lg font-medium text-purple-600 mb-1">by The KL Collective</p>
                        <p className="text-base text-gray-600 leading-relaxed">Preserving Malaysian musical heritage through handcrafted instruments</p>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-5 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm font-medium text-gray-600">
                            <span>Progress</span>
                            <span>67%</span>
                          </div>
                          <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-600 rounded-full w-[67%]"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-purple-100 pt-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Raised</p>
                            <p className="text-xl font-bold text-gray-900">12.4 ETH</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600 mb-1">Backers</p>
                            <p className="text-xl font-bold text-gray-900">186</p>
                          </div>
                        </div>
                      </div>
                      <button className="w-full text-center border-2 border-gray-200 py-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-semibold">
                        View Campaign
                      </button>
                    </div>
                  </div>

                  {/* Campaign Merchandise */}
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Campaign Merchandise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Posters Card */}
                      <div className="space-y-5">
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
                          <button className="absolute top-4 right-4 p-2.5 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">Posters</div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900">Limited Edition Art Print</h3>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-yellow-400">
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                            </div>
                            <p className="text-base">
                              <span className="font-semibold text-gray-900">4.9</span>
                              <span className="text-gray-500 ml-1">(32 reviews)</span>
                            </p>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Price</p>
                              <p className="text-xl font-bold text-green-600">0.035 ETH</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500 mb-1">Stock</p>
                              <p className="text-lg font-semibold text-gray-900">40 left</p>
                            </div>
                          </div>
                          <button className="w-full py-3.5 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 font-semibold text-base shadow-lg hover:shadow-xl">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      {/* Accessories Card */}
                      <div className="space-y-5">
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
                          <button className="absolute top-4 right-4 p-2.5 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </button>
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">Accessories</div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900">Handcrafted Instrument Keychain</h3>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-yellow-400">
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                              <span className="text-lg">★</span>
                            </div>
                            <p className="text-base">
                              <span className="font-semibold text-gray-900">4.7</span>
                              <span className="text-gray-500 ml-1">(18 reviews)</span>
                            </p>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Price</p>
                              <p className="text-xl font-bold text-green-600">0.015 ETH</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500 mb-1">Stock</p>
                              <p className="text-lg font-semibold text-gray-900">75 left</p>
                            </div>
                          </div>
                          <button className="w-full py-3.5 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 font-semibold text-base shadow-lg hover:shadow-xl">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* All Merchandise Content - Only show when all tab is active */}
          {activeTab === 'all' && (
            <div className="min-h-[400px] flex items-center justify-center text-gray-500">
              All Merchandise content will be added here
            </div>
          )}
        </div>
      </section>
    </>
  )
}
