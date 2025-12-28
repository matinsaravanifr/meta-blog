import hero from "./../../assets/Image.png";

export default function HeroSection() {
  return (
    <section className="hidden lg:block lg:w-[80%] lg:m-auto lg:mb-10 ">
      <img src={hero} alt="hero" />
    </section>
  );
}
