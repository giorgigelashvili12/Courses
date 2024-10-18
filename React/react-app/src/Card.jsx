import reactImg from '/src/assets/react.svg';

function Card() {
    return(
        <div className='card'>
            <img src={reactImg} />
            <h1>React App</h1>
            <p>Demo styling</p>
        </div>
    );
}

export default Card;