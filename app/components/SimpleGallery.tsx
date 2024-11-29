/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

type Images = {
  src: string;
  title: string;
  alt: string;
  id: string;
};
type Props = {
  images: Images[];
  galleryID: string;
};

const SimpleGallery = ({ images, galleryID }: Props) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null!;
    };
  }, [galleryID]);

  return (
    <div className=" pswp-gallery" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.src}
          data-pswp-width="375px"
          data-pswp-height="325px"
          key={galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image.src}
            alt="Lorem ipsum dolor sit amet "
            width="300px"
            height="300px"
          />
        </a>
      ))}
    </div>
  );
};

export { SimpleGallery };
