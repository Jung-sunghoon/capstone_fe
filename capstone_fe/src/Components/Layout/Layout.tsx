import Footer from "./Footer/Footer"
import Header from "./HeaderLayout/HeaderLayout"

const Layout = (props: {
  children: React.ReactNode
}) => {
  return (
    <div>
       <Header /> 

      <main>
        {props.children}
      </main>
    <Footer />
    </div>
  )
}

export default Layout