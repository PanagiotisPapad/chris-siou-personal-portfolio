const Footer = () => {
  return (
    <div className="border border-gray rounded-lg p-8 m-10 md:mx-36 md:mb-16">
      <div className="flex flex-row justify-center lg:justify-between">
        <div className="font-bold text-xl">CHRIS SIOUNTAS © 2024</div>
        <div className="space-x-4 text-xl font-bold flex flex-col md:flex-row">
          <a
            href="https://www.behance.net/christosiountas"
            target="_blank"
            className="hidden md:block hover:text-gray"
          >
            BEHANCE
          </a>
          <a
            href="https://www.linkedin.com/in/christos-siountas-922793232/"
            target="_blank"
            className="hidden md:block hover:text-gray"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
