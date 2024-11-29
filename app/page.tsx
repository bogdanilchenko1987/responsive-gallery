"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div>
        <button
          className="button"
          type="button"
          onClick={() => router.push(`/gallery1`)}
        >
          Responsive Gallery
        </button>
        <button
          className="button"
          type="button"
          onClick={() => router.push(`/gallery2`)}
        >
          PhotoSwipe Gallery
        </button>
      </div>
    </>
  );
}

// ============

// "use client";

// // import { Buttons } from "./components/Buttons";
// import { useState } from "react";
// import { Gallery } from "./components/Gallery";
// import { SimpleGallery } from "./components/SimpleGallery";
// import { images } from "./images";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const [isActive, setIsActive] = useState(false);
//   const router = useRouter();

//   return (
//     <>
//       <div>
//         <button
//           className="button"
//           disabled={!isActive}
//           type="button"
//           onClick={() => setIsActive((isActive) => isActive)}
//         >
//           Responsive Gallery
//         </button>
//         <button
//           className="button"
//           disabled={isActive}
//           type="button"
//           onClick={() => setIsActive((isActive) => !isActive)}
//         >
//           PhotoSwipe Gallery
//         </button>
//       </div>
//       {isActive ? (
//         <SimpleGallery galleryID="my-test-gallery" images={images} />
//       ) : (
//         <Gallery images={images} />
//       )}
//     </>
//   );
// }
