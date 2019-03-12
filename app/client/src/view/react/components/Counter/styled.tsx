import styled from 'styled-components';
import { FONTS } from 'urbania/ui';
import { Button } from 'urbania/components/Button';
import { Field } from 'redux-form';

export const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: ${FONTS.GOTHAM_BOOK};
    font-size: 20px;
`;

export const SubTitle = styled.p`
    font-family: ${FONTS.GOTHAM_BOOK};
    font-size: 15px;
`;

export const HookButton = styled(Button)`
    width: 300px;
`;

export const HookField = styled(Field)`
    margin-bottom: 15px;
`;