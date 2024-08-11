import axios from 'axios';

const apiUrl = 'https://rentservernode.onrender.com/apna-rent/v1/auth/macontact'; // Replace with your email service URL

const postEmail = async (body) => {
    try {
        const response = await axios.post(apiUrl, body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default postEmail;