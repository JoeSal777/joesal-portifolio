import styled from 'styled-components';


// This is CSS for the buttons using 'styled-components'
export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1em;
background: transparent;
color: var(--primaryColor);
border: 0.05rem solid var(--primaryColor);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: var(--primaryColor);
    color: var(--secondaryColor);
}
&:focus {
    outline: none;
}
`;