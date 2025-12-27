import hero from "./../../assets/Image.png";

export default function HeroSection() {
  return (
    <section className="w-[80%] m-auto mb-10">
      <img src={hero} alt="hero" />
    </section>
  );
}
