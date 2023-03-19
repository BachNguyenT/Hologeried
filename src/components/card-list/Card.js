import { Component } from 'react';
import './card-list.style.css';
class CardList extends Component {
    render() {
        const { watches } = this.props;
        {watches.map((model) => {
            
            console.log(model)
        })}
        


        return (
            <div className='card-list'>
                {watches.map((model) => {
                    return (
                        // const { }
                        <div className='card-container' key={model.watch.wb.id}>
                            <img 
                                className='watch-image'
                                alt = "" 
                                //src="https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1/auctions/CH080120/35_001.jpg"/>
                                src={model.watch.images}/>

                            <h2>{model.watch.brand.name}</h2>
                            <p>{model.watch.name}</p>
                            <p>{model.watch.reference_number}</p>
                            <p>{model.watch.description}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardList;