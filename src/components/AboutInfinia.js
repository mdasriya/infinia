import React from "react";

const AboutInfinia = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-10">
    
      {/* Right side */}
      <div className="lg:w-1/2 p-4">
        {/* YouTube video */}
        <div className="aspect-w-16   aspect-h-9">
          <iframe
            className="w-full h-[400px]"
            src="https://www.youtube.com/embed/JMq-FEk1qxg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    
      {/* Left side */}
      <div className="lg:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">About Infinia</h2>
        <p className="text-gray-600">
          Established in the year 2019 we “Infinia Industries Private
          Limited.” is a Manufacturer of the wide spectrum Particle Boards,
          Chipboard Sheets, Wooden Plywoods etc. 
          <br /> <br />
           We are manufacturing these
          products using premium grade raw material that is procured from the
          authentic vendors of the market. We offer these products at
          reasonable rates and deliver these within the promised time-frame. We
          have hired an adroit team of employees, which keeps themselves abreast
          with advanced manufacturing techniques and designs. Further, we also
          have a quality control unit, wherein, we check our entire range on
          defined parameters like design, quality and finish. All units and
          equipped with all the essential tools, machine, and technology in
          order to manufacture a high-quality range of products Under the
          valuable guidance of our mentor, Mr. Satyendra, we are growing with a
          notable rate in the market. He has spent long years in the industry
          to have rich industrial experience enabling us to understand the
          varied requirements of our clients.
        </p>
      </div>

    
    </div>
  );
};

export default AboutInfinia;
