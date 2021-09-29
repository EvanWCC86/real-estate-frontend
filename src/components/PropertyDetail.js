import React,{useState} from 'react'
import styled from 'styled-components'
import ImagesModel from './ImagesModel'

import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import PropertyImages from './PropertyImages';
const PropertyDetail = ({postData}) => {
    const [imagesModel, setImagesModel] = useState(false)
    const [propertyImageIndex, setPropertyImageIndex] = useState(0);
    // const [dimensions, setDimensions] =useState({ 
    //     height: window.innerHeight,
    //     width: window.innerWidth
    //   })

    const closeImagesModel = () => {
        setImagesModel(false)
    }
    const openImagesModel = (index) => {
        setImagesModel(true)
        setPropertyImageIndex(index)
    }




//    get Dimensions

//   useEffect(() => {
//     function handleResize() {
//       setDimensions({
//         height: window.innerHeight,
//         width: window.innerWidth
//       })
    
// }

//     window.addEventListener('resize', handleResize)
//     return () => {
//         window.removeEventListener("resize", handleResize)
//     }
//   },[]);
  


   
    
  return (
    <PropertySection>
        
        <PropertyImages  postData={postData} openImagesModel={openImagesModel} />
       
      {imagesModel && <ImagesModel images={postData.images} closeImagesModel={closeImagesModel} propertyImageIndex={propertyImageIndex} />}
      
      {/* property content */}
     
        <PostContent>
            <PostTop>
                
                <div>
                    <h3>House for {postData.salesType}</h3>
                    <p>{postData.address}</p>
                    <p>{postData.city}</p>
                </div>
                <span>{postData.price} $</span>
            </PostTop>
            <PostBottom>
                <div>
                    <HotelOutlinedIcon />
                    <span>{postData.bedrooms} bedrooms</span>
                </div>
                <div>
                    <BathtubOutlinedIcon />
                    <span>{postData.bathrooms} bathrooms</span>
                </div>
                <div>
                    <h3>Year Built</h3>
                    <span>{postData.year}</span>
                </div>
            </PostBottom>
        </PostContent>
    <Container>
        <h3>Features:</h3>
        <PropertyDetailInfo>
            
            <div>
                <h3>Building style</h3>
                <p>{postData.buildingType}</p>
            </div>
            <div>
                <h3>driveways</h3>
                <p>{postData.driveway}</p>
            </div>
            <div>
                <h3>garage</h3>
                <p>{postData.garage}</p>
            </div>
            
            <div>
                <h3>Building area</h3>
                <p>300平方</p>
            </div>
            <div>
                <h3>Lot area</h3>
                <p>500平方</p>
            </div>
            <div>
                <h3>Building Tax</h3>
                <p>$5000</p>
            </div>
            <div>
                <h3>School Tax</h3>
                <p>$500</p>
            </div>
            
            
            {/* 详细资料补充 */}
            <div>
                <h3>More features</h3>
                <p>pool,</p>
            </div>

        </PropertyDetailInfo>
        <PropertyDescription>
            <h3>Description</h3>
            <p>{postData.desc}</p>
        </PropertyDescription>
      </Container>
    </PropertySection>
  )
}

export default PropertyDetail

const PropertySection = styled.div `
    /* position: relative; */
   
`

const Container = styled.div `
    width: 90%;
    max-width:1200px;
    margin:30px auto;
`
const PostContent = styled.div `
    padding-top:20px;
    padding-bottom: 20px;
    background-color: #F5F5F5;

    
`
const PostTop = styled.div `
    width:90%;
    max-width: 1200px;
    margin:auto;
    display: flex;
    justify-content: space-between;
    
     span{
        color:#77C1C7;
        font-size: 1.2rem;
        font-weight: bold;
        
    }
    h3 {
        margin-bottom:5px;
    }
`
const PostBottom = styled.div `
    width:90%;
    max-width: 1200px;
    margin:auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    div{
        display: flex;
        align-items: center;
        color:rgb(65,65,65);
        span{
            margin-left:3px;

        }
        h3{
            margin-right: 3px;
        }
    }
`

const PropertyDetailInfo = styled.div `
    margin: 20px auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;

    div{

        h3{
            color:#555555;
        }
        p{
            color:rgb(125,125,125);
        }
    }
`
const PropertyDescription = styled.div `

`


