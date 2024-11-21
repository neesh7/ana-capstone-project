// import React, { useState, useEffect } from "react";
// import styled, { keyframes } from "styled-components";
// import { useNavigate } from "react-router-dom"; // For navigation
// import { auth, db } from "./firebase";
// import { doc, getDoc } from "firebase/firestore";

// const UserDashboard = () => {
//   const [userDetails, setUserDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // Function to fetch user data from Firestore
//   const fetchUserData = async (userId) => {
//     try {
//       const docRef = doc(db, "Users", userId);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setUserDetails(docSnap.data());
//       } else {
//         console.log("No user data found");
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const user = auth.currentUser;
//     if (user) {
//       fetchUserData(user.uid); // Fetch user data if logged in
//     } else {
//       navigate("/login"); // Redirect to login if user is not authenticated
//     }
//   }, [navigate]);

//   const handleLogout = async () => {
//     try {
//       await auth.signOut();
//       navigate("/login");
//     } catch (error) {
//       console.error("Error logging out:", error.message);
//     }
//   };

//   if (loading) {
//     return (
//       <LoaderContainer>
//         <Loader>Loading...</Loader>
//       </LoaderContainer>
//     );
//   }

//   return (
//     <DashboardContainer>
//       <Sidebar>
//         <Logo>Society Sphere</Logo>
//         <SidebarList>
//           <SidebarListItem>
//             <SidebarLink href="#profile">Profile</SidebarLink>
//           </SidebarListItem>
//           <SidebarListItem>
//             <SidebarLink href="#notices">Notices</SidebarLink>
//           </SidebarListItem>
//           <SidebarListItem>
//             <SidebarLink href="#requests">My Requests</SidebarLink>
//           </SidebarListItem>
//           <SidebarListItem>
//             <SidebarLink href="#payments">Payments</SidebarLink>
//           </SidebarListItem>
//           <SidebarListItem>
//             <SidebarLink href="#settings">Settings</SidebarLink>
//           </SidebarListItem>
//         </SidebarList>

//         <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
//       </Sidebar>

//       <Content>
//         <Header>
//           <WelcomeMessage>
//             Welcome {userDetails ? userDetails.firstName : "Guest"}
//           </WelcomeMessage>
//         </Header>

//         <Sections>
//           <SectionCard>
//             <CardTitle>Notices</CardTitle>
//             <p>You have 3 new notices</p>
//             <CardButton>View Notices</CardButton>
//           </SectionCard>

//           <SectionCard>
//             <CardTitle>Payment Status</CardTitle>
//             <p>Next payment due on 15th Nov</p>
//             <CardButton>View Payments</CardButton>
//           </SectionCard>

//           <SectionCard>
//             <CardTitle>Active Requests</CardTitle>
//             <p>2 service requests in progress</p>
//             <CardButton>View Requests</CardButton>
//           </SectionCard>
//         </Sections>
//       </Content>

//       <AnimatedBackground />
//     </DashboardContainer>
//   );
// };

// // Styled-components for Dashboard
// const LoaderContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f4f6f7;
// `;

// const Loader = styled.div`
//   font-size: 20px;
//   color: #3498db;
// `;

// const DashboardContainer = styled.div`
//   display: flex;
//   height: 100vh;
//   font-family: 'Roboto', sans-serif;
//   position: relative;
//   overflow: hidden;
// `;

// const Sidebar = styled.nav`
//   width: 250px;
//   background-color: #2C3E50;
//   padding: 20px;
//   color: #fff;
//   position: relative;
//   z-index: 10;
// `;

// const Logo = styled.h2`
//   font-size: 24px;
//   margin-bottom: 40px;
//   color: #ECF0F1;
//   text-align: center;
// `;

// const SidebarList = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// const SidebarListItem = styled.li`
//   margin-bottom: 20px;
// `;

// const SidebarLink = styled.a`
//   color: #ECF0F1;
//   text-decoration: none;
//   font-size: 18px;
//   display: block;
//   padding: 10px;
//   border-radius: 4px;
//   transition: background 0.3s ease;

//   &:hover {
//     background-color: #34495E;
//   }
// `;

// const LogoutButton = styled.a`
//   position: absolute;
//   bottom: 20px;
//   left: 20px;
//   color: #ECF0F1;
//   text-decoration: none;
//   font-size: 18px;
//   padding: 10px;
//   background-color: #E74C3C;
//   border-radius: 4px;
//   transition: background 0.3s ease;

