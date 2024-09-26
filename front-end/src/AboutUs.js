import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        axios.get('http://localhost:7002/aboutus') 
            .then(response => setImageUrl(response.imageUrl)) 
            .catch(error => console.error("Error fetching About Us data", error));
    }, []);

    return (
        <>
            <h1>Olivia Yu</h1>
            <p>My name is Zitong Yu, and I am currently a junior at New York University, where I am pursuing a joint major in Computer Science and Mathematics. I'm from China and I spent part of my educational journey studying in Maryland before moving to New York. I have a diverse range of interests and hobbies that enrich my life outside of academics. I have a passion for dancing, which allows me to express myself creatively and explore various styles of movement. Fashion is another area I deeply enjoy; I love keeping up with the latest trends and using my wardrobe as a canvas for self-expression. Additionally, I have a keen interest in food, which motivates me to try new cuisines and experiment with cooking different dishes.</p>
           
            <img 
                src={imageUrl} 
                alt="my photo"
                style={{ width: '300px', height: 'auto' }} 
            />
              <img src="https://raw.githubusercontent.com/zitongyu756/photo/refs/heads/main/WechatIMG634.jpg"
                alt="my photo"
                style={{ width: '300px', height: 'auto' }} />

            <p>
                Check out the <Link to="/messages">messages page</Link>.
            </p>
        </>
    );
}

// Make this component available to be imported into any other file
export default AboutUs;
