import HeadlessModal from "@/components/HeadlessModal";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ImageSlider() {
  const divRef = useRef(null);
  const [ImagePopup, setImagePopup] = useState({
    img_url: null,
    isOpen: false,
  });

  const [ImageList, setImageList] = useState([
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  ]);

  const handleLeftScroll = (type) => {
    switch (type) {
      case "left":
        divRef.current.scrollLeft = divRef.current.scrollLeft + 50;
        break;

      default:
        divRef.current.scrollLeft = divRef.current.scrollLeft - 50;
        break;
    }
  };

  function handleImageClick(e) {
    console.log(e.target.src);
    setImagePopup((ImagePopup) => ({ isOpen: true, img_url: e.target.src }));
  }

  return (
    <>
      <h1>Image Slider</h1>

      <div className="relative bg-slate-300 max-w-[40rem]">
        <div
          className="px-0 py-5 bg-red-500 overflow-x-scroll flex relative rounded-md"
          ref={divRef}
        >
          <button
            className="text-white sticky top-[50%] bg-blue-600 p-3 left-0"
            onClick={(e) => handleLeftScroll("right")}
          >
            prev
          </button>
          {ImageList.map((image, i) => {
            return (
              <>
                <img
                  key={i}
                  className="rounded-md px-2 py-0 rounded-md"
                  src={image}
                  alt="Cinque Terre"
                  width="200"
                  height="200"
                  onClick={(e) => handleImageClick(e)}
                />
              </>
            );
          })}
          <button
            className="text-white sticky top-[50%] right-0 bg-blue-600 p-3"
            onClick={(e) => handleLeftScroll("left")}
          >
            
            Next
          </button>
        </div>

        {ImagePopup?.isOpen &&
          <HeadlessModal img_url={ImagePopup?.img_url} ImagePopup={ImagePopup} setImagePopup={ setImagePopup } />
        }
      </div>
      <Link href={"/try-solution/"}> Try Solution</Link>
      <Link href={"/MachineCodingPractice/headless-modal"}> headless modal</Link>
    </>
  );
}
