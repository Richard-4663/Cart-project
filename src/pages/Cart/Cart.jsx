import ItemCart from '../../components/Cart/ItemCart/ItemCart.jsx'
import {produtos} from '../../data/products.js'

export default function Cart(){
    return(
        <div>
            <ItemCart itemsCart={produtos}/>
        </div>
    )
}