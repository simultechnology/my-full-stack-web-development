'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Component() {
    return (
        <div css={css`
            background-color: hotpink;

            &:hover {
                color: white;
            }
        `}>
            This has a hotpink background. </div>
    );
}

export default Component;