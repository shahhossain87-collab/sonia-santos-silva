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

Defina `NEXT_PUBLIC_SITE_URL` na Vercel quando o domínio definitivo GJL for escolhido (por exemplo, `https://www.exemplo.pt`). Esta é a única configuração da origem pública usada por canonicals, hreflang, Open Graph, JSON-LD, sitemap e robots. Sem essa variável, o sítio usa `VERCEL_PROJECT_PRODUCTION_URL` e depois `VERCEL_URL`; em desenvolvimento usa `http://localhost:3000`.
