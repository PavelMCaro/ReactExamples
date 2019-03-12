import * as React from 'react';
import {
    Wrapper,
    Title,
    ImageWrapper,
    Image,
    DescriptionWrapper,
    Description,
    Price,
    Stock,
    ButtonWrapper
} from './styled';
import * as audioGamer from '@app/src/assets/img/audio-gamer.png';
import * as cardNvidia from '@app/src/assets/img/card-nvidia.png';
import * as mouseGamer from '@app/src/assets/img/mouse-gamer.png';
import * as tecladoGamer from '@app/src/assets/img/teclado-gamer.png';

interface Props {
    id?: number;
    title?: string;
    description?: string;
    price?: number;
    stock?: number;
    imageAlias?: string;
    addProduct?: Function;
}

const getImage = (alias:string) => {
    const getImageByAlias = {};
    getImageByAlias['audífonosGamer'] = audioGamer;
    getImageByAlias['tarjetaNvidia'] = cardNvidia;
    getImageByAlias['mouseGamer'] = mouseGamer;
    getImageByAlias['tecladoGamer'] = tecladoGamer;
    return getImageByAlias[alias];
}

export const Product: React.FC<Props> = ({
    id,
    title,
    imageAlias,
    description,
    price,
    stock,
    addProduct
}) => (
    <Wrapper>
        <Title>{title}</Title>
        <ImageWrapper>
            <Image src={getImage(imageAlias)}/>
        </ImageWrapper>
        <DescriptionWrapper>
            <Description>{description}</Description>
        </DescriptionWrapper>
        <Price>S/. {price}</Price>
        <Stock>En stock: {stock}</Stock>
        <ButtonWrapper>
            <button onClick={() => addProduct({
                id, title, price, stock
            })}>Añadir al carrito</button>
        </ButtonWrapper>
    </Wrapper>
);