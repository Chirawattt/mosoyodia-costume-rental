import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { kimonoReviews, kimonoItems } from "../assets/data/kimono";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Reviews from "../components/Reviews";
import Items from "../components/Items";
import { Link } from "react-router-dom";
import ImageModal from "../components/ImageModal";

function Kimono() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null); // ใช้เก็บทิศทางการเลื่อน

  const onNext = () => {
    setSwipeDirection("left");
    setTimeout(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % kimonoReviews.length);
      setSwipeDirection(null);
    }, 300); // Delay 300ms เพื่อให้ animation ทำงาน
  };

  const onPrev = () => {
    setSwipeDirection("right");
    setTimeout(() => {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? kimonoReviews.length - 1 : prevIndex - 1
      );
      setSwipeDirection(null);
    }, 300); // Delay 300ms เพื่อให้ animation ทำงาน
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

      <div className="relative flex items-center justify-center min-w-sm min-h-[100dvh] sm:min-h-screen bg-black p-4 pt-20">
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
              ชุดกิโมโนที่มีให้บริการ
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
        </div>
      </div>

      {/* ✅ ใช้ ImageModal ที่แยกออกมา */}
      <ImageModal
        images={kimonoReviews}
        swipeDirection={swipeDirection}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}

export default Kimono;
