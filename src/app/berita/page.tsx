"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Loading from "../components/Loading"; // Import komponen Loading
import { API_ENDPOINTS,IMAGE_URLS } from '../../config/api';

const BeritaPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.BERITA);
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
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

  // Fungsi untuk memotong teks menjadi maksimal 45 kata
  const truncateExcerpt = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  if (loading) {
    return <Loading />; // Tampilkan spinner saat loading
  }

  if (error) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Isi Konten */}
      <h2 className="text-xl font-bold mb-4 text-red-600">Berita</h2>
      {data.length === 0 ? (
        <p className="text-gray-600 text-center">Tidak ada Berita</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {data.map((post) => (
            <Link href={`/berita/${post.slug}`} key={post.id} passHref>
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative border border-gray-300 hover:border-red-600 transition-all duration-300 cursor-pointer">
                <img
                src={`${IMAGE_URLS.THUMBNAIL}${post.thumbnail}`}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                  <span className="text-xs">Berita</span>
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-gray-500 text-xs">
                        Penulis: {post.author_id}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{post.title}</h3>
                  <p
                    className="text-gray-600 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: truncateExcerpt(post.content, 45), // Batasi excerpt menjadi 45 kata
                    }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default BeritaPage;