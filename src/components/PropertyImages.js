import React from 'react'
import styled from 'styled-components'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
const PropertyImages = ({postData,openImagesModel}) => {

    
    

    // get images 

const imagesArray = postData.images?.map((item) => {
    return (
        item.image
    )
});
    
    const images5 = imagesArray?.slice(0,5);




  return (
    <ProertyImages>
          
        
            
            <ImagesContainer>
                {images5?.map((item,index) => (
                    <ImageContainer key={index}>
                        <img src={item} alt={postData.address} onClick={() => openImagesModel(index)}/>
                    </ImageContainer>
                ))}
                
            </ImagesContainer>

            
            <PhoneLogoContainer>
                <p>{imagesArray?.length}</p>
                <PhotoLibraryIcon />
            </PhoneLogoContainer>
        
          
          
      </ProertyImages>
  )
}

export default PropertyImages

const ProertyImages = styled.div `
    height:500px;
    
    position:relative;
    cursor:pointer;
    
    
    
    
`

const ImagesContainer = styled.div `
    position:absolute;
    height: 100%;
    width: 100%;
    /* top:0;
    left:0; */
    
    @media screen and (min-width:750px) {
                display:grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows:1fr 1fr;
                grid-gap: 5px;
            }
    @media screen and (min-width:900px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows:1fr 1fr;
        
    }
    
    
`
const ImageContainer = styled.div `
        position:absolute;
        /* top: 0;
        left: 0; */
        height: 100%;
        width: 100%;
        /* overflow: hidden; */
        cursor: pointer;

        &:nth-child(1) {
          
          @media screen and (min-width:750px) {
              
              grid-column:1/3;
              grid-row: 1/3;
            
          }
          @media screen and (min-width:900px) {
              
              grid-column:1/3;
              grid-row: 1/3;
            
          }
      }
      
      &:nth-child(2) {
          display:none;
         
          @media screen and (min-width:750px) {
              display: block;
              grid-column:3/4;
              grid-row: 1/2;
          }
           
          @media screen and (min-width:900px) {
              display: block;
              grid-column:3/4;
              grid-row: 1/2;
          }
      }
       
      &:nth-child(3) {
          display:none;
          

          @media screen and (min-width:750px) {
              display:block;
              grid-column:3/4;
              grid-row: 2/3;
          }
          @media screen and (min-width:900px) {
              display:block;
              grid-column:4/5;
              grid-row: 1/2;
          }
      }
       
      &:nth-child(4) {
          display:none;
          
          @media screen and (min-width:900px) {
              display:block;
              grid-column:3/4;
              grid-row: 2/3;
          }
      }
       
      &:nth-child(5) {
          display:none;
          
          @media screen and (min-width:900px) {
              display:block;
              grid-column:4/5;
              grid-row: 2/3;
          }
      }

    img {
    
    height: 100%;
    
    width: 100%;
    object-fit:cover;
    position:absolute;
    top: 0;
    left: 0;

    
} 
`


const PhoneLogoContainer = styled.div `
    
        position: absolute;
        display: flex;
        
        
        background-color: darkgrey;
        padding:8px;
        bottom: 20px;
        right:30px;
        color:white;
        font-size: 20px;
        p{
            font-weight:bold;
            margin-right: 5px;
        }
    
`
