const ImagePreviewModal = ({ image, onClose }) => {
  if (!image) return null; // ถ้าไม่มีรูปภาพให้ไม่แสดงอะไรเลย

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 z-50"
      onClick={onClose}
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
