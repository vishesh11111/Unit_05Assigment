import { Link } from "react-router-dom"

export const Home = ()=>{

    return (
        <div>
          <Link to="/">Home</Link>
          <Link to="/todos">Todos</Link>
          {/* <Link to="/hello">heloo</Link> */}
          <h1>WLC HOME "Plese Go Todo Section"</h1>
        </div>
    )
}