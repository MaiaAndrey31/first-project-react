import styled from "styled-components";
import { Link } from "react-router-dom"
import Background2 from "../../Assets/bg-image2.svg";

export const Container = styled.div`
  background: url("${Background2}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;
export const Image = styled.img`
  margin-top: 40px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(45px);
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  height: 100%;
  min-height: calc(100vh - 170px);
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 80px;
`;



export const Button = styled(Link)`

width: 342px;
height: 74px;
margin-top: 120px;
background: transparent;
border-radius: 14px;
border: 1px solid white;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;

.setaVolta{
   transform: rotateY(180deg);
  }



&:hover{
    opacity: 0.8;
    cursor: pointer;
    
}
&:active{
    opacity: 0.5;
}


`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
width: 342px;
  height: 58px;
 
  
  padding-left: 25px;
  margin-bottom: 34px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
  border-radius: 14px;
  border: none;
  outline: none;
 p{
  color: #FFFFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}
button {
    background: none;
    border: none;
    cursor: pointer;
  
}

 


`
