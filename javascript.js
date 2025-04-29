function mostrarTooltip(texto, punto) {
  const tooltip = document.getElementById('tooltip');
  tooltip.innerText = texto;
  tooltip.style.display = 'block';

  const rect = punto.getBoundingClientRect();
  tooltip.style.left = (rect.left + window.scrollX + punto.offsetWidth + 10) + 'px';
  tooltip.style.top = (rect.top + window.scrollY - 10) + 'px';
}

function ocultarTooltip() {
  document.getElementById('tooltip').style.display = 'none';
}

function mostrarInfo(texto, tipo = '') {
  const info = document.getElementById('info');
  info.style.opacity = '0';
  info.style.display = 'block';
  info.innerText = texto;

  if (tipo === 'localidades') {
    info.style.backgroundColor = '#e0f7fa';
  } else if (tipo === 'rios') {
    info.style.backgroundColor = '#d0e8f2';
  } else if (tipo === 'climas') {
    info.style.backgroundColor = '#fff3e0';
  } else if (tipo === 'precipitaciones') {
    info.style.backgroundColor = '#e8eaf6';
  } else if (tipo === 'relieve') {
    info.style.backgroundColor = '#f1f8e9';
  } else {
    info.style.backgroundColor = '#e0e0ff';
  }

  setTimeout(() => { info.style.opacity = '1'; }, 10);
}

function cambiarMapa(src) {
  const m = document.getElementById('mapa');
  m.style.opacity = '0';
  setTimeout(() => {
    m.src = src;
    m.style.opacity = '1';
  }, 300);
}

function mostrarCapa(capa) {
  const mapa = document.getElementById('mapa');

  // 1) Cambia el src del mapa si hace falta
  if (capa === 'localidades') {
    cambiarMapa('Imagenes/Mapa Formosa.svg');
  } else if (capa === 'climas') {
    cambiarMapa('Imagenes/Mapa Formosa Climas.png');
  } else if (capa === 'rios') {
    cambiarMapa('Imagenes/Mapa Formosa Rios.png');
  } else if (capa === 'precipitaciones') {
    cambiarMapa('Imagenes/Mapa Formosa Pronostico.png');
  } else if (capa === 'ambientes') {
    cambiarMapa('Imagenes/Mapa Formosa Protegidas.png');
  }

  // 2) Oculta todos los puntos y capas de info
  document.querySelectorAll('.punto').forEach(el => {
    el.style.display = 'none';
  });
  document.querySelectorAll('.informacion').forEach(el => {
    el.style.display = 'none';
  });

  // 3) Muestra solo los puntos y la info de la capa activa
  document.querySelectorAll(`.punto.${capa}`).forEach(el => {
    el.style.display = 'block';
  });
  document.querySelectorAll(`.informacion.${capa}`).forEach(el => {
    el.style.display = 'block';
  });
}



document.onmouseleave = function () {
  document.getElementById('tooltip').style.display = 'none';
};
