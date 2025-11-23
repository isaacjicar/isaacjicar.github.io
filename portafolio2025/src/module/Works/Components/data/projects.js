import muebleriaFreelanceCard from "@/assets/MubleriaWeb/inicioRP.png";
import muebleriaFreelanceHero from "@/assets/MubleriaWeb/inicioMW.png";
import pokemonGameHero from "@/assets/PokemonG/batallaTurnoJugador.png";
import walletAppHero from "@/assets/Wallet/inicioWallet.png";
import sistemaFacturacion from "@/assets/MubleriaFacturacion/usuarios.png";

const placeholderMuebleria =
  "https://images.pexels.com/photos/6964079/pexels-photo-6964079.jpeg";
const placeholderPokemon =
  "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg";
const placeholderWallet =
  "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg";
const placeholderExtra =
  "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg";


export const projectsByLang = {
  es: [
    {
      id: "muebleria-service",
      title: "Mueblería JC · Plataforma de Servicios",
      desc: "Sitio para catálogo, cotizaciones personalizadas, contacto directo y gestión profesional de pedidos.",
      img: placeholderMuebleria,
      heroImg: sistemaFacturacion, 
      tags: ["Fullstack", "Negocio real", "UI/UX"],
    },
      {
      id: "muebleria-freelance",
      title: "Mueblería JC · Freelance & Branding",
      desc: "Landing page enfocada en marca, redes sociales, confianza visual y captación de clientes.",
      img: muebleriaFreelanceCard,   
      heroImg: muebleriaFreelanceHero, 
      tags: ["Freelance", "Branding", "Landing"],
    },

    {
      id: "pokemon-game",
      title: "Pokémon Battle App",
      desc: "Juego web inspirado en Pokémon con selección de equipo, registro de partidas y lógica backend.",
      img: placeholderPokemon,
      heroImg: pokemonGameHero, 
      tags: ["Gamificación", "API", "Front + Back"],
    },
    {
      id: "wallet",
      title: "Billetera Digital CR",
      desc: "Prototipo de billetera digital para pagos presenciales seguros, pensando en el contexto costarricense.",
      img: placeholderWallet,
      heroImg: walletAppHero, 
      tags: ["Fintech", "Seguridad", "UX"],
    },
  ],

  en: [
    {
      id: "muebleria-service",
      title: "Mueblería JC · Services Platform",
      desc: "Site for catalog, custom quotes, direct contact and professional order management.",
      img: placeholderMuebleria,
      heroImg: sistemaFacturacion, 
      tags: ["Fullstack", "Real business", "UI/UX"],
    },
    {
      id: "muebleria-freelance",
      title: "Mueblería JC · Freelance & Branding",
      desc: "Landing page focused on brand, social media, visual trust and client acquisition.",
      img: muebleriaFreelanceCard,   
      heroImg: muebleriaFreelanceHero,
      tags: ["Freelance", "Branding", "Landing"],
    },
    {
      id: "pokemon-game",
      title: "Pokémon Battle App",
      desc: "Web game inspired by Pokémon with team selection, match history and backend logic.",
      img: placeholderPokemon,
      heroImg: pokemonGameHero, 
      tags: ["Gamification", "API", "Front + Back"],
    },
    {
      id: "wallet",
      title: "Digital Wallet CR",
      desc: "Digital wallet prototype for secure in-person payments in the Costa Rican context.",
      img: placeholderWallet,
      heroImg: walletAppHero, 
      tags: ["Fintech", "Security", "UX"],
    },
  ],
};
