import { FaLinkedinIn, FaGithub, FaEnvelope,FaWhatsapp } from "react-icons/fa";

export const defaultSocials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/isaac-jimenez-a5b143197",
    icon: FaLinkedinIn,
    color: "#4C9FB3", 
  },
  
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/isaacjicar",
    icon: FaGithub,
    color: "#4CB393", 
  },

  {
    id: "correo",
    label: "Email",
    href: "mailto:isaacjiemmenez@gmail.com",
    icon: FaEnvelope,
    color: "#4C6CB3", 
  },
  {
    id: "Numero",
    label: "Whatsapp",
    href: "https://wa.me/50663270092?",
    icon: FaWhatsapp,
    color: "#4C6C48", //
  }
];
