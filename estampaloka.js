document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Abrir colección');
    });
});

document.querySelector('.login-btn').addEventListener('click', () => {
    alert('Redirigir a iniciar sesión');
});
document.querySelector('.signup-btn').addEventListener('click', () => {
    alert('Redirigir a registrarse');
}
);
