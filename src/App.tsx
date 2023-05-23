// import { useState } from 'react';
import './App.scss';
// import { Heading } from './components/Heading';
// import { List } from './components/List';
// import { Post } from './components/Post';
// import { Section } from './components/Section';
// import { ImageSizeContext } from './context/ImageSizeContext';
// import { Game } from './components/Game/Game';
// import { Characters } from './components/Characters/Characters';
import { Outlet } from 'react-router-dom';
import { Navbar } from './app/Navbar/Navbar';

function App() {
  // const [isLarge, setIsLarge] = useState<boolean>(false);
  // const imageSize = isLarge ? 150 : 100;

  return (
    <>
      {/* <Section>
        <Heading>Learning about react context</Heading>
        <Section>
            <Heading></Heading>
            <Heading>context test1</Heading>
            <Heading>context test2</Heading>
            <Section>
              <Heading></Heading>
              <Heading></Heading>
              <Heading></Heading>
            </Section>
        </Section>
        <Post
          title="how to use react context"
          text="it is good to learn a new concept and be able to practice it"
        />
      </Section>
      <Section>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images {isLarge ? 'checked': 'no checked'}
        </label>
        <hr />
        <ImageSizeContext.Provider value={imageSize}>
          <List />
        </ImageSizeContext.Provider>
      </Section> */}
      {/* <Section>
        <Game />
      </Section> */}
      <Navbar />
      <div className='main-container'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
