import Header from './Header/Header'

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />

      <main
        style={{
          paddingTop: '60px',
          width: '100%',
        }}
      >
        {children}
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default Layout
