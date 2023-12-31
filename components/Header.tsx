'use client'; // 왜 없애면 에러가 발생할까?

import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Avatar from 'react-avatar';

function Header() {
  return (
    <header>
      <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl'>
        <div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50'></div>

        <Image
          src='https://links.papareact.com/c2cdd5'
          alt='Trello Logo'
          width={300}
          height={300}
          className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
        />
        {/* flex-1을 해야 전체 넓이를 설정하고 남은 공간의, 그 후 justify-end를 해야 헤더 끝까지 위치가 됨 */}
        <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
          {/* Search Box */}
          <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
            <input
              type='text'
              placeholder='search'
              className='flex-1 outline-none p-2'
            />
            <button hidden>Search</button>
          </form>
          {/* Avatar */}
          <Avatar name='Yongmin Kim' round size='50' color='#0055D1' />
        </div>
      </div>

      <div className='flex items-center justify-center px-10 py-2 md:py-5'>
        <p className='flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1] p-5'>
          <UserCircleIcon className='inline-block h-10 w-10 text-[#0055D1] mr-1' />
          GPT is summarising your tasks for the day...
        </p>
      </div>
    </header>
  );
}
// https://www.youtube.com/watch?v=TI2AvfCj5oM
// 43:37

export default Header;
