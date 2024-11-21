// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth, db } from "./firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";

// function RegisterUser() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [mobile, setMobile] = useState(""); 

  
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       const user = auth.currentUser;
//       console.log(user);
//       if (user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           email: user.email,
//           firstName: fname,
//           lastName: lname,
//           mobile: mobile, 
//         });
//       }
//       console.log("User Registered Successfully!!");
//       toast.success("User Registered Successfully!!", {
//         position: "top-center",
//       });
//     } catch (error) {
//       console.log(error.message);
//       toast.error(error.message, {
//         position: "bottom-center",
//       });
//     }
//   };

//   const styles = {
//     container: {
//       marginTop: "5rem",
//       display: "flex",
//       justifyContent: "center",
//     },
//     card: {
//       width: "100%",
//       maxWidth: "450px",
//       padding: "2rem",
//       backgroundColor: "#f9f9f9",
//       boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//       borderRadius: "12px",
//       border: "1px solid #ddd",
//     },
//     cardHeader: {
//       textAlign: "center",
//       marginBottom: "1.5rem",
//       fontSize: "1.75rem",
//       fontWeight: "600",
//       color: "#007bff",
//     },
//     formGroup: {
//       marginBottom: "1.25rem",
//     },
//     input: {
//       width: "100%",
//       padding: "0.75rem",
//       fontSize: "1rem",
//       borderRadius: "4px",
//       border: "1px solid #ccc",
//       marginTop: "0.5rem",
//     },
//     button: {
//       backgroundColor: "#28a745",
//       borderColor: "#28a745",
//       padding: "0.75rem",
//       fontSize: "1rem",
//       color: "#fff",
//       borderRadius: "4px",
//       transition: "background-color 0.3s ease-in-out",
//       cursor: "pointer",
//     },
//     buttonHover: {
//       backgroundColor: "#218838",
//     },
//     footerText: {
//       textAlign: "center",
//       marginTop: "1rem",
//       fontSize: "0.875rem",
//       color: "#555",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div className="card" style={styles.card}>
//         <h3 className="text-center mb-4" style={styles.cardHeader}>
//           Register Society Member
//         </h3>

//         <form onSubmit={handleRegister}>
//           <div className="mb-3" style={styles.formGroup}>
//             <label htmlFor="fname" className="form-label">
//               First Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="fname"
//               placeholder="Enter first name"
//               value={fname}
//               onChange={(e) => setFname(e.target.value)}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div className="mb-3" style={styles.formGroup}>
//             <label htmlFor="lname" className="form-label">
//               Last Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="lname"
//               placeholder="Enter last name"
//               value={lname}
//               onChange={(e) => setLname(e.target.value)}
//               style={styles.input}
//             />
//           </div>

//           <div className="mb-3" style={styles.formGroup}>
//             <label htmlFor="email" className="form-label">
//               Email Address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div className="mb-3" style={styles.formGroup}>
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div className="mb-3" style={styles.formGroup}>
//             <label htmlFor="mobile" className="form-label">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               className="form-control"
//               id="mobile"
//               placeholder="Enter mobile number"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div className="d-grid mb-3">
//             <button
//               type="submit"
//               className="btn btn-primary btn-block"
//               style={styles.button}
//               onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
//               onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
//             >
//               Register
//             </button>
//           </div>
//         </form>

//         <div style={styles.footerText}>
//           <p>By registering, you agree to our terms and conditions.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RegisterUser;



import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

function RegisterUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          mobile: mobile,
        });

        toast.success("User Registered Successfully!!", {
          position: "top-center", // Success message on top-center
        });
      }
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered!", {
          position: "bottom-center", // Error message at the bottom-center
        });
      } else if (error.code === "auth/weak-password") {
        toast.error("The password is too weak!", {
          position: "bottom-center",
        });
      } else {
        toast.error("Registration failed! Please try again.", {
          position: "bottom-center",
        });
      }
    }
  };

  const styles = {
    // Background color for the entire page
    page: {
      backgroundColor: "#f0f8ff", // Light blue background for the whole page
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      width: "100%",
      maxWidth: "450px",
      padding: "2rem",
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "12px",
      border: "1px solid #ddd",
    },
    cardHeader: {
      textAlign: "center",
      marginBottom: "1.5rem",
      fontSize: "1.75rem",
      fontWeight: "600",
      color: "#007bff",
    },
    formGroup: {
      marginBottom: "1.25rem",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      marginTop: "0.5rem",
    },
    button: {
      backgroundColor: "#74c0fc", // Light Blue Color
      borderColor: "#74c0fc",
      padding: "0.75rem",
      fontSize: "1rem",
      color: "#fff",
      borderRadius: "4px",
      transition: "background-color 0.3s ease-in-out",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#5ca8e0", // Darker shade on hover
    },
    footerText: {
      textAlign: "center",
      marginTop: "1rem",
      fontSize: "0.875rem",
      color: "#555",
    },
  };

  return (
    <div style={styles.page}>
      <div className="card" style={styles.card}>
        <h3 className="text-center mb-4" style={styles.cardHeader}>
          Register Society Member
        </h3>

        <form onSubmit={handleRegister}>
          <div className="mb-3" style={styles.formGroup}>
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="Enter first name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div className="mb-3" style={styles.formGroup}>
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
              placeholder="Enter last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              style={styles.input}
            />
          </div>

          <div className="mb-3" style={styles.formGroup}>
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div className="mb-3" style={styles.formGroup}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div className="mb-3" style={styles.formGroup}>
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div className="d-grid mb-3">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
              Register
            </button>
          </div>
        </form>

        <div style={styles.footerText}>
          <p>By registering, you agree to our terms and conditions.</p>
        </div>
      </div>

      {/* Add ToastContainer here so the toasts will be displayed */}
      <ToastContainer />
    </div>
  );
}

export default RegisterUser;
