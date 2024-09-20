import headlineLogo from '../../assets/headline.svg'
import imageLogo from '../../assets/image.svg'
import textLogo from '../../assets/text.svg'
import { useDispatch, useSelector } from 'react-redux';
import { setNewComponent } from '../../features/components/componentsSlice';

const icons: { [key: string]: string } = {
  Headline: headlineLogo,
  Paragraph: textLogo,
  Button: imageLogo,
  Image: imageLogo
};

const WidgetArea = () => {
  const types = ['Headline', 'Paragraph', 'Button', 'Image']

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const components = useSelector((state: any) => state.components.components);

  const setNewComponentHandler = (type: string) => {
    dispatch(setNewComponent({type: type, id: components.length}));
  }

    return (
      <section className='p-[30px]'>
        <ul className="grid grid-cols-2 gap-[10px] justify-center items-center">
          {types.map((type, index) => (
            <li
              draggable='true'
              key={index+type}
              className="
                py-[15px]
                px-[10px]
                bg-blue-50
                rounded-md
                flex
                items-center
                justify-center
                cursor-pointer
                flex-col
                gap-[10px]
                w-full
                lg:w-[100px]

              "
              onClick={() => setNewComponentHandler(type)}
              onDragStart={(e) => console.log('dragging', e)}
              onDrop={(e) => console.log('dragover', e)}
            >
              <img src={icons[type]} className="logo" alt={`${type} logo`} />
              <p className='text-xs font-normal leading-[1.5] tracking-[0.24px]'>{type}</p>
            </li>
          ))}

        </ul>
      </section>
    );
  };

export default WidgetArea;