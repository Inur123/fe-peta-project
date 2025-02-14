"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { API_ENDPOINTS, IMAGE_URLS } from '../../config/api'; // Import konfigurasi API dan gambar

const Sidebar = () => {
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

  if (loading) return <p>Memuat...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full lg:w-1/3">
      {/* Iklan */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Iklan</h2>
        <ul className="space-y-4">
          {data.iklan.map((iklan: any) => (
            <li key={iklan.id} className="flex items-center justify-center">
              <img
                src={`${IMAGE_URLS.IKLAN}${iklan.image}`}
                alt={iklan.name}
                className="rounded-lg object-contain"
                style={{ width: '400px', height: '400px' }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Video Terbaru */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Video Terbaru</h2>
        <div className="space-y-4">
          {data.vidio.map((video: any) => (
            <div key={video.id}>
              <div className="h-40 mb-2">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ height: '100%', width: '100%', borderRadius: '10px' }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Berita Populer */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Berita Populer</h2>
        <ul className="space-y-4">
          {data.post_terkini.slice(0, 4).map((post: any) => (
            <Link href={`/berita/${post.slug}`} key={post.id} passHref>
              <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                <img
                src={`${IMAGE_URLS.THUMBNAIL}${post.thumbnail}`}
                  alt={post.title}
                  className="w-10 h-10 mr-4 rounded-lg"
                />
                <p className="text-sm">{post.title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Tag Populer */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Tag Populer</h2>
        <div className="flex flex-wrap gap-2">
          {data.messages.map((tag: string, index: number) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;