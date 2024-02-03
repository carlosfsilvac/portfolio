---
slug: como-criar-um-blog-usando-markdown-com-nuxt-content
description: Na era digital, as possibilidades para criar um blog são amplas e diversificadas, variando de plataformas tradicionais como WordPress e Medium até geradores de sites estáticos como Gatsby, Hugo e Jekyll. Este guia explora como você pode utilizar o Nuxt Content—uma ferramenta poderosa do ecossistema Nuxt.js—para criar um blog aproveitando a simplicidade do Markdown.
author: Carlos Silva
date: 31 de Janeiro de 2024
tags: Nuxt.js, Markdown, Nuxt Content, Desenvolvimento Web, Blogging
image: /img/articles/como-criar-um-blog-usando-markdown-com-nuxt-content/cover.png
---

# Guia Completo para Criar um Blog com Markdown e Nuxt Content

[Carlos Silva, 31 de Janeiro de 2024]{.article-publish-date-text}
\
\
![Cover Image](/img/articles/como-criar-um-blog-usando-markdown-com-nuxt-content/cover.png){.article-cover-image}
\
No cenário digital atual, as opções para criar um blog vão de plataformas tradicionais como WordPress e Medium até geradores de sites estáticos, como Gatsby, Hugo e Jekyll. Este guia completo visa te apresentar uma alternativa poderosa usando o Nuxt Content, um módulo do framework Nuxt.js, para construir um blog com Markdown de maneira prática e amigável para desenvolvedores.

## Introdução ao Nuxt.js

Nuxt.js é um framework versátil e open source baseado em Vue.js, projetado para tornar o desenvolvimento de aplicações Vue.js universais ou de página única mais simples. Com configurações prontas para uso, o Nuxt.js facilita a renderização no lado do servidor, o roteamento e a organização do layout das páginas, constituindo uma base sólida para projetos de desenvolvimento web, incluindo plataformas de blog.

### Principais Funcionalidades do Nuxt.js

- **Divisão Automática de Código:** Melhora o tempo de carregamento ao carregar apenas o JavaScript necessário para a página em uso.
- **Renderização do Lado do Servidor (SSR):** Melhora o SEO e a carga inicial da página ao renderizar componentes Vue no servidor.
- **Geração de Site Estático:** Permite gerar uma versão estática do seu site, que pode ser hospedada em qualquer lugar.

## Entendendo o Markdown

Markdown é uma linguagem de marcação leve que permite a formatação de texto de maneira simples, projetada para ser convertida em HTML de forma estruturalmente válida. Facilita para escritores e desenvolvedores a criação de conteúdo num formato legível e de fácil escrita, que depois é convertido para HTML.

### Por que Usar Markdown para Blogar?

- **Simplicidade:** Permite que você se concentre no conteúdo, sem se preocupar com a complexidade das tags HTML.
- **Portabilidade:** Conteúdo em Markdown pode ser facilmente compartilhado, copiado e transportado sem perda de formatação. Eu por exemplo, escrevo os artigos no Obsidian ou no Notion e apenas copio para o meu projeto em arquivos markdown.
- **Versatilidade:** Compatível com várias plataformas e ferramentas, tornando-se um formato universal para a criação de conteúdo.

## Apresentando o Nuxt Content

Nuxt Content é um módulo oficial do Nuxt.js que potencializa seu fluxo de trabalho ao permitir que você escreva seu conteúdo em Markdown e o acesse por meio de uma API similar ao MongoDB, criando uma integração perfeita entre seu conteúdo e sua aplicação.

### Vantagens do Nuxt Content

- **Facilidade de Uso:** Escreva em Markdown e transforme seu conteúdo automaticamente em uma API JSON.
- **Flexibilidade:** Oferece suporte a Markdown, CSV, YAML, JSON(5) e XML de forma nativa.
- **Busca de Texto Completo:** Inclui uma funcionalidade de busca poderosa para localizar facilmente o conteúdo.

## Guia Passo a Passo para Montar Seu Blog

### 1. Configurando o Nuxt.js

Primeiramente, crie um novo projeto Nuxt.js, caso ainda não tenha feito. Isso prepara seu ambiente de desenvolvimento com o Nuxt.js.

```bash
npx create-nuxt-app meu-blog
```

### 2. Adicionando o Nuxt Content

Instale o Nuxt Content para adicionar funcionalidades de gerenciamento de conteúdo à sua aplicação Nuxt.js.

```bash
npm install @nuxt/content
```

### 3. Configurando o Nuxt Content

Altere seu arquivo nuxt.config.js para incluir o Nuxt Content como um módulo, habilitando suas funcionalidades no seu projeto.

``` typescript
// nuxt.config.ts
export default {
  modules: ['@nuxt/content'],
  content: {
    // Configurações opcionais
  },
}
```

### 4. Produzindo Conteúdo com Markdown

Crie seus arquivos de conteúdo em formato Markdown dentro do diretório content/. Segue um exemplo de uma postagem de blog simples:

```markdown
---
title: Meu Primeiro Post no Blog
slug: meu-primeiro-post-no-blog
description: Uma introdução à minha jornada de blogueiro
date: 31 de Janeiro de 2024
author: Carlos Silva
tags: [Nuxt.js, Blogging, Desenvolvimento Web]
---

Bem-vindo ao meu primeiro post no blog utilizando Nuxt Content e Markdown. Esta jornada explora a integração fluída entre escrita e desenvolvimento web.
```

### 5. Desenvolvendo a Interface do Blog

Usando a tag `<ContentList>` do Nuxt você pode acessar os posts dentro da pasta content/blog e exibi-los na sua aplicação. Segue um exemplo de como você pode fazer isso:

```vue
<!-- app.vue -->
<template>
  <div>
    <ContentList v-slot="{ list }" path="/blog">
      <a
        v-for="article in list"
        :key="article._id"
        :href="article._path"
      >
        <p>{{ article.title }}</p>
        <p>{{ article.description }}</p>
      </a>
    </ContentList>
  </div>
</template>
```

## Conclusão

Usar o Nuxt Content e Markdown para criar um blog oferece uma combinação ideal de simplicidade, flexibilidade e eficácia, representando uma excelente escolha para desenvolvedores e criadores de conteúdo. Aproveite a facilidade de escrita do Markdown e a integração perfeita com o Nuxt Content para criar um blog que atenda às suas necessidades e expectativas.
