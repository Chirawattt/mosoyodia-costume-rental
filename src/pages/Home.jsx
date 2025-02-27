import Footer from "../components/Footer";

const Home = () => {
  const homeBtnDatas = [
    { text: "👘 เช่าชุดกิโมโน", href: "/kimono", color: "#e74c3c" },
    { text: "🎎 เช่าชุดยูกาตะ", href: "/yukata", color: "#278fd4" },
    { text: "🎭 เช่าชุดคอสเพลย์", href: "/cosplay", color: "#9b59b6" },
  ];

  return (
    <>
      <div className="relative flex flex-col items-center justify-between min-h-dvh sm:min-h-screen bg-black">
        {/* ภาพพื้นหลังเบลอ */}
        <img
          src="/img/HomeBG.png"
          className="absolute inset-0 w-full h-full object-cover blur-md opacity-50"
        />

        {/* ส่วนเนื้อหาตรงกลาง */}
        <div className="relative flex flex-col items-center justify-center z-10 text-center w-full max-w-sm flex-1">
          {/* โลโก้ */}
          <img
            src="/img/Logo.jpg"
            className="w-24 h-24 rounded-full shadow-xl mb-4"
            alt="logo"
          />

          {/* ชื่อร้าน */}
          <h1 className="font-bold text-3xl text-[#d4d4cc] drop-shadow-lg font-serif">
            MoSo Yodia Cafe&Bar
          </h1>

          {/* ข้อความแนะนำเว็บไซต์ */}
          <p className="text-base text-[#f1f1e6] mt-2 px-4 font-[Prompt]">
            เช่าชุดญี่ปุ่นสุดพิเศษ!
            สัมผัสบรรยากาศคาเฟ่สไตล์ญี่ปุ่นพร้อมชุดที่เข้ากับธีมร้าน
          </p>

          {/* ปุ่มนำทาง */}
          <div className="mt-6 w-full flex flex-col items-center gap-2 font-[Prompt]">
            {homeBtnDatas.map((btnData) => (
              <a
                key={btnData.text}
                href={btnData.href}
                className="py-2 px-4 w-full max-w-xs text-center rounded-lg text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: btnData.color }}
              >
                {btnData.text}
              </a>
            ))}
          </div>
        </div>

        {/* ส่วนท้าย */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
