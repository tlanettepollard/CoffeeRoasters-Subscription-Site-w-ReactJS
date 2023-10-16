export function OurCollection() {
    return (
        <div className='collection'>
            <p className='collection-title'>Our collection</p>
            <div className='collection-container'>
                <div className="collection-card">
                    <img src="/public/assets/home/desktop/image-gran-espresso.png" alt="gran espresso coffee bag" className="collection-image" />
                </div>
                <div className="collection-copy">
                    <p className="collection-title">Gran Espresso</p>
                    <p className="collection-body">Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                </div>
            </div>

            <div className='collection-container'>
                <div className="collection-card">
                    <img src="/public/assets/home/desktop/image-planalto.png" alt="gran espresso coffee bag" className="collection-image" />
                </div>
                <div className="collection-copy">
                    <p className="collection-title">Planalto</p>
                    <p className="collection-body">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                </div>
            </div>

            <div className='collection-container'>
                <div className="collection-card">
                    <img src="/public/assets/home/desktop/image-piccollo.png" alt="gran espresso coffee bag" className="collection-image" />
                </div>
                <div className="collection-copy">
                    <p className="collection-title">Piccollo </p>
                    <p className="collection-body">Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                </div>
            </div>

            <div className='collection-container'>
                <div className="collection-card">
                    <img src="/public/assets/home/desktop/image-danche.png" alt="gran espresso coffee bag" className="collection-image" />
                </div>
                <div className="collection-copy">
                    <p className="collection-title">Danche</p>
                    <p className="collection-body">Ethiopian hand-harvested blend densely packed with vibrant fruit notes </p>
                </div>
            </div>
        </div>
    );
}