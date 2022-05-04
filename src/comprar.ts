const lista = document.createElement("ul");

let arregloDeProductos: string[] = new Array(2);

arregloDeProductos[0] = "Aceite";
arregloDeProductos[1] = "Harina";

arregloDeProductos.forEach((item) => {
  const items = document.createElement("li");

  items.textContent = item;
  lista.appendChild(items);
});
