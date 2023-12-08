import { Footer, Header, Main } from "Components"
import { useChangeTitle } from "Hooks"

const HomePage = ({ title }) => {
  useChangeTitle(title)

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default HomePage
