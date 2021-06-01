import React, { useState } from 'react'
import "./CategoryDisplay.css"
import { Container } from 'react-bootstrap'
import animals from '../../assets/images'
import {gql, useQuery} from '@apollo/client'
import { Link } from "react-router-dom"

const FETCH_CATEGORY = gql`
query{categories{id,image,category,slug}}
`

function CategoryDisplay() {

    const {data,error,loading} = useQuery(FETCH_CATEGORY)

    if(error) return <h2>error... page</h2>

    if(loading)return <h2>Loading...</h2>


    return (
        <div className="CategoryDisplay">
            <Container className="CategoryDisplay-container">
                {data.categories.map((category,index) => {
                    return (
                        <Link to={`/products/${category.slug}`} className="CategoryDisplay-card-container" key={index}>
                            <div className="CategoryDisplay-card" >
                                <img src={animals[category.image]} /> 
                            </div>
                            <h3>{category.category}</h3>
                        </Link>
                    )
                })}
            </Container>
        </div>
    )
}

export default CategoryDisplay
