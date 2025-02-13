// src/app/components/Sidebar.tsx
const Sidebar = () => {
    return (
      <div className="w-full lg:w-1/3">
        {/* Iklan */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-2">Iklan</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-center">
              <img
                src="images/login.png"
                alt="Iklan 1"
                className="rounded-lg object-contain"
                style={{ width: '400px', height: '400px' }}
              />
            </li>
          </ul>
        </div>
  
        {/* Video Terbaru */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Vidio Terbaru</h2>
          <div className="space-y-4">
            <div>
              <div className="h-40 mb-2">
                <iframe
                  src="https://www.youtube.com/embed/DXMfoLTIeoE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ height: '100%', width: '100%', borderRadius: '10px' }}
                ></iframe>
              </div>
            </div>
            <div>
              <div className="h-40 mb-2">
                <iframe
                  src="https://www.youtube.com/embed/DXMfoLTIeoE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ height: '100%', width: '100%', borderRadius: '10px' }}
                ></iframe>
              </div>
            </div>
            <div>
              <div className="h-40 mb-2">
                <iframe
                  src="https://www.youtube.com/embed/DXMfoLTIeoE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ height: '100%', width: '100%', borderRadius: '10px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
  
        {/* Berita Populer */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Berita Populer</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <img
                src="images/login.png"
                alt="1"
                className="w-10 h-10 mr-4 rounded-lg"
              />
              <p className="text-sm">Judul berita populer pertama di sini</p>
            </li>
            <li className="flex items-center">
              <img
                src="images/login.png"
                alt="2"
                className="w-10 h-10 mr-4 rounded-lg"
              />
              <p className="text-sm">Judul berita populer kedua di sini</p>
            </li>
            <li className="flex items-center">
              <img
                src="images/login.png"
                alt="3"
                className="w-10 h-10 mr-4 rounded-lg"
              />
              <p className="text-sm">Judul berita populer ketiga di sini</p>
            </li>
            <li className="flex items-center">
              <img
                src="images/login.png"
                alt="4"
                className="w-10 h-10 mr-4 rounded-lg"
              />
              <p className="text-sm">Judul berita populer keempat di sini</p>
            </li>
            <li className="flex items-center">
              <img
                src="images/login.png"
                alt="5"
                className="w-10 h-10 mr-4 rounded-lg"
              />
              <p className="text-sm">Judul berita populer kelima di sini</p>
            </li>
          </ul>
        </div>
  
        {/* Tag Populer */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Tag Populer</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">#Politik</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">#Ekonomi</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">#COVID19</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">#Olahraga</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">#Teknologi</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">#Hiburan</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">#Pendidikan</span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">#Kesehatan</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;