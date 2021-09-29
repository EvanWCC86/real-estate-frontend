import React from 'react'
import {yourNeedData} from '../data/yourNeedData'
import FindSellHomeCard from './FindSellHomeCard'
import styled from 'styled-components'
const FindSellHome = () => {
  return (
    <FindSellHomeSection>
      {yourNeedData.map((item) => (
          <FindSellHomeCard  item={item} key={item.id}/>
      ))}
    </FindSellHomeSection>
  )
}

export default FindSellHome

const FindSellHomeSection = styled.div `
    display:grid;
    grid-gap: 20px;
    width: 90%;
    max-width: 1200px;
    margin:20px auto;

    @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 780px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
