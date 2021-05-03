# IOTICOS GL (Plataforma IoT Nivel DIOS)

Este repositorio contiene los servicios a montar (via docker) para montar la plataforma IoTicos GL.

El mismo fue desarrollado en el curso IoT Bootcamp God Level.

[![IoTicos GL](https://yt-embed.herokuapp.com/embed?v=ZePfdyJPCvM)](https://www.youtube.com/watch?v=ZePfdyJPCvM "IoTicos GL")

### Puedes acceder a más información sobre la plataforma en la primer clase -> aquí <-

[](https://www.udemy.com/course/iot-god-level/learn/lecture/24850534)

### Puedes acceder a la demo -> aquí <-




# Instalación:

[](https://demo.ioticos.org)

![IOTICOS%20GL%20APP%203aecd292ad5447b9aff5744b6608d234/Snip20210311_8.png](IOTICOS%20GL%20APP%203aecd292ad5447b9aff5744b6608d234/Snip20210311_8.png)

Instalar la plataforma en Linux es muy simple. Ya que para tal fin desarrollamos un instalador que encontrarás aquí:

https://github.com/ioticos/ioticos_god_level_services/blob/master/install_ioticosgl.sh

![IOTICOS%20GL%20APP%203aecd292ad5447b9aff5744b6608d234/ScreenFlow.gif](IOTICOS%20GL%20APP%203aecd292ad5447b9aff5744b6608d234/ScreenFlow.gif)


Copia el contenido del archivo install_ioticosgl.sh
En el servidor linux (Ubuntu LTS recomendado) crearemos un archivo llamado install.sh con el comando:

```
sudo nano install.sh 
```

Una vez en el editor nano pegamos el contenido que habíamos copiado.

Grabamos con ctrl + X luego presionar "enter" luego presionar "Y".

Ahora ejecutaremos el siguiente comando para darle permisos totales al archivo recientemente creado.

```
sudo chmod 777 install.sh
```

(Luego de instalar la plataforma borraremos este archivo)

Ahora sí, momento de ejecutar nuestro instalador. (El mismo obtendra tanto los servicios como la app de los repositorios de IoTicos, en el código del instalador puedes reemplazar sendos repositorios por los tuyos )

```
sudo ./install.sh
```

Y listo, debemos responder el cuestionario para efectuar la instalación.


Aclaración:

Luego de ejecutar el instalador la plataforma quedará corriendo en su totalidad.

Como verán en el repositorio tenemos tres archivos docker-compose importantes.

- docker_node_install.yml:

Este compose, lo ejecutaremos cuando a futuro necesitemos instalar dependencias nuevas vía npm.

- docker_nuxt_build.yml:

Este compose, lo ejecutaremos cuando por ejemplo, modificamos el código de nuestro repositorio (algo en el front po ejemplo) y necesitemos llevar estos cambios a producción. 
Al ejecutar este compose, estaremos haciendo un "build" con nuxt. Lo que recompilara tanto código front como el de nuestra api.

- docker_compose_production.yml

Este último es el que lanza a producción nuestra plataforma. Y es el único que deberíamos correr con el "-d" al final de comando para que quede corriendo como servicio.

En los 2 casos anteriores, se recomienda hacerlo sin el -d para observar la salida. 

En los 2 casos anteriores, (install y build), una vez que se ejecutan y terminan su tarea, los mismos finalizan con un exit. (no quedan corriendo) Lo que es normal.


IMPORTANTE:

El  motivo por el cual separamos install - build - production en tres contenedores, (siendo que se podría hacer todo junto) es para evitar saturar procesador y memoria servidores pequeños.