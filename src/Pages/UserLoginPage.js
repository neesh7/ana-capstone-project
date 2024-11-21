// import { signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { auth } from './firebase';
// import { toast } from 'react-toastify';

// function UserLoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     // const navigate = useNavigate(); // Initialize navigate

//     const handleLogin = async(e) => {
//         e.preventDefault();
//         try{
//             await signInWithEmailAndPassword(auth,email,password);
//             console.log("User logged in Successfully");
//             toast.success("User logged in Successfully",{
//                 position:"top-center"
//             });
//             window.location.href="user-dashboard"
            
//         }
//         catch{

//         }

//         // navigate('/user-dashboard');
//     };

//     const handleGoogleLogin = () => {
//         // Add Google login logic here
//         console.log('Google Login Clicked');
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.loginBox}>
//                 <h2 style={styles.heading}>User Login Portal</h2>
//                 <form style={styles.form} onSubmit={handleLogin}>
//                     <input
//                         type="text"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         style={styles.input}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         style={styles.input}
//                     />
//                     <button type="submit" style={styles.loginButton}>Login</button>
//                     <button type="button" onClick={handleGoogleLogin} style={styles.googleButton}>
//                         Login with Google
//                     </button>
//                     <div style={styles.options}>
//                         <a href="/signup" style={styles.link}>Sign Up</a>
//                         <a href="/" style={styles.link}>Back to Home</a>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         background: 'linear-gradient(135deg, #3a6073 0%, #4a859f 100%)',
//     },
//     loginBox: {
//         backgroundColor: '#ffffff',
//         padding: '40px',
//         borderRadius: '15px',
//         boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
//         textAlign: 'center',
//         width: '400px',
//     },
//     heading: {
//         color: '#333',
//         fontSize: '28px',
//         marginBottom: '20px',
//         fontFamily: 'Arial, sans-serif',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     input: {
//         marginBottom: '15px',
//         padding: '15px',
//         borderRadius: '8px',
//         border: '1px solid #ccc',
//         backgroundColor: '#f9f9f9',
//         fontSize: '16px',
//         transition: 'border-color 0.3s',
//     },
//     inputFocus: {
//         borderColor: '#4a859f',
//     },
//     loginButton: {
//         padding: '15px',
//         backgroundColor: '#4CAF50',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '8px',
//         cursor: 'pointer',
//         fontSize: '16px',
//         marginTop: '10px',
//         transition: 'background 0.3s, transform 0.2s',
//         marginBottom: '10px',
//     },
//     googleButton: {
//         padding: '15px',
//         backgroundColor: '#db4437',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '8px',
//         cursor: 'pointer',
//         fontSize: '16px',
//         marginTop: '10px',
//         transition: 'background 0.3s, transform 0.2s',
//     },
//     options: {
//         marginTop: '15px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         fontSize: '14px',
//     },
//     link: {
//         color: '#1e90ff',
//         textDecoration: 'none',
//         fontSize: '14px',
//     },
// };

// export default UserLoginPage;




// import { signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// import { auth } from './firebase';
// import { toast } from 'react-toastify';

