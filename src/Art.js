import React from 'react'
import { map } from 'lodash'

import morgan from './images/morgan.png'
import hands from './images/hands.png'
// covid / 2020
import jtree from './images/j-tree_sleeping-woman.jpeg'
import carson from './images/carson.jpg'
import lindsey from './images/lindsey.jpg'
import susan from './images/susan.jpg'
import pines from './images/pines.jpeg'
import pines2 from './images/pines2.jpeg'
import roses from './images/roses.jpeg'
import pool from './images/covid-pool.jpeg'
import puzzle from './images/covid-puzzle.jpg'
import seuss from './images/seuss.jpeg'
import seuss2 from './images/seuss2.jpeg'
// oil
import room_s from './images/room-sketch.jpg'
import room from './images/room.jpg'
import kuli from './images/kuli.jpg'
import blm from './images/blm.jpg'
import handeyes from './images/eye-hands.jpg'
// ink
import georgia from './images/georgia.jpg'
import rob from './images/rob.JPG'
import reader from './images/reader.JPG'
// portraits
import bush from './images/bush.jpeg'
import chaos from './images/chaos.jpeg'
import time from './images/time.jpeg'
import time_sneeze from './images/time-is-contagious.png'
import guitar from './images/guitar.jpeg'
import sf from './images/sf.jpeg'
import sf2 from './images/sf2.jpeg'
// alternative
import maze from './images/beach_maze.jpg'
import jtmf from './images/jtmf.jpeg'
import jtmf2 from './images/jtmf2.jpeg'



const images = {
    // morgan,
    hands,
    jtree,
    carson,
    susan,
    lindsey,
    pines,
    pines2,
    roses,
    pool,
    puzzle,
    seuss,
    seuss2,
    room_s,
    room,
    kuli,
    blm,
    handeyes,
    georgia,
    rob,
    reader,
    bush,
    chaos,
    time,
    time_sneeze,
    guitar,
    sf,
    sf2,
    maze,
    jtmf,
    jtmf2
}

export default function Art() {
    return (
        <div className='gallery'>
            {map(images, ((pic,alt) => (
                <img alt={alt} key={alt} width="500" src={pic} />
            )))}
        </div>
    )
}
