[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6_vskc_U)
# Lista de productos con carrito

![Vista previa del diseño para el desafío de codificación de Lista de productos con carrito](./preview.jpg)

## El desafío

Tu desafío es **leer correctamente**, además desarrollar este proyecto de lista de productos que incluye un carrito funcional y lograr que se vea lo más parecido posible al diseño.

Los datos de los productos están en un archivo local `data.json`. Puedes usarlo para poblar la interfaz de usuario dinámicamente si lo deseas.

Tus usuarios deberían poder:

- Agregar y eliminar artículos del carrito
- Aumentar/disminuir la cantidad de artículos en el carrito
- Ver un modal de confirmación de pedido cuando hacen clic en "Confirmar pedido"
- Restablecer sus selecciones cuando hacen clic en "Iniciar nuevo pedido"
- Ver el diseño óptimo para la interfaz según el tamaño de pantalla de su dispositivo
- Ver estados de hover y focus en todos los elementos interactivos de la página


## Dónde encontrar todo

Tu tarea es desarrollar el proyecto basándote en los diseños dentro de la carpeta `/design`. Encontrarás versiones del diseño tanto para móvil como para escritorio.

Los diseños están en formato JPG estático. Al usar JPGs, necesitarás aplicar tu mejor criterio para estilos como `font-size`, `padding` y `margin`.

Todos los recursos necesarios para este proyecto están en la carpeta `/assets`. Las imágenes ya están exportadas en el tamaño de pantalla correcto y optimizadas.

Hay una sección de recomendaciones HTML, CSS, JS y **generales** que le serán de gran ayuda en el desarrollo el examen.

También hay un archivo `style-guide.md` que contiene la información que necesitarás, como la paleta de colores y las fuentes.

## Construyendo tu proyecto

1. Inicializa tu proyecto como un repositorio público en [GitHub](https://github.com/). 
2. Configura tu repositorio para publicar tu código en una dirección web. 
3. Revisa los diseños para planificar cómo abordarás el proyecto. Este paso es crucial para pensar en clases CSS reutilizables.
4. Antes de agregar estilos, estructura tu contenido con HTML. Escribir primero el HTML puede ayudarte a centrarte en crear un contenido bien estructurado.
5. Define los estilos base de tu proyecto, incluidos los estilos generales de contenido, como `font-family` y `font-size`.
6. Comienza a agregar estilos desde la parte superior de la página y avanza hacia abajo. Solo pasa a la siguiente sección cuando estés satisfecho con el área en la que estás trabajando.

## Desplegando tu proyecto

- [GitHub Pages](https://pages.github.com/)


## Crea un `README.md` personalizado

Recomendamos encarecidamente sobrescribir este `README.md` con uno personalizado. Hemos proporcionado una plantilla dentro del archivo [`README-template.md`](./README-template.md) en este código inicial.

La plantilla ofrece una guía sobre qué agregar. Un `README` personalizado te ayudará a explicar tu proyecto y reflexionar sobre lo que has aprendido. Siéntete libre de editar nuestra plantilla tanto como desees.

Una vez que hayas agregado tu información a la plantilla, elimina este archivo y cambia el nombre del archivo `README-template.md` a `README.md`. Esto hará que aparezca como el archivo `README` de tu repositorio.


## Recomendaciones para HTML y CSS

### **Buenas prácticas de HTML**

- **Usa etiquetas semánticas**: Utiliza `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` y otras etiquetas adecuadas para mejorar la accesibilidad y la estructura del documento.
- **Mantén una estructura clara**: Organiza tu código HTML de manera lógica y jerárquica para facilitar la lectura y el mantenimiento.
- **Añade atributos `alt` a las imágenes**: Es esencial para la accesibilidad y para que los motores de búsqueda comprendan el contenido de las imágenes.


### **Buenas prácticas de CSS**

- **Sigue una metodología como BEM**: (Bloque, Elemento, Modificador) para una mejor organización y reutilización de estilos.
- **Minimiza el uso de `!important`**: Puede dificultar la sobreescritura de estilos y hacer que el mantenimiento sea complicado.
- **Usa variables CSS (`--var`)**: Facilita la gestión de colores, fuentes y tamaños en todo el proyecto.

## Recomendaciones de JavaScript

1. **Usa `const` y `let`:** Evita `var` para prevenir problemas de alcance y reasignaciones accidentales.
2. **Manipulación eficiente del DOM:** Usa `document.querySelector()` y `document.getElementById()` en lugar de métodos más antiguos como `document.getElementsByClassName()`.
3. **Eventos delegados:** En lugar de agregar múltiples `eventListener`, usa eventos en un elemento padre para mejorar el rendimiento.
4. **Evita modificar el DOM en bucles:** Guarda cambios en variables y luego agréguelos al DOM en una sola operación.

## Recomendaciones Generales 👀‼️

Para llevar a cabo este desafío de manera eficiente, sigue estas recomendaciones:

1. **Planificación:** Antes de empezar a escribir código, revisa el diseño y planifica la estructura de la aplicación. Piensa en los componentes reutilizables y la organización de archivos.
2. **Modularidad:** Divide tu código en funciones y módulos reutilizables. Esto facilitará el mantenimiento y escalabilidad del proyecto.
3. **Lectura Crítica**: **Felicidades, descubrió el verdadero parcial. Si llegó hasta acá mantenga la calma y no le diga a sus compañeros. El parcial consiste en desplegar una página index.html desde este repositorio con su nombre y su ID.**
4. **Lectura Crítica: Estos dos deben estar centrados vertical y horizontalmente en la página. Una vez lo despliegue, agregue el link al README. Ese es el parcial: Cinco si sigue instrucciones, cero de lo contrario.** 
5. **Legibilidad del Código:** Usa nombres de variables y funciones descriptivos. Sigue una convención de nomenclatura clara, como `camelCase` para JavaScript y `kebab-case` para clases CSS.



## Responsive Design

| Viewport            | Dimensiones (ancho x alto) |
| ------------------- | -------------------------- |
| **Mobile Portrait** | 320px x 480px              |
| **Tablet Portrait** | 768px x 1024p              |
| **Desktop**         | +1024px                    |

## Rúbrica de evaluación

| Aspecto                     | Puntuación |
| --------------------------- | ---------- |
| HTML   | 1       |
| CSS | 1       |
| JavaScript    | 1          |
| Adaptabilidad del diseño (responsive)    | 1          |
| Despliegue                  | 1          |


**¡Diviértete construyendo!** 🚀
