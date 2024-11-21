// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function AdminLoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     // const navigate = useNavigate();

//     const handleLogin = (e) => {

//         // if (email === 'admin' && password === 'password') {
//         //     // Navigate to AdminDashboard on successful login
//         //     navigate('/admin-dashboard'); // Make sure this path is correct
//         // } else {
//         //     alert('Invalid credentials');
//         //     // You could add error handling here (e.g., showing an error message)
//         // }
//         // navigate('/admin-dashboard');
//     };


//     return (
//         <div style={styles.container}>
//             <div style={styles.loginBox}>
//                 <h2 style={styles.heading}>Admin Login Portal</h2>
//                 <form style={styles.form} >
//                     <input
//                         type="email"
//                         placeholder="Enter email"
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
//                     <button type="submit" onClick={handleLogin} style={styles.loginButton}>Login</button>
//                     <div style={styles.options}>
//                         <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
//                         <Link to="/" style={styles.link}>Back to Home</Link>
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
//         background: 'linear-gradient(135deg, #4a89f0 0%, #6db3f2 100%)',
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

// export default AdminLoginPage;








// import { db } from './firebase'; // Ensure this is correctly configured
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { collection, getDocs, query, where } from 'firebase/firestore';

// function AdminLoginPage({ setIsAdminLoggedIn }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false); // Add loading state
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading

//     try {
//       const adminsRef = collection(db, 'Admins');
//       const q = query(adminsRef, where('Email', '==', email)); // Query by email
//       const querySnapshot = await getDocs(q);

//       if (querySnapshot.empty) {
//         alert('No admin found with this email.');
//         setLoading(false);
//         return;
//       }

//       let isValid = false;

//       querySnapshot.forEach((doc) => {
//         const adminData = doc.data();
//         if (adminData.Password === password) {
//           isValid = true;
//         }
//       });

//       if (isValid) {
//         alert('Login successful!');
//         setIsAdminLoggedIn(true); // Set admin login state
//         navigate('/admin-dashboard'); // Navigate to admin dashboard
//       } else {
//         alert('Invalid password.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An error occurred during login. Please try again.');
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.loginBox}>
//         <h2 style={styles.heading}>Admin Login Portal</h2>
//         <form style={styles.form} onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.input}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={styles.input}
//             required
//           />
//           <button
//             type="submit"
//             style={{ ...styles.loginButton, backgroundColor: loading ? '#aaa' : '#4CAF50' }}
//             disabled={loading} // Disable button when loading
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     background: 'linear-gradient(135deg, #4a89f0 0%, #6db3f2 100%)',
//   },
//   loginBox: {
//     backgroundColor: '#ffffff',
//     padding: '40px',
//     borderRadius: '15px',
//     boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
//     textAlign: 'center',
//     width: '400px',
//   },
//   heading: {
//     color: '#333',
//     fontSize: '28px',
//     marginBottom: '20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     marginBottom: '15px',
//     padding: '15px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     backgroundColor: '#f9f9f9',
//     fontSize: '16px',
//   },
//   loginButton: {
//     padding: '15px',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     marginTop: '10px',
//     transition: 'background-color 0.3s ease',
//   },
// };

// export default AdminLoginPage;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase'; // Ensure this is correctly configured
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../Images/logo.JPG';

function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const adminsRef = collection(db, 'Admins');
            const q = query(adminsRef, where('Email', '==', email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                toast.error('No admin found with this email.');
                return;
            }

            let isValid = false;
            querySnapshot.forEach((doc) => {
                const adminData = doc.data();
                if (adminData.Password === password) {
                    isValid = true;
                }
            });

            if (isValid) {
                toast.success('Login successful!');
                setTimeout(() => navigate('/admin-dashboard'), 1500); // Navigate after showing the toast
            } else {
                toast.error('Invalid password.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <ToastContainer 
                position="top-center" // Toastify notification will appear at the center
                autoClose={3000} 
                hideProgressBar={true} 
                closeOnClick 
                pauseOnHover 
                draggable={false} 
            />
            <div style={styles.loginCard}>
                <div style={styles.leftPanel}>
                    <h1 style={styles.heading}>Admin Portal</h1>
                    <p style={styles.subText}>Sign in to manage your society dashboard.</p>
                    <form style={styles.form} onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            required
                        />
                        <button type="submit" style={styles.loginButton}>Login</button>
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
        background: '#f0f4ff', // Changed background color
    },
    loginCard: {
        display: 'flex',
        maxWidth: '900px', // Reduced card width
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        height: '500px', // Reduced height
    },
    leftPanel: {
        flex: 1.2,
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Centered the form content
        backgroundColor: '#e0e7ff', // Added left panel background
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
        fontSize: '28px', // Slightly reduced
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
        maxWidth: '300px', // Reduced form width
    },
    input: {
        padding: '12px',
        marginBottom: '12px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '14px',
        outline: 'none',
        width: '100%', // Ensure full width of the form
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
        width: '100%', // Ensure button width matches input fields
    },
};

export default AdminLoginPage;
