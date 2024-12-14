import React from 'react';
function AuthToggle(props) {
    const { isLogin, onToggleClick } = props;

    return (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <a href="#" onClick={onToggleClick} className='text-blue-500 font-bold'>
                    {isLogin ? "Register" : "Login"}
                </a>
            </p>
        </div>
    );
}

export default AuthToggle;
