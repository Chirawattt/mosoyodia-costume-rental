import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const ReviewImageModal = ({
  images,
  swipeDirection,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: onNext, // ถ้า swipe ไปทางซ้ายให้เรียกฟังก์ชัน onNext
    onSwipedRight: onPrev, // ถ้า swipe ไปทางขวาให้เรียกฟังก์ชัน onPrev
    preventScrollOnSwipe: true, // ป้องกันการ scroll ขณะ swipe
    trackMouse: true, // ให้สามารถใช้เมาส์เลื่อนได้
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedIndex !== null) setIsVisible(true);
  }, [selectedIndex]);

  if (selectedIndex === null) return null; // ถ้าไม่มีรูปที่ถูกเลือกให้ไม่แสดงอะไรเลย

  const handleOnClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // รอ 300ms จากนั้นจึงปิด Modal
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/80 z-50 transition-all duration-300 
                  ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
      {...swipeHandlers} // รองรับการลากซ้าย-ขวา
    >
      {/* ปิดภาพ */}
      <button
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black text-2xl bg-white/50 p-2 rounded-full transition 
                w-12 h-12 flex items-center justify-center hover:bg-gray-500 z-1"
        onClick={handleOnClose}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      {/* ปุ่มย้อนกลับ */}
      <button
        className="absolute left-5 text-white text-3xl bg-gray-700/45 p-3 rounded-full hover:bg-gray-800/70 transition z-1"
        onClick={onPrev}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* รูปภาพพร้อม Animation */}
      <img
        src={images[selectedIndex].src}
        className={`max-w-full max-h-full rounded-lg shadow-lg transition-transform duration-300 ${
          swipeDirection === "right"
            ? "translate-x-10 opacity-50"
            : swipeDirection === "left"
            ? "-translate-x-10 opacity-50"
            : "translate-x-0 opacity-100"
        }`}
        alt="Preview"
        draggable="false"
        onClick={(e) => e.stopPropagation()} // ป้องกันการปิด Modal ขณะกดที่รูป
      />

      {/* ปุ่มถัดไป */}
      <button
        className="absolute right-5 text-white text-3xl bg-gray-700/45 p-3 rounded-full hover:bg-gray-800/70 transition"
        onClick={onNext}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Indicator แสดงสถานะปัจจุบัน */}
      <div className="absolute bottom-5 flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index ? "bg-white scale-150" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewImageModal;
