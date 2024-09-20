import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComponent } from "../../../features/components/componentsSlice";
import ControlsPanel from "./ControlsPanel";

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
  const componentsssss = useSelector((state: any) => state.components.components);

  console.log(componentsssss);
  

  const [ value, setValue ] = useState('');
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


  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const changeIndexOfComponent = (mark: string) => {
    const indexOfComponent = components.indexOf(component);
    if (mark === 'up') {
      const firstPart = components.slice(0, indexOfComponent - 1);
      const finalArray = [...firstPart, components[indexOfComponent], components[indexOfComponent - 1], ...components.slice(indexOfComponent + 1)];
      dispatch(updateComponent(finalArray));
      console.log(finalArray);
    } else if (mark === 'down') {
      const firstPart = components.slice(0, indexOfComponent);
      const finalArray = [...firstPart, components[indexOfComponent + 1], components[indexOfComponent], ...components.slice(indexOfComponent + 2)];
      dispatch(updateComponent(finalArray));
      console.log(finalArray);
      
    }
  }

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

      {isActive && <ControlsPanel changeIndexOfComponent={changeIndexOfComponent} stopPropagation={stopPropagation}/>}
      <img src={logo} className="logo" alt="Vite logo" />
      <p className='text-xs font-normal leading-[1.5] tracking-[0.24px]'>{component.type}</p>
      {isActive &&
          <div className='p-[5px] w-full bg-white rounded-sm'>
          {component.type === 'Image' ? (
            <>
              <input
                type="file"
                onClick={stopPropagation}
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
              onClick={stopPropagation}
            />
          )}
        </div>
      }
    </li>
  );
}

export default ActionBlock;