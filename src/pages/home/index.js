import React, { useState } from 'react'
import { Container, Logo, Search, Wrapper, Map, Carossel, CarouselTitle } from './style';
import LogoRest from '../../assets/img/logo.svg';
import TextField, { Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';
import restauranteFake from '../../assets/img/restaurante-fake.png'
import {Img, Modal} from '../../Components'
import RestaurantCard from '../../Components/RestaurantCard';

const Home = () => {
  const [modalOpened, setModalOpened] = useState(false)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4, 
    adaptHeight:true
  };

  const [value, SetValue] = useState('Pesquisar');
   return( 
    <Wrapper>    
      <Container>
          <Search>
          <Logo src={LogoRest} alt='Logo do serviços de busca' />
            
          <TextField label='Pesquisar' outlined          
          trailingIcon={<MaterialIcon role="button" icon="search"/>}
          >
          <Input 
            value={value}
            onChange={(e) => SetValue(e.target.value) } />
          </TextField>
          </Search>
          <CarouselTitle > Na sua Área </CarouselTitle>

          <Slider {...settings}>
          <Carossel>
            <Img photo={restauranteFake} title="Restaurant's name"/>
          </Carossel>  
          <Carossel>
            <Img photo={restauranteFake} title="Restaurant's name"/>
          </Carossel><Carossel>
            <Img photo={restauranteFake} title="Restaurant's name"/>
          </Carossel><Carossel>
            <Img photo={restauranteFake} title="Restaurant's name"/>
          </Carossel><Carossel>
            <Img photo={restauranteFake} title="Restaurant's name"/>
          </Carossel><Carossel>
            <Img photo={restauranteFake} title="Restaurant's name"/>
          </Carossel><Carossel>
            <Img photo={restauranteFake} title="Restaurant's name"/>
          </Carossel>
          </Slider>
          <RestaurantCard />
          <button onClick={()=>setModalOpened(true)}>ABRIR MODAL</button>
      </Container>
         
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
      
   </Wrapper>
  ) 
}
export default Home;