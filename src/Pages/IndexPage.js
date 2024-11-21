// import React from 'react';
// import { Link } from 'react-router-dom';
// import backgroundImage from '../Images/indexpage.jpg';

// function IndexPage() {
//     const services = [
//         {
//             name: 'Online Booking',
//             description: 'Easy and convenient online booking for all community facilities.',
//             image: 'onlinebooking.jpg',
//         },
//         {
//             name: 'Maintenance Services',
//             description: 'Regular maintenance and support for community infrastructure.',
//             image: 'maintainance.jpg',
//         },
//         {
//             name: 'Health Programs',
//             description: 'Health check-ups and wellness programs for all community members.',
//             image: 'health.jpg',
//         },
//         {
//             name: 'Medical Facilities',
//             description: 'Skill development workshops to empower community members.',
//             image: 'ambulance.jpg',
//         },
//         {
//             name: 'Community Events',
//             description: 'Support for low-income families and students in need.',
//             image: 'events.jpg',
//         },
//         {
//             name: 'Security',
//             description: 'Engaging events to foster community spirit and participation.',
//             image: 'cctv.jpg',
//         },
//     ];

//     return (
//         <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', color: '#333' }}>
//             {/* Fixed Header */}
//             <header style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 background: 'linear-gradient(90deg, #4caf50, #008080)',
//                 color: '#fff',
//                 padding: '15px 20px',
//                 zIndex: 1000,
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             }}>
//                 <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <ul style={{ listStyle: 'none', display: 'flex', padding: 0, margin: 0 }}>
//                         <li style={{ marginRight: '20px' }}>
//                             <a href="#home" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Home</a>
//                         </li>
//                         <li style={{ marginRight: '20px' }}>
//                             <a href="#about" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>About</a>
//                         </li>
//                         <li style={{ marginRight: '20px' }}>
//                             <a href="#services" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Services</a>
//                         </li>
//                         <li>
//                             <a href="#contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Contact</a>
//                         </li>
//                     </ul>
//                     <div>
//                         <Link to="/user-login">
//                             <button style={{
//                                 background: '#ff9800',
//                                 border: 'none',
//                                 color: '#fff',
//                                 padding: '10px 20px',
//                                 fontSize: '16px',
//                                 cursor: 'pointer',
//                                 borderRadius: '5px',
//                                 marginRight: '10px',
//                                 transition: 'all 0.3s ease',
//                             }}
//                                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e68a00'}
//                                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff9800'}
//                             >
//                                 User Login
//                             </button>
//                         </Link>
//                         <Link to="/admin-login">
//                             <button style={{
//                                 background: '#ff9800',
//                                 border: 'none',
//                                 color: '#fff',
//                                 padding: '10px 20px',
//                                 fontSize: '16px',
//                                 cursor: 'pointer',
//                                 borderRadius: '5px',
//                                 transition: 'all 0.3s ease',
//                             }}
//                                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e68a00'}
//                                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff9800'}
//                             >
//                                 Admin Login
//                             </button>
//                         </Link>
//                     </div>
//                 </nav>
//             </header>

//             {/* Main content */}
//             <main style={{ paddingTop: '100px' }}>
//                 {/* Hero Section */}
//                 <section id="home" style={{
//                     backgroundImage: `url(${backgroundImage})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     height: '90vh',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     color: '#fff',
//                     textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
//                     textAlign: 'center',
//                 }}>
//                     <h1 style={{ fontSize: '3rem', marginBottom: '20px', animation: 'fadeIn 2s' }}>Welcome to Our Community</h1>
//                     <p style={{ fontSize: '1.2rem', maxWidth: '600px', animation: 'fadeIn 2s 1s' }}>
//                         Discover how we bring people together with cutting-edge services for everyone.
//                     </p>
//                 </section>

//                 {/* Services Section */}
//                 <section id="services" style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
//                     <h2 style={{ marginBottom: '20px', fontSize: '2rem', color: '#333' }}>Our Services</h2>
//                     <p style={{ marginBottom: '40px', fontSize: '1.1rem', color: '#555' }}>
//                         Explore the wide range of services tailored for your convenience and comfort.
//                     </p>
//                     <div style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                         gap: '20px',
//                         maxWidth: '1200px',
//                         margin: '0 auto',
//                     }}>
//                         {services.map((service, index) => (
//                             <div key={index} style={{
//                                 background: '#fff',
//                                 borderRadius: '10px',
//                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                                 overflow: 'hidden',
//                                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                                 cursor: 'pointer',
//                             }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.transform = 'translateY(-10px)';
//                                     e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.transform = 'translateY(0)';
//                                     e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
//                                 }}
//                             >
//                                 <img src={`/Images/${service.image}`} alt={service.name} style={{
//                                     width: '100%',
//                                     height: '200px',
//                                     objectFit: 'cover',
//                                     transition: 'transform 0.3s ease',
//                                 }}
//                                     onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//                                     onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
//                                 />
//                                 <div style={{ padding: '20px' }}>
//                                     <h3 style={{ marginBottom: '10px', color: '#333' }}>{service.name}</h3>
//                                     <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>{service.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Footer */}
//                 <footer style={{
//                     background: 'linear-gradient(90deg, #333, #444)',
//                     color: '#fff',
//                     padding: '20px',
//                     textAlign: 'center',
//                 }}>
//                     <p>© 2024 Our Community | All Rights Reserved</p>
//                 </footer>
//             </main>
//         </div>
//     );
// }

