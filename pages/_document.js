import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html className="full-height" lang="en-US">                
                <Head >
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Coder Indonesia</title>
                <meta name="description" content="Coder Indonesia"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href="css/bootstrap.min.css" rel="stylesheet" />
                <link href="css/mdb.min.css" rel="stylesheet" />
                <link href="styles/main.css" rel="stylesheet"/> 
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
                    <script type="text/javascript" src="js/popper.min.js"></script>
                    <script type="text/javascript" src="js/bootstrap.min.js"></script>
                    <script type="text/javascript" src="js/mdb.min.js"></script>
                    <script>new WOW().init();</script>
                </body>
            </Html>
        )
    }
}

export default MyDocument