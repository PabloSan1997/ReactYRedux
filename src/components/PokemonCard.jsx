import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
import "./PokemonCard.css";
import { StartButton } from './StartButton';

const PokemonCard = ({name, imagen, types, id, favorite}) => { 
  const typeString =types.map(elem=>elem.type.name).join(', ');
  const dispatch=useDispatch();
  const handleFavorite = ()=>{
    dispatch(setFavorite({pokemonId:id}));
  }
  return (
    <Card
      title={name}
      style={{width:'250px'}}
      cover={<img src={imagen} alt={name} />}
      extra={<StartButton isFavorite={favorite} onFuncion={handleFavorite}/>}
    >
      <Meta description={typeString}/>
    </Card>
  );
};

export {PokemonCard}