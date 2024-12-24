import '../../index.css';
import TypingEffect from './TypingEffect'; 

const Banner = () =>{
    return (
        <>
        <section className="pt-20 pb-10 bg-[--my-black]">
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="text-5xl mb-1 font-bold text-[#FFFFFF] special-text">
                    Revolutionizing Data Solutions
                </h1>
                    <p className="text-2xl mb-7 text-[#585757] ml-40 mr-40 text-center">Say goodbye to manual data processing, bottlenecks, and delayed insights. Experience a unified platform that 
                    ensures data quality, empowers real-time analysis, and accelerates decision-making. 
                </p>
                <TypingEffect />
            </div>
        </section>
        </>
    )
}
export default Banner