import desktopBanner from "@/assets/hero-slide-1.png";
import mobileBanner from "@/assets/hero-slide-movil.png";

const PreRollCarousel = () => {
  return (
    <section
      id="hero-static-banner"
      className="relative w-full min-h-[380px] sm:h-[450px] overflow-hidden"
    >
      {/* Desktop Banner */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          backgroundImage: `url(${desktopBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mobile Banner */}
      <div
        className="absolute inset-0 block sm:hidden"
        style={{
          backgroundImage: `url(${mobileBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay suave opcional */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
};

export default PreRollCarousel;
