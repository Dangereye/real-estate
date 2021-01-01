import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <h2 className='page-title'>Company overview</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas
          ratione autem maxime maiores delectus inventore aspernatur! Ipsam,
          omnis suscipit quisquam veniam, doloremque consequuntur, voluptate
          ratione quasi repellat natus qui.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae
          odit itaque, esse fuga ab!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto cum
          voluptates dolor! In, architecto voluptas, quisquam quas vitae optio
          dignissimos sequi ex omnis exercitationem officiis dolorum! Animi
          consequatur molestiae illo?
        </p>
        <h2 className='page-title'>Our strategy</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
          reprehenderit totam sint ipsum suscipit reiciendis ipsam est, cum eius
          ea ab esse! Facere quam ea esse reiciendis magni expedita mollitia
          rerum nihil labore consectetur est corrupti odit excepturi aperiam in
          commodi ratione sunt, maiores ducimus corporis minima? Reprehenderit,
          officiis veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sequi
          aut vero ea dolorum ex, ipsa aliquam! Ipsum odio non est natus quas
          quasi! Mollitia blanditiis saepe odio nihil facere.
        </p>
        <Link className='btn btn-primary' to='/homes'>
          <span>Start Home Hunting</span>
          <IoArrowForward />
        </Link>
      </div>
    </section>
  );
};

export default About;
