import { Footer, Header } from "Components"
import { useChangeTitle } from "Hooks"

const HomePage = ({ title }) => {
    useChangeTitle(title)
    
    return (
        <>
            <Header />
            content zone
            <Footer />
        </>
    )
}

export default HomePage