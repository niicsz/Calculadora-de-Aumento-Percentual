# Calculadora de Aumento Percentual

Este é um projeto simples de uma **Calculadora de Aumento Percentual**, agora refatorado utilizando **Angular**, **Angular Material** e **TypeScript**. Ele permite ao usuário inserir um valor inicial e um percentual de aumento, e calcula o valor final após o aumento ser aplicado.

## Funcionalidades

- **Entrada de valor inicial**: O usuário insere um valor inicial.
- **Entrada de percentual de aumento**: O usuário insere o percentual de aumento a ser aplicado.
- **Cálculo do valor final**: O sistema calcula automaticamente o valor final após o aumento ser aplicado e exibe o resultado.
- **Modo Escuro e Claro**: Alternância de tema integrada utilizando componentes do Angular Material.

## Como Usar

### Passo 1: Preparar o Projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Baixe ou clone o repositório para o seu computador.
3. No terminal, navegue até a pasta do projeto e instale as dependências:
   ```bash
   npm install
   ```

### Passo 2: Executar o Projeto

1. Inicie o servidor de desenvolvimento do Angular:
   ```bash
   npm start
   ```
2. Abra o navegador e acesse `http://localhost:4200/`.

### Exemplo:

- Valor inicial: 100
- Percentual de aumento: 20%

Resultado: O valor final será **120.00**.

## Estrutura do Código

O projeto foi refatorado para o padrão do Angular, utilizando componentes Standalone.

```
/src
    /app
        app.ts          (Lógica do componente em TypeScript)
        app.html        (Template do componente com Angular Material)
        app.css         (Estilização específica do componente)
    styles.css          (Estilos globais e definições de tema)
```

## Licença

Este projeto é de uso livre. Sinta-se à vontade para modificar e adaptar conforme necessário.
