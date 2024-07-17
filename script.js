// Cria o mapa do Leaflet centrado no Brasil
const map = L.map('map').setView([-15.793889, -47.882778], 4);

// Adiciona a camada do mapa base do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Exemplo de marcador de veículo
const vehicleMarker = L.marker([-23.55052, -46.633308]).addTo(map);

// Simulação de atualização de posição a cada 5 segundos
setInterval(() => {
  const lat = -23.55052 + (Math.random() - 0.5) * 0.1;
  const lng = -46.633308 + (Math.random() - 0.5) * 0.1;
  vehicleMarker.setLatLng([lat, lng]);
}, 5000);

