import React from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import { useEffect, useState } from 'react';

import './Fetch.scss';
import ListItem from './ListItem';

const FetchSample = (props) => {
  const initURL = 'https://api.sampleapis.com/coffee';
  const [summ, setSumm] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`${initURL}/hot`)
        .then((res) => res.json())
        .then((data) => {
          setSumm(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const handlerHot = () => {
    fetch(`${initURL}/hot`)
      .then((res) => res.json())
      .then((data) => {
        setSumm(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handlerIced() {
    console.log('iced');
    fetch(`${initURL}/iced`)
      .then((res) => res.json())
      .then((data) => {
        setSumm(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <DefaultLayout {...props}>
        <div className='w-80 h-[480px] overflow-y-auto'>
          <div className='text-3xl font-black'>TestCoffeeAPI</div>
          <div className='flex'>
            <button className='coffee-menu' type='button' onClick={handlerHot}>
              hot
            </button>
            <button
              className='coffee-menu'
              type='button'
              onClick={() => handlerIced()}>
              iced
            </button>
          </div>
          <div>
            <ul>
              {summ.map((listitem) => (
                <React.Fragment key={listitem.id}>
                  <li className='mb-5'>
                    <ListItem listitem={listitem} />
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default FetchSample;
