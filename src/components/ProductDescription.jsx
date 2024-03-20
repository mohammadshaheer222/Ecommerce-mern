const ProductDescription = () => {
  return (
    <div className="mt-8">
      <div className="flex gap-3 mb-4">
        <button className="btn-dark rounded-none w-32 text-xs py-[6px]">
          Description
        </button>
        <button className="ring-1 ring-black w-32 text-xs py-[6px] hover:bg-black hover:text-white">
          Care Guide
        </button>
        <button className="ring-1 ring-black rounded-none w-32 text-xs py-[6px] hover:bg-black hover:text-white">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16 md:max-w-[450px] lg:max-w-[900px]">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, animi?
          Enim quae accusantium reprehenderit labore vel ullam possimus optio
          unde porro, deserunt omnis est tempora quo! Quo ea officiis quod
          dolorum quis reprehenderit ab quidem aliquam sapiente non? Aspernatur
          dicta esse ullam! Sunt exercitationem quia iusto, est assumenda ipsum,
          dolores dolor laboriosam repellendus fugiat accusantium.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          iusto laboriosam corrupti debitis cum rem delectus. Doloremque itaque
          eveniet quaerat illo sint.
        </p>
      </div>
    </div>
  );
};
export default ProductDescription;