// function UserLoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             console.log("User logged in Successfully");
//             toast.success("User logged in Successfully", {
//                 position: "top-center"
//             });
//             window.location.href = "user-dashboard";
//         } catch (error) {
//             if (error.code === 'auth/invalid-email') {
//                 toast.error("Invalid Email Address", {
//                     position: "top-center"
//                 });
//             } else if (error.code === 'auth/wrong-password') {
//                 toast.error("Incorrect Password", {
//                     position: "top-center"
//                 });
//             } else {
//                 toast.error("Login Failed. Please try again.", {
//                     position: "top-center"
//                 });
//             }
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.loginBox}>
//                 <h2 style={styles.heading}>SocietySphere</h2>
//                 <form style={styles.form} onSubmit={handleLogin}>
//                     <input
//                         type="text"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         style={styles.input}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         style={styles.input}
//                     />
//                     <button type="submit" style={styles.loginButton}>Login</button>
//                     <div style={styles.options}>
//                         <a href="/signup" style={styles.link}>Don't have an account? Sign Up</a>
//                         <a href="/" style={styles.link}>Back to Home</a>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         background: 'linear-gradient(135deg, #e6f7ff 0%, #cceeff 100%)',
//     },
//     loginBox: {
//         backgroundColor: '#ffffff',
//         padding: '40px 40px 50px',
//         borderRadius: '20px',
//         boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center',
//         width: '400px',
//         minWidth: '350px',
//     },
//     heading: {
//         color: '#333',
//         fontSize: '36px',
//         fontWeight: '700',
//         marginBottom: '20px',
//         fontFamily: 'Helvetica, Arial, sans-serif',
//         letterSpacing: '1px',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     input: {
//         marginBottom: '20px',
//         padding: '14px',
//         borderRadius: '10px',
//         border: '1px solid #ddd',
//         backgroundColor: '#fafafa',
//         color: '#333',
//         fontSize: '16px',
//         outline: 'none',
//         boxSizing: 'border-box',
//         transition: 'border-color 0.3s ease',
//     },
//     loginButton: {
//         padding: '14px',
//         backgroundColor: '#4CAF50',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '10px',
//         cursor: 'pointer',
//         fontSize: '18px',
//         transition: 'background 0.3s, transform 0.2s',
//         marginBottom: '20px',
//         fontWeight: '600',
//         boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
//         textTransform: 'uppercase',
//     },
//     options: {
//         marginTop: '20px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         fontSize: '14px',
//         color: '#555',
//     },
//     link: {
//         color: '#4CAF50',
//         textDecoration: 'none',
//         fontSize: '14px',
//         fontWeight: '500',
//     },
// };

// export default UserLoginPage;




import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';
import logo from '../Images/logo.JPG';


function UserLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showMessage, setShowMessage] = useState(false); // State for animation

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);

            setShowMessage(true);

            setTimeout(() => {

                window.location.href = "/user-dashboard";
                
            }, 1000);
        } catch (error) {
            if (error.code === 'auth/invalid-email') {
                alert("Invalid Email Address");
            } else if (error.code === 'auth/wrong-password') {
                alert("Incorrect Password");
            } else {
                alert("Login Failed. Please try again.");
            }
        }
    };

    return (
        <div style={styles.container}>
            {showMessage && (
                <div style={styles.successMessage}>Login Successful!</div>
            )}
            <div style={styles.loginCard}>
                <div style={styles.leftPanel}>
                    <h1 style={styles.heading}>SocietySphere</h1>
                    <p style={styles.subText}>Welcome back, please enter user details.</p>


                    <form style={styles.form} onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                        />
                        <div style={styles.options}>
                            <label>
                                <input type="checkbox" style={styles.checkbox} />
                                Remember me
                            </label>
                            <a href="/forgot-password" style={styles.link}>Forgot password?</a>
                        </div>
                        <button type="submit" style={styles.loginButton}>Sign in</button>
                        <p style={styles.signupText}>
                            Don't have an account? <a href="/#contact" style={styles.link}>Contact Us</a>
                        </p>
                    </form>
                </div>
                <div style={styles.rightPanel}></div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '0 20px',
        background: '#f0f4ff', // Changed background color to match admin page
    },
    successMessage: {
        position: 'absolute',
        top: '20px',
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '5px',
        animation: 'fadeout 2s ease-in-out',
    },
    '@keyframes fadeout': {
        from: { opacity: 1 },
        to: { opacity: 0 },
    },
    loginCard: {
        display: 'flex',
        maxWidth: '900px', // Reduced width to match admin page layout
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        height: '500px', // Match the reduced height from the admin page
    },
    leftPanel: {
        flex: 1.2,
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Centered the form content
        backgroundColor: '#e0e7ff', // Background color similar to admin panel
    },
    rightPanel: {
        flex: 1,
        backgroundColor: '#f0eaff',
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    heading: {
        fontSize: '28px', // Slightly reduced font size
        color: '#333',
        marginBottom: '10px',
        fontWeight: '700',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    },
    subText: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '20px',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '300px', // Reduced form width for better alignment
    },
    input: {
        padding: '12px',
        marginBottom: '12px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '14px',
        outline: 'none',
        width: '100%',
    },
    options: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        fontSize: '14px',
        color: '#555',
    },
    checkbox: {
        marginRight: '5px',
    },
    loginButton: {
        backgroundColor: '#6c63ff',
        color: '#fff',
        padding: '12px',
        fontSize: '14px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background 0.3s',
        width: '100%',
    },
    signupText: {
        marginTop: '15px',
        fontSize: '14px',
        color: '#333',
    },
    link: {
        color: '#6c63ff',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default UserLoginPage;

