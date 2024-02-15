import Docs from "./Docs";
import Sidebar from "./sidebar/page";

export default function Documentation() {
    return(
        <main className="flex justify-center mt-10 gap-10">
            <Sidebar/>
            <Docs/>
        </main>
    )
}