import './HandbagCard.css';

function HandbagCard(props) {

    return (
        <>
            <article>
                <span>{props.handBagLabel} </span>
                <img src={props.image} alt={props.name}/>
                <h4>{props.name}</h4>
                <p>{props.price}</p>

            </article>
        </>
    );

}

export default HandbagCard;
