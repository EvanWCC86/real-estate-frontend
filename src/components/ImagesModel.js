import React,{useState} from 'react'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

const ImagesModel = ({images, closeImagesModel,propertyImageIndex}) => {
    const [sliderIndex, setSliderIndex] = useState(propertyImageIndex)
    const currentImage = images[sliderIndex]
    console.log(images)
    // const timeout = useRef(null)
    const next = () => {
        
        if(sliderIndex === images.length - 1) {
            setSliderIndex(0)
        } else setSliderIndex(sliderIndex + 1)
        
    }
    const previous = () => {
       
        if(sliderIndex === 0) {
            setSliderIndex(images.length - 1)
        } else setSliderIndex(sliderIndex - 1)
    }

    // useEffect(() => {
    
    //         const next = () => {
    //             setSliderIndex(sliderIndex === heroData.length - 1 ? 0 : sliderIndex + 1 );
    //         }
    //         timeout.current = setTimeout(next, 2000);

    //         return function () {
    //             if(timeout.current) {
    //                 clearTimeout(timeout.current)
    //             }
    //         }
        
    // },[sliderIndex])
    

    return (
        <SliderSection>
            {/* <SliderContent>
                <h1>{currentImage.title}</h1>
                <p>{currentImage.info}</p>
                
                <button>{currentImage.button}</button>
            
            </SliderContent> */}
            <CloseIconSec>
                <CloseIconContainer onClick={closeImagesModel}>
                    <CloseIcon />
                </CloseIconContainer>
            </CloseIconSec>
             <SliderImage>
                <img src={currentImage.image} alt={currentImage.id} />

                <SliderDots>
                    {Array.from({length:images.length}).map((item, index) => (
                        <span className={`dot ${sliderIndex === index ? "dot_active" : ""}`}>

                        </span>
                    ))}
                </SliderDots>
                <SliderArow>
                    <span onClick={previous}><ChevronLeftIcon /></span>
                    <span onClick={next}><ChevronRightIcon /></span>
                </SliderArow> 
            </SliderImage>
            <SmallImagesContainer>
                 {images.map((item,index) => (
                     <img src={item.image} alt={item.id} key={item.id} onClick={() => setSliderIndex(index)} />
                 ))}
            </SmallImagesContainer>

                
           
            
        </SliderSection>
    )
}

export default ImagesModel

const SliderSection = styled.div `
    
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 100;
    position: fixed;
    top:0;
    left:0;
    background: white;
    width: 100%;
    height: 100vh;
`
const CloseIconSec = styled.div `
    
    display:flex;
    align-self: flex-end;
    margin-right:20px;
`
const CloseIconContainer = styled.div `
    
    background: gray;
    width:40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
   
    
`
const SliderImage = styled.div `
    position: relative;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img{
        position:absolute;
        height: 100%;
        width: 100%;
        /* top:0;
        left: 0; */
        object-fit: contain;
    }
    
`
// const SliderContent = styled.div `
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     justify-content:center;
//     align-items: center;
//     z-index: 10;
//     width: 100%;
//     height: 100%;
// `
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
    display: flex;
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
const SmallImagesContainer = styled.div `
    display: flex;
    justify-content: center;
    margin:20px;
    overflow:auto;
    img {
        height: 100px;
        width: 100px;
        object-fit: cover;
        margin-right: 5px;
    }
`
