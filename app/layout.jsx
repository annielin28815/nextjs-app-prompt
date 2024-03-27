import '@styles/globals.css';

export const metadata = {
  title: 'Prompt App',
  description: 'discover and share AI prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="zh-tw">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout