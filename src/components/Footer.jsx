const Footer = () => {
  return (
    <>
      {/* ที่อยู่และเบอร์โทร - Always at the Bottom */}
      <div className="w-full px-4 pb-2 text-center text-white font-[Prompt] z-10 pt-3">
        <p className="flex items-center justify-center space-x-2 mb-2">
          <span>📞</span> <span>+66 92-828-8883</span>
        </p>
        <p className="flex items-center justify-center space-x-2 leading-tight">
          <span>📍</span>
          <span>
            88 ตำบลตลิ่งชัน อำเภอบางปะอิน
            <br />
            จังหวัดพระนครศรีอยุธยา 13160
          </span>
        </p>
        <p className="mt-2 text-sm">
          © 2021 MoSo Yodia Cafe&Bar. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
