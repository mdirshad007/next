"use client";
import React, { useEffect, useState } from "react";

export default function ScrollImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const textColumn = e.target;
    const index = Math.floor(
      (textColumn.scrollTop / textColumn.scrollHeight) * 5
    );
    setActiveIndex(index);
    console.log(index);
  };

  useEffect(() => {
    const imageContainers = document.querySelectorAll(".image-container");
    imageContainers.forEach((container, index) => {
      container.classList.toggle("active", index === activeIndex);
    });
  }, [activeIndex]);
  return (
    <div className="p-24 bg-gray-100">
    <div className="flex overflow-hidden w-[1150px] mx-auto">
      <div
        className="flex-1 overflow-y-scroll max-h-[387px] no-scrollbar"
        onScroll={handleScroll}
      >
        <div className="h-[387px] flex flex-col justify-center items-start">
          <p class="uppercase text-[17px] text-[#1057CB]">step 1</p>
          <h3 class="text-[#242424] capitalize font-bold text-[32px] my-4">
            Define project Requirements.
          </h3>
          <p class="text-[#666C74] text-xl">
            Depending on your needs, we will ask you specific questions and
            generate an anonymous brief. (save 4 hours on your briefing duty)
          </p>
        </div>
        <div className="h-[387px] flex flex-col justify-center items-start">
          <p class="uppercase text-[17px] text-[#1057CB]">step 2</p>
          <h3 class="text-[#242424] capitalize font-bold text-[32px] my-4">
            Define project Requirements.
          </h3>
          <p class="text-[#666C74] text-xl">
            Depending on your needs, we will ask you specific questions and
            generate an anonymous brief. (save 4 hours on your briefing duty)
          </p>
        </div>
        <div className="h-[387px] flex flex-col justify-center items-start">
          <p class="uppercase text-[17px] text-[#1057CB]">step 3</p>
          <h3 class="text-[#242424] capitalize font-bold text-[32px] my-4">
            Define project Requirements.
          </h3>
          <p class="text-[#666C74] text-xl">
            Depending on your needs, we will ask you specific questions and
            generate an anonymous brief. (save 4 hours on your briefing duty)
          </p>
        </div>
        <div className="h-[387px] flex flex-col justify-center items-start">
          <p class="uppercase text-[17px] text-[#1057CB]">step 4</p>
          <h3 class="text-[#242424] capitalize font-bold text-[32px] my-4">
            Define project Requirements.
          </h3>
          <p class="text-[#666C74] text-xl">
            Depending on your needs, we will ask you specific questions and
            generate an anonymous brief. (save 4 hours on your briefing duty)
          </p>
        </div>
        <div className="h-[387px] flex flex-col justify-center items-start">
          <p class="uppercase text-[17px] text-[#1057CB]">step 5</p>
          <h3 class="text-[#242424] capitalize font-bold text-[32px] my-4">
            Define project Requirements.
          </h3>
          <p class="text-[#666C74] text-xl">
            Depending on your needs, we will ask you specific questions and
            generate an anonymous brief. (save 4 hours on your briefing duty)
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {[1, 2, 3, 4, 5].map((image) => (
          <div
            key={image}
            className={`image-container ${
              activeIndex === image - 1 ? "active" : ""
            }`}
            id={`image${image}`}
          >
            <img src={`image${image}.svg`} alt={`Image ${image}`} className="fade-effect h-[387px] object-cover"/>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
