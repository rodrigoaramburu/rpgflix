import styled from 'styled-components';

export const VideoCardContainerParent = styled.div`
width: 298px;
height: 197px;
border: 5px solid;
overflow: hidden;
flex: 0 0 298px;
position: relative;
display: flex;
align-items: flex-end;
border-radius: 30px;
`;

export const VideoCardContainer = styled.a`

  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 100%;
  height: 100%;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: all .5s;
  
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
  position: relative; 
  span{
    display:inline-block;
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0,0,0,.7);
    font-size: 0.7em;
    padding:10px 30px 20px 30px;
    text-align:center;
    opacity: 0;
    transition: all .5s;
  }
  &:hover span{
    opacity: 1;
  }
`;
