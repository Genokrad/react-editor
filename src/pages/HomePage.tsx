import MainContent from '../components/mainContent/MainContent';
import WidgetArea from '../components/widgetArea/WidgetArea';

const HomePage = () => {

  return (
    <main className='grid flex-wrap lg:grid-rows-1 lg:grid-cols-[minmax(18.75%,_270px)_auto]'>
      <WidgetArea />
      <MainContent />
    </main>
  );
};

export default HomePage;
