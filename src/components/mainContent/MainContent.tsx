import { useEffect, useState } from "react";
import Frame from "../frame/Frame";
import WorkingGrid from "../workingGrid/WorkingGrid";
import { useSelector } from 'react-redux';

const MainContent = () => {
  const [components, setComponents] = useState([])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentsFromRedux = useSelector((state: any) => state.components.components);

  useEffect(() => {
    setComponents(componentsFromRedux);
  }, [componentsFromRedux]);


  return (
    <section className="grid grid-rows-2 w-full lg:grid-rows-1 lg:grid-cols-2 lg:h-[100vh]">
      <WorkingGrid components={components}/>
      <Frame components={components}/>
    </section>
  );
};

export default MainContent;