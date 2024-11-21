// import React, { useState, useEffect } from 'react';

// const AdminDashboard = () => {
//   const [loginTime, setLoginTime] = useState('');
//   const [hoveredIndex, setHoveredIndex] = useState(null); // To track the hovered card

//   useEffect(() => {
//     // Get the current time and set it as the login time
//     const currentTime = new Date().toLocaleString();
//     setLoginTime(currentTime);
//   }, []);

//   const handleLogout = () => {
//     alert('You have been logged out.');
//     // Add logout logic here
//   };

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index); // Set the hovered card's index
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null); // Reset on mouse leave
//   };

//   return (
//     <div style={styles.dashboardContainer}>
//       <header style={styles.header}>
//         <div style={styles.welcomeMsg}>
//           <h1 style={styles.headerText}>Welcome, Admin!</h1>
//           <p style={styles.loginTimeText}>Login Time: <span>{loginTime}</span></p>
//         </div>
//         <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
//       </header>

//       <div style={styles.cardsGrid}>
//         {['Registered Users', 'User Permissions', 'Reports', 'Settings', 'Notifications', 'Activity Log'].map((title, index) => (
//           <div
//             key={index}
//             style={hoveredIndex === index ? { ...styles.card, ...styles.cardHover } : styles.card}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <h3 style={styles.cardTitle}>{title}</h3>
//             <p>{`Description for ${title}`}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   dashboardContainer: {
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     minHeight: '100vh',
//     fontFamily: 'Arial, sans-serif',
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#4CAF50',
//     padding: '20px',
//     color: 'white',
//     borderRadius: '8px',
//     marginBottom: '20px',
//   },
//   welcomeMsg: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   headerText: {
//     margin: 0,
//   },
//   loginTimeText: {
//     fontSize: '14px',
//   },
//   logoutBtn: {
//     backgroundColor: '#f44336',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   cardsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '20px',
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s, box-shadow 0.3s',
//     cursor: 'pointer',
//   },
//   cardHover: {
//     transform: 'scale(1.05)',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//   },
//   cardTitle: {
//     marginBottom: '10px',
//     fontSize: '18px',
//   },
// };

// export default AdminDashboard;







// import React, { useState, useEffect } from 'react';
// import { auth } from './firebase';


// const AdminDashboard = () => {
//   const [loginTime, setLoginTime] = useState('');
//   const [hoveredIndex, setHoveredIndex] = useState(null); // To track the hovered card

//   useEffect(() => {
//     // Get the current time and set it as the login time
//     const currentTime = new Date().toLocaleString();
//     setLoginTime(currentTime);
//   }, []);

//   async function handleLogout() {
//     try {
//       await auth.signOut();
//       window.location.href = "/";
//       console.log("User logged out successfully!");
//     } catch (error) {
//       console.error("Error logging out:", error.message);
//     }
//   }

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index); // Set the hovered card's index
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null); // Reset on mouse leave
//   };

//   const handleButtonClick = (title) => {
//     // Simulate navigation to another page
//     alert(`Navigating to the page for ${title}`);
//     // Use `window.location.href` for actual navigation to a new page.
//     // window.location.href = '/your-target-page';
//   };

//   return (
//     <div style={styles.dashboardContainer}>
//       <header style={styles.header}>
//         <div style={styles.welcomeMsg}>
//           <h1 style={styles.headerText}>Welcome, Admin!</h1>
//           <p style={styles.loginTimeText}>Login Time: <span>{loginTime}</span></p>
//         </div>
//         <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
//       </header>

//       <div style={styles.cardsGrid}>
//         {['Register User', 'User Permissions', 'Reports', 'Settings', 'Notifications', 'Activity Log'].map((title, index) => (
//           <div
//             key={index}
//             style={hoveredIndex === index ? { ...styles.card, ...styles.cardHover } : styles.card}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <h3 style={styles.cardTitle}>{title}</h3>
//             <p>{`Description for ${title}`}</p>
//             {hoveredIndex === index && (
//               <button style={styles.cardButton} onClick={() => handleButtonClick(title)}>
//                 Go to {title}
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   dashboardContainer: {
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     minHeight: '100vh',
//     fontFamily: 'Arial, sans-serif',
//     margin: '0 auto', // Center the container
//     maxWidth: '1200px', // Max width for the dashboard
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#4CAF50',
//     padding: '20px',
//     color: 'white',
//     borderRadius: '8px',
//     marginBottom: '20px',
//   },
//   welcomeMsg: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   headerText: {
//     margin: 0,
//   },
//   loginTimeText: {
//     fontSize: '14px',
//   },
//   logoutBtn: {
//     backgroundColor: '#f44336',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   cardsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '20px',
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s, box-shadow 0.3s, width 0.3s',
//     cursor: 'pointer',
//     width: '300px', // Decreased width
//     height: '180px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     margin: '0 auto', // Center the card
//   },
//   cardHover: {
//     transform: 'scale(1.05)',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//     width: '330px', // Slightly larger on hover
//   },
//   cardTitle: {
//     marginBottom: '10px',
//     fontSize: '18px',
//   },
//   cardButton: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginTop: '10px',
//     alignSelf: 'flex-start',
//     transition: 'opacity 0.3s',
//     opacity: 1,
//   },
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { auth } from './firebase';

const AdminDashboard = () => {
  const [loginTime, setLoginTime] = useState('');

  useEffect(() => {
    // Set the current time as login time
    const currentTime = new Date().toLocaleString();
    setLoginTime(currentTime);
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = '/';
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  }

  const navigateToPage = (path) => {
    // Example function to handle navigation
    window.location.href = path;
  };

  const cards = [
    { title: 'Register User', path: '/register-user', description: 'Manage user registrations' },
    { title: 'User Permissions', path: '/user-permissions', description: 'Set and edit permissions' },
    { title: 'Reports', path: '/reports', description: 'Generate and view reports' },
    { title: 'Settings', path: '/settings', description: 'Manage system settings' },
    { title: 'Notifications', path: '/notifications', description: 'Manage notifications' },
    { title: 'Activity Log', path: '/activity-log', description: 'View system activity logs' },
  ];

  return (
    <div style={styles.dashboardContainer}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.headerText}>Welcome, Admin!</h1>
          <p style={styles.loginTimeText}>
            Login Time: <span>{loginTime}</span>
          </p>
        </div>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div style={styles.cardsGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => navigateToPage(card.path)}
          >
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
            <button
              style={styles.cardButton}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering card click
                navigateToPage(card.path);
              }}
            >
              Go to {card.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: '20px',
    color: 'white',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  headerText: {
    margin: 0,
  },
  loginTimeText: {
    fontSize: '14px',
  },
  logoutBtn: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  cardDescription: {
    marginBottom: '15px',
    fontSize: '14px',
    color: '#555',
  },
  cardButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    fontSize: '14px',
  },
};

export default AdminDashboard;
