import React, { useState } from 'react';
import icon_1 from '../assets/buttons/icon_1.png';
import icon_2 from '../assets/buttons/icon_2.png';
import icon_3 from '../assets/buttons/icon_3.png';
import icon_4 from '../assets/buttons/icon_4.png';
import icon_5 from '../assets/buttons/icon_5.png';

const buttons = [
  { id: 1, text: 'Telegram', icon: icon_4, href: 'https://t.me/fadewallet' },
  { id: 2, text: 'Telegram Chat', icon: icon_3, href: 'https://t.me/fadewalletchat' },
  { id: 3, text: 'Buy token on Dedust', icon: icon_2, href: 'https://dedust.io/swap/TON/EQCh9DUkmEdz7BuM_kv_iDqXeXWHrMUZHcZfXnr8yBAfPHcn' },
  { id: 4, text: '', icon: icon_1, href: 'https://x.com/FadeWallet' },
  { id: 5, text: 'CA', href: '#' },
  { id: 6, text: '', icon: icon_5, href: 'https://www.dextools.io/app/en/ton/pair-explorer/EQBbX-l5f02S1Jka72dM9oQXq70jk-cFQp_gwI5lFXLK_kOk?t=1725302135647' }
];

const MainButtons = React.memo(() => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const contractAddress = 'EQCh9DUkmEdz7BuM_kv_iDqXeXWHrMUZHcZfXnr8yBAfPHcn';

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(contractAddress).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      }).catch((err) => {
        console.error('Failed to copy text: ', err);
      });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = contractAddress;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    }
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
            <span className='text-[1.6vh]'>{copied && button.text === 'CA' ? 'Copied' : button.text}</span>
            {button.icon && (
              <img
                src={button.icon}
                alt={button.text}
                className={`ml-[6px] object-contain ${index === buttons.length - 1 ? 'w-[75px] h-[75px]' : 'w-[15px] h-[15px]'}`}
              />
            )}
          </a>
        </div>
      ))}
    </div>
  );
});

export default MainButtons;
