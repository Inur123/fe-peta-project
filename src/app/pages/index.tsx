// src/pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4">
          <h2 className="text-xl font-bold mb-4">Latest News</h2>
          <article className="mb-4">
            <h3 className="text-lg font-semibold">Article Title 1</h3>
            <p>Summary of the first article goes here. This is a brief overview of the news content.</p>
          </article>
          <article className="mb-4">
            <h3 className="text-lg font-semibold">Article Title 2</h3>
            <p>Summary of the second article goes here. This is a brief overview of the news content.</p>
          </article>
          <article className="mb-4">
            <h3 className="text-lg font-semibold">Article Title 3</h3>
            <p>Summary of the third article goes here. This is a brief overview of the news content.</p>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;