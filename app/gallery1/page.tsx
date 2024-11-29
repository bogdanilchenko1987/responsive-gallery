import Link from "next/link";
import { Gallery } from "../components/Gallery";
import { images } from "../images";

export default function Gallery1() {
  return (
    <>
      <Link className="link" href={"/"}>
        Back to HomePage
      </Link>
      <Gallery images={images} />
    </>
  );
}
