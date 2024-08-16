import { galleryData } from "../seeds";

const Gallery = () => {
  return (
    <div className="grid gap-1 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] auto-rows-[300px] grid-flow-dense min-w-full overflow-hidden">
      {galleryData.map((item) => (
        <div key={item.name} className={`${item.className} gallery-item-wrapper`}>
          <img src={item.url} alt={item.name} />
          <div className="gallery-title-wrapper">
            <h3 className="font-light uppercase">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
