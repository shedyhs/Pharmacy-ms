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

### Observações:

**A parte de relacionamentos do farmacia foi feita de seguinte forma:**
> Primeiros 8 digitos: 01.234.567 ➝ É o número cnpj raiz da farmacia.
>
> Os 4 primeiros depois da barra: /0001 ➝ É a matriz e maiores que 0001 é uma filial. 
>
> Depois do digito: -01 ➝ É o digito verificador
>
> **Exemplo:** 
> 01.234.567/0001-01 ➝ É a farmacia matriz 0001.
> 01.234.567/0002-01 ➝ É a farmacia filial 0002.

**Fontes:**
 - [Como funciona CNPJ de Matriz e filial](https://www.jornalcontabil.com.br/empresa-matriz-e-filial-funcionamento-e-suas-diferencas/)

**Links Uteis**
 - [Gerador de Matriz de CNPJ](https://www.4devs.com.br/gerador_de_cnpj)
 - [Gerador de filiais de CNPJ](http://ghiorzi.org/DVnew.htm)
