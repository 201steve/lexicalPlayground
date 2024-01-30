import styled, { css } from 'styled-components'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'

const h1 = css`
    margin: 0;
    background-color: yellow;
    color: red;
`

const h2 = css`
    margin: 0;
    background-color: blue;
`
const h3 = css`
    margin: 0;
    background-color: green;
`
export const EditorContainer = styled.div`
    position: relative;
    .h1 {
        ${h1}
    }
    .h2 {
        ${h2}
    }
    .h3 {
        ${h3}
    }
    .bold {
        background-color: purple;
        color: aqua;
    }
    .italic {
        background-color: powderblue;
        color: green;
    }
    .banner {
        margin: 8px 0;
        padding: 8px;
        border-left: 4px solid rgba(138, 48, 226, 1);
        background-color: rgba(138, 48, 226, 0.3);
    }
`
export const Placeholder = styled.div`
    position: absolute;
    top: 55px;
    left: 20px;
`

export const StyledContentEditable = styled(ContentEditable)`
    text-align: left;
    padding: 0 20px;
    position: relative;
    height: 300px;
    border: 1px solid #000000;
`

export const ToolbarWrapper = styled.div`
    display: flex;
`

export const StyledBanner = styled.div`
    margin: 8px 0;
    padding: 8px;
    border-left: 4px solid rgba(138, 48, 226, 1);
    background-color: rgba(138, 48, 226, 0.3);
`
