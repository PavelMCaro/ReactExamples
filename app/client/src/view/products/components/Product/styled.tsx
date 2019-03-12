import styled from 'styled-components';

interface Props {
    width?: string;
    disabled?: boolean;
}

export const Wrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    width: ${(props: Props) => props.width ? props.width : '32.5%'};
    border: 1px solid #d6d6d6;
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    background: #f7f7f7;
`;

export const Title = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
`

export const ImageWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 25px;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    padding: 10px;
    min-height: 100px;
    margin-bottom: 12px;
`;

export const Description = styled.p`
    width: 100%;
`;

export const Price = styled.p`
    text-align: center;
    font-family: gotham-book;
    width: auto;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 12px;
`;

export const Stock = styled.p`
    font-family: gotham-book;
    text-align: left;
    font-size: 14px;
    margin-bottom: 12px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;