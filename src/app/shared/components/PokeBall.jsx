import React, { useEffect, useContext, useState } from 'react';
import './PokeBall.css';
import { PokeContext } from '../../PokedexContext';

function PokeBall() {

  const pokeContext = useContext(PokeContext);

  const [load, setLoad] = useState(pokeContext.load);

  useEffect(() => {
    setLoad(pokeContext.load === false)
  }, [pokeContext.load]);

  return (
    /* svg describing the poke ball
    composed of multiple parts
    - stars, shown for the success animation
    - actual pokeball, divvied up in
      - bottom, white arc
      - top, red arc with white reflection
      - open, arcs shown for the failure animation to fake the ball being opened
      - center, circle elements
    */
    <svg
      className={`${load ? 'failure' : 'fetching'}`}
      viewBox="0 0 100 100"
      width="150"
      height="150"
    >
      {/* center and scale down
        translate to move the transform-origin in the center of the svg
        scale to avoid cropping when rotating / animating the pokeball
      */}
      <g transform="translate(50 50) scale(0.8)">
        {/* stars positioned in the top right/left of the ball
            scaled to (0 0) by default
            scale to (1 1) for the success animation
        */}
        <g className="stars" transform="scale(0)">
          <path
            fill="#303030"
            stroke="#303030"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M -50 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"
          ></path>
          <path
            fill="#303030"
            stroke="#303030"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M 36 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"
          ></path>
        </g>
        {/* group to move the transform origin to the bottom of the svg */}
        <g transform="translate(0 50)">
          <g className="gravity">{/* rotate this group in the [-10, 10] range for the shake animation */}
            <g transform="translate(0 -50)">
              {/* group wrapping the pokeball itself */}
              <g className="ball" transform="scale(1 1)">{/* scale this group to (1 0.95) for the success animation */}
                <g className="bottom">{/* translate this group downwards to (0, 10) for the failure animation */}
                  {/* white semicircle */}
                  <path
                    fill="#ffffff"
                    stroke="#303030"
                    strokeWidth="5"
                    d="M -47.5 0 a 47.5 47.5 0 0 0 95 0z"
                  ></path>
                </g>
                <g className="top">{/* translate this group upwards to (0, 10) for the failure animation */}
                  {/* red semicircle, no stroke */}
                  <path
                    fill="#f15d5f"
                    d="M -47.5 0 a 47.5 47.5 0 0 1 95 0"
                  ></path>
                  {/* white dashes making up the light's reflection */}
                  <path
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="0 15 9 9 20 100"
                    d="M -38 -0 a 38 38 0 0 1 76 0"
                  ></path>
                  {/* stroke for the red semicircle, to hide the first white dash */}
                  <path
                    fill="none"
                    stroke="#303030"
                    strokeWidth="5"
                    d="M -47.5 0 a 47.5 47.5 0 0 1 95 0z"
                  ></path>
                </g>

                {/* arcs positioned between the top and bottom halves */}
                <g className="open" transform="scale(1 0)">{/* scale this group to (1 1) for the failure animation */}
                  <path
                    fill="#303030"
                    stroke="#303030"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    d="M -47.5 -10 a 190 190 0 0 1 95 0 a 190 190 0 0 1 -95 0"
                  ></path>
                  <path
                    fill="#303030"
                    stroke="#303030"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    d="M -47.5 5 a 160 160 0 0 0 95 0 a 180 180 0 0 0 -95 0"
                  ></path>
                </g>

                {/* circles describing the center of the pokeball */}
                <g className="center">{/* translate this group upwards to (0 -15) or (0 -20) for the failure animation (more than the top to fake the opening) */}
                  <circle
                    fill="#ffffff"
                    stroke="#303030"
                    strokeWidth="5"
                    cx="0"
                    cy="0"
                    r="12"
                  ></circle>
                  <circle
                    fill="#ffffff"
                    stroke="#303030"
                    strokeWidth="3"
                    cx="0"
                    cy="0"
                    r="6"
                  ></circle>
                  {/* innermost circle highlighting the pokeball with a red accent color */}
                  <g className="inner" opacity="0">{/* set opacity to 1 to show the highlight */}
                    <circle
                      fill="#f15d5f"
                      cx="0"
                      cy="0"
                      r="4.5"
                    ></circle>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default PokeBall;