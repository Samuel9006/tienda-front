import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            onLogin(token);
        } catch (error) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Inicio de sesión</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default Login;