instalar primero en la terminal : 
npm install express 
npm install express –save 
npm install cors
npm install dotenv
npm install multer
npm install jsonwebtoken
npm install bcryptjs
npm install @prisma/client@7 --save-dev
npm install @prisma/adapter-pg@7 --save-dev
npm install prisma@7 tsx --save-dev
npx prisma init --datasource-provider postgresql
npx prisma migrate dev --name init

INSTALR LITE CLIENT Y PRISMA EN EXTENSIONES

En postgres crear base de datos 
create database "3407184";
\c "3407184"

luego ejecuta: npm run dev

un archivo nombrarlo :
 .env dentro de el : PORT = (tu port ej:3333)

el port es: http://localhost:3000