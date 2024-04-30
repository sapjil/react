import Home from 'Pages/Home';
import TabSample from 'Pages/Tab/TabSample';
import TabSample2 from 'Pages/Tab/TabSample2';
import ModalSample from 'Pages/Modal/ModalSample';
import PortalSample from 'Pages/Modal/PortalSample';
import ClassSample from 'Pages/Class';
import ShowHideClass from './Pages/Class/ShowHideClass';
import Toggle from 'Pages/Toggle';
import Filter from 'Pages/Filter';
import ReactCalendar from 'Pages/Calendar/Index';
import SwiperDefault from 'Pages/Swiper';
import SwiperNavCustom from 'Pages/Swiper/SwiperNavCustom';
<<<<<<< Updated upstream
import Buttons from 'Pages/Button';
import Select from 'Pages/Select';
import State from 'Pages/State';
=======
import SwiperCustom from './Pages/Swiper/SwiperCustom';
>>>>>>> Stashed changes

export const menuItems = [
  { path: 'home', content: <Home pageTitle={'Home'} /> },
  { path: 'TabSample', content: <TabSample pageTitle={'Tab Sample'} /> },
  { path: 'TabSample2', content: <TabSample2 pageTitle={'Tab Sample2'} /> },
  { path: 'ModalSample', content: <ModalSample pageTitle={'Modal Sample'} /> },
  {
    path: 'PortalSample',
    content: <PortalSample pageTitle={'Modal Portal Sample'} />,
  },
  {
    path: 'ClassSample',
    content: <ClassSample pageTitle={'Class Type Sample'} />,
  },
  {
    path: 'ShowHideClass',
    content: <ShowHideClass pageTitle={'Class Type ShowHide'} />,
  },
  { path: 'Toggle', content: <Toggle pageTitle={'Toggle'} /> },
  { path: 'Filter', content: <Filter pageTitle={'Filter'} /> },
  {
    path: 'SwiperDefault',
    content: <SwiperDefault pageTitle={'Swiper Default'} />,
  },
  {
    path: 'SwiperNavCustom',
    content: <SwiperNavCustom pageTitle={'Swiper NavCustom'} />,
  },
  {
    path: 'SwiperCustom',
    content: <SwiperCustom pageTitle={'SwiperCustom'} />,
  },
  {
    path: 'ReactCalendar',
    content: <ReactCalendar pageTitle={'React Calendar'} />,
  },
  {
    path: 'Buttons',
    content: <Buttons pageTitle={'React Button'} />,
  },
  {
    path: 'Select',
    content: <Select pageTitle={'React Select'} />,
  },
  {
    path: 'State',
    content: <State pageTitle={'React State'} />,
  },
];
