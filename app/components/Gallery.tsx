/* eslint-disable @next/next/no-img-element */

type Images = {
  src: string;
  title: string;
  alt: string;
  id: string;
};
type Props = {
  images: Images[];
};

const Gallery = ({ images }: Props) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <figure key={image.id}>
          <img src={image.src} alt="Lorem ipsum dolor sit amet" />
          <figcaption>
            <h3>{image.title}</h3>
            <p>{image.alt}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export { Gallery };
