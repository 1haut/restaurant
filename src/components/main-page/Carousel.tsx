import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image1 from "../../assets/img/food1.webp";
import Image2 from "../../assets/img/food2.webp";
import Image3 from "../../assets/img/food3.webp";
import "./Carousel.css";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 3500,
    }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <img
            src={Image1}
            className="embla__slide"
            alt="Et trebrett med sjømat som blekksprut og hummer"
          />
          <img
            src={Image2}
            className="embla__slide"
            alt="Kasserolle med østersgryte"
          />
          <img
            src={Image3}
            className="embla__slide"
            alt="Oransje og hvit fisk liggende på svart småstein"
          />
        </div>
      </div>
    </div>
  );
}
