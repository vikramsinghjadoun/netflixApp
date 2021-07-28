import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComA = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}
    `);
      console.log(res.data.sprites.other.dream_world.front_default);
      setName(res.data.name);
      setMoves(res.data.moves.length);
      setImage(res.data.sprites.other.dream_world.front_default);
    }
    getData();
  });
  return (
    <>
      <img
        style={{ float: 'right', marginRight: '10px' }}
        src={image}
        alt='image'
      />
      <h1>
        You choose <span style={{ color: 'maroon' }}>{num}</span>value
      </h1>
      <h1>
        My name is <span style={{ color: 'maroon' }}>{name}</span>
      </h1>
      <h1>
        I have <span style={{ color: 'maroon' }}>{moves}</span>moves{' '}
      </h1>
      <select
        value={num}
        onChange={e => {
          setNum(e.target.value);
        }}
      >
        <option value='1'> 1 </option>
        <option value='25'> 25 </option>
        <option value='3'> 3 </option>
        <option value='4'> 4 </option>
        <option value='5'> 5 </option>
        <option value='6'> 6 </option>
      </select>
    </>
  );
};

export default ComA;
