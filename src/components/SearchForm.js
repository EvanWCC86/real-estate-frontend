import React, {useState} from 'react'
import styled from 'styled-components'
const SearchForm = ({setFilteredPosts,posts}) => {
    const [buy, setBuy] = useState(false)
    const [rent, setRent] = useState(false)
    
    const [filtered, setFiltered] = useState('')
    
    const handleChange = (e) => {
        const filter = e.target.value;
        setFiltered(filter)
    }
    
//    console.log(filtered)
    const handleSubmit = (e) => {
        e.preventDefault();
        const filterData = posts.filter(item => item.city.toLowerCase().includes(filtered.toLowerCase()))
        
         
    
    setFilteredPosts(filterData)
        
    }
   
    
    const buyActive = () => {
        setBuy(true);
        setRent(false)
    }
    const rentActive = () => {
        setRent(true);
        setBuy(false)
    }
  return (
    <FormContainer>
        <FormTop>
            <BuyButton  buy={buy} onClick={buyActive}>Buy</BuyButton>
            <RentButton rent={rent} onClick={rentActive}>Rent</RentButton>
        </FormTop>
        <form onSubmit={handleSubmit}>
            
            <FormInputContainer>
                <input type="text" name="search" placeholder="Address, City, Postal-Code" onChange={handleChange} />
                <button type="submit">Search</button>
            </FormInputContainer>
        </form>
    </FormContainer>
  )
}

export default SearchForm

const FormContainer = styled.div `
    
    width: 100%;
    
    
    margin:auto;
    padding:20px;
    
    /* form{
        padding:20px;
        
    } */
`
const FormTop = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    
    
`
const BuyButton = styled.button `
    
        text-transform: uppercase;
        border:none;
        outline: none;
        background: transparent;
        cursor: pointer;
        margin-right:10px;
        color: ${props => props.buy ? "blue" : "black"};

        &:hover {
            color:lightblue;
        }
`
const RentButton = styled(BuyButton)`
    color: ${props => props.rent ? "blue" : "black"};
`
const FormInputContainer = styled.div `
    /* padding:10px; */
    border:1px solid lightgray;
    border-radius: 8px;
    display: flex;
    justify-content:space-between;
    input {
        height: 100%;
        border:none;
        outline:none;
        flex:0.8;
        padding:10px;
    }
    button{
        outline:none;
        border:none;
        color:white;
        background-color: #585B89;
        height: 100%;
        width: 100%;
        flex:0.2;
        padding:10px;
        cursor:pointer;

        &:hover {
            background-color:blue;
        }
    }  
`
