// Code for Yukata page
import { useState } from "react";
import { yukataReviews, yukataItems } from "../assets/data/yukata";
import Reviews from "../components/Reviews";
import Items from "../components/Items";

function Yukata() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen min-w-sm bg-black p-4">
        {/* ภาพพื้นหลังเบลอ */}
        <img
          src="/img/HomeBG.png"
          className="w-full h-full absolute blur-md object-cover opacity-50"
        />

        {/* ส่วนเนื้อหาตรงกลาง */}
        <div className="relative flex flex-col items-center justify-center z-10 text-center w-full max-w-sm font-[Prompt]">
          {/* รีวิวการใช้จริง */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#ffffff] text-center mb-4">
              👘 ภาพรีวิวชุดยูกาตะ
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {yukataReviews.map((review) => (
                <Reviews
                  key={review.id}
                  src={review.src}
                  alt={review.alt}
                  setSelectedImage={setSelectedImage}
                />
              ))}
            </div>
          </section>

          {/* รายการชุดยูกาตะ */}
          <section>
            <h2 className="text-2xl font-bold text-[#ffffff] text-center mb-4">
              ชุดยูกาตะที่มีให้เช่า
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {yukataItems.map((item) => (
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

          {/* แสดงภาพขยาย */}
          {selectedImage && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                className="max-w-full max-h-full rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Yukata;
