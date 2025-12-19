const albumsBase = [
  {
    nombre: "Lionel Messi",
    coleccion: "FIFA Stickers",
    imagen: "imágenes (1).jpeg"
  },
  {
    nombre: "Cristiano Ronaldo",
    coleccion: "FIFA Stickers",
    imagen: "images/imágenes.jpeg"
  },
  {
    nombre: "Kylian Mbappé",
    coleccion: "FIFA Stickers",
    imagen: "images/mbappe.png"
  }
];

// Duplicar álbumes
let albums = [];
for (let i = 0; i < 4; i++) {
  albums = albums.concat(albumsBase);
}

const galeria = document.getElementById("galeria");

albums.forEach(a => {
  galeria.innerHTML += `
    <div class="album">
      <img src="${a.imagen}" alt="${a.nombre}">
      <h3>${a.nombre}</h3>
      <p>${a.coleccion}</p>
    </div>
  `;
});

// Botón iniciar sesión
document.getElementById("loginBtn").addEventListener("click", () => {
  alert("🚧 Iniciar sesión: EN CONSTRUCCIÓN 🚧");
});


