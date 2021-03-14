Read Me:

Esta aplicación fue desarrollada para el con el fin de postularse para el puesto de desarrollador React Native para la empresa Elaniin

La app esta desarrollada en React Native por ende funciona para ambar plataformas Android y iOS.

Para instalar las dependecias.

```jsx
npm install
```

Para correr el app en dichas plataformas.

```jsx
npm run ios //To run on ios
npm run android //to run on android
```



Requerimiento Pedidos en la practica:

- Debes hacer uso de la Pokéapi V2 (https://pokeapi.co/)

- Tu aplicación debe usar Firebase Realtime Database

  (https://firebase.google.com/docs/database/) para guardar cualquier tipo de datos de la

  aplicación.

- Cuando el usuario ingrese a la aplicación, deberá de tener disponibles todas las regiones de

  pokemon.

- El usuario puede crear N equipos, el usuario podrá elegir hasta 6 pokémon para su equipo y

  un mínimo de 3 pokémon.

- El usuario debe de tener una pantalla en donde le salgan todos los equipos creados, con la

  opción de modificarlos o eliminarlos.

- Para cada equipo se muestra la información básica, nombre, número, tipo, descripción del

  pokédex y la imagen (si hay disponible, si no, hay que tener una imagen de blankstate) de

  los pokémon de cada equipo.

- Un usuario puede permitir que otro usuario copie su equipo mediante un link o token que el

  programador genere mediante un algún algoritmo especial, toda la lógica queda a disposición del programador, la única condición es que el link o token no sean tan largos (Que se puedan escribir fácilmente). ***(Punto extra)\***

- La aplicación debe de tener una Font custom en toda la aplicación, es decir, no debe de tener la Font por defecto que aplica Android Studio o X Code. ***(Punto extra)***.



El Proyecto cuenta con las siguientes funcionalidades:

- Creacion del usuario.
- Inicio de sesion del usuario.
- Dashboard mostrando los top 3 de los equipos creados.
- Vista del lista do pokemones Max 100.
- Vista del detalle de los pokemones.
- Creacion de equipos (No maximo de 6 y no minimo de 3 pokemones)
- Vista de listado de equipos de pokemones.
- Opcion de editar y eliminar los equipos creados.

Estructura de la Base de datos hecha en Firebase.

![BD_estructure](/Users/joseandreceron/Documents/Projects/PokeApi/BD_estructure.png)