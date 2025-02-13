// src/app/components/MainContent.tsx
const MainContent = () => {
    return (
      <div className="w-full lg:w-2/3">
        {/* News Grid */}
        <h2 className="text-xl font-bold mb-4 text-red-600">Terkini</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Item Berita 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
            <img
              src="images/login.png"
              alt="News Item"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
              <span className="text-xs">Politik</span>
            </div>
            <div className="p-4 flex-grow">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-gray-500 text-xs">Penulis: John Doe</span>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">12 Januari 2024</span>
                </div>
              </div>
              <h3 className="font-bold mb-2">Berita Politik Terkini</h3>
              <p className="text-gray-600 text-sm">
                Deskripsi singkat berita politik di sini.
              </p>
            </div>
          </div>
          {/* Item Berita 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
            <img
              src="images/login.png"
              alt="News Item"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
              <span className="text-xs">Politik</span>
            </div>
            <div className="p-4 flex-grow">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-gray-500 text-xs">Penulis: John Doe</span>
                </div>
                <div>
                  <span className="text-gray-500 text-xs">12 Januari 2024</span>
                </div>
              </div>
              <h3 className="font-bold mb-2">Berita Politik Terkini</h3>
              <p className="text-gray-600 text-sm">
                Deskripsi singkat berita politik di sini.
              </p>
            </div>
          </div>
        </div>
  
        {/* Category Sections */}
        <div className="space-y-8">
          {/* Berita */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-red-600">Berita</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Item Berita 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
                <img
                  src="images/login.png"
                  alt="News Item"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                  <span className="text-xs">Politik</span>
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-gray-500 text-xs">Penulis: John Doe</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">12 Januari 2024</span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">Berita Politik Terkini</h3>
                  <p className="text-gray-600 text-sm">
                    Deskripsi singkat berita politik di sini.
                  </p>
                </div>
              </div>
              {/* Item Berita 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
                <img
                  src="images/login.png"
                  alt="News Item"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                  <span className="text-xs">Politik</span>
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-gray-500 text-xs">Penulis: John Doe</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">12 Januari 2024</span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">Berita Politik Terkini</h3>
                  <p className="text-gray-600 text-sm">
                    Deskripsi singkat berita politik di sini.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Opini */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-red-600">Opini</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Item Opini 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
                <img
                  src="images/login.png"
                  alt="News Item"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                  <span className="text-xs">Politik</span>
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-gray-500 text-xs">Penulis: John Doe</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">12 Januari 2024</span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">Berita Politik Terkini</h3>
                  <p className="text-gray-600 text-sm">
                    Deskripsi singkat berita politik di sini.
                  </p>
                </div>
              </div>
              {/* Item Opini 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
                <img
                  src="images/login.png"
                  alt="News Item"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                  <span className="text-xs">Politik</span>
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-gray-500 text-xs">Penulis: John Doe</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">12 Januari 2024</span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">Berita Politik Terkini</h3>
                  <p className="text-gray-600 text-sm">
                    Deskripsi singkat berita politik di sini.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Podcast */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-red-600">Podcast</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Item Podcast 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
                <img
                  src="images/login.png"
                  alt="News Item"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                  <span className="text-xs">Politik</span>
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-gray-500 text-xs">Penulis: John Doe</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">12 Januari 2024</span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">Berita Politik Terkini</h3>
                  <p className="text-gray-600 text-sm">
                    Deskripsi singkat berita politik di sini.
                  </p>
                </div>
              </div>
              {/* Item Podcast 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
                <img
                  src="images/login.png"
                  alt="News Item"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                  <span className="text-xs">Politik</span>
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-gray-500 text-xs">Penulis: John Doe</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">12 Januari 2024</span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">Berita Politik Terkini</h3>
                  <p className="text-gray-600 text-sm">
                    Deskripsi singkat berita politik di sini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MainContent;