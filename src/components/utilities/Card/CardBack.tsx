import styles from './Card.module.css';

import clsxm from '@/lib/clsxm';

// twClasses are used to modify the styles of the back of the card
export type CardBackProps = {
  twClasses?: string;
  icon?: JSX.Element;
  title?: string;
  description: string;
};

function CardBack({ twClasses = '', icon, title, description }: CardBackProps) {
  return (
    <div
      className={clsxm(
        styles.cardBack,
        'flex flex-col justify-between rounded-lg bg-gray-200 px-3 py-2 text-sm tracking-wider text-gray-800',
        twClasses
      )}
    >
      <div className='flex space-x-1 border-b-2 border-gray-700 pb-2'>
        <span className='opacity-90'>{icon}</span>
        <span>{title}</span>
      </div>

      <div className='text-center'>
        <p>{description}</p>
      </div>

      <div className='flex rotate-180 space-x-1 border-b-2 border-gray-700 pb-2'>
        <span className='opacity-90'>{icon}</span>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default CardBack;
