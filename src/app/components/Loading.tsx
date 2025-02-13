// src/components/Loading.tsx
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#be2c13" size={50} /> {/* Spinner dengan warna dan ukuran */}
    </div>
  );
};

export default Loading;