import Image from "next/image";
import AstroImg from "../../public/astro.png";

const Astro = () => {
  return (
    <div className="flex items-center justify-center mt-5  pt-[70px]">
      <Image
        src={AstroImg}
        alt="Astronaut"
        style={{
          width: "200px",
          height: "200px",
          filter: "drop-shadow(5px 5px 15px #6B46C1)",
          opacity: "0.8",
        }}
      />
    </div>
  );
};

export default Astro;
