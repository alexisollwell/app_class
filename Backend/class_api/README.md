
Pasos para preparar tu API

Requisitos: 
- NODE JS
- SQL Server 2017 - Latest
    - Activa el agent de SQL.
    - Permite conexiones por medio de autenticacion de usuario SQL y crea un login.
    - Dentro de SQL Manager habilita la conexion tcp ip, si lo ves necesario cambia el puerto.
- Descargar la Extension "Prisma" oficial de la tienda de vsc.

1. Instala dependencias:
```
npm install
```

2. Ahora inicializaremos el ORM y jalaremos la base de datos a tu sistema. Para ello primero deberas ejecutar el siguiente comando:
```
Prisma Init
```

- Te generara un archivo .env en el cual estara la variable: DATABASE_URL. Reemplaza esa variable con el siguiente formato:
```
"sqlserver://localhost:"NUMERO DE PUERTO DE TU SERVIDOR SQL";database=CollegeService;user="NOMBRE DE USUARIO SQL";password="CONSTRASENA DEL USUARIO";trustServerCertificate=true;"
```
Remplaza los campos mencionados por tus datos y debera estar listo para hacer una conexion a Servidor.

- Ahora ejecuta el siguiente comando: 
```
Prisma db push
```
Esto generara, automaticamente la base de datos en tu servidor.

3. Inicializa el cliente de Prisma. Este se encargara de compilar, ayudar en la Syntaxis y en general al correcto funcionamiento de la ORM. Esto lo haras haciendo el siguiente comando: 

```
Prisma Generate
```

4. Deberias estar listo para prender el API. Prueba ejecutando el API utilizando el siguiente comando:
```
npm run dev
```
O
```
npm run build
npm start build
```
Para compilar el proyecto y ejecutar directamente el build.


5. Podras confirmar su funcionamiento entrando al siguiente link:

```
open http://localhost:3000
```
