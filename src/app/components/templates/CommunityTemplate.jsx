"use client";
import ImageOne from "../../../../public/images/imageOne.png";
import ImageTwo from "../../../../public/images/imageTwo.png";
import ImageThree from "../../../../public/images/imageThree.png";
import CommunityBlockVertical from "../organisms/CommunityBlockVertical";
import CommunityBlockHorizontal from "../organisms/CommunityBlockHorizontal";

const CommunityTemplate = () => {
  return (
    <div className="container font-satoshi  mx-auto py-8 flex flex-col justify-center items-center lg:flex-row md:w-9/12 md:px-1">
      <div className="flex-1 mb-4 lg:mb-0 w-8/12">
        <CommunityBlockVertical
          title="Stay Connected and Inspired"
          description="Explore our Instagram to discover unforgettable events from our community and get inspired by behind-the-scenes moments."
          buttonText="Explore Vendors"
          imgSrc={ImageOne}
          onClick={() => console.log("Explore Vendors")}
        />
      </div>
      <div className="flex flex-col lg:pl-6 md:items-start gap-5 flex-1 w-8/12">
        <CommunityBlockHorizontal
          title="Discover the Magic"
          description="Explore our twitter for real-time updates. Follow us to stay in the loop and join the discussion"
          buttonText="Follow us on X"
          imgSrc={ImageTwo}
          onClick={() => console.log("Follow us on X")}
          imageClassName="!aspect-auto !w-80"
          btnClassName="bg-bg-100"
        />
        <CommunityBlockHorizontal
          title="Join the Celebration"
          description="Explore our Facebook for event inspiration, stories, and community connections."
          buttonText="Join Us on Facebook"
          imgSrc={ImageThree}
          onClick={() => console.log("Join us on Facebook")}
          imageClassName="!aspect-auto !w-80"
          btnClassName="md:w-[12rem] bg-bg-100"
        />
      </div>
    </div>
  );
};

export default CommunityTemplate;
