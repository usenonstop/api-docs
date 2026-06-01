const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

// CSP allowlist do site de docs (Nextra). Tudo é self-hosted: logo/ícones são
// SVG inline, a busca é flexsearch embutida, sem analytics/fontes/scripts
// externos. O 'unsafe-inline' cobre os scripts inline do Next (hydration) +
// next-themes. Só em produção — o `next dev` usa eval no HMR e a policy
// (sem 'unsafe-eval') quebraria o hot reload. HSTS já vem da config da Vercel,
// então não duplico aqui.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join('; ')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withNextra({
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          ...(isProd ? [{ key: 'Content-Security-Policy', value: csp }] : []),
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // 0 = desativa o filtro legado de XSS do browser (recomendação OWASP);
          // a proteção real é a CSP. Fica presente para o scanner.
          { key: 'X-XSS-Protection', value: '0' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
          },
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
        ],
      },
    ]
  },
})
