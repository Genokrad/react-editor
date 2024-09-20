import Frame from "../frame/Frame";
import WorkingGrid from "../workingGrid/WorkingGrid";
import { useSelector } from 'react-redux';

const MainContent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const components = useSelector((state: any) => state.components.components);


  return (
    <section className="grid grid-cols-2 w-full">
      <WorkingGrid components={components}/>
      <Frame components={components}/>
    </section>
  );
};

export default MainContent;