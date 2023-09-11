import { useState } from 'react';


const hiddenChar = '\u034F';

const imageStyle = {
    width: '45px',
    height: '35px',
  };

const Home: React.FC = () => {
    const [text, setText] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }
    const makeunSeen = () => {
        let chars = text.split('');
        let temp = [];
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] !== hiddenChar) {
                temp.push(chars[i]);
            }
            if (Math.random() < 0.1) {
                temp.push(hiddenChar);
            }
        }
        setText(temp.join(''));
    };
    const Seen = () => {
        let chars = text.split('');
        let temp = [];
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] !== hiddenChar) {
                temp.push(chars[i]);
            }
        }
        setText(temp.join(''));
    };
    const copy = () => {
        navigator.clipboard.writeText(text);
    };
    return (
        <div className="home">
            
            <div className="header">
            <img src="OIG.svg" alt="Symbol" style={imageStyle} /> Unseen AI
                
            </div>
            <textarea
                placeholder="Paste the text you wish to make undetectable here..."
                value={text}
                onChange={handleChange}
                spellCheck={false}
            />
            <div className="actions">
            <button onClick={Seen}><span role="img" aria-label="Reverse">&#x21BA;</span> Reverse</button>
                <button onClick={copy}><span role="img" aria-label="Clipboard">&#x1F4CB;</span> Copy</button>
                <button onClick={makeunSeen}><span role="img" aria-label="Lock">&#x1F512;</span> Bypass AI</button>
            </div>
        </div>
    );
};

export default Home;
