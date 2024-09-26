import { Text } from "../atoms";
const Header = ({ title }) => {
  return (
    <div className="rounded-md p-4">
      <h1 className="text-center text-lg md:text-xl text-black font-poppins font-semibold my-2 md:my-4 md:mb-2">
        Explore Our Community
      </h1>
      <Text
        content={title}
        className={`text-center text-text-300 px-7 md:px-1 leading-6`}
      />
    </div>
  );
};

export default Header;
