import React,{useState,useRef,useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from 'styled-components'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const HeroSlider = ({sliderData}) => {
    const [arrowShow, setArrowShow] = useState(false)
    
    const [sliderIndex, setSliderIndex] = useState(0)
    const currentImage = sliderData[sliderIndex]
    
    const timeout = useRef(null)
    const next = () => {
        
        if(sliderIndex === sliderData.length - 1) {
            setSliderIndex(0)
        } else setSliderIndex(sliderIndex + 1)
        
    }
    const previous = () => {
       
        if(sliderIndex === 0) {
            setSliderIndex(sliderData.length - 1)
        } else setSliderIndex(sliderIndex - 1)
    }

    
    
    useEffect(() => {
    
            const next = () => {
                setSliderIndex(sliderIndex === sliderData.length - 1 ? 0 : sliderIndex + 1 );
            }
            timeout.current = setTimeout(next, 3000);

            return function () {
                if(timeout.current) {
                    clearTimeout(timeout.current)
                }
            }
        
    },[sliderIndex, sliderData.length])
    
    

    return (
        <SliderSection onMouseOver = {() => setArrowShow(true)} onMouseLeave = {() => setArrowShow(false)}>
            <SliderContent>
                <h1>House for sale</h1>
                <p>{currentImage.address}, {currentImage.city}</p>
                {/* <Link to={`/${currentImage.category}`}>
                <button>{currentImage.button}</button>
                </Link> */}
            </SliderContent>
            <SliderImage>
                <img src={currentImage.image} alt={currentImage.adress} />
            </SliderImage>
            <SliderDots>
                {Array.from({length:sliderData.length}).map((item, index) => (
                    <span key={index} className={`dot ${sliderIndex === index ? "dot_active" : ""}`}>

                    </span>
                ))}
            </SliderDots>
            <SliderArow arrowShow={arrowShow}>
                <span onClick={previous}><ChevronLeftIcon /></span>
                <span onClick={next}><ChevronRightIcon /></span>
            </SliderArow>

                
           
            
        </SliderSection>
    )
}

export default HeroSlider

const SliderSection = styled.div `
   
   
`
const SliderImage = styled.div `
    

    img{
        position:absolute;
        height: 100%;
        width: 100%;
        top:0;
        left: 0;
        object-fit: cover;
    }
    
`
const SliderContent = styled.div `
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    z-index: 10;
    width: 100%;
    height: 100%;
    color:white;
    font-weight: bold;

    h1{
        font-size: 3rem;
        letter-spacing: 3px;
    }
    p{
        font-size: 1.5rem;
    }
`
const SliderDots = styled.div `
        position:absolute;
        
        z-index: 20;
        display: flex;
       
        justify-content: center;
        width: 100%;
        bottom:30px;
       
        
        
        .dot {
            
            cursor: pointer;
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
            margin-bottom: 10px;
            &:hover {
                background-color: yellow;
            }
    
        }
    
        .dot_active {
            background-color: yellow;
        }
          
    
`
const SliderArow = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    display: ${props => props.arrowShow ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    
    span{
        background-color: black;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
`
