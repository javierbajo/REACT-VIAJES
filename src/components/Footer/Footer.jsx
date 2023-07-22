import React from 'react'
import '../../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <footer class="footer">
        <img src="" alt="" class="logo-dos" />
        <ul class="footer-ul">
          <li class="ul-li">
            Empresa
            <ul class="li-ul">
              <li>Acerca de</li>
              <li>Empleo</li>
              <li>For the record</li>
            </ul>
          </li>

          <li class="ul-li">
            Comunidades
            <ul class="li-ul">
              <li>Para artistas</li>
              <li>Desarrolladores</li>
              <li>Publicidad</li>
              <li>Inversores</li>
              <li>Proveedores</li>
            </ul>
          </li>

          <li class="ul-li">
            Enlaces útiles
            <ul class="li-ul">
              <li>Asistencia</li>
              <li>Reproductor web</li>
              <li>App gratis para móvil</li>
            </ul>
          </li>
        </ul>

        <div class="redes-sociales">
          <div class="instagram"></div>
          <div class="twitter"></div>
          <div class="facebook"></div>
        </div>

        <ul class="footer-ul-debajo">
          <li>Legal</li>
          <li>Centro de Privacidad</li>
          <li>Política de privacidad</li>
          <li>Configuración de cookies</li>
          <li>Información sobre los anuncios</li>
        </ul>
      </footer>
    </footer>
  );
};

export default Footer