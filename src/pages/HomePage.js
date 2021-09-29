import React,{useEffect} from 'react'
import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'
import { useDispatch, useSelector} from "react-redux";
import { getPosts } from '../redux/actions/postsActions'
import Posts from '../components/Posts';
import styled from 'styled-components'
import FindSellHome from '../components/FindSellHome';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
const HomePage = () => {
  const dispatch = useDispatch();
  const {loading, posts, error} = useSelector((state) => state.getAllPosts)
  
  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  const featurePosts = posts.slice(0,3)
  return (
    <div>
      <Header />
      <HeroNavbarContainer>
        <NavbarSection>
          <Navbar />
        </NavbarSection>
        <Hero />
      </HeroNavbarContainer>
      <SearchFormSection>
        <SearchForm />
      </SearchFormSection>
      <FeaturePosts>
        <h2>Feature Houses</h2>
        <PostsContainer>
          {posts && <Posts postsData={featurePosts} />}
        </PostsContainer>
        
      </FeaturePosts>
     <FindSellHomeSection>
       <h2>Find or Sell your home</h2>
       <FindSellHome />
     </FindSellHomeSection>
     <SubscribeSection>
      <Subscribe />
    </SubscribeSection>
    </div>
  )
}

export default HomePage

const HeroNavbarContainer = styled.div `
  position: relative;
  height: 70vh;
`
const NavbarSection = styled.div `
  position:absolute;
  z-index: 1000;
  width:100%;
`
const FeaturePosts = styled.div `
  margin:20px auto;

  h2{
    width:90%;
    max-width:1200px;
    margin:0 auto;
    margin-bottom:10px;
  }
`
const PostsContainer = styled.div `
  width:90%;
  max-width:1200px;
  margin:0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 780px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const SearchFormSection = styled.div `
  width:80%;
  max-width:600px;
  margin:20px auto;
  box-shadow:0 5px 15px rgba(0, 0, 0, 0.1);
`
const FindSellHomeSection = styled.div `
  margin:30px auto;

  h2{
    width:90%;
    max-width:1200px;
    margin:0 auto;
    margin-bottom:10px;
  }
`
const SubscribeSection = styled.section `
  background-color: #EDF2F7;
  padding:20px;
`




