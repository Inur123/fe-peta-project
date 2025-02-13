// src/app/page.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="container mx-auto px-4 py-8"
        style={{ marginTop: "50px" }}
      >
        {/* Bagian atas (Gambar Utama dan Breaking News) */}
        <div
          className="overflow-hidden flex lg:flex-row-reverse flex-col mb-8 mt-10"
          data-aos="zoom-in"
        >
          <img
            src="images/login.png"
            alt="Gambar Utama"
            className="w-full lg:w-1/2 h-96 object-cover rounded-lg hidden lg:block"
          />
          <div
            className="lg:w-1/2 me-5"
            style={{
              backgroundImage: "url('images/indo1.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="text-4xl font-bold mb-2">Peta Project</h1>
            <p className="text-gray-600 text-justify mb-8">
              Sebuah portal berita independen, Peta Project hadir untuk menjadi
              sumber cahaya dalam memahami kompleksitas sosial, politik, hukum,
              dan isu-isu terkini. Kami bukan sekadar menyajikan informasi,
              tetapi juga menghadirkan analisis mendalam, opini kritis, serta
              sudut pandang yang membangun.<br></br>
              Melalui jurnalisme berbasis edukasi, Peta Project berkomitmen pada
              transfer of knowladge, transfer of tools, opinion making dan
              paradigma shifting Dengan liputan yang tajam dan wawasan yang
              mendalam, kami hadir sebagai kompas bagi publik dalam menghadapi
              realitas yang terus berkembang.
            </p>
            <p className="text-black font-bold text-justify">
              Call us (0123) 456 - 789
            </p>
            <p className="text-gray-600 text-justify">
              For any question or concern
            </p>
          </div>
        </div>
        <div className="bg-red-800 py-2 mb-4 rounded-lg">
          <div className="container mx-auto px-4">
            <p className="breaking-news text-sm font-bold text-white transition duration-500 ease-in-out">
              BREAKING NEWS: <span id="changing-text"></span>
            </p>
          </div>
        </div>

        {/* Bagian utama (Main Content dan Sidebar) */}
        <div className="flex flex-col lg:flex-row gap-8">
          <MainContent />
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
