import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    font-family: sans-serif;
    padding: 10px 25px 25px;
    margin: 0px 50px 25px;
    text-align: center;
    transform: scale(1);
    transition: transform 0.3s;
    border: 1px solid ${(p) => p.theme.color};
    border-radius: 15px;

    
    .imgContainer {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: inherit;
            height: inherit;
            border-radius: 15px;
            opacity: 0.75;
        }
    }
    
    img {
        z-index: -1;
        border-radius: 15px;
        max-width:100%;
        max-height:100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.02);
        .imgContainer {
            visibility: visible;
    }
    `;
    
    const StyledButton = styled.button`
    background-color: ${p => p.theme.color};
    border: 1px solid transparent;
    border-radius: 8px;
    margin: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: border-color 0.1s;
    font-size: large;

    &:hover {
        border-color: ${p => p.theme.color2}
    }

    &[disabled] {
        opacity: 0.5;
    }
`;

export default function Form(props){
    const [quantity, setQuantity] = React.useState(0);
    const {movie, imgUrl} = props;

    return(
        <StyledForm 
            onMouseEnter= {() => props.updateTheme()}
            onMouseLeave= {() => props.defaultTheme()} >
            <h3>{movie.name}</h3>
            <StyledButton 
                type="button" 
                onClick={()=>setQuantity(quantity - 1)} 
                disabled={quantity <= 0}>
                -
            </StyledButton>

            {quantity}

            <StyledButton 
                type="button" 
                onClick={()=> setQuantity(quantity + 1)} 
                disabled={quantity === movie.available}>
                +
            </StyledButton>

            {imgUrl && (
                <picture className="imgContainer">
                <img alt={movie.name} src={imgUrl} />
              </picture>
            )}

        </StyledForm>
    );
}