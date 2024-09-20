interface TextComponentProps {
  data: string;
}

const TextComponent = ({data}: TextComponentProps) => {
    return (
      <div className="">
          <p className="text-sm font-normal leading-[1.5] tracking-[0.28px] text-center">{data}</p>
      </div>
    );
  };
  
export default TextComponent;