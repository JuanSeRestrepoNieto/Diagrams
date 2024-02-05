
export function Coffee({ name, id, popular, available, image, price, rating, votes }:ICoffee) {
    return (
        <div >
            <img width={100} src={image} alt={name} />
            <p>{price}</p>
            <span></span>
            <span>{name}</span>
            <span>{rating}</span>
            <span>{votes}</span>
            <span>{popular}</span>
        </div>
    );
};