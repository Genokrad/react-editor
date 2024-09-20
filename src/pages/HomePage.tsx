import MainContent from '../components/mainContent/MainContent';
import WidgetArea from '../components/widgetArea/WidgetArea';

const HomePage = () => {

  return (
    <main className='grid grid-cols-[minmax(18.75%,_270px)_auto]'>
      <WidgetArea />
      <MainContent />
    </main>
  );
};

export default HomePage;
