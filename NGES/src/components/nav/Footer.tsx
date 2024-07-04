const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4 bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            NG Effective Solutions &copy; {new Date().getFullYear()}
          </p>
          <div>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              By David Galindo Delgado BS IT 27
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
