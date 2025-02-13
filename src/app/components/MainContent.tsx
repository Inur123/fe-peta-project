"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const MainContent = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://achieved.zainur.my.id/api/home');
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

  if (loading) return <p>Memuat...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full lg:w-2/3">
      {/* News Grid */}
      <h2 className="text-xl font-bold mb-4 text-red-600">Terkini</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {data.post_terkini.map((post: any) => (
          <Link href={`/berita/${post.slug}`} key={post.id} passHref>
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative border border-gray-300 hover:border-red-600 transition-all duration-300 cursor-pointer">
              <img
                src={`http://achieved.zainur.my.id/storage/${post.thumbnail}`}
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
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Category Sections */}
      <div className="space-y-8">
        {/* Berita */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-red-600">Berita</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.post_terkini.slice(0, 2).map((post: any) => (
              <Link href={`/berita/${post.slug}`} key={post.id} passHref>
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative border border-gray-300 hover:border-red-600 transition-all duration-300 cursor-pointer">
                  <img
                    src={`http://achieved.zainur.my.id/storage/${post.thumbnail}`}
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
                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;