// export default IndexPage;



import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/indexpage.jpg';

function IndexPage() {
    const services = [
        {
            name: 'Online Booking',
            description: 'Easy and convenient online booking for all community facilities.',
            image: 'onlinebooking.jpg',
        },
        {
            name: 'Maintenance Services',
            description: 'Regular maintenance and support for community infrastructure.',
            image: 'maintainance.jpg',
        },
        {
            name: 'Health Programs',
            description: 'Health check-ups and wellness programs for all community members.',
            image: 'health.jpg',
        },
        {
            name: 'Medical Facilities',
            description: 'Skill development workshops to empower community members.',
            image: 'ambulance.jpg',
        },
        {
            name: 'Community Events',
            description: 'Support for low-income families and students in need.',
            image: 'events.jpg',
        },
        {
            name: 'Security',
            description: 'Engaging events to foster community spirit and participation.',
            image: 'cctv.jpg',
        },
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', color: '#333' }}>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(90deg, #4caf50, #008080)',
                color: '#fff',
                padding: '15px 20px',
                zIndex: 1000,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', padding: 0, margin: 0 }}>
                        <li style={{ marginRight: '20px' }}>
                            <a href="#home" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Home</a>
                        </li>
                        <li style={{ marginRight: '20px' }}>
                            <a href="#about" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>About</a>
                        </li>
                        <li style={{ marginRight: '20px' }}>
                            <a href="#services" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Services</a>
                        </li>
                        <li>
                            <a href="#contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Contact</a>
                        </li>
                    </ul>
                    <div>
                        <Link to="/user-login">
                            <button style={{
                                background: '#ff9800',
                                border: 'none',
                                color: '#fff',
                                padding: '10px 20px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                marginRight: '10px',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e68a00'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff9800'}
                            >
                                User Login
                            </button>
                        </Link>
                        <Link to="/admin-login">
                            <button style={{
                                background: '#ff9800',
                                border: 'none',
                                color: '#fff',
                                padding: '10px 20px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e68a00'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff9800'}
                            >
                                Admin Login
                            </button>
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main style={{ paddingTop: '100px' }}>
                {/* Hero Section */}
                <section id="home" style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '90vh',
                    marginTop:'-2.5%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    textAlign: 'center',
                }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to Our Community</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
                        Discover how we bring people together with cutting-edge services for everyone.
                    </p>
                </section>

                {/* About Section */}
                <section id="about" style={{ padding: '60px 20px', backgroundColor: '#e0f7fa', color: '#333', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>About Us</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                        Our mission is to enhance the quality of life for all community members by providing modern, accessible, and inclusive solutions. We believe in fostering a strong sense of togetherness while addressing community needs effectively.
                    </p>
                </section>

                {/* Services Section */}
                <section id="services" style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Our Services</h2>
                    <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>
                        Explore the wide range of services tailored for your convenience and comfort.
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '20px',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}>
                        {services.map((service, index) => (
                            <div key={index} style={{
                                background: '#fff',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}>
                                <img src={`/Images/${service.image}`} alt={service.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '20px' }}>
                                    <h3>{service.name}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" style={{ padding: '60px 20px', backgroundColor: '#ffe0b2', color: '#333', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Contact Us</h2>
                    <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>
                        We’re here to assist you. Feel free to reach out!
                    </p>
                    <form style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <input type="text" placeholder="Your Name" style={formFieldStyle} />
                        <input type="email" placeholder="Your Email" style={formFieldStyle} />
                        <textarea placeholder="Your Message" rows="5" style={formFieldStyle}></textarea>
                        <button type="submit" style={{
                            background: '#4caf50',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            cursor: 'pointer',
                            borderRadius: '5px',
                        }}>
                            Submit
                        </button>
                    </form>
                </section>

                {/* Footer */}
                <footer style={{
                    background: 'linear-gradient(90deg, #333, #444)',
                    color: '#fff',
                    padding: '20px',
                    textAlign: 'center',
                }}>
                    <p>© 2024 Our Community | All Rights Reserved</p>
                </footer>
            </main>
        </div>
    );
}

const formFieldStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
};

export default IndexPage;

