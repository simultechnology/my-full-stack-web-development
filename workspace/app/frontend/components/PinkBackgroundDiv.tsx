'use client'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const PinkBackgroundDiv = styled.div`
    background-color: hotpink;

    &:hover {
        color: white;
    }
`;

function  PinkBackgroundComponent() {
    return (
        <PinkBackgroundDiv>
            This has a hotpink background.
        </PinkBackgroundDiv>);
}

export default PinkBackgroundComponent;