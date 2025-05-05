import { useState, useEffect } from 'react';

import { faq } from '../assets/utils/faq';

import { IoIosArrowDown as PlusIcon } from "react-icons/io";
import { IoIosArrowUp as MinusIcon } from "react-icons/io";

export default function Question() {
    const [isReady, setIsReady] = useState(false);

    const [activeIndex, setActiveIndex] = useState(null);
    const [refHeights, setRefHeights] = useState([]);
    const [heights, setHeights] = useState([]);

    function toggleQuestion(index) {
        if (activeIndex === index) {
            setActiveIndex(null);
            setHeights(refHeights)
        } else {
            setActiveIndex(index);
            let newHeights = [...refHeights];
            newHeights[index] = 0;
            setHeights(newHeights)
        }
    }

    function getQuestionHeights() {
        const allElement = [...document.querySelectorAll(`.answer`)];
        let newHeights = allElement.map(element => -1 * element.offsetHeight);
        setRefHeights([...newHeights]);
        setHeights([...newHeights]);
        setActiveIndex(null);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 500);
        // Initial call to set the heights
        getQuestionHeights();

        // Function to handle resize
        const handleResize = () => {
            getQuestionHeights();
        };

        // Add event listener on window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='questions' style={{ visibility: isReady ? "visible" : "hidden" }}>
            {faq.map((queston, index) => (
                <div key={queston.h3 + index}>
                    {queston.h2 && <h2 className='question-category'>{queston.h2}</h2>}
                    {queston.isActive &&
                        <section  >
                            <div className='question-wrap'>
                                <h3 onClick={() => toggleQuestion(index)} className={activeIndex === index ? 'active-h3' : ''}>
                                    {queston.h3}
                                    {activeIndex === index ? <MinusIcon className='icon' /> : <PlusIcon className='icon' />}
                                </h3>
                                <p
                                    className='answer' id={'answer' + index}
                                    style={heights[index] ? { marginTop: `${heights[index]}px` } : { marginTop: `0px` }}>
                                    {queston.p}
                                </p>
                            </div>
                        </section>}
                </div>
            ))}
        </div>
    )
}
