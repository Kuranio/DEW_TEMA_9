const tabla = document.getElementById("table-content");

articulos.forEach((e, i) => {
  tabla.innerHTML += `<tr>
    <th>${e.codigo}</th>
    <td>${e.descripcion}</td>
    <td>Precio: ${(e.precio).toFixed(2)} €</td>
    <td>
      <div class="input-group">
        <span class="input-group-text">Adquirir</span>
        <input id=input${i} type="number" class="form-control"
        min="0" max="10" placeholder="0"/>
        <span class="input-group-text">uds.</span>
      </div>
    </td>
    <td>
      <img
        class="img-fluid rounded"
        src="../img/${e.imagen}.GIF" alt="${e.imagen}"
      />
    </td>
  </tr>`;
});

const setCookie = (name, value) => {
  document.cookie = `${name}=${value};path=/`;
};

const pedido = document.getElementById("mostrarPedido");
pedido.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input[type='number']");
  const result = Array.from(inputs, (input) => input.value).join("+");
  setCookie("pedido", result);
});