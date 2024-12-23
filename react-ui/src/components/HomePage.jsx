import Banner from "./Banner"
import FetchAPI from "./FetchAPI"

const HomePage = () =>{
    return (
        <>
        <FetchAPI api = "http://127.0.0.1:5000/"/>
        <Banner/>
        </>
    )
}

export default HomePage