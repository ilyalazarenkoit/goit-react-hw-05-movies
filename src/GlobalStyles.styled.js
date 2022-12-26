import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html {
    background-color: rgb(160, 160, 87);
}
a {
    text-decoration:none;
}
ul {
    list-style:none;
}
`;
