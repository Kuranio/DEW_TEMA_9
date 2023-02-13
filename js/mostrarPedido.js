const modalcontent = document.getElementById("modal-content");

const getCookie = (name) => {
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.startsWith(`${name}=`));
  return cookie ? cookie.split("=")[1] : "";
};

const pedidos = getCookie("pedido")
  .split("+")
  .map((v) => Number(v));

let total = 0;
pedidos.forEach((num, i) => {
  if (num !== 0) {
    articulos[i].cantidad = num;
    let precio = num * articulos[i].precio;
    modalcontent.innerHTML += `
      <p> ${articulos[i].mostrar()} = ${precio.toFixed(2)} € <p>
    `;
    total += precio;
  }
});

modalcontent.innerHTML += `<p>Total = ${total.toFixed(2)} €</p>`;
