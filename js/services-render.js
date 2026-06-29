// Renders the services list — a simple stacked list,
// each service with a name and short description.

function renderServices() {
  const container = document.getElementById("services-container");

  services.forEach(service => {
    const row = document.createElement("div");
    row.className = "service-row";

    row.innerHTML = `
      <h3 class="service-row-name">${service.name}</h3>
      <p class="service-row-desc">${service.description}</p>
    `;

    container.appendChild(row);
  });
}

renderServices();
