import Banner from "./Banner"
import FetchAPI from "../FetchAPI"
import '../../index.css';
import KeyFeatures from "./Key_features"
import Footer from "../Footer"

const HomePage = () =>{
    return (
        <>
        <FetchAPI api = "/backend/"/>
        <Banner/>
        {/* Vision Section */}
        <section className="py-12 bg-gradient-to-r from-purple-50 via-gray-50 to-purple-50">
            <div className="container mx-auto text-center">
                <h2 className="text-8xl font-bold mb-6 text-[--my-violet]">Our Vision</h2>
                <p className="text-[--my-gray] text-xl max-w-3xl mx-auto">
                    We envision a world where every business can harness the full potential of their data without the complexity or cost of multiple vendors.
                </p>
            </div>
        </section>
        <KeyFeatures />
        <Footer />
        </>
    )
}


export default HomePage