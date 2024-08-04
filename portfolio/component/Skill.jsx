import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import skill from '../../assets/skill.png'
import exp from '../../assets/exp.png'

const skills = [
  { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png', alt: 'HTML', width: 'w-16', height: 'h-16' },
  { id: 2, src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', alt: 'CSS', width: 'w-16', height: 'h-16' },
  { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', alt: 'Javascript', width: 'w-16', height: 'h-16' },
  { id: 4, src: 'https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png', alt: 'React.js', width: 'w-24', height: 'h-24' },
  { id: 5, src: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png', alt: 'Redux', width: 'w-16', height: 'h-16' },
  { id: 6, src: 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/1200px-Node.js_logo.svg.png', alt: 'Node.js', width: 'w-16', height: 'h-16' },
  { id: 7, src: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png', alt: 'Express.js', width: 'w-16', height: 'h-16' },
  { id: 8, src: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226029.png?f=webp', alt: 'MongoDB', width: 'w-40', height: 'h-40' },
  { id: 9, src: 'https://logowik.com/content/uploads/images/911_c_logo.jpg', alt: 'C++', width: 'w-40', height: 'h-40' },
  { id: 10, src: 'https://th.bing.com/th/id/OIP.3lerszXonPy2hvSP1jkh9wHaHK?rs=1&pid=ImgDetMain', alt: 'Git', width: 'w-40', height: 'h-40' }
];

const Skill = ({ skillsRef }) => {
  useEffect(() => {
    const images = document.querySelectorAll('.skill-image');

    if (images.length > 0) {
      images.forEach((image) => {
        const delay = Math.random() * 2; 
        const duration = Math.random() * 2 + 1; 

        image.style.animation = `scale ${duration}s ease-in-out ${delay}s infinite alternate`;
      });
    }
  }, []);

  return (
    <div ref={skillsRef}  className='mt-28 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <div className='w-[50%] md:w-5/6 lg:w-5/6 hidden md:block'>
            <img className='mt-8 mx-auto lg:mt-0' src='https://cdni.iconscout.com/illustration/premium/thumb/programming-language-9561033-7706464.png' alt='Cover' loading='lazy' />
          </div>
          <div className='lg:w-[60%] mt-10 lg:mt-0'>
            <h1 className='text-4xl sm:text-5xl lg:text-5xl text-gray-400 underline font-bold font-serif text-center py-8'>MY TOP SKILLS</h1>
            <div className='flex flex-wrap justify-center space-x-10'>
              {skills.map((skill) => (
                <img key={skill.id} className={`${skill.width} ${skill.height} sm:w-20 sm:h-20 rounded-md mt-4 mx-2 skill-image`} src={skill.src} alt={skill.alt} loading='lazy' />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skillsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
};

export default Skill;
