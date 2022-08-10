import React from "react";

export default function Form(props){
    const [quantity, setQuantity] = React.useState(0);
    const {movie} = props;

    return(
        <form>
            <h3>{movie.name}</h3>
            <button type="button" class="minus" onClick={()=>setQuantity(movie.quantity - 1)} disabled={movie.available <= 0}>-</button>
            {movie.quantity}
            <button type="button" class="plus" onClick={()=> setQuantity(movie.quantity + 1)} disabled={quantity === movie.available}>+</button>
        </form>
    );
}