//   &:hover {
//     background-color: #C0392B;
//   }
// `;

// const Content = styled.main`
//   flex: 1;
//   padding: 30px;
//   z-index: 5;
//   position: relative;
//   background-color: #F4F6F7;
// `;

// const Header = styled.header`
//   background-color: #3498DB;
//   padding: 15px;
//   color: #fff;
//   text-align: center;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// `;

// const WelcomeMessage = styled.h1`
//   margin: 0;
//   font-size: 24px;
// `;

// const Sections = styled.section`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 30px;
// `;

// const SectionCard = styled.div`
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   width: 30%;
//   text-align: center;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CardTitle = styled.h3`
//   color: #2980B9;
//   margin-bottom: 15px;
// `;

// const CardButton = styled.button`
//   margin-top: 15px;
//   padding: 10px 20px;
//   background-color: #2980B9;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background-color: #2471A3;
//   }
// `;

// // Animation for background gradient
// const gradientAnimation = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// const AnimatedBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(45deg, #3498DB, #2980B9);
//   background-size: 200% 200%;
//   z-index: 1;
//   animation: ${gradientAnimation} 10s ease infinite;
// `;

// export default UserDashboard;



import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { auth, db } from './firebase'
import { doc, getDoc } from "firebase/firestore"
// import {toast} from 'react-toastify'
import { useEffect } from "react";


const UserDashboard = () => {
  const [userDetails, setUserDetails] = useState(null);

  
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("No user data found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };
  
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }


  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>Society Sphere</Logo>
        <SidebarList>
          <SidebarListItem><SidebarLink href="#profile">Profile</SidebarLink></SidebarListItem>
          <SidebarListItem><SidebarLink href="#notices">Notices</SidebarLink></SidebarListItem>
          <SidebarListItem><SidebarLink href="#requests">My Requests</SidebarLink></SidebarListItem>
          <SidebarListItem><SidebarLink href="#payments">Payments</SidebarLink></SidebarListItem>
          <SidebarListItem><SidebarLink href="#settings">Settings</SidebarLink></SidebarListItem>
        </SidebarList>

        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Sidebar>

      <Content>
        <Header>
          <WelcomeMessage>
            Welcome {userDetails ? userDetails.firstName : "Guest"}
          </WelcomeMessage>

        </Header>

        <Sections>
          <SectionCard>
            <CardTitle>Request Query</CardTitle>
            <p>Raise a query.</p>
            <CardButton>Request Query</CardButton>
          </SectionCard>

          <SectionCard>
            <CardTitle>Payment Status</CardTitle>
            <p>Next payment due on 15th Nov</p>
            <CardButton>View Payments</CardButton>
          </SectionCard>

          <SectionCard>
            <CardTitle>Active Requests</CardTitle>
            <p>2 service requests in progress</p>
            <CardButton>View Requests</CardButton>
          </SectionCard>
        </Sections>
      </Content>

      <AnimatedBackground />
    </DashboardContainer>
  );
};

// Styled-components for Dashboard

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  position: relative;
  overflow: hidden;
`;

const Sidebar = styled.nav`
  width: 250px;
  background-color: #2C3E50;
  padding: 20px;
  color: #fff;
  position: relative;
  z-index: 10; /* Ensure sidebar is above the background */
`;

const Logo = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
  color: #ECF0F1;
  text-align: center;
`;

const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarListItem = styled.li`
  margin-bottom: 20px;
`;

const SidebarLink = styled.a`
  color: #ECF0F1;
  text-decoration: none;
  font-size: 18px;
  display: block;
  padding: 10px;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #34495E;
  }
`;

const LogoutButton = styled.a`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #ECF0F1;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  background-color: #E74C3C;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #C0392B;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 30px;
  z-index: 5;
  position: relative;
  background-color: #F4F6F7;
`;

const Header = styled.header`
  background-color: #3498DB;
  padding: 15px;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const WelcomeMessage = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const Sections = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const SectionCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 30%;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h3`
  color: #2980B9;
  margin-bottom: 15px;
`;

const CardButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #2980B9;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #2471A3;
  }
`;

// Animation for background gradient
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #3498DB, #2980B9);
  background-size: 200% 200%;
  z-index: 1; /* Ensure the background stays behind other elements */
  animation: ${gradientAnimation} 10s ease infinite;
`;

export default UserDashboard;
