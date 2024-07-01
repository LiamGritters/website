import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { StaticImage } from 'gatsby-plugin-image';

const StyledContactSection = styled.section`
  max-width: 900px;
  margin: 0 auto 100px;
  text-align: center;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 400px;

  @media (max-width: 768px) {
    margin: 100px auto 0;
    width: 70%;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading">Contact</h2>

      <div className="inner">
        <div>
          <h2 className="title">Get In Touch</h2>

          <p>
            Please reach out if you have any questions or would like to get in contact. I am always
            working on new projects, so check back for on-going progress.
          </p>

          <a className="email-link" href={`mailto:${email}`}>
            Say Hello
          </a>
        </div>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/contact.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
