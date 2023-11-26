export function HomeCollection() {
    return (
        <div className='home-section1'>
            <p className='collection-title'>our collection</p>
            <div className='collection-container'>
                <div className="collection-card">
                    <img src="/public/assets/home/desktop/image-gran-espresso.png" alt="gran espresso coffee bag" className="collection-card-image" />

                    <div className="collection-card-copy">
                        <p className="collection-copy-title">Gran Espresso</p>
                        <p className="collection-copy-body">Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                    </div>
                </div>

                <div className="collection-card">
                    <img src="/public/assets/home/desktop/image-planalto.png" alt="gran espresso coffee bag" className="collection-card-image" />

                    <div className="collection-card-copy">
                        <p className="collection-copy-title">Planalto</p>
                        <p className="collection-copy-body">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                    </div>
                </div>

                <div className="collection-card">
                    <img src="/public/assets/home/desktop/image-piccollo.png" alt="gran espresso coffee bag" className="collection-card-image" />

                    <div className="collection-card-copy">
                        <p className="collection-copy-title">Piccollo </p>
                        <p className="collection-copy-body">Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                    </div>
                </div>

                <div className="collection-card">
                    <img src="/public/assets/home/desktop/image-danche.png" alt="gran espresso coffee bag" className="collection-card-image" />

                    <div className="collection-card-copy">
                        <p className="collection-copy-title">Danche</p>
                        <p className="collection-copy-body">Ethiopian hand-harvested blend densely packed with vibrant fruit notes </p>
                    </div>
                </div>
            </div>
        </div>
    );
}