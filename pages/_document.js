import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <title>Denis Zenkovich - Expert Full-stack developer. React, Node.js, JavaScript.</title>
          <meta name="description" content="I'm a full stack software engineer with 15 years of experience. My speciality is JavaScript: React, Node. I'm going to prove you that in a long run quality code costs less."/>
          <meta name="keywords" content="Web Development, React Expert, Node.js Expert, JavaScript Expert, Contractor"/>
          <meta name="author" content="Denis Zenkovich"/>
          <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,400i,700&display=swap" rel="stylesheet"/>
          <link rel="icon" type="image/png" href="/images/favicon64.png"/>
        </Head>
      <body style={{margin: 0}}>
        <Main/>
        <NextScript/>
      </body>
      </Html>
    )
  }
}

CustomDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

export default CustomDocument
