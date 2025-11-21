// src/module/Works/data/caseStudyExtra.js
import imagenInicio from "/inicioWallet.png";
import imagenCupones from "/cuponesWallet.png";
import imagenPerfil from "/perfilWallet.png";
import imagenRegistroTarjetas from "/registroTWallet.png";
import imagenRegistroUsuario from "/registroUWallet.png";
import imagenRegistriCupones from "/resgistroCWallet.png"; // por si luego haces sección de cupones

export const caseStudyExtraByLang = {
  es: {
    wallet: {
      category: "Fintech · Pagos presenciales · UX",
      subtitle:
        "Plataforma web de billetera digital para Costa Rica que permite gestionar cuentas bancarias, pagar en comercios afiliados y administrar cupones y comisiones.",
      brief: `
La Billetera Digital CR nace de una necesidad real: reducir el uso de efectivo
en comercios pequeños sin obligar a la persona usuaria a depender de tarjetas físicas.
El proyecto se trabajó desde cero: levantamiento de requerimientos funcionales y no
funcionales, diseño de arquitectura, modelo relacional, UI completa y desarrollo
full-stack con Spring Boot en el backend y React en el frontend.

La interfaz utiliza tipografía Montserrat y una paleta basada en azul como color
principal y un celeste más claro como color secundario, manteniendo una estética
limpia, moderna y consistente en todas las pantallas.
      `,
      role: [
        "Análisis de requerimientos (funcionales y no funcionales)",
        "Diseño de arquitectura de la solución",
        "Modelo relacional y diseño de base de datos",
        "Diseño de interfaz de usuario (UI) con Montserrat y paleta azul",
        "Desarrollo full-stack (Spring Boot + React)",
      ],
      deliverables: [
        "Diagrama de arquitectura de la plataforma",
        "Modelo relacional y scripts de base de datos",
        "API REST en Spring Boot (login, recuperación, pagos, comisiones)",
        "Frontend en React conectado a la API",
        "Documentación funcional y técnica básica",
      ],
      sections: [
        {
          id: "ux-home",
          label: "Home & UX",
          title: "Inicio claro para explorar comercios y cuentas",
          body: `
Diseñé la pantalla de inicio como punto central de la experiencia: un mensaje de
bienvenida, botón principal para ir a las cuentas, buscador de comercios,
filtros por tipo y tarjetas de comercios afiliados con imagen y ciudad.

El objetivo fue que la persona usuaria entienda rápidamente qué puede hacer:
ver sus cuentas, explorar comercios y aprovechar cupones, todo con una jerarquía
visual clara y una interfaz limpia basada en Montserrat y tonos de azul.
          `,
          image: imagenInicio,
        },
        {
          id: "profile-security",
          label: "Perfil & Seguridad",
          title: "Perfil con estado de verificación y cuentas vinculadas",
          body: `
En el módulo de perfil diseñé una tarjeta principal con la información del usuario,
foto de perfil y secciones visuales para nombre, apellidos y acción de "Ver más
información". A la derecha se muestra una tarjeta grande con las cuentas bancarias
vinculadas y una tabla con nombre del banco, IBAN y titular.

Debajo se presenta el estado de verificación (correo, teléfono y biometría) con
indicadores visuales de "Verificado / No verificado", de forma que la seguridad
sea entendible para cualquier persona sin leer documentación técnica.
          `,
          image: imagenPerfil,
        },
        {
          id: "auth-flow",
          label: "Registro & Autenticación",
          title: "Flujo completo de registro, login y recuperación de contraseña",
          body: `
Implementé todo el flujo de autenticación en el backend y el frontend:

- Registro de usuario con formulario completo (datos personales, ubicación en mapa,
  teléfonos, cédula, fecha de nacimiento y subida de imágenes de cédula y foto).
- Pantalla de inicio de sesión con validación básica.
- Flujo de "¿Olvidaste tu contraseña?" que envía un código (PIN) al correo.
- Pantalla para restablecer contraseña con validación del PIN y nueva contraseña.

Todo el flujo está conectado a la API y se valida desde el backend, asegurando
consistencia de mensajes y estados en la interfaz.
          `,
          image: imagenRegistroUsuario,
        },
        {
          id: "accounts-payments",
          label: "Cuentas & Pagos",
          title: "Gestión de cuentas bancarias, cupones y sugerencias de pago",
          body: `
La sección de cuentas permite:

- Ver tarjetas/cuentas registradas con imagen, nombre del banco, IBAN enmascarado
  y botón de "Pagar con..." para cada entidad.
- Registrar una nueva cuenta con validación de IBAN (22 dígitos) y datos del titular.
- Consultar y aplicar cupones disponibles según la entidad.
- Mostrar sugerencias de cuentas frecuentes para acelerar el registro.

En el backend implementé la lógica para recibir las sugerencias al pagar y aplicar
las comisiones correspondientes según la entidad seleccionada, de forma que el
cálculo final del pago se realice automáticamente.
          `,
          image: imagenCupones,
        },
        {
          id: "entities-admin",
          label: "Entidades & Administración",
          title: "Registro de entidades y panel de aprobación para administradores",
          body: `
Además del flujo de usuario final, diseñé y desarrollé:

- Formulario de registro de entidades (bancos/comercios) con datos de contacto,
  ubicación en mapa y subida de documentos.
- Panel de "Administración de solicitudes" donde el administrador ve cada
  entidad con su información, estado actual y botones para Aprobar o Rechazar.

Al aprobar una entidad, se registra con su porcentaje de comisión y queda lista
para participar en el flujo de pagos y cupones dentro de la billetera.
          `,
          image: imagenRegistroTarjetas,
        },
      ],
    },
  },

  en: {
    wallet: {
      category: "Fintech · In-person payments · UX",
      subtitle:
        "Web-based digital wallet for Costa Rica that lets users manage bank accounts, pay at affiliated merchants and handle coupons and commissions.",
      brief: `
Billetera Digital CR was born from a real need: reducing cash usage in small
businesses without forcing users to rely on physical cards. The project was
built from scratch: functional and non-functional requirements, architecture
design, relational data model, full UI and full-stack development with Spring Boot
on the backend and React on the frontend.

The interface uses Montserrat as the main typeface and a palette with a strong
blue as primary color and a lighter blue as secondary one, keeping a clean and
modern look across all screens.
      `,
      role: [
        "Requirements analysis (functional & non-functional)",
        "Solution architecture design",
        "Relational data model & database design",
        "UI design with Montserrat and blue color palette",
        "Full-stack development (Spring Boot + React)",
      ],
      deliverables: [
        "System architecture diagram",
        "Relational model and DB scripts",
        "Spring Boot REST API (login, recovery, payments, commissions)",
        "React frontend fully connected to the API",
        "Basic functional and technical documentation",
      ],
      sections: [
        {
          id: "ux-home",
          label: "Home & UX",
          title: "Home as a clear entry point to accounts and merchants",
          body: `
The home screen works as the main entry point: welcome message, primary CTA to
view accounts, merchant search bar, filters by type and cards showing affiliated
merchants with image and city.

The goal was to make it obvious what users can do: see their accounts, explore
merchants and benefit from coupons, with a clear visual hierarchy and a clean
layout based on Montserrat and blue tones.
          `,
          image: imagenInicio,
        },
        {
          id: "profile-security",
          label: "Profile & Security",
          title: "Profile with verification status and linked bank accounts",
          body: `
The profile module includes a main card with user information, profile picture
and labeled sections for first name, last name and a "View more information"
action. On the right, a large card lists linked bank accounts with bank name,
IBAN and account holder.

Below, the verification status (email, phone, biometrics) is displayed with clear
"Verified / Not verified" indicators so security is easy to understand without
technical knowledge.
          `,
          image: imagenPerfil,
        },
        {
          id: "auth-flow",
          label: "Onboarding & Auth",
          title: "End-to-end signup, login and password recovery flow",
          body: `
I implemented the entire authentication flow on both backend and frontend:

- User registration with a full form (personal data, map-based location, phone
  numbers, ID, date of birth and image uploads for ID and profile picture).
- Login screen with basic validation.
- "Forgot password?" flow that sends a verification code (PIN) by email.
- Reset password screen that validates the PIN and lets the user set a new password.

All these steps are wired to the API and validated on the backend, keeping error
messages and states consistent throughout the interface.
          `,
          image: imagenRegistroUsuario,
        },
        {
          id: "accounts-payments",
          label: "Accounts & Payments",
          title: "Bank account management, coupons and payment suggestions",
          body: `
The accounts section allows users to:

- View registered cards/accounts with image, bank name, masked IBAN and a
  "Pay with..." button for each entity.
- Register a new account with IBAN validation (22 digits) and account holder data.
- Check and apply available coupons depending on the entity.
- See frequent account suggestions to speed up the registration process.

On the backend I implemented the logic to receive account suggestions at payment
time and apply the corresponding commission for each entity so the final payment
amount is calculated automatically.
          `,
          image: imagenCupones,
        },
        {
          id: "entities-admin",
          label: "Entities & Admin",
          title: "Entity registration and approval panel for administrators",
          body: `
Besides the end-user flow, I also designed and developed:

- An entity registration form (banks/merchants) with contact details, map-based
  location and document uploads.
- A "Requests Administration" panel where the admin can see each entity,
  its details, current status and Approve/Reject actions.

Once approved, the entity is registered with its commission percentage and
becomes available to participate in payments and coupons inside the wallet.
          `,
          image: imagenRegistroTarjetas,
        },
      ],
    },
  },
};
