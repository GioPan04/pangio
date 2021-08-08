import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { DEFAULT_SEO } from '../seo.config';

class AppDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocument;