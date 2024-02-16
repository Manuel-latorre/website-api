import GetCartProducts from "./cart/getCartProducts/page";
import GetASingleProduct from "./products/getASingleProduct/page";
import GetAllProducts from "./products/getAllProducts/page";
import GetProductByName from "./products/getProductByName/page";

export default function Docs(){
    return(
        <main className="w-3/5 max-lg:w-full max-lg:p-10 max-lg:justify-center">
            <GetAllProducts/>
            <GetASingleProduct/>
            <GetProductByName/>
            <GetCartProducts/>
        </main>
    )
}