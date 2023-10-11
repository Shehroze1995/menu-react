
// eslint-disable-next-line react/prop-types
export const Menu = ({ title, price, desc, img }) => {
  return (
    <div className="max-w-[22rem] pt-6">
      <img className="w-[100%] h-[15rem] object-cover rounded" src={img} alt={title} />
      <section className="px-4 py-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-2xl font-bold capitalize">{title}</p>
          <span className="bg-[#e4b024] text-white py-1 px-2 rounded">${price}</span>
        </div>
        <p className="mt-6 text-gray-500">{desc}</p>
      </section>
    </div>
  );
};
