import styled from '@emotion/styled';



export const GalleryItem = styled.li`


margin-bottom: 15px;

border-radius: 15px;

overflow: hidden;
cursor: pointer;
transform: scale(1);
transition: transform 300ms cubic-bezier(0.17, 0.67, 0.83, 0.67);


`;

export const GalleryItemImg = styled.img`

width: 100%;
height: 350px;
object-fit: cover;
transform: scale(1);
transition: all 0.3s ease-in-out;
&:hover {
  transform: scale(1.05);
}



  // transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  // &:hover, focus {
  //   transform: scale(1.03);
  // cursor: zoom-in;
  // }

  
  }
`;