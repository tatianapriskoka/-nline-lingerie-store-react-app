import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import Order from "./Order/Order";
import { useEffect, useState } from "react";
import { fetchAll } from "../../features/genderSlice";
import { OrderModal } from "./OrderModal/OrderModal";

const CartPage = () => {
    const { cartItems, countItems } = useSelector(state => state.cart);
    const { goodsList } = useSelector(state => state.goods);
    const { orderStatus } = useSelector((state) => state.cart);
    const [count, setCount] = useState(countItems);
    const dispatch = useDispatch();
    useEffect(() => {
        if (count === countItems) {
            dispatch(fetchAll({ list: cartItems.map(item => item.id) }));
            setCount(countItems);
        }
    }, [countItems, cartItems, count, dispatch])

    return (
        <>
            <Cart cartItems={cartItems} goodsList={goodsList} />
            {!!cartItems.length && <Order cartItems={cartItems} />}
            {orderStatus === 'success' && <OrderModal />}
        </>
    )
}

export default CartPage;