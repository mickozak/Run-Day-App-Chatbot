import React from 'react';

import Banner from '../web/Banner';
import Functions from '../web/Functions';
import Team from '../web/Team';
import Form from '../web/Form';
import Footer from '../web/Footer';

import run_one from '../../img/run_one.webp';
import run_two from '../../img/run_two.webp';
import run_three from '../../img/run_three.webp';

const controlElement = {
    one: 1,
    two: 2,
    three: 3
}

const Landing = () => (
    <div >
          <Banner run={run_one} control={controlElement.one}/>
          <Functions/>
          <Banner run={run_two} control={controlElement.two}/>
          <Team/>
          <Banner run={run_three} control={controlElement.three}/>
          <Form/>
          <Footer/>
    </div>
)

export default Landing;