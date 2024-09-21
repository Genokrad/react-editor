import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateComponent, updateComponents, deleteFromStore, setNewComponent } from "../../../features/components/componentsSlice";
import ControlsPanel from "./ControlsPanel";
import { v4 as uuidv4 } from 'uuid';

interface Component {
  type: string;
  id: number;
  data?: string;
}

interface WorkingGridProps {
  component: {
    type: string;
    id: number;
    data?: string;
  };
  logo: string;
  components: Component[];
}

const ActionBlock: React.FC<WorkingGridProps> = ({ component, logo, components }) => {
  const dispatch = useDispatch();

  const [ value, setValue ] = useState(component.data || '');
  const [ isActive, setIsActive ] = useState(false);
  const changeActive = () => {
    setIsActive(!isActive);
  };

  const setData = (data: string) => {
    const newComponent = {
      ...component,
      data: data
    }

    dispatch(updateComponent(newComponent));
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    setData(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (loadEvent) => {
        if (loadEvent.target && typeof loadEvent.target.result === "string") {
          const imageUrl = loadEvent.target.result;

          setData(imageUrl);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const changeIndexOfComponent = (mark: string) => {
    const indexOfComponent = components.indexOf(component);

    if (indexOfComponent === 0 && mark === 'up') return;
    if (indexOfComponent === components.length - 1 && mark === 'down') return;

    if (mark === 'up') {
      const firstPart = components.slice(0, indexOfComponent - 1);
      const finalArray = [...firstPart, components[indexOfComponent], components[indexOfComponent - 1], ...components.slice(indexOfComponent + 1)];
      dispatch(updateComponents(finalArray));
    } else if (mark === 'down') {
      const firstPart = components.slice(0, indexOfComponent);
      const finalArray = [...firstPart, components[indexOfComponent + 1], components[indexOfComponent], ...components.slice(indexOfComponent + 2)];
      dispatch(updateComponents(finalArray));
    }
  }

  const deleteComponent = () => {
    dispatch(deleteFromStore(component.id));
  };
  
  const copyComponent = () => {
    const clonedComponent = JSON.parse(JSON.stringify(components[components.indexOf(component)]));
    clonedComponent.id = uuidv4();

    dispatch(setNewComponent(clonedComponent));
  };

  return (
      <li
      key={component.id + component.type}
      className={`
        py-[15px]
        px-[10px]
        ${isActive ? 'bg-blue-100' : 'bg-white'}
        rounded-md
        flex
        items-center
        justify-center
        cursor-pointer
        flex-col
        gap-[10px]
        w-full
        relative
      `}
      onClick={changeActive}
    >

      {isActive && <ControlsPanel changeIndexOfComponent={changeIndexOfComponent} deleteComponent={deleteComponent} copyComponent={copyComponent}/>}
      <img src={logo} className="logo" alt="Vite logo" />
      <p className='text-xs font-normal leading-[1.5] tracking-[0.24px]'>{component.type}</p>
      {isActive &&
          <div className='p-[5px] w-full bg-white rounded-sm'>
          {component.type === 'Image' ? (
            <>
              <input
                type="file"
                onClick={(e) => {e.stopPropagation();}}
                onChange={handleFileChange}
              />
            </>
          ) : (
            <input
              placeholder='Place for your text'
              type="text"
              className='w-full p-[5px] border border-gray-300 rounded-sm text-[11px] font-normal leading-[1.5] tracking-[0.22px]'
              value={value}
              onChange={changeValue}
              onClick={(e) => {e.stopPropagation();}}
            />
          )}
        </div>
      }
    </li>
  );
}

export default ActionBlock;