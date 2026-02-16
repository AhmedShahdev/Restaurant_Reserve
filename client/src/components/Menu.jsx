import {data} from '../restApi.json';

const Menu = () => {
  return (
    <>
    <div className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem culpa animi corporis ad amet, optio eveniet in aut fugiat saepe fugit minus. Soluta sed eveniet molestias excepturi porro atque. Eveniet?</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })                 
                }
            </div>
        </div>
    </div>
    </>
)
}

export default Menu