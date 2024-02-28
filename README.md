
# Stori Newsletter

Hola Juli, Cristian y todo el equipo Stori!

### TL;DR

Puedes correr el proyecto con Docker. Para hacerlo sigue estos pasos:
1. Descarga el proyecto
  ```bash
  git clone https://github.com/andergcp/newsletter.git
  ```
2. Ve a la carpeta ```backend-stori``` y renombra el archivo ```.env.example``` a ```.env```

3. Ve a la carpeta ```frontend-stori``` y renombra el archivo ```.env.example``` a ```.env```

4. Inicia Docker

5. Corre el siguiente comando:
```bash
  docker compose up --build
  ```
  
6. Listo! Ya puede acceder a la aplicación web en http://localhost:3001/

**Bonus!**

Quieres encontrar la documentación de la API GraphQL?

Ve a http://localhost:3000/graphql y allí encuentras la documentación generada en Playground.

### Resumen tecnología usadas

* Frontend: Nextjs

* Backend: Nestjs

* Base de datos: Mongo

* API: GraphQL

### Organización del proyecto

**En el backend** intenté aplicar algunos principios de arquitecturas limpias, hexagonales y DDD. 

**¿Cómo?**

Manteniendo la lógica de negocio desacoplada de los framworks y/o tecnologías específicas, por ejemplo Mongo, creando repositorios en interfaces que las tecnologías específicas deben implementar.

De tal forma se hace muy fácil cambiar implementaciones específicas, por ejemplo: Mongo por PostgresQL, Sendgrid por Mailersend, AWS por GCP, etc.

**En el frontend** intenté usar hooks para implementar algo parecido al patrón Container/View.

**¿Cómo?**

Manteniendo la lógica de los componentes en los hooks, cosas como establecer comunicación con servicios externos y manejar el estado de la aplicación. De esta forma los componentes solo se encargan de tener el componente visual y mostrar la información que reciben del hook, sin mantener un estado.
