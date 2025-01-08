import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="text-center opacity-40 text-sm my-5 text-white">
      &copy; {currentYear} Agustín Bianchi. All Rights Reserved.
    </p>
  );
};

export default Footer;
