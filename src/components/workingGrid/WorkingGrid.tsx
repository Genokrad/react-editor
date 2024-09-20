// import { useState } from 'react';
import ActionBlock from './workGridComponents/ActionBlock';

import headlineLogo from '../../assets/headline.svg'
import imageLogo from '../../assets/image.svg'
import textLogo from '../../assets/text.svg'

const icons: { [key: string]: string } = {
  Headline: headlineLogo,
  Paragraph: textLogo,
  Button: imageLogo,
  Image: imageLogo
};

interface Component {
  type: string;
  id: number;
  data?: string;
}

interface WorkingGridProps {
  components: Component[];
}

const WorkingGrid: React.FC<WorkingGridProps> = ({ components }) => {
  return (
    <ul className='py-[30px] px-[25px] flex flex-col gap-[15px] bg-blue-50'>
      {
        components.map((component) => (
          <ActionBlock
            key={ component.id + component.type }
            component={component}
            logo={icons[component.type]}
            components={components}
          />
        ))
      }
    </ul>
  );
};

export default WorkingGrid;
