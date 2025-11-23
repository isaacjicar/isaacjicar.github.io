
import billingUsers from "@/assets/MubleriaFacturacion/usuarios.png";
import billingInvoices from "@/assets/MubleriaFacturacion/facturas.png";
import billingProducts from "@/assets/MubleriaFacturacion/productos.png";
import billingCategories from "@/assets/MubleriaFacturacion/categorias.png";
import billingSuppliers from "@/assets/MubleriaFacturacion/proveedores.png";
import billingPayments from "@/assets/MubleriaFacturacion/pagos.png";


export const billingCaseStudy = {
  es: {
    "muebleria-service": {
      category: "Sistema interno · Facturación · Mueblería",
      subtitle:
        "Sistema de facturación y gestión interna para una mueblería, desarrollado con Spring Boot, React y MySQL.",
      brief: `
Proyecto académico donde diseñé y desarrollé desde cero el sistema interno de
facturación para una mueblería. El objetivo fue tener una herramienta sencilla
pero completa para controlar clientes, productos, proveedores, facturas y pagos.

Tecnologías: backend en Spring Boot con API REST, frontend en React,
base de datos relacional en MySQL y arquitectura pensada para crecer
en el futuro (por ejemplo, módulo de ventas o reportes).
      `,
      role: [
        "Diseño UX/UI completo del sistema interno",
        "Implementación del frontend en React con una interfaz limpia y consistente",
        "Diseño del modelo relacional en MySQL (usuarios, productos, proveedores, facturas, pagos, etc.)",
        "Desarrollo del backend en Spring Boot con controladores REST",
        "Lógica de negocio para cálculo de montos, saldos pendientes y control de pagos",
      ],
      deliverables: [
        "Módulo de gestión de usuarios/clientes",
        "Módulo de facturas con control de saldo pendiente",
        "Gestión de productos con stock, categoría, tamaño, tipo y proveedor",
        "Administración de categorías y proveedores",
        "Registro de pagos vinculados a facturas",
      ],
      sections: [
        {
          id: "users-module",
          label: "Usuarios",
          title: "Gestión de usuarios para controlar clientes y tipos de acceso",
          body: `
Esta pantalla permite registrar y administrar los usuarios del sistema,
que pueden representar clientes o personal interno. Cada registro incluye
nombre, apellido, cédula, teléfono, correo, dirección y tipo de usuario
(por ejemplo, Supervisor).

Desde aquí se pueden crear, editar y eliminar usuarios, manteniendo
actualizada la base de clientes de la mueblería y controlando quién
tiene acceso al sistema.`,
          image: billingUsers,
        },
        {
          id: "invoices-module",
          label: "Facturas",
          title: "Módulo de facturación con control de saldo pendiente",
          body: `
El módulo de facturas permite registrar las ventas realizadas a cada usuario,
mostrando el ID de la factura, el cliente asociado, el monto total,
el estado del pago y el saldo pendiente.

La lógica de negocio calcula automáticamente el saldo según los pagos
realizados, lo que convierte esta pantalla en el corazón del control
de cuentas por cobrar de la mueblería.`,
          image: billingInvoices,
        },
        {
          id: "products-module",
          label: "Productos",
          title: "Catálogo de productos con stock y datos de costo",
          body: `
Esta vista muestra la lista de productos de la mueblería, incluyendo
nombre, descripción, precio, stock, costo por pulgada, tipo, categoría,
tamaño y proveedor.

En la parte inferior se encuentra el formulario para registrar o editar
productos, vinculándolos con su categoría, tamaño y proveedor.
Esto permite llevar un control claro del inventario y de los costos
de cada mueble.`,
          image: billingProducts,
        },
        {
          id: "categories-module",
          label: "Categorías",
          title: "Organización de productos por categoría",
          body: `
El módulo de categorías permite crear y mantener las categorías utilizadas
en los productos (por ejemplo, “Silla ejecutiva”, “Pino”). Cada categoría
tiene nombre y descripción, y puede editarse o eliminarse.

Esto ayuda a organizar el catálogo de la mueblería y facilita
la clasificación de los productos dentro del sistema de facturación.`,
          image: billingCategories,
        },
        {
          id: "suppliers-module",
          label: "Proveedores",
          title: "Gestión de proveedores y contactos principales",
          body: `
En la sección de proveedores se registran los datos de las empresas o personas
que suministran la madera y otros materiales. Se almacena el nombre, teléfono
y el contacto principal asociado (por ejemplo, “Jefe Don Bosco”).

Desde aquí se pueden gestionar los proveedores y, a través de un enlace,
administrar los contactos principales. Esto permite llevar un control de
a quién se le compra y facilita comparar precios entre proveedores.`,
          image: billingSuppliers,
        },
        {
          id: "payments-module",
          label: "Pagos",
          title: "Registro de pagos vinculados a facturas",
          body: `
El módulo de pagos permite registrar los abonos que se realizan a cada factura.
Se registran el monto, la fecha, el usuario, la factura relacionada y
el método de pago (por ejemplo, efectivo).

Cada pago impacta el saldo pendiente de la factura correspondiente,
lo que permite ver claramente cuánto ha pagado el cliente y cuánto
queda por cobrar. Además, se incluye una sección para gestionar
los métodos de pago disponibles en el sistema.`,
          image: billingPayments,
        },
      ],
    },
  },

  en: {
    "muebleria-service": {
      category: "Internal system · Billing · Furniture store",
      subtitle:
        "Billing and internal management system for a furniture store, built with Spring Boot, React and MySQL.",
      brief: `
Academic project where I designed and developed from scratch the internal
billing system for a furniture store. The goal was to provide a simple but
complete tool to manage customers, products, suppliers, invoices and payments.

Tech stack: Spring Boot REST API for the backend, React for the frontend,
relational database in MySQL and an architecture ready to grow with new
modules such as sales or reports.
      `,
      role: [
        "Full UX/UI design for the backoffice",
        "Frontend implementation in React with a clean and consistent layout",
        "Relational data model in MySQL (users, products, suppliers, invoices, payments, etc.)",
        "Backend development in Spring Boot exposing REST endpoints",
        "Business logic for totals, pending balances and payment tracking",
      ],
      deliverables: [
        "User/client management module",
        "Invoice module with pending balance tracking",
        "Product management with stock, category, size, type and supplier",
        "Category and supplier administration",
        "Payment module linked to invoices",
      ],
      sections: [
        {
          id: "users-module",
          label: "Users",
          title: "User management for clients and internal roles",
          body: `
This screen lets the admin register and manage system users, which represent
either clients or internal staff. Each record includes name, last name, ID,
phone, email, address and user type (for example, Supervisor).

From here users can be created, edited and deleted, keeping the client
database up to date and controlling who has access to the system.`,
          image: billingUsers,
        },
        {
          id: "invoices-module",
          label: "Invoices",
          title: "Invoice module with pending balance calculation",
          body: `
The invoices module registers the sales made to each user, showing the
invoice ID, client, total amount, payment status and pending balance.

Business logic automatically calculates the remaining balance based on
registered payments, turning this screen into the core of the store's
accounts receivable control.`,
          image: billingInvoices,
        },
        {
          id: "products-module",
          label: "Products",
          title: "Product catalog with stock and cost data",
          body: `
This view lists all products in the furniture store, including name,
description, price, stock, cost per inch, type, category, size and supplier.

Below the table there is a form to create or edit products and link them to
their category, size and supplier. This helps maintain a clear inventory and
understand the cost structure of each furniture piece.`,
          image: billingProducts,
        },
        {
          id: "categories-module",
          label: "Categories",
          title: "Organizing products by category",
          body: `
The categories module allows creating and managing the product categories
used in the catalog (for example “Executive chair”, “Pine”). Each category
has a name and description and can be edited or removed.

This helps organize the furniture catalog and makes it easier to classify
products within the billing system.`,
          image: billingCategories,
        },
        {
          id: "suppliers-module",
          label: "Suppliers",
          title: "Supplier management and main contacts",
          body: `
In the suppliers section, the store records the companies or people who
provide wood and other materials. The table stores the supplier name,
phone number and the main contact associated with it (for example,
“Boss Don Bosco”).

From here the admin can manage suppliers and, through an extra screen,
manage main contacts. This supports tracking who the store buys from and
comparing prices between suppliers.`,
          image: billingSuppliers,
        },
        {
          id: "payments-module",
          label: "Payments",
          title: "Payment records linked to invoices",
          body: `
The payments module registers every payment made against an invoice.
It logs the amount, date, user, related invoice and payment method
(for example, cash).

Each payment updates the pending balance of the corresponding invoice,
so the store can clearly see how much each client has paid and how much
is still owed. There is also a section to manage the available payment
methods in the system.`,
          image: billingPayments,
        },
      ],
    },
  },
};
