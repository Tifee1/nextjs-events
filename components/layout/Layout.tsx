import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className='min-h-[calc(100vh-189px)]'>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
