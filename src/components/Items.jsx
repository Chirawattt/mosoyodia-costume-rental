export default function Items({ src, name, price, id, status }) {
  return (
    <div
      key={id}
      className="bg-gray-300/80 p-1 rounded-lg shadow-md text-center"
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
      <button className="w-full bg-[#2980b9] text-white py-2 px-4 rounded-lg">
        ดูรายละเอียด
      </button>
    </div>
  );
}
