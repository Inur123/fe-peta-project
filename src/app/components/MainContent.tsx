"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { API_ENDPOINTS, IMAGE_URLS } from '../../config/api'; // Import konfigurasi API dan gambar

const MainContent = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.HOME); // Gunakan URL dari konfigurasi
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const truncateExcerpt = (text: string, maxWords: number) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  if (loading) return <p>Memuat...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full lg:w-2/3">
      {/* News Grid */}
      <h2 className="text-xl font-bold mb-4 text-red-600">Terkini</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {data?.post_terkini?.length > 0 ? (
          data.post_terkini.map((post: any) => (
            <Link href={`/berita/${post.slug}`} key={post.id} passHref>
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative border border-gray-300 hover:border-red-600 transition-all duration-300 cursor-pointer">
                <img
                  src={`${IMAGE_URLS.THUMBNAIL}${post.thumbnail}`} // Gunakan base URL gambar
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                  <span className="text-xs">Berita</span>
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-gray-500 text-xs">Penulis: {post.author_id}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: truncateExcerpt(post.content, 45) }} />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600 text-center">Tidak ada berita terbaru</p>
        )}
      </div>

      {/* Category Sections */}
      <div className="space-y-8">
        {/* Berita */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-red-600">Berita</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data?.berita_terkini?.length > 0 ? (
              data.berita_terkini.slice(0, 2).map((berita: any) => (
                <Link href={`/berita/${berita.slug}`} key={berita.id} passHref>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative border border-gray-300 hover:border-red-600 transition-all duration-300 cursor-pointer">
                    <img
                      src={`${IMAGE_URLS.THUMBNAIL}${berita.thumbnail}`} // Gunakan base URL gambar
                      alt={berita.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                      <span className="text-xs">Berita</span>
                    </div>
                    <div className="p-4 flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-gray-500 text-xs">Penulis: {berita.author_id}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-xs">
                            {new Date(berita.published_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-bold mb-2">{berita.title}</h3>
                      <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: truncateExcerpt(berita.content, 45) }} />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-600 text-center">Tidak ada Berita</p>
            )}
          </div>
          <h2 className="text-xl font-bold mb-4 text-red-600">Opini</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data?.opini_terkini?.length > 0 ? (
              data.opini_terkini.slice(0, 2).map((opini: any) => (
                <Link href={`/berita/${opini.slug}`} key={opini.id} passHref>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative border border-gray-300 hover:border-red-600 transition-all duration-300 cursor-pointer">
                    <img
                      src={`${IMAGE_URLS.THUMBNAIL}${opini.thumbnail}`} // Gunakan base URL gambar
                      alt={opini.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                      <span className="text-xs">Berita</span>
                    </div>
                    <div className="p-4 flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-gray-500 text-xs">Penulis: {opini.author_id}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-xs">
                            {new Date(opini.published_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-bold mb-2">{opini.title}</h3>
                      <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: truncateExcerpt(opini.content, 45) }} />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-600 text-center">Tidak ada opini terbaru</p>
            )}
          </div>
          <h2 className="text-xl font-bold mt-4 mb-4 text-red-600">Podcast</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data?.podcast_terkini?.length > 0 ? (
              data.podcast_terkini.slice(0, 2).map((podcast: any) => (
                <Link href={`/berita/${podcast.slug}`} key={podcast.id} passHref>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative border border-gray-300 hover:border-red-600 transition-all duration-300 cursor-pointer">
                    <img
                      src={`${IMAGE_URLS.THUMBNAIL}${podcast.thumbnail}`} // Gunakan base URL gambar
                      alt={podcast.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                      <span className="text-xs">Berita</span>
                    </div>
                    <div className="p-4 flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-gray-500 text-xs">Penulis: {podcast.author_id}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-xs">
                            {new Date(podcast.published_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-bold mb-2">{podcast.title}</h3>
                      <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: truncateExcerpt(podcast.content, 45) }} />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-600 text-center">Tidak ada podcast terbaru</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;