interface ImageComponentProps {
  data: string;
}

const ImageComponent = ({data}: ImageComponentProps) => {
    return (
      <div className="flex justify-center items-center">
          <img className="object-cover" src={data} alt="Selected image" />
      </div>
    );
  };
  
export default ImageComponent;