import '../Css/Main.css';

function ServiceCards(props) {
    return (
    <div className={`service-card ${props.className}`}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href="#">{props.btnText}</a>
        {props.className === 'overlay' && (
                <div className="overlay-content">
                    <div className="overlay-text">
                        {props.contentOverlayText ? props.contentOverlayText : "This tool is under development!!!"}
                    </div>
                </div>
            )}
    </div>
    );
}

export default ServiceCards;