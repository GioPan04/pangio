import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { DEFAULT_SEO } from '../seo.config';

class AppDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <script 
                        async 
                        defer 
                        data-domain="pangio.it" 
                        src="https://dashboard.pangio.it/js/plausible.js">
                    </script>
                    <meta
                        key="description"
                        name="description"
                        content={DEFAULT_SEO.description}
                    />
                    <meta
                        key="twitter:card"
                        name="twitter:card"
                        content={DEFAULT_SEO.twitter.cardType}
                    />
                    <meta
                        key="twitter:site"
                        name="twitter:site"
                        content={DEFAULT_SEO.twitter.handle}
                    />
                    <meta
                        key="og:url"
                        property="og:url"
                        content={DEFAULT_SEO.openGraph.url}
                    />
                    <meta
                        key="og:type"
                        property="og:type"
                        content={DEFAULT_SEO.openGraph.type}
                    />
                    <meta
                        key="og:title"
                        property="og:title"
                        content={DEFAULT_SEO.openGraph.title}
                    />
                    <meta
                        key="og:description"
                        property="og:description"
                        content={DEFAULT_SEO.openGraph.description}
                    />
                    {/* <meta
                        key="og:image"
                        property="og:image"
                        content={DEFAULT_SEO.openGraph.image}
                    />
                    <meta
                        key="og:image:width"
                        property="og:image:width"
                        content={DEFAULT_SEO.openGraph.imageWidth}
                    />
                    <meta
                        key="og:image:height"
                        property="og:image:height"
                        content={DEFAULT_SEO.openGraph.imageHeight}
                    /> */}
                    <meta
                        key="og:locale"
                        property="og:locale"
                        content={DEFAULT_SEO.openGraph.locale}
                    />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Nunito:wght@700&family=Quicksand:wght@500;700&display=swap" rel="stylesheet" /> 
                </Head>
                <body className="bg-primary font-body">
                    <Main />
                    <NextScript />
                    <noscript>
                        To use this website you need to <a href="https://www.enable-javascript.com/">enable JavaScript</a>
                    </noscript>
                </body>
            </Html>
        );
    }
}

export default AppDocument;
