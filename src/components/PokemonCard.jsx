import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import "./PokemonCard.css";
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = ({name}) => { 
  return (
    <Card
      title={name}
      style={{width:'250px'}}
      cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt='Ditto' />}
      extra={<StarOutlined/>}
    >
      <Meta description='fire, magic'/>
    </Card>
  );
};

export {PokemonCard}