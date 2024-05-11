import { Html, Head, Main, NextScript } from "next/document";

export default Document;

function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
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
