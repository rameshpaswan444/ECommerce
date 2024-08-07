import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";


const HomeSectionCarouse = ({data, sectionName}) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  // const slidePrev = () => setActiveIndex(activeIndex - 1);
  //const slideNext = () => setActiveIndex(activeIndex + 1);
  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  // const syncActiveIndex = ({ item }) => setActiveIndex(item);

  // const items = mens_kurta
  //   .slice(0, 15)
  //   .map((item) => <HomeSectionCard product={item} />);
  const items = 
   data.slice(0, 15)
    .map((item) => <HomeSectionCard key={item.id} product={item} />);

  return (
    <div className="border">
    <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} //ref
          items={items}
          disableButtonsControls
          responsive={responsive}
          // disableDotsControls
          // onSlideChanged={syncActiveIndex}
          // activeIndex={activeIndex}
        />

        <Button
          variant="contained"
          className="z-50"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", bgcolor: "gray" }}
          />
        </Button>

        <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "-4rem",
            transform: "translateX(50%) rotate(-90deg)",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", bgcolor: "gray" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarouse;
