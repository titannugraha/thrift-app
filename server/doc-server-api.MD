### server-api



````````bash

npx sequelize-cli model:generate --name Item --attributes name:string,category:string,size:string,price:integer,image:string,brandId:integer,userId:integer

npx sequelize-cli model:generate --name Brand --attributes name:string,address:string,image:string

npx sequelize-cli model:generate --name User --attributes name:string,password:string

``````