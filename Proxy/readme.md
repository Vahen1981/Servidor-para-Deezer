# Servidor Proxy para Deezer API

Este repositorio contiene el código de un servidor proxy diseñado para interactuar con la API de Deezer. Su propósito es superar las limitaciones de CORS y facilitar las solicitudes desde aplicaciones web.

## Características

- **Gestor de CORS:** Permite que las solicitudes desde navegadores superen las restricciones de origen cruzado.
- **Restricción de Origen:** Este proxy está configurado para aceptar solicitudes únicamente desde la dirección [https://project5-tuqa.onrender.com](https://project5-tuqa.onrender.com).
- **Reenvío de Solicitudes:** Actúa como intermediario, recibiendo solicitudes desde el navegador, reenviándolas a la API de Deezer y devolviendo las respuestas al cliente.
