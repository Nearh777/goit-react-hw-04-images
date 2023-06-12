import styled from '@emotion/styled';



export const Backdrop = styled.div`
position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(43, 43, 43, 0.5);
`;

export const ModalWin = styled.div`
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 15px;

width: 900px;
height: auto;

background-color: #f0f0f0;
box-shadow:0px 5px 10px 0px rgba(0, 0, 0, 0.75);
`; 

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

padding: 5px;
`;

export const Title = styled.h1`
font-size: 15px;
font-weight: 400;
text-transform: capitalize;
`;

export const Button = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;

width: 30px;
height: 20px;
padding: 0;

border: none;
border-radius: 5px;

background-color: #2b2b2b;
color: #f0f0f0;

cursor: pointer;
transition: 300ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
&&: hover, focus {
  background-color: #65D5D9;
}

`;

export const ImgModal = styled.img`

border-radius: 15px;
  max-width: 100%;
  height: auto;
`;