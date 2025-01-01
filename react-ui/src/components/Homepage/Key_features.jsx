import React from "react";
import FeatureCard from './FeatureCard';
import dataPreparationImage from '../../assets/images/Data_preparation.jpg';


const KeyFeatures = () => {
    const cardData = [
        {
          id: 1,
          title: 'Automatic Data Preparation',
          description: 'Automate cleaning, organizing, and preprocessing your data for optimal insights and modeling.',
          imageUrl: dataPreparationImage,
        },
        {
            id: 2,
            title: 'In-depth R&D',
            description: 'Cutting-edge research to provide innovative solutions to complex problems.',
            imageUrl: dataPreparationImage,
        },
        {
            id: 3,
            title: 'Predictive Modeling',
            description: 'State-of-the-art models tailored to your specific business requirements.',
            imageUrl: dataPreparationImage,
        },
        {
            id: 4,
            title: 'Data Visualization',
            description: 'Transform raw data into meaningful and interactive visuals for better understanding.',
            imageUrl: dataPreparationImage,
        },
        {
            id: 5,
            title: 'Comprehensive Reporting',
            description: 'Detailed and precise reports that summarize our findings and solutions.',
            imageUrl: dataPreparationImage,
        },
        {
            id: 6,
            title: 'Team Independence',
            description: 'A system so intuitive, it reduces dependency on specific individuals. ',
            imageUrl: dataPreparationImage,
        }
      ];
    return (
        <>
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-8xl font-bold mb-6 text-[--my-violet]">Key Features</h2>
                    <p className="text-xl text-[--my-gray]">Our approach ensures a comprehensive solution tailored to your business needs.</p>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {cardData.map((card) => (
                        <FeatureCard
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        />
                    ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default KeyFeatures;