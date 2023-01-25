
# Decoupled Drupal with React


[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/caiocavicchia)


## Atenção!

Você precisará ter o [Lando](https://docs.lando.dev/getting-started/installation.html) instalado. Esse documento tentará guiar, ao melhor possível, quem estiver lendo para que não seja necessário nenhum conhecimento técnico.

[Como instalar](#instalar-localmente)


## Heads up!
You're going to need to have [Lando](https://docs.lando.dev/getting-started/installation.html) installed. This document will try to guide, as best as possible, whoever is reading so that no technical knowledge is necessary.

[How to install](#english)


## Instalando localmente

[Caso não tenha experiência com códigos ou terminais, clique aqui](#instaland-localmente-2)

Clone o projeto https://github.com/Cavicchi2/decoupled-study

```bash
  git clone https://github.com/Cavicchi2/decoupled-study
```


Caso não tenha conhecimentos com git, poderá apenas fazer o download do projeto clicando no botão verde "Clone" e fazendo o download como um Zip.
![App Screenshot](https://i.imgur.com/uGwhqrr.png)


Vá até o diretório do projeto

```bash
  cd decoupled-study
```

Comece o Lando

```bash
  lando start
```

Depois de pronto, você tem algumas opções:
Caso queira, poderá instalar o Drupal na mão, gerar os conteúdos você mesmo e testar, porém já existe um comando que fará isso pra você de forma automática:

```bash
  lando start-drupal
```
Esse comando instalará o site, criará o usuário 'admin' com a senha 'admin' automaticamente. Irá gerar os conteúdos e habilitar o JSON API module.


Depois de pronto, comece o React:
```bash
  lando start-react
```

Acesse a url: http://localhost:3000
e você verá o app em React funcionando informações do site Drupal. Você pode alterar informações nos conteúdos em Drupal e atualizar a página em React para verificar a mudança.
## Instalando localmente 2

[Caso não tenha experiência com códigos ou terminais, clique aqui](#instaland-localmente-2)

Faça o download do projeto https://github.com/Cavicchi2/decoupled-study clicando no botão verde "Clone" e fazendo o download como um Zip.
![App Screenshot](https://i.imgur.com/uGwhqrr.png)


Extraia a pasta para um local e acesse a pasta.

Clique com o botão direito em algum lugar vazio da pasta

```bash
  cd decoupled-study
```

Comece o Lando

```bash
  lando start
```

Depois de pronto, você tem algumas opções:
Caso queira, poderá instalar o Drupal na mão, gerar os conteúdos você mesmo e testar, porém já existe um comando que fará isso pra você de forma automática:

```bash
  lando start-drupal
```
Esse comando instalará o site, criará o usuário 'admin' com a senha 'admin' automaticamente. Irá gerar os conteúdos e habilitar o JSON API module.


Depois de pronto, comece o React:
```bash
  lando start-react
```

Acesse a url: http://localhost:3000
e você verá o app em React funcionando informações do site Drupal. Você pode alterar informações nos conteúdos em Drupal e atualizar a página em React para verificar a mudança.