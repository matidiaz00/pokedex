# Pokedex Web APP con ReactJS

Web APP recreando una Pokedex utilizando ReactJS y la API publica PokeAPI.

La idea del proyecto es que tenga una conección con algun juego actual de la Nintendo Switch, donde el usuario pueda loguearse con su cuenta, ver sus amigos, ver las batallas, sus pokemones, etc.

AVISO IMPORTANTE: Todavia esta en construcción! Por el momento solo esta echa la pagina principal para buscar información de los pokemones, y es solo la maqueta con bootstrap (falta el diseño).

## Demo

El proyecto tiene un pipeline programado para que se suba automaticamente al servidor al hacer un git push estando en la rama madre

El servidor que se utilizo en este caso es Firebase Hosting

La URL de producción es [production](https://pokedex-matidiaz.web.app)

## Pasos para correr el proyecto en local

Para correr el proyecto es cuestion de seguir los siguientes pasos

Tener instalado GIT y tambien la version 16 de NodeJS (no fue probada con otra version)

En la consola pararse en la carpeta que quiera descargar el proyecto y correr el siguiente comando

`git clone https://github.com/matidiaz00/pokedex.git`

Ingresar a la carpeta mediante la consola y correr el siguiente comando

`npm i`

Por ultimo cuando termine de instalarse las dependencias correr el siguiente comando

`npm run start`

Se abrira automaticamente la visualización del proyecto en su navegador web con la URL [deployment](http://localhost:3000/)

### IMPORTANTE, problemas que fueron resueltos

La API publica de PokeAPI no tiene filtros en sus endpoints, solamente se puede filtrar por nombre.

Necesitaba un filtro mas complejo asi que para solucionar esto sin tener que armar una API propia en NodeJS fue resuelto mediante el frontend.

Se hace una llamada principal que trae todos los ids y se almacena en un array, luego con este dato se hace una cadena de llamadas a la API para traer la información de cada pokemon, ya que son mas de 1000 esta cadena de llamadas se dividen en mas de 4 cadenas, una vez termina se guarda en el context de la aplicación para que se pueda acceder a ella desde cualquier componente.

El unico problema que causa esto es que tarde en inicializar la aplicación, esto lo solucione con un cargando personalizado donde aparece una animación con una pokebola.