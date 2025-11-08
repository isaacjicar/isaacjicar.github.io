import TiltCard from "@/components/UI/TiltCard";  
import roomImg from "@/assets/Homepage.png";

export default function HeroImage() {
  return (
    <div className="md:col-span-5 mt-10 md:mt-0">
      <TiltCard
        className="z-10"
        img={roomImg}
        aspect="aspect-[4/5]"    
        maxTilt={12}
        scale={1.03}
        glare
        transitionMs={420}
        reveal
        delay="0ms"
        dur="700ms"
      />
    </div>
  );
}
