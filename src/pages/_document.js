import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body>
        <div id="modal" />
        <main>
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
