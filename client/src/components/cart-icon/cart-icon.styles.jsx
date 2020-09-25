import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 50px;
  height: 60px;
  bottom: 42%;
  right: 0%;
  left: 5%;
  color: white;
  text-shadow: 1px 1px 2px black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 40px;
  height: 80px;
  background: none;
  `;
  
  export const ShoppingIconItem =styled(ShoppingIcon)`
    width: 24px;
    height: 24px;
  `;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 18px;
  font-weight: normal;
  right: 12px;
  bottom: 12px;
`;


export const ItemCount = styled.span`
	position: absolute;
	font-size: 18px;
	font-weight: bold;
	bottom: 10%;
`;