import PropTypes from 'prop-types';

const Quantity = ({min = 1, value = 0, onChange=()=>{}}) => {    
    value = value < min ? min : value;
    
    const handleChange = (size) => {
        onChange(value + size < min ? min : value + size);
    }
    
  return (
    <div
      className='inline-block px-3 py-2 bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700'
      data-hs-input-number=''
    >
      <div className='flex items-center gap-x-1.5'>
        <button
          type='button'
          className='inline-flex items-center justify-center text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-md shadow-sm size-6 gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800'
          data-hs-input-number-decrement=''
          onClick={() => { handleChange(-1) }}
        >
          <svg
            className='flex-shrink-0 size-3.5'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            // stroke-width='2'
            // stroke-linecap='round'
            // stroke-linejoin='round'
          >
            <path d='M5 12h14'></path>
          </svg>
        </button>
        <input
          className='w-6 p-0 text-center text-gray-800 bg-transparent border-0 focus:ring-0 dark:text-white'
          type='text'
          value={value}
          data-hs-input-number-input=''
        />
        <button
          type='button'
          className='inline-flex items-center justify-center text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-md shadow-sm size-6 gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800'
          data-hs-input-number-increment=''
          onClick={() => { handleChange(+1) }}
        >
          <svg
            className='flex-shrink-0 size-3.5'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            // stroke-width='2'
            // stroke-linecap='round'
            // stroke-linejoin='round'
          >
            <path d='M5 12h14'></path>
            <path d='M12 5v14'></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

Quantity.propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
};

export default Quantity;
