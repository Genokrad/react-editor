import ArrowTopIcon from "../../../assets/arrow";
import CopyTopIcon from "../../../assets/copy";
import TrashTopIcon from "../../../assets/trash";

interface ControlsPanelProps {
  changeIndexOfComponent: (mark: string) => void;
  deleteComponent: () => void;
  copyComponent: () => void;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({ changeIndexOfComponent, deleteComponent, copyComponent }) => {
  return (
    <ul className="h-[27px] absolute right-[10px] top-[-27px] flex gap-[5px] items-center cursor-default" onClick={(e) => {e.stopPropagation();}}>
      <li className="flex gap-[5px] bg-blue-400 p-[3px] h-full w-full items-center rounded-t-[3px]">
        <button className="p-[3px] cursor-pointer" onClick={() => changeIndexOfComponent('down')}>
          <ArrowTopIcon />
        </button>
        <button className="p-[3px] cursor-pointer" onClick={() => changeIndexOfComponent('up')}>
          <ArrowTopIcon rotation={180} />
        </button>
      </li>
      <li className="flex gap-[5px] bg-blue-300 p-[3px] h-full w-full items-center rounded-t-[3px]">
        <button className="p-[3px] bg-cyan-600 rounded-sm cursor-pointer" onClick={copyComponent}>
          <CopyTopIcon />
        </button>
        <button className="p-[3px] rounded-sm cursor-pointer" onClick={deleteComponent}>
          <TrashTopIcon />
        </button>
      </li>
    </ul>
  );
}

export default ControlsPanel;