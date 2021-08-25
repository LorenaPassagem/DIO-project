import React from 'react'
import {Restaurant, Title, Address, RestaurantInfo, RestaurantPhoto} from './style'
import ReactStars from "react-rating-stars-component";
import Restaurante from '../../assets/img/restaurante-fake.png'

const RestaurantCard = () => 
    <Restaurant>
        <RestaurantInfo>
            <Title>Restaurant's name </Title>
            <ReactStars count={5} isHalf activeColor='#e7711c' value={4} edit={false} />
            <Address>Rua são João 190</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={Restaurante} alt='foto do Restaurante'/>
    </Restaurant>
    
export default RestaurantCard