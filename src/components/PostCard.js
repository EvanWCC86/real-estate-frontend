import React from 'react'
import styled from 'styled-components'

import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import {Link} from 'react-router-dom'
const PostCard = ({post}) => {
  return (
    <PostCardContainer as={Link} to={`/properties/${post._id}`}>
        <PostImage>
            <img src={post?.images[0].image} alt={post?.address} />
        </PostImage>
        <PostContent>
            <PostTop>
                <span>{post?.price} $</span>
                <h3>House for {post?.salesType}</h3>
                <p>{post?.address}</p>
                <p>{post?.city}</p>
            </PostTop>
            <PostBottom>
                <div>
                    <HotelOutlinedIcon />
                    <span>{post?.bedrooms}</span>
                </div>
                <div>
                    <BathtubOutlinedIcon />
                    <span>{post?.bathrooms}</span>
                </div>
            </PostBottom>
        </PostContent>
    </PostCardContainer>
  )
}

export default PostCard

const PostCardContainer = styled.div `
    /* height: 400px; */
    box-shadow:0 5px 15px rgba(0, 0, 0, 0.1);
    
    
`
const PostImage = styled.div `
    width: 100%;
    height: 250px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const PostContent = styled.div `
    padding:10px;
    
    
`
const PostTop = styled.div `
    
    span{
        color:#77C1C7;
        font-size: 1.2rem;
        font-weight: bold;
        
    }
    h3 {
        margin-bottom:5px;
        color:black;
    }
    p{
        color:rgb(85,85,85)
    }
`
const PostBottom = styled.div `
    
    margin-top: 20px;
    display: flex;
    color:rgb(85,85,85);
    div{
        display: flex;
        align-items: center;
        margin-right: 10px;
        span{
            margin-left:3px;

        }
    }
`
