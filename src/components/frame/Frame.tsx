import { v4 as uuidv4 } from 'uuid';

import ButtonComponent from "./frameElements/ButtonComponent";
import ImageComponent from "./frameElements/ImageComponent";
import TextComponent from "./frameElements/TextComponent";
import TitleComponent from "./frameElements/TitleComponent";

interface Component {
  type: string;
  id: number;
  data?: string;
}

interface WorkingGridProps {
  components: Component[];
}

const Frame: React.FC<WorkingGridProps> = ({ components }) => {
    return (
      <div className="p-[30px] flex flex-col gap-[30px]">
        {components.map((component) => {
          switch (component.type) {
            case 'Button':
              return <ButtonComponent key={uuidv4()} data={component.data ?? ''}/>;
            case 'Image':
              return <ImageComponent key={uuidv4()} data={component.data ?? ''}/>;
            case 'Paragraph':
              return <TextComponent key={uuidv4()} data={component.data ?? ''}/>;
            case 'Headline':
              return <TitleComponent key={uuidv4()} data={component.data ?? ''}/>;
            default:
              return null;
            }
          }
        )}

      </div>
    );
  };
  
export default Frame;