import { useChangeTitle } from "Hooks"

const HomePage = ({ title }) => {
    useChangeTitle(title)
    
    return (<>тест</>)
}

export default HomePage