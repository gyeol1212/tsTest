import React, { useState } from 'react';
import styled from 'styled-components';

interface IBoxProps {
  color: string;
  margin?: number;
}

const BoxContainer = styled.div<IBoxProps>`
  border: 1px solid ${props => props.color};
  padding: ${props => (props.margin ? `${props.margin}px` : '100px')};
`;

const Box: React.FC = _ => {
  const [count, setCount] = useState(0);

  const increasement = (): void => {
    setCount(count + 1);
  };

  return (
    <BoxContainer color={'red'}>
      {count}
      <button onClick={increasement}>+1</button>
    </BoxContainer>
  );
};

export default Box;
