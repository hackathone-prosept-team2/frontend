import { Header, Footer, Auth } from "Components"
import { useChangeTitle } from "Hooks"

import "./AuthPage.css"

const AuthPage = ({ title }) => {
    const podComponentType = title === "Авторизация" ? "login" : "registration"

    useChangeTitle(title)
    
    return(
        <section className="AuthPage">
            <Header />
            <main className="AuthPage__Content">
                {
                    podComponentType && podComponentType === "login" 
                    ? <Auth type={"login"}/> 
                    : <Auth type={"registration"}/>
                }
            </main>
            <Footer />
        </section>
    )
}

export default AuthPage