import { useNavigate } from "react-router-dom";
import { WorksItems } from "./WorksItems";

export function WorkList() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }

    return (
        <section className='work container'>
            <h2 className='work__title'>How it works</h2>
            <div className='work__container'>
                <WorksItems />
                <div className='work__btn__container'>
                    <button onClick={changeRoute} className="btn primary__btn work__btn">
                        Create your plan
                    </button>
                </div>
            </div>
        </section>
    );
};