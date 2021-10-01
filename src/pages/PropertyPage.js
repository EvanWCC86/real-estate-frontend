import React,{useEffect} from 'react'

import styled from 'styled-components'
// import listing from '../data/listing'
import { useDispatch, useSelector } from "react-redux"


import {getPostDetail} from '../redux/actions/postsActions'
import PropertyDetail from '../components/PropertyDetail'
import AgentCard from '../components/AgentCard'
import Navbar from '../components/Navbar'
// import Header from '../components/Header'
import SearchForm from '../components/SearchForm'

const PropertyPage = ({match}) => {
    const id = match.params.id
    const dispatch = useDispatch()

    const {loading, post, error} = useSelector((state) => state.getIndividualPost)
    useEffect(() => {
      dispatch(getPostDetail(id))
    },[dispatch,id])
    
    console.log(post)
    // const [imagesModel, setImagesModel] = useState(false)

    // const closeImagesModel = () => {
    //     setImagesModel(false)
    // }
    // const openImagesModel = () => {
    //     setImagesModel(true)
    // }

    const agentItem = {
        image:"https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        name:"Evan",
        title:"agent",
        company:"house company",
        phone:"514-555-5555",
        email:"evanwei@gmail.com",
        wechat:"evanchen068",
    }
  if(loading){
    return <h1>loading</h1>
  };
  if(error) {
    return <h1>Something wrong...</h1>
  }
  
  if(post) {
    return (
     
      
      <PropertyPageSection>
        <NavbarSection>
          <Navbar />
        </NavbarSection>
        <SearchSection>
          <SearchForm />
        </SearchSection>
        <PropertyDetail postData={post} />
        <AgentCardSection>
            <AgentContainer>
              <h3>Listing brokers</h3>
              <AgentCard item={agentItem} />
            </AgentContainer>
        </AgentCardSection>
      </PropertyPageSection>
      
    )
  }
}

export default PropertyPage

const PropertyPageSection = styled.div `
  /* position: relative; */
`
const NavbarSection = styled.div `
  background-color:#585B89;
  
  
`
const SearchSection = styled.div `
  
`

const AgentCardSection = styled.div `
  margin:20px auto;
  background-color: #EDF2F7;
  padding-top:20px;
  padding-bottom: 20px;
`
const AgentContainer = styled.div `
  width:90%;
  max-width: 1200px;
  margin:0 auto;

  h3 {
    margin-bottom: 20px;
  }
`