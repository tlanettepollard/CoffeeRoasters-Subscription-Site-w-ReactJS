import { useNavigate } from "react-router-dom";
import { WorksItems } from "./WorksItems";

export function WorkList() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }

    return (
        <section className='works'>
            <h2 className='works__title'>How it works</h2>
            <div className='works__container'>
                <WorksItems />
                
            </div>
        </section>
    )
}