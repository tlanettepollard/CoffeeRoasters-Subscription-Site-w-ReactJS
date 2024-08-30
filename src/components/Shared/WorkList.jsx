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
                <div className='works__btn__container'>
                    <button onClick={changeRoute} className="btn primary__btn works__btn">
                        Create your plan
                    </button>
                </div>
            </div>
        </section>
    )
}