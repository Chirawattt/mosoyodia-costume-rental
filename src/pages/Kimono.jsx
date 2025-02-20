import { useState } from "react";
import { kimonoReviews, kimonoItems } from "../assets/data/kimono";
import Reviews from "../components/Reviews";
import Items from "../components/Items";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Kimono() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % kimonoReviews.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? kimonoReviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* แถบเมนูด้านบน */}
      <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 px-3 py-2 bg-white shadow-lg rounded-b-xl z-50 flex items-center justify-center">
        <Link
          to="/"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FontAwesomeIcon icon={faHome} className="text-gray-700 text-lg" />
        </Link>
      </nav>

      <div className="relative flex items-center justify-center min-h-screen min-w-sm bg-black p-4 pt-16">
        {/* ภาพพื้นหลังเบลอ */}
        <img
          src="/img/HomeBG.png"
          className="absolute inset-0 w-full h-full object-cover blur-md opacity-50"
        />

        {/* ส่วนเนื้อหาตรงกลาง */}
        <div className="relative flex flex-col items-center justify-center z-10 text-center w-full max-w-sm font-[Prompt]">
          {/* รีวิวการใช้จริง */}
          <section className="mb-8 w-full">
            <h2 className="text-2xl font-bold text-[#ffffff] text-center mb-4">
              🎎 เช่าชุดกิโมโน
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {kimonoReviews.map((review, index) => (
                <Reviews
                  key={review.id}
                  src={review.src}
                  alt={review.alt}
                  setSelectedIndex={setSelectedIndex}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* รายการชุดกิโมโน */}
          <section className="w-full">
            <h2 className="text-2xl font-bold text-[#ffffff] text-center mb-4">
              ชุดกิโมโนที่มีให้เช่า
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {kimonoItems.map((item) => (
                <Items
                  key={item.id}
                  id={item.id}
                  src={item.src}
                  name={item.name}
                  price={item.price}
                  status={item.status}
                />
              ))}
            </div>
          </section>

          {/* แสดงภาพขยาย พร้อมปุ่มเลื่อนซ้าย-ขวา */}
          {selectedIndex !== null && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/75 z-50">
              {/* ปิดภาพ */}
              <button
                className="absolute top-5 right-5 text-white text-2xl bg-gray-700 p-2 rounded-full hover:bg-gray-800 transition"
                onClick={() => setSelectedIndex(null)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              {/* ปุ่มย้อนกลับ */}
              <button
                className="absolute left-5 text-white text-3xl bg-gray-700 p-3 rounded-full hover:bg-gray-800 transition"
                onClick={handlePrev}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              {/* รูปภาพ */}
              <img
                src={kimonoReviews[selectedIndex].src}
                className="max-w-full max-h-full rounded-lg shadow-lg"
                alt="Preview"
              />

              {/* ปุ่มถัดไป */}
              <button
                className="absolute right-5 text-white text-3xl bg-gray-700 p-3 rounded-full hover:bg-gray-800 transition"
                onClick={handleNext}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Kimono;
