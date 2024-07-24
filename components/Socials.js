import Link from "next/link";
import {
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg '>
      <a
        href='https://www.linkedin.com/in/yassine-messai-a1b423215/'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-accent transition-all duration-300'
      >
        <RiLinkedinLine />
      </a>
      <a
        rel='noopener noreferrer'
        target='_blank'
        href='https://github.com/Yassine-El-Messai'
        className='hover:text-accent transition-all duration-300 '
      >
        <RiGithubLine />
      </a>

      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://twitter.com/yassine70707'
        className='hover:text-accent transition-all duration-300 '
      >
        <RiTwitterLine />
      </a>
      <a
        href='https://www.facebook.com/Yassine.elmessai/'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-accent transition-all duration-300  '
      >
        <RiFacebookLine />
      </a>
      <a
        rel='noopener noreferrer'
        target='_blank'
        href='https://www.instagram.com/yassinemessai/'
        className='hover:text-accent transition-all duration-300 '
      >
        <RiInstagramLine />
      </a>
    </div>
  );
};

export default Socials;
