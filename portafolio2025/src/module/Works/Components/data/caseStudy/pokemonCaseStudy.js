
import pokeProfileEdit from "@/assets/PokemonG/perfilEdit.png";
import pokePassword from "@/assets/PokemonG/cambiarPassword.png";
import pokeVerifyEmail from "@/assets/PokemonG/verificacionCorreo.png";
import pokeBattleOpponent from "@/assets/PokemonG/batallaTurnoOponente.png";
import pokeBattlePlayer from "@/assets/PokemonG/batallaTurnoJugador.png";
import pokeSelectTeam from "@/assets/PokemonG/seleccionEquipo.png";
import pokeSelectOpponent from "@/assets/PokemonG/seleccionOponente.png";
import pokeAboutPowertech from "@/assets/PokemonG/powertechVisionMision.png";

export const pokemonCaseStudy = {
  es: {
    "pokemon-game": {
      category: "Juego web · Pokémon · Fullstack",
      subtitle:
        "Juego de batallas Pokémon con selección de equipo, turnos, estadísticas y verificación por correo.",
      brief: `
Proyecto académico donde diseñé y desarrollé un juego web de batallas Pokémon
centrado en la experiencia de usuario y en la lógica de combate por turnos.

Tecnologías: HTML, CSS, JavaScript, base de datos NoSQL con MongoDB,
consumo de datos desde PokeAPI y envío de correos con Nodemailer para
la verificación y seguridad de la cuenta.
      `,
      role: [
        "Diseño UX/UI completo de todas las pantallas del juego",
        "Maquetación responsive con HTML, CSS y componentes reutilizables",
        "Lógica de batalla por turnos implementada en JavaScript",
        "Integración con PokeAPI para obtener datos reales de Pokémon",
        "Persistencia de usuarios, equipos y estadísticas con MongoDB",
        "Flujo de verificación y recuperación mediante correo con Nodemailer",
      ],
      deliverables: [
        "Juego web funcional de batallas Pokémon",
        "Módulo de registro y gestión de perfil de usuario",
        "Selección de equipo con almacenamiento en base de datos",
        "Sistema de combate por turnos con KO y cambio de Pokémon",
        "Estadísticas de uso (Top 3 y Top 10 Pokémon más usados)",
        "Flujo de verificación de correo con envío de código",
      ],
      sections: [
        {
          id: "profile-edit",
          label: "Perfil & Datos",
          title: "Pantalla de edición de perfil con estilo inmersivo",
          body: `
La pantalla de edición de perfil permite al usuario actualizar su nombre,
usuario, correo y foto de perfil. El diseño usa un fondo ilustrado de Pokémon
y una tarjeta central con efecto glassmorphism para mantener la inmersión.
Los datos se cargan desde MongoDB y, al guardar, se actualiza el documento
del usuario en la base de datos.
          `,
          image: pokeProfileEdit,
        },
        {
          id: "password-change",
          label: "Seguridad",
          title: "Cambio de contraseña con formulario dedicado",
          body: `
La vista de cambio de contraseña reutiliza la misma línea visual que el perfil,
pero simplificada a dos campos: nueva contraseña y confirmación. Se validan
las contraseñas en el frontend con JavaScript y en el backend antes de
persistir el cambio en MongoDB, asegurando un flujo claro pero seguro.
          `,
          image: pokePassword,
        },
        {
          id: "email-verification",
          label: "Verificación por correo",
          title: "Flujo con envío de código usando Nodemailer",
          body: `
Para aumentar la seguridad se implementó un flujo de verificación por correo.
El usuario ingresa su email, el backend genera un código y lo envía con
Nodemailer. Luego el usuario introduce el código en la misma pantalla para
validar su identidad antes de permitir acciones sensibles como cambiar
la contraseña.
          `,
          image: pokeVerifyEmail,
        },
        {
          id: "battle-opponent-turn",
          label: "Batalla · Turno del oponente",
          title: "Campo de batalla con equipos completos y HUD",
          body: `
En esta pantalla se muestra el campo de batalla cuando es el turno del oponente.
En los laterales se ve el equipo de cada jugador con sus barras de vida y
avatares, mientras que en el centro se muestra la animación del combate.
La lógica de turnos, cálculo de daño y actualización de HP se realiza en
JavaScript consumiendo stats y datos desde PokeAPI.
          `,
          image: pokeBattleOpponent,
        },
        {
          id: "battle-player-turn",
          label: "Batalla · Turno del jugador",
          title: "Interfaz de ataques y feedback inmediato",
          body: `
Cuando es el turno del jugador, la UI resalta los botones de ataque en la parte
inferior. Un clic lanza el movimiento, actualiza las barras de vida y, si un
Pokémon llega a 0, se marca como fuera de combate y se obliga a seleccionar
otro miembro del equipo. La interfaz está pensada para que las decisiones sean
rápidas y el feedback visual sea claro.
          `,
          image: pokeBattlePlayer,
        },
        {
          id: "team-selection",
          label: "Selección de equipo",
          title: "Elección de Pokémon con integración a MongoDB",
          body: `
Antes de cada partida el usuario arma su equipo en una cuadrícula central
llena de sprites de Pokémon. Puede ir seleccionando hasta completar su equipo,
y esas elecciones se guardan en MongoDB. A partir de estos datos también se
calculan las estadísticas de uso (Top 3 y Top 10 Pokémon más utilizados).
          `,
          image: pokeSelectTeam,
        },
        {
          id: "opponent-selection",
          label: "Selección de oponente",
          title: "Flujo para escoger contra quién jugar",
          body: `
La pantalla de selección de oponente presenta un card central con la lista
de rivales disponibles y un botón “Seleccionar”. Al elegir un oponente,
el sistema crea el contexto de partida y asocia jugador y rival en la base
de datos, preparando la configuración del combate.
          `,
          image: pokeSelectOpponent,
        },
        {
          id: "about-powertech",
          label: "Contexto del proyecto",
          title: "Página corporativa de PowerTech con visión y misión",
          body: `
Además del juego, se diseñó una página de “Empresa” donde se presenta la
marca ficticia PowerTech, incluyendo logo, visión y misión. Esta sección
sirve para enmarcar el proyecto como producto de un equipo de desarrollo,
dándole un enfoque más profesional para presentarlo en portafolio.
          `,
          image: pokeAboutPowertech,
        },
        {
          id: "stats-top",
          label: "Estadísticas & métricas",
          title: "Top 3 y Top 10 Pokémon más usados",
          body: `
Aunque no se muestra en las capturas, el sistema registra cada partida en
MongoDB y calcula las estadísticas de uso. A partir de esos datos se genera
un Top 3 y Top 10 de los Pokémon que más utiliza cada usuario. Esta sección
demuestra manejo de datos, consultas agregadas y diseño de interfaces
orientadas a métricas.
          `,
   
        },
      ],
    },
  },

  en: {
    "pokemon-game": {
      category: "Web game · Pokémon · Fullstack",
      subtitle:
        "Pokémon battle game with team selection, turn-based combat, stats and email verification.",
      brief: `
Academic project where I designed and developed a Pokémon battle web game from
scratch, focusing on UX and turn-based combat logic.

Tech stack: HTML, CSS, JavaScript, NoSQL database with MongoDB, data from
PokeAPI and email flows implemented with Nodemailer for account verification
and security.
      `,
      role: [
        "Full UX/UI design for all game screens",
        "Responsive layout with HTML, CSS and reusable components",
        "Turn-based combat logic implemented in JavaScript",
        "PokeAPI integration to fetch real Pokémon data",
        "MongoDB persistence for users, teams and statistics",
        "Email verification and recovery flow with Nodemailer",
      ],
      deliverables: [
        "Fully functional Pokémon battle web game",
        "User registration and profile management module",
        "Team selection stored in the database",
        "Turn-based battle system with KO and switch logic",
        "Usage statistics (Top 3 and Top 10 most used Pokémon)",
        "Email verification flow with code delivery",
      ],
      sections: [
        {
          id: "profile-edit",
          label: "Profile & Data",
          title: "Profile edit screen with immersive UI",
          body: `
The profile edit screen lets users update their name, username, email and
profile picture. It uses a Pokémon-themed background and a glassmorphism
card in the center. User data is loaded from MongoDB and updated when the
form is submitted.
          `,
          image: pokeProfileEdit,
        },
        {
          id: "password-change",
          label: "Security",
          title: "Password change with dedicated form",
          body: `
This view focuses on changing the password with two fields: new password and
confirmation. Passwords are validated on the client with JavaScript and on the
server before persisting the change in MongoDB, keeping the flow simple but
secure.
          `,
          image: pokePassword,
        },
        {
          id: "email-verification",
          label: "Email verification",
          title: "Code-based flow using Nodemailer",
          body: `
To improve security, an email verification flow was implemented. The user
enters their email, the backend generates a code and sends it through
Nodemailer. Then the user types the code to confirm identity before performing
sensitive actions such as changing the password.
          `,
          image: pokeVerifyEmail,
        },
        {
          id: "battle-opponent-turn",
          label: "Battle · Opponent turn",
          title: "Battlefield with full teams and HUD",
          body: `
This screen shows the battlefield when it's the opponent's turn. Each side
displays the full team with HP bars and avatars, while the center shows the
battle animation. Turn logic, damage calculation and HP updates are handled
in JavaScript using stats and data fetched from PokeAPI.
          `,
          image: pokeBattleOpponent,
        },
        {
          id: "battle-player-turn",
          label: "Battle · Player turn",
          title: "Attack interface with instant feedback",
          body: `
When it's the player's turn, attack buttons are displayed at the bottom.
Clicking an attack updates HP bars and, if a Pokémon reaches 0 HP, it is
marked as fainted and the player must switch to another team member. The UI
is designed for quick decisions and clear visual feedback.
          `,
          image: pokeBattlePlayer,
        },
        {
          id: "team-selection",
          label: "Team selection",
          title: "Choosing Pokémon with MongoDB persistence",
          body: `
Before each match, the user builds their team from a central grid of Pokémon
sprites. Selections are saved to MongoDB and later used to calculate usage
statistics like the Top 3 and Top 10 most used Pokémon.
          `,
          image: pokeSelectTeam,
        },
        {
          id: "opponent-selection",
          label: "Opponent selection",
          title: "Flow to choose who to play against",
          body: `
The opponent selection screen shows a central card with available rivals and
a “Select” button. Once an opponent is chosen, the system links both users in
the database and prepares the match configuration.
          `,
          image: pokeSelectOpponent,
        },
        {
          id: "about-powertech",
          label: "Project context",
          title: "PowerTech corporate page with vision and mission",
          body: `
Beyond the game itself, I designed a company page presenting the fictional
brand PowerTech, including logo, vision and mission. This helps frame the
project as a product from a development team, making it more professional
for portfolio purposes.
          `,
          image: pokeAboutPowertech,
        },
        {
          id: "stats-top",
          label: "Stats & metrics",
          title: "Top 3 and Top 10 most used Pokémon",
          body: `
Even though it's not shown in the screenshots, the system logs every match in
MongoDB and aggregates data to build a Top 3 and Top 10 of the Pokémon each
user uses the most. This demonstrates data handling, aggregation queries and
metric-focused UI design.
          `,
        },
      ],
    },
  },
};
