## E-commerce Backend — Entrega Final ##

Este proyecto es un **backend de E-commerce** como **Entrega Final** del curso de Backend 2. Cumple con requisitos de arquitectura profesional, patrones de diseño, roles, autorización, recuperación de contraseña, seguridad y render de vistas con Handlebars.

---

## Tecnologías principales

- Node.js + Express
- MongoDB + Mongoose
- Passport JWT
- Nodemailer (Mailing)
- Handlebars (Motor de vistas)
- Patrones: DAO, Repository, DTO

---

## Estructura del proyecto

```
.
├── server.js
├── src/
│   ├── app.js
│   ├── config/
│   ├── controllers/
│   ├── dao/
│   ├── dto/
│   ├── middleware/
│   ├── models/
│   ├── repository/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── views/
├── .env.example
├── .gitignore
├── package.json

---

## ✅ Rutas principales

## Autenticación

| Método | Ruta                        | Descripción                                  |
| ------ | --------------------------- | -------------------------------------------- |
| POST   | `/api/auth/register`        | Registra un nuevo usuario                    |
| POST   | `/api/auth/login`           | Inicia sesión y retorna JWT                  |
| POST   | `/api/auth/forgot-password` | Envía correo para recuperar contraseña       |
| POST   | `/api/auth/reset-password`  | Restablece contraseña con token              |
| GET    | `/api/auth/current`         | Devuelve datos del usuario autenticado (DTO) |

## Productos

| Método | Ruta                | Descripción                  |
| ------ | ------------------- | ---------------------------- |
| GET    | `/api/products`     | Lista productos (público)    |
| POST   | `/api/products`     | Crea producto (**admin**)    |
| PUT    | `/api/products/:id` | Edita producto (**admin**)   |
| DELETE | `/api/products/:id` | Elimina producto (**admin**) |

## Carrito

| Método | Ruta               | Descripción                            |
| ------ | ------------------ | -------------------------------------- |
| GET    | `/api/carts`       | Ver carrito (**user**)                 |
| POST   | `/api/carts/add`   | Agregar producto al carrito (**user**) |
| POST   | `/api/carts/clear` | Vaciar carrito (**user**)              |

## Vistas (Handlebars)

| Ruta                     | Descripción                            |
| ------------------------ | -------------------------------------- |
| `/`                      | Home                                   |
| `/login`                 | Login                                  |
| `/register`              | Registro                               |
| `/reset-password/:token` | Formulario para restablecer contraseña |

---

Visitar

- Home: [http://localhost:8080/](http://localhost:8080/)
- Login: [http://localhost:8080/login](http://localhost:8080/login)

---

## Diego Olivera ##