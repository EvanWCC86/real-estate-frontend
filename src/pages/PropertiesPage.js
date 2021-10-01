import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector} from "react-redux";
import { getPosts } from '../redux/actions/postsActions'
import Posts from '../components/Posts';
import SearchForm from '../components/SearchForm'

const PropertiesPage = () => {
  const dispatch = useDispatch();
  const {loading, posts, error} = useSelector((state) => state.getAllPosts)
  const [filteredPosts, setFilteredPosts] = useState(posts)
  useEffect(() => {
    dispatch(getPosts());
    setFilteredPosts(posts)
  },[]);

  console.log(filteredPosts)
  return (
    <div>
      <NavbarSection>
        <Navbar />
      </NavbarSection>
      {/*hero background filter form---by city,by price,by rent,by sell, */}
      <HeroSection>
        <HeroContainer>
          <SearchSection>
            <SearchForm filterPosts = {posts} filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts} />
          </SearchSection>
          <img src="../../images/hero.jpg" alt="heroImage" />
        </HeroContainer>
      </HeroSection>
      {/* main content */}
      {loading && <h1>Data is loading</h1>}
      {error && <h1>something with data</h1>}
      <PostsContainer>
        {filteredPosts && <Posts postsData={filteredPosts} />}
      </PostsContainer>
    </div>
  )
}

export default PropertiesPage

const NavbarSection = styled.div `
  background-color: #585B89;
`
const HeroSection = styled.section `
  height: 70vh;
  max-height: 900px;
  position: relative;
  
`
const HeroContainer = styled.div `
  position:absolute;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  z-index: 100;

  
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    /* top:0;
    left:0; */
    object-fit: cover;
    
  }
`
const SearchSection = styled.div `
  z-index: 10;
  width:80%;
  max-width:600px;
  margin:20px auto;
  box-shadow:0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
`
  

const PostsContainer = styled.div `
  
  width:90%;
  max-width:1200px;
  margin:40px auto;
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
