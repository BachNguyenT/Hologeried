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
                    const { id, manufacturer, year, reference, movement, name, material, diameter, description, images } = model.watch;
                    return (
                        // const { }
                        <div className='card-container' key={id}>
                            <img 
                                className='watch-image'
                                alt = "" 
                                src={images}
                            />
                            <h2>{manufacturer}</h2>
                            <p>{name}</p>
                            <p>{reference}</p>
                            <p>{description}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardList;