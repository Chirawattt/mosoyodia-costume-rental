export default function Reviews({ src, alt, setSelectedIndex, index }) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="w-full h-40 object-cover rounded-lg cursor-pointer shadow-md hover:shadow-xl hover:scale-120 transition-transform duration-300"
        onClick={() => setSelectedIndex(index)}
      />
    </>
  );
}
