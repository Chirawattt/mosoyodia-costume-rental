import { useEffect, useState } from "react";

const ImagePreviewModal = ({ image, onClose }) => {
  if (!image) return null; // ถ้าไม่มีรูปภาพให้ไม่แสดงอะไรเลย
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [image]);

  const handleOnClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // รอ 300ms จากนั้นจึงปิด Modal
  };

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black/80 z-50 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      } transition-all duration-300`}
      onClick={handleOnClose}
    >
      <img
        src={image}
        alt="Preview Product"
        className="max-w-full max-h-full rounded-lg shadow-lg"
        draggable={false}
      />
      {/* คำอธิบายกดที่รูปอีกครั้งเพื่อปิดหน้าต่างนี้ */}
      <p className=" text-white text-sm bg-black/50 p-1 rounded-lg cursor-pointer mt-5">
        กดที่รูปเพื่อปิดหน้าต่างนี้
      </p>
    </div>
  );
};

export default ImagePreviewModal;
