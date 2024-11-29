import Link from "next/link";
import { SimpleGallery } from "../components/SimpleGallery";
import { images } from "../images";

export default function Gallery2() {
  return (
    <>
      <Link className="link" href={"/"}>
        Back to HomePage
      </Link>
      <SimpleGallery galleryID="my-test-gallery" images={images} />
    </>
  );
}
