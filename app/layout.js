import '../styles/global.css'

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="http://stijndv.com" />
      <link rel="stylesheet" href="http://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
)

export default RootLayout