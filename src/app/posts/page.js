import { MessageCircle, Filter } from 'lucide-react'

export default function PostsPage() {
  return (
    <>
      {/* White Background Section */}
      <section className="w-screen -ml-31 bg-white min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Community Posts
              </h1>
              <p className="text-lg text-gray-600">
                Share your musical journey with the community
              </p>
            </div>
            <button
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Post
            </button>
          </div>

          {/* Filter Section */}
          <div className="flex gap-3 mb-12">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              All
            </button>
          </div>

          {/* Empty State */}
          <div className="bg-gray-50 rounded-2xl py-24">
            <div className="max-w-md mx-auto text-center px-4">
              <div className="flex justify-center mb-6">
                <MessageCircle className="w-20 h-20 text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                No posts yet
              </h2>
              <p className="text-gray-600 text-lg">
                Be the first to share something with the community!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
