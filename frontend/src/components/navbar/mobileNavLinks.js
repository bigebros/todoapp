import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Accessibility from './accessibility';
import MenuToggle from './menuToggle';

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 16px;
`;

const LinksWrapper = styled(motion.ul)`
  padding-left: 34px;
  padding-top: 60px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  user-select: none;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 90;
  position: fixed;
  right: 0;
  user-select: none;
`;

const LinkItem = styled(motion.li)`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 0.6em;
`;
const menuVariants = {
  open: {
    transform: 'translateX(13%)'
  },
  closed: {
    transform: 'translateX(103%)'
  }
};

const menuTransition = {
  type: 'spring',
  duration: 11,
  stiffness: 51,
  delay: 0.1,
  transition: '1200ms all ease-in-out'
};

const variants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0
  }
};

const ShadowBG = styled.button`
  width: 100%;
  z-index: 30;
  display: block;
  transform: scale(0);
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: none;
  &.open {
    transform: scale(1);
  }
`;

function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
      <ShadowBG
        className={isOpen ? 'open' : ''}
        onClick={() => setOpen(false)}
      />
      <LinksWrapper
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={menuTransition}
      >
        <Accessibility />
        <LinkItem
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 }
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 }
            }
          }}
        >
          <Link href="/">All Items</Link>
        </LinkItem>
        <LinkItem
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 }
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 }
            }
          }}
        >
          <Link href="/add">Add Items</Link>
        </LinkItem>
        <Marginer />
      </LinksWrapper>
    </NavLinksContainer>
  );
}

export default MobileNavLinks;
