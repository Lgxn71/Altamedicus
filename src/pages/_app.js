import Layout from "@/components/Layout/Layout.jsx";

import { RecoilRoot } from "recoil";

import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";

import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
        <Analytics></Analytics>
      </Layout>
    </RecoilRoot>
  );
}
