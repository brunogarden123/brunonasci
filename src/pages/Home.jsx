import Menu from "./comp/Menu"
import { B, Welcome, C} from "../comp"
function Home() {
    return (
        <div> 
            <Menu />
            <Welcome />
            <C />
        </div>
    )
}
export default Home