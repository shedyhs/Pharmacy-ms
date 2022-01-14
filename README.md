#Pharmacy-ms

Sistema de microserviços para a gestão de farmácias com cadastro de produtos.

## Inicializando o projeto

  Levantamos o docker com: 
  
    docker compose up -d

---
### Micro serviço de farmacias:

  Entramos no micro serviço de farmacia:

  `cd ./pharmacy`

  Iremos executar os seguintes comandos: 

```
  yarn 
  yarn migrate:run
  yarn build
  yarn start:build
```
---
### Micro serviço de produtos:
  
  Em outro terminal entramos no micro serviço de produtos:

  `cd ./products`

  Iremos executar os seguintes comandos:
  
```
  yarn 
  yarn migrate:run
  yarn build
  yarn start:build
```

Na raiz do projeto temos o arquivo do postman com as rotas do sistema.