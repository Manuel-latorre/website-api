import GetASingleProduct from "./getASingleProduct/page";
import GetAllProducts from "./getAllProducts/page";
import GetProductByName from "./getProductByName/page";

export default function Docs(){
    return(
        <main className="w-3/5 max-lg:w-full max-lg:p-10 max-lg:justify-center">
            <GetAllProducts/>
            <GetASingleProduct/>
            <GetProductByName/>
        </main>
    )
}