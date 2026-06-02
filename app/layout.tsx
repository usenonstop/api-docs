import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { Metadata } from 'next'
import Logo from '../components/logo'
import Whatsapp from '../components/whatsapp'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    default: 'API – nonStop',
    template: '%s – API – nonStop',
  },
  description: 'Documentação das APIs da nonStop',
}

const whatsappLink = `https://wa.me/+5511947461988?text=${encodeURI(
  'Olá Sinuhe, gostaria de falar sobre as APIs da nonStop',
)}`

const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink="https://github.com/usenonstop"
    chatLink={whatsappLink}
    chatIcon={<Whatsapp />}
  />
)

const footer = <Footer>nonStop - API</Footer>

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 200 }} />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/usenonstop/api-docs"
          editLink={null}
          feedback={{ content: null }}
          toc={{ title: 'Nesta página' }}
          search={<Search placeholder="Busque na documentação..." />}
          nextThemes={{ defaultTheme: 'dark' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
