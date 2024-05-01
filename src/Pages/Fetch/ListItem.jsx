import React from 'react';

const ListItem = ({ listitem }) => {
  return (
    <>
      <div className='flex flex-col'>
        <h3 className='md text-xl font-bold mb-1'>{listitem.title}</h3>
        <div className='grid grid-cols-[84px_minmax(168px,_1fr)]'>
          <div className='w-24 h-24 border-gradient'>
            <img
              src={listitem.image}
              alt={listitem.title}
              className='object-cover w-[74px] h-[74px]'
            />
          </div>
          <small className='ml-2'>
            {listitem.description.length < 180
              ? listitem.description
              : listitem.description.slice(0, 180) + '...'}
          </small>
        </div>
        <div className='text-gray-400 mt-2'>
          <ul className='flex float-start flex-wrap'>
            {listitem.ingredients.map((subitem, idx) => (
              <React.Fragment key={idx}>
                <li className='mr-1 mb-1 bg-slate-800 py-1 px-2 rounded-md'>
                  {subitem}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListItem;
