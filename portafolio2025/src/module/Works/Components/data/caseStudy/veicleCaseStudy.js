import vehUserDashboard from "@/assets/ApiVeiculo/vehUserDashboard.png";
import vehVehiclesList from "@/assets/ApiVeiculo/vehVehiclesList.png";
import vehLandingMenu from "@/assets/ApiVeiculo/vehLandingMenu.png";
import vehServiceRequestForm from "@/assets/ApiVeiculo/vehServiceRequestForm.png";
import vehUserRequestsList from "@/assets/ApiVeiculo/vehUserRequestsList.png";
import vehAdminServices from "@/assets/ApiVeiculo/vehAdminServices.png";
import vehAdminRequests from "@/assets/ApiVeiculo/vehAdminRequests.png";


export const vehicleApiCaseStudy = {
  es: {
    "vehicle-management-api-2025": {
      category: "Sistema web · Taller/Flotas · Backend + Frontend",
      subtitle:
        "Plataforma con dashboards, gestión de vehículos, solicitudes de servicio y control por roles (usuario/admin).",
      brief: `
Sistema de Gestión de Vehículos (2025).
Aplicación fullstack orientada a talleres o flotas para centralizar la operación:
el usuario puede ver sus métricas, historial de servicios, vehículos registrados y
crear solicitudes de revisión/mantenimiento. Del lado administrativo, se gestionan
órdenes/servicios, solicitudes y estados operativos desde un panel de control.

Incluye UI moderna tipo dashboard, filtros, listados, acciones rápidas y flujo
completo de solicitudes de servicio.
      `,
      role: [
        "Diseño de UX/UI orientado a dashboards y productividad",
        "Pantallas para usuario: métricas, historial, vehículos y solicitudes",
        "Pantallas para admin: control de servicios/órdenes y solicitudes",
        "Integración fullstack (API + Frontend) con enfoque en flujo operativo",
      ],
      deliverables: [
        "Dashboard de usuario con métricas, filtros y tablas de historial",
        "Gestión de vehículos: listado, búsqueda y acciones (editar/eliminar)",
        "Solicitud de servicio: formulario + listado de solicitudes del usuario",
        "Panel admin: servicios/órdenes con métricas y tabla operativa",
        "Panel admin: revisión de solicitudes con cambio de estado",
      ],
      sections: [
        {
          id: "landing-navigation",
          label: "UI · Navegación",
          title: "Menú principal con accesos por sección",
          body: `
La aplicación inicia con un layout oscuro y un panel de navegación que agrupa
acciones como Login/Registro y accesos directos a módulos del sistema. Este menú
simplifica el descubrimiento de páginas y refuerza la separación de funciones
por tipo de usuario.
          `,
          image: vehLandingMenu,
        },
        {
          id: "user-dashboard",
          label: "Usuario · Dashboard",
          title: "Panel de usuario con métricas e historial",
          body: `
El dashboard del usuario muestra un resumen operativo (servicios activos/cerrados,
total histórico y ticket promedio), acompañado de filtros (estado, vehículo y fechas)
y una tabla con el historial de atenciones. Esto permite entender rápidamente el
estado del vehículo y el progreso de servicios.
          `,
          image: vehUserDashboard,
        },
        {
          id: "service-request-form",
          label: "Usuario · Solicitudes",
          title: "Formulario para solicitar revisión o mantenimiento",
          body: `
El usuario puede enviar una solicitud seleccionando su vehículo, el tipo de solicitud,
fecha preferida y una descripción del problema. El flujo está diseñado para reducir
fricción y capturar lo necesario para que el taller priorice y atienda.
          `,
          image: vehServiceRequestForm,
        },
        {
          id: "user-requests",
          label: "Usuario · Seguimiento",
          title: "Listado de solicitudes con estado",
          body: `
Después de enviar solicitudes, el usuario puede revisar su listado con campos clave
(ID, vehículo, tipo, fecha preferida, estado y descripción). Este módulo facilita el
seguimiento (pendiente/aceptada/otros estados) y mejora la transparencia del proceso.
          `,
          image: vehUserRequestsList,
        },
        {
          id: "vehicles-management",
          label: "Usuario · Vehículos",
          title: "Gestión de vehículos registrados",
          body: `
El módulo “Mis Vehículos” permite registrar y administrar vehículos, con búsqueda por
placa o marca, y acciones rápidas para editar o eliminar. Se complementa con un layout
tipo tabla para lectura rápida y control del inventario personal del usuario.
          `,
          image: vehVehiclesList,
        },
        {
          id: "admin-services",
          label: "Admin · Operación",
          title: "Servicios/órdenes con métricas y filtrado",
          body: `
En el panel administrativo se visualizan servicios/órdenes con KPIs (abiertos, en proceso,
cerrados, anulados, facturación del mes, ticket promedio) y una tabla operativa. Esto ayuda
a controlar la carga del taller y tomar decisiones basadas en volumen y estado.
          `,
          image: vehAdminServices,
        },
        {
          id: "admin-requests",
          label: "Admin · Solicitudes",
          title: "Revisión de solicitudes y cambio de estado",
          body: `
El admin puede revisar solicitudes enviadas por clientes, ver datos clave (cliente, vehículo,
tipo, fecha preferida) y actualizar el estado (por ejemplo: pendiente/aceptada). El objetivo es
convertir solicitudes en atención real con un flujo directo y trazable.
          `,
          image: vehAdminRequests,
        },
      ],
    },
  },

  en: {
    "vehicle-management-api-2025": {
      category: "Web system · Workshop/Fleet · Backend + Frontend",
      subtitle:
        "Dashboard-driven platform for vehicle management, service requests and role-based access (user/admin).",
      brief: `
Vehicle Management System (2025).
A fullstack app for workshops or fleets to centralize operations: users can track
metrics, service history, registered vehicles and create maintenance/review requests.
On the admin side, services/orders and requests are managed through an operational dashboard.

Includes a modern dark UI, filters, structured tables, quick actions and an end-to-end
service request workflow.
      `,
      role: [
        "UX/UI design focused on dashboards and productivity",
        "User screens: metrics, history, vehicles and service requests",
        "Admin screens: service/order operations and request handling",
        "Fullstack integration (API + Frontend) centered on real operational flows",
      ],
      deliverables: [
        "User dashboard with KPIs, filters and history tables",
        "Vehicle management: list, search and actions (edit/delete)",
        "Service request: form + user request list",
        "Admin panel: services/orders with KPIs and operational table",
        "Admin panel: request review and status updates",
      ],
      sections: [
        {
          id: "landing-navigation",
          label: "UI · Navigation",
          title: "Main menu with section-based access",
          body: `
The app starts with a dark layout and a navigation panel grouping actions such as
Login/Register and direct access to system modules. This improves discoverability
and reinforces role-oriented workflows.
          `,
          image: vehLandingMenu,
        },
        {
          id: "user-dashboard",
          label: "User · Dashboard",
          title: "User panel with KPIs and service history",
          body: `
The user dashboard provides an operational summary (active/closed services, total spend,
average ticket), plus filters (status, vehicle, date range) and a service history table.
This enables fast understanding of progress and vehicle activity.
          `,
          image: vehUserDashboard,
        },
        {
          id: "service-request-form",
          label: "User · Requests",
          title: "Form to request review or maintenance",
          body: `
Users can submit a service request by selecting the vehicle, request type, preferred date
and a problem description. The flow is designed to reduce friction while capturing the
information needed by the workshop.
          `,
          image: vehServiceRequestForm,
        },
        {
          id: "user-requests",
          label: "User · Tracking",
          title: "Request list with status tracking",
          body: `
After submitting requests, users can track them in a structured list (ID, vehicle, type,
preferred date, status and description). This improves transparency and reduces support
back-and-forth.
          `,
          image: vehUserRequestsList,
        },
        {
          id: "vehicles-management",
          label: "User · Vehicles",
          title: "Registered vehicle management",
          body: `
The “My Vehicles” module lets users register and manage vehicles with search (plate/brand)
and quick actions to edit or delete entries. A table layout keeps the workflow fast and clear.
          `,
          image: vehVehiclesList,
        },
        {
          id: "admin-services",
          label: "Admin · Operations",
          title: "Services/orders with KPIs and filtering",
          body: `
The admin dashboard shows services/orders with KPIs (open, in-progress, closed, canceled,
monthly billing, average ticket) and an operational table. It supports workload control and
data-driven decisions.
          `,
          image: vehAdminServices,
        },
        {
          id: "admin-requests",
          label: "Admin · Requests",
          title: "Request review and status updates",
          body: `
Admins can review client requests, see key fields (client, vehicle, type, preferred date)
and update statuses (e.g., pending/accepted). The goal is a direct, traceable pipeline from
request to real service.
          `,
          image: vehAdminRequests,
        },
      ],
    },
  },
};
