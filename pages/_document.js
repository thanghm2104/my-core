import { Html, Head, Main, NextScript } from "next/document";

export default Document;

function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>

      <body>
        <Main />
        <NextScript />

        {/* credits */}
        <div className="text-center mt-4">
          <p></p>
          <p>
            <a>
              <strong>T68 © 2024</strong>. Designed by <mark>Thangbeu.online</mark> Rights Reserved
            </a>
          </p>
        </div>
      </body>
    </Html>
  );
}
