import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import {gql, useQuery} from '@apollo/client'


function LandingPage() {

    // const 

const animalsInfo = useQuery(gql`
query{animals{id,image,title,rating,price,description,slug,stock,onSale}}
`)
 
const {data,error, loading} = animalsInfo

if(loading) return <h2>loading...</h2>
if(error) return <h2>error something loading</h2>


    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals}/>
            {/* <button>Add animal</button> */}
        </div>
    )
}

export default LandingPage
