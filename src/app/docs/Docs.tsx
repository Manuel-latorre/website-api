import ButtonScroll from "./buttonScroll/page";
import AddProduct from "./cart/addProduct/page";
import DecreaseQuantity from "./cart/decreaseQuantity/page";
import DeleteProduct from "./cart/deleteProduct/page";
import GetCartProducts from "./cart/getCartProducts/page";
import IncreaseQuantity from "./cart/increaseQuantity/page";
import GetASingleProduct from "./products/getASingleProduct/page";
import GetAllProducts from "./products/getAllProducts/page";
import GetProductByName from "./products/getProductByName/page";
import GetAllUsers from "./users/getAllUsers/getAllUsers";
import GetUserById from "./users/getUserById/page";
import LoginUser from "./users/loginUser/page";
import RegisterUser from "./users/registerUser/page";

export default function Docs(){
    return(
        <main className="w-3/5 max-lg:w-full max-lg:p-5 max-lg:justify-center mx-auto items-center">
            <GetAllProducts/>
            <GetASingleProduct/>
            <GetProductByName/>
            <GetCartProducts/>
            <AddProduct/>
            <IncreaseQuantity/>
            <DecreaseQuantity/>
            <DeleteProduct/>
            <GetAllUsers/>
            <GetUserById/>
            <RegisterUser/>
            <LoginUser/>
            <ButtonScroll/>
        </main>

    )
}