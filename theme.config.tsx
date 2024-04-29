import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/logo";
import Whatsapp from "./components/whatsapp";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/usenonstop",
  },
  editLink: {
    component: () => <div></div>,
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "API – nonStop",
    };
  },
  toc: { title: "Nesta página" },
  feedback: { content: () => <div></div> },
  search: {
    placeholder: "Busque na documentação...",
  },
  docsRepositoryBase: "https://github.com/usenonstop/api-docs",
  footer: {
    text: "nonStop - API",
  },
  chat: {
    link: `https://wa.me/11947461988?text=${encodeURI(
      "Olá Sinuhe, gostaria de falar sobre as APIs da nonStop",
    )}`,
    icon: <Whatsapp />,
  },
  nextThemes: { defaultTheme: "dark" },
  primaryHue: 200,
};

export default config;
