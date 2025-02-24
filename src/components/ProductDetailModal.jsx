import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null; // ถ้าไม่มีสินค้าให้แสดง Modal ไม่ต้องแสดงอะไรเลย

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4">
      <div className="bg-white p-3 rounded-lg max-w-lg w-full shadow-lg relative text-left">
        {/* รูปภาพสินค้า */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        {/* รายละเอียดสินค้า */}
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-lg text-red-500 font-semibold">
          {product.price} บาท
        </p>
        <p className="text-md text-gray-600">ขนาด: {product.size}</p>
        <p
          className={`text-sm font-semibold ${
            product.status === 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.status === 0 ? "พร้อมให้เช่า" : "ไม่พร้อมให้เช่า"}
        </p>

        <hr className="my-4 border-gray-300" />

        {/* รายละเอียดเพิ่มเติม */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">รายละเอียด:</h3>
          <p className="text-sm text-gray-600">{product.description}</p>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* อุปรกรณ์เสริมที่แนะนำ */}
        {product.accessories.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              ⭐ อุปกรณ์เสริมที่แนะนำ:
            </h3>
            <p className="text-xs text-red-500 text-left">
              *อุปกรณ์เสริมต้องเพิ่มราคาแยกตามแต่ละชิ้น
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.accessories.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-lg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <hr className="my-4 border-gray-300" />

        {/* ภาพรีวิวจากลูกค้า */}
        {product.reviewImages.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              🔥 รีวิวจากลูกค้า:
            </h3>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {product.reviewImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Customer Review ${index + 1}`}
                  className="w-full h-20 object-cover rounded-md shadow-md"
                />
              ))}
            </div>
          </div>
        )}

        {/* ปุ่มปิด Modal */}
        <button
          className="mt-2 w-full bg-gray-700 text-white py-2 rounded-md text-lg font-semibold"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
