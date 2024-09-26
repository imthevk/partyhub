const Text = ({ content, className }) => (
  <p className={` text-sm md:text-md leading-6 ${className}`}>{content}</p>
);

export default Text;
