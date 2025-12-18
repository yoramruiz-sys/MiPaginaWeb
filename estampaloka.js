const albumsBase = [
  {
    nombre: "Lionel Messi",
    coleccion: "FIFA Stickers",
    imagen: "file:///C:/Users/Usuario/Desktop/estampaloka/images%20(1).jpeg"
  },
  {
    nombre: "Cristiano Ronaldo",
    coleccion: "FIFA Stickers",
    imagen: "file:///C:/Users/Usuario/Desktop/estampaloka/images.jpeg"
  },
  {
    nombre: "Kylian Mbappé",
    coleccion: "FIFA Stickers",
    imagen: "file:///C:/Users/Usuario/Desktop/estampaloka/s-l400.png"
  }
];

// duplicar álbumes
let albums = [];
for (let i = 0; i < 4; i++) {
  albums = albums.concat(albumsBase);
}

const galeria = document.getElementById("galeria");

// mostrar álbumes
albums.forEach(a => {
  galeria.innerHTML += `
    <div class="album">
      <img src="${a.imagen}" alt="${a.nombre}">
      <h3>${a.nombre}</h3>
      <p>${a.coleccion}</p>
    </div>
  `;
});
