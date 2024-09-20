interface TitleComponentProps {
  data: string;
}

const TitleComponent = ({data}: TitleComponentProps) => {
    return (
      <div className="">
          <h1 className="text-[22px] font-bold leading-[1.5] tracking-[0.44px] text-center">{data}</h1>
      </div>
    );
  };

export default TitleComponent;