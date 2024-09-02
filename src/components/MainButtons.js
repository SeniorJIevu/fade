import React, { useState } from 'react';
import icon_1 from '../assets/buttons/icon_1.png';
import icon_2 from '../assets/buttons/icon_2.png';
import icon_3 from '../assets/buttons/icon_3.png';
import icon_4 from '../assets/buttons/icon_4.png';

const buttons = [
  { id: 1, text: 'Telegram', icon: icon_4, href: 'https://t.me/fadewallet' },
  { id: 2, text: 'Telegram Chat', icon: icon_3, href: 'https://t.me/fadewalletchat' },
  { id: 3, text: 'Buy token on Dedust', icon: icon_2, href: 'https://dedust.io/swap/TON/EQCh9DUkmEdz7BuM_kv_iDqXeXWHrMUZHcZfXnr8yBAfPHcn' },
  { id: 4, text: '', icon: icon_1, href: 'https://x.com/FadeWallet' },
  { id: 5, text: 'CA', href: '#' } // href можно оставить пустым или указать '#', так как она будет выполнять копирование
];

const MainButtons = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('EQCh9DUkmEdz7BuM_kv_iDqXeXWHrMUZHcZfXnr8yBAfPHcn');
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className='mb-[10vh] flex flex-col items-center space-y-[10px] lg:flex-row lg:justify-center lg:space-x-4 lg:space-y-0'>
      {buttons.map((button, index) => (
        <div key={button.id}>
          <a
            href={button.href}
            onClick={button.text === 'CA' ? handleCopy : undefined}
            className="flex items-center justify-center px-[45px] py-[25px] lg:px-[2vw] lg:py-[2.5vh] w-[70vw] lg:w-[15vw] h-[5vh] border-[1px] border-x-zinc-50 text-lg rounded-[5px]"
          >
            <span className='text-[1.6vh]'>{copied && button.text === 'CA' ? 'Copy' : button.text}</span>
            {button.icon && (
              <img src={button.icon} alt={button.text} className="ml-[6px] w-[15px] h-[15px]" />
            )}
          </a>
        </div>
      ))}
    </div>
  );
};

export default MainButtons;
