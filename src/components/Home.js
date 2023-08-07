import { Route, Routes, Link } from "react-router-dom";
import pizza from "./pizza.js"
import { useNavigate } from "react-router-dom";


const Home = (props) => { 
const navigate = useNavigate(pizza);
    return (
        <div>
            <h3>Build Your Own Pizza</h3>
            <nav>
            
                <button onClick={() => navigate("/pizza")} id="order-pizza">pizza button</button>
            </nav>
        </div>

    );
}
export default Home;