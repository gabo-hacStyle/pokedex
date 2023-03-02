import { StarOutlined } from '@ant-design/icons'
import { StarFilled } from '@ant-design/icons/lib/icons'
import { Button } from 'antd'
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';


export const StarButton = ({isFavorite, id}) => {
    const dispatch = useDispatch();

    const handleOnFavorite = () => {
       dispatch(setFavorite({pokemonId: id}))
    }
    const Icon = isFavorite ? StarFilled : StarOutlined;
    return <Button icon={<Icon />} onClick={handleOnFavorite}></Button>
}
