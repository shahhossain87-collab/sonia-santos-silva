# Gabinete Jurídico Laranjeiras

Sítio do Gabinete Jurídico Laranjeiras, escritório em Lisboa. Sónia Santos da Silva é a advogada em destaque.

Base: [startup-nextjs](https://github.com/NextJSTemplates/startup-nextjs) (MIT). A inspiração visual de [DAC International Lawyers](https://dacinternationallawyers.com/) limitou-se a paleta, tipografia e estrutura — sem copiar textos, imagens, logótipo ou métricas.

## Arranque

```bash
npm install
npm run dev
```

Placeholders atuais (WhatsApp, morada, logótipo e estatísticas) devem ser substituídos quando existirem dados reais. Não publicar taxas de êxito nem garantias de resultado.

## Domínio e SEO

A origem pública de produção é `https://gjladvogados.pt` (`productionSiteUrl` em `src/config/site.ts`). Canonicals, hreflang, Open Graph, JSON-LD, sitemap e robots usam essa origem. `NEXT_PUBLIC_SITE_URL` pode substituí-la, mas um valor em `*.vercel.app` é ignorado. Em `next dev`, sem essa variável, a origem é `http://localhost:3000`.

`www.gjladvogados.pt` e o alias de produção `sonia-santos-silva.vercel.app` redirecionam com 308 para o apex (caminho e query preservados), em `vercel.json` e em `src/proxy.ts`. Os URL de preview da Vercel não são redirecionados. No painel da Vercel, `www.gjladvogados.pt` deve também estar adicionado como domínio (idealmente como domínio de redirecionamento).
