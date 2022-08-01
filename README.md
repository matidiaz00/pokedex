# Pokedex Web APP con ReactJS

Web APP recreando una Pokedex utilizando ReactJS y la API pública PokeAPI.

La función basica del proyecto es brindarte información sobre los Pokemones. Sin embargo, también esta la posibilidad de vincular una cuenta de Nintento y acceder a mas funcionalidades. Por ejemplo: ver sus amigos, ver las batallas, sus pokemones, etc.

AVISO IMPORTANTE: Todavía está en construcción! Por el momento solo esta hecho el prototipo (maqueta con bootstrap, falta el diseño) y la página principal funcional para buscar información de los pokemones.

## Demo

El proyecto tiene un pipeline programado para que se suba automáticamente al servidor al hacer un git push estando en la rama madre.

El servidor que se utilizó en este caso es Firebase Hosting.

La URL de producción es [https://pokedex-matidiaz.web.app](https://pokedex-matidiaz.web.app)

## Pasos para correr el proyecto en local

Para correr el proyecto es cuestión de seguir los siguientes pasos:

Tener instalado GIT y tambien la versión 16 de NodeJS (no fue probada con otra versión)

En la consola pararse en la carpeta que quiera, descargar el proyecto y correr el siguiente comando:

`git clone https://github.com/matidiaz00/pokedex.git`

Ingresar a la carpeta mediante la consola y correr el siguiente comando:

`npm i`

Por último, cuando termine de instalarse las dependencias, correr el siguiente comando:

`npm run start`

Se abrirá automáticamente la visualización del proyecto en su navegador web con la URL [http://localhost:3000](http://localhost:3000/)

### IMPORTANTE, problemas que fueron resueltos

La API pública de PokeAPI no tiene filtros en sus endpoints, solamente se puede filtrar por nombre.

Necesitaba un filtro mas complejo asi que, para solucionar ésto sin tener que armar una API propia en NodeJS, fue resuelto mediante el frontend.

Se hace una llamada principal que trae todos los ids y se almacena en un array. Luego, con este dato, se hace una cadena de llamadas a la API para traer la información de cada pokemon. Ya que son mas de 1000, esta cadena de llamadas se dividen en más de 4 cadenas. Una vez termina se guarda en el context de la aplicación para que se pueda acceder a ella desde cualquier componente.

El unico problema que causa ésto es que tarde en inicializar la aplicación. Ésto lo solucioné con un cargando personalizado donde aparece una animación con una pokebola.

### Pendientes

A pesar de que ya este funcional el proyecto, todavía me quedan algunas cosas pendientes.

- Seguir mejorando la estructura de archivos y carpetas para que sea mas fácil de entender para el desarrollador.
- Por el momento es solo el prototipo, pero hay que mejorar la UI. Me quiero basar en estos dos diseños: [Diseño mobile en dribble](https://dribbble.com/shots/6563578-Pokedex-App-Animation) / [Diseño desktop en dribble](https://dribbble.com/shots/15128634-Pokemon-Pokedex-Website-Redesign-Concept)
- Los estilos por el momento son estáticos de bootstrap. La idea es armar en la compilación una librería de sass que consuma bootstrap mismo pero solo con lo necesario y editándolo.
- Falta información correcta en las secciones de Pokedex y Friends, todos los datos son solo de ejemplo.
- Queda pendiente armar un SSO para guardar datos del usuario y conectarlo con la aplicación.
- Agregar el unit testing que, lamentablemente, no tuve tiempo.
- Habría que armar una API propia para manejar cada una de las secciones.
- Mejorar el renderizado para que cargue mas rapido utilizando herramientas como SSR.