import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

export default function Product({
  id,
  src,
  name,
  price,
  size,
  status,
  description,
  accessories,
  reviewImages,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productData = {
    image: src,
    name,
    price,
    size,
    status,
    description,
    accessories,
    reviewImages,
  };

  return (
    <>
      <div
        key={id}
        className={`p-1 rounded-lg shadow-md text-center border cursor-pointer ${
          status === 0
            ? "bg-green-200/80 border-green-800"
            : "bg-red-200/80 border-red-800"
        }`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-full h-56 rounded-lg mb-1">
          <img
            src={src}
            alt={name}
            className="w-full h-56 object-cover rounded-lg"
          />
          <p
            className={`absolute right-0 top-0 text-md text-[#fff] font-medium px-2 py-1 rounded-bl-lg rounded-tr-lg ${
              status === 0 ? "bg-[#2ecc71]/85" : "bg-[#e74c3c]/85"
            }`}
          >
            {status === 0 ? "ว่าง" : "ติดคิว"}
          </p>
        </div>
        <button className="w-full bg-[#2980b9] text-white py-2 px-4 rounded-lg cursor-pointer">
          ดูรายละเอียด
        </button>
      </div>

      {/* แสดง Modal เมื่อกดสินค้า */}
      {isModalOpen && (
        <ProductDetailModal
          product={productData}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
