import muebHome from "@/assets/MubleriaWeb/proDesMW.png";
import muebStore from "@/assets/MubleriaWeb/pageProMW.png";
import muebModal from "@/assets/MubleriaWeb/cardProMW.png";
import muebContact from "@/assets/MubleriaWeb/contactanosMW.png";
import muebLogin from "@/assets/MubleriaWeb/inicioSesionMW.png";


export const muebleriaCaseStudy = {
  es: {
    "muebleria-freelance": {
      category: "E-commerce · Mueblería · Freelance",
      subtitle: "Sitio web completo para Mueblería JC...",
      brief: `
Proyecto freelance para Mueblería JC: diseño, frontend y backend completos.
Tecnologías: Spring Boot, React, TailwindCSS, DaisyUI, JWT, Cloudinary,
SQL Server en la nube y despliegue en Azure App Service con GitHub Actions.
      `,
      role: [
        "Diseño UX/UI completo del sitio",
        "Maquetación responsive con React, Tailwind y DaisyUI",
        "API REST con Spring Boot y JWT",
        "Integración con SQL Server cloud y Cloudinary",
        "Despliegue en Azure App Service con GitHub Actions",
      ],
      deliverables: [
        "Sitio web responsive para Mueblería JC",
        "Catálogo de productos por categorías",
        "Panel admin para productos",
        "Autenticación segura con JWT",
        "Infraestructura desplegada en Azure",
      ],
      sections: [
        {
          id: "ux-home-mueb",
          label: "Home & Destacados",
          title: "Productos destacados con enfoque visual",
          body: `
La página de inicio muestra una selección curada de productos destacados,
con tipografía elegante y mucho espacio en blanco. Dos CTA principales:
"Ver todo" y "Cotizar por WhatsApp".
          `,
          image: muebHome,
        },
        {
          id: "store-grid-mueb",
          label: "Tienda & Catálogo",
          title: "Catálogo filtrable por categoría",
          body: `
En la sección Tienda se muestra un grid responsive de productos con filtros
por categoría (camas, cocinas, puertas, mesas, etc.). Cada tarjeta incluye
imagen, nombre y un botón claro de "Cotiza aquí".
          `,
          image: muebStore,
        },
        {
          id: "product-modal-mueb",
          label: "Detalle de producto",
          title: "Modal a pantalla grande y cotización",
          body: `
Al hacer clic en un producto se abre un modal a pantalla grande con la foto
en alta calidad, el nombre y una descripción más detallada, además de un
botón principal para cotizar vía WhatsApp con el producto prellenado.
          `,
          image: muebModal,
        },
        {
          id: "contact-mueb",
          label: "Contacto",
          title: "Formulario limpio y accesible",
          body: `
La página de contacto incluye un formulario minimalista para nombre, correo,
asunto y mensaje, acompañado de una imagen que refuerza la identidad visual
de la marca.
          `,
          image: muebContact,
        },
        {
          id: "admin-auth-mueb",
          label: "Admin & Autenticación",
          title: "Panel admin y login seguro con JWT",
          body: `
El panel de administración permite crear, editar y eliminar productos y ver
los clics de cada uno. El acceso está protegido con JWT y las contraseñas
se almacenan cifradas en SQL Server. El login usa un fondo desenfocado con
la carreta típica y una tarjeta con efecto glassmorphism.
          `,
          image: muebLogin,
        },
      ],
    },
  },

  en: {
    "muebleria-freelance": {
      category: "E-commerce · Furniture · Freelance",
      subtitle:
        "Full website for Mueblería JC: product catalog, WhatsApp quotes, admin panel and secure authentication.",
      brief: `
Mueblería JC is a freelance project I built end to end: visual design, frontend
and backend. Stack: Spring Boot, React, TailwindCSS, DaisyUI, JWT, Cloudinary,
cloud SQL Server and Azure App Service with GitHub Actions.
      `,
      role: [
        "Full UX/UI design (home, shop, contact, login, admin panel)",
        "Responsive frontend with React, TailwindCSS and DaisyUI",
        "REST API with Spring Boot",
        "Relational data model on cloud SQL Server",
        "Security with JWT and password hashing",
        "Cloudinary integration for image management",
        "Azure App Service deployment with GitHub Actions",
      ],
      deliverables: [
        "Fully responsive website for Mueblería JC",
        "Category-based product catalog with WhatsApp quote flow",
        "Admin panel to manage products",
        "JWT-based authentication module",
        "Cloud SQL Server + Cloudinary integration",
        "CI/CD pipeline to Azure via GitHub Actions",
      ],
      sections: [
        {
          id: "ux-home-mueb",
          label: "Home & Highlights",
          title: "Featured products with a strong visual focus",
          body: `
The home page shows a curated selection of featured products with a clean,
photography-first layout and two clear CTAs: "View all" and "Quote on WhatsApp".
          `,
          image: muebHome,
        },
        {
          id: "store-grid-mueb",
          label: "Store & Catalog",
          title: "Filterable catalog with product cards",
          body: `
The Store section uses a two-column layout: category filters on the left and a
responsive product grid on the right. Each card displays the furniture image,
name and a clear "Quote here" button.
          `,
          image: muebStore,
        },
        {
          id: "product-modal-mueb",
          label: "Product detail",
          title: "Full-screen modal for images and quotes",
          body: `
Clicking any product opens a large modal with a high-quality image, name and
detailed description, plus a primary "Quote via WhatsApp" CTA with a prefilled
message including the product name.
          `,
          image: muebModal,
        },
        {
          id: "contact-mueb",
          label: "Contact",
          title: "Clean and accessible contact form",
          body: `
The contact page includes a simple, accessible form for name, email, subject
and message with a supporting brand image on the right.
          `,
          image: muebContact,
        },
        {
          id: "admin-auth-mueb",
          label: "Admin & Auth",
          title: "Admin panel and secure login with JWT",
          body: `
The admin panel lets the owner manage the catalog and see clicks per product.
Access is protected with JWT and hashed passwords in SQL Server. The login
UI uses a blurred background with the traditional cart and a glassmorphism card.
          `,
          image: muebLogin,
        },
      ],
    },
  },
};
