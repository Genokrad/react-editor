

interface ButtonComponentProps {
  data: string;
}

const ButtonComponent = ({ data }: ButtonComponentProps) => {
    return (
      <div className="flex justify-center items-center">
          <button className="px-[30px] py-[10px] rounded-[4px] bg-blue-400 text-white">{data}</button>
      </div>
    );
  };
  
export default ButtonComponent;