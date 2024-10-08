import { useEffect, useState } from "react";
import Frame from "../frame/Frame";
import WorkingGrid from "../workingGrid/WorkingGrid";
import { useDispatch, useSelector } from 'react-redux';
import { setNewComponent } from "../../features/components/componentsSlice";

const MainContent = () => {
  const [components, setComponents] = useState([])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentsFromRedux = useSelector((state: any) => state.components.components);
  const dispatch = useDispatch();

  useEffect(() => {
    setComponents(componentsFromRedux);
  }, [componentsFromRedux]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('componentType');
    
    if (componentType) {
      dispatch(setNewComponent({ type: componentType, id: components.length }));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); 
  };


  return (
    <section 
      className="grid flex-wrap w-full lg:grid-rows-1 lg:grid-cols-2 lg:h-[100vh]" 
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <WorkingGrid components={components}/>
      <Frame components={components}/>
    </section>
  );
};

export default MainContent;