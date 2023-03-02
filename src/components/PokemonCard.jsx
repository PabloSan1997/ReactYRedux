import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import "./PokemonCard.css";
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = ({name, imagen}) => { 
  return (
    <Card
      title={name}
      style={{width:'250px'}}
      cover={<img src={imagen} alt={name} />}
      extra={<StarOutlined/>}
    >
      <Meta description='fire, magic'/>
    </Card>
  );
};

export {PokemonCard}