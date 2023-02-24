import { Card } from "antd"
import { StarOutlined } from '@ant-design/icons'
import Meta from 'antd/lib/card/Meta'

const PokemonCard = ({name, image, abilities}) => {
    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StarOutlined />}
        >
            <Meta description={renderHabilities(abilities)} />
        </Card>
    )
}

const renderHabilities = (abilities) => {
    return abilities.map(ability => ability.ability.name).join(', ')
}
    


export {PokemonCard}