import RoomHero from "../Components/RoomHero";
import { useEffect } from "react";

export default function PageContact() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" }); 
      }, []);
  return (

    
    <main className="min-h-dvh bg-baseDark text-white">
      <RoomHero />
    </main>
  );
}