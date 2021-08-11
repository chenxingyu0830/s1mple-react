import React from 'react';
import {Button} from '../../index';

const ButtonDemo3: React.FunctionComponent = () => {
  return (
    <div className="button-demo-3">
      <ul>
        <li>
          <Button size="large">Large</Button>
          <Button>Default</Button>
          <Button size="small">Small</Button>
        </li>
        <li>
          <Button size="large" shape="round">Large</Button>
          <Button shape="round">Default</Button>
          <Button size="small" shape="round">Small</Button>
        </li>
        <li>
          <Button size="large" mode="text">Large</Button>
          <Button mode="text">Default</Button>
          <Button size="small" mode="text">Small</Button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonDemo3;