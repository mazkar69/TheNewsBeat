
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import NewsTemplate from './pages/NewsTemplate';
//Importing common file


import Footer from './components/footer/Footer';
import FooterNav from './components/footer/FooterNav'
import NewsDescription from './pages/NewsDescription';
import Course from './pages/Course';
import ScrollToTop from './ScrollToTop';
import Header from './components/header/Header';
import SideNav from './pages/SideNav';
import { useGlobalContext } from './context'
import AdminLogin from './pages/protectedPage/AdminLogin';
import AdminDashboard from './pages/protectedPage/AdminDashboard';
import Contact from './pages/Contact';
import Protected from './protected/Protected';

// import UploadForm from './pages/protectedPage/UploadForm';
import AllPost from './pages/protectedPage/AllPost';
import AddPostForm from './pages/protectedPage/AddPostForm';
import UpdatePost from './pages/protectedPage/UpdatePost';

function App() {
  const { state } = useGlobalContext();

  const location = useLocation();
  const { pathname } = location;


  return (
    <>
      <ScrollToTop />

      {
        pathname.includes("admin") ? null : <Header />
      }


      {state ? <SideNav /> : null}

      {/* <Info /> */}
      {/* <Slogan /> */}
      {/* <Navbar /> */}

      <Routes>

        <Route path='/' element={<Home />} exact />
        <Route path='/:tag' element={<NewsTemplate />} exact />
        <Route path='/:tag/:slug' element={<NewsDescription exact />} />
        <Route path='/courses' element={<Course />} exact />
        <Route path='/contact' element={<Contact />} exact />
        <Route path='/admin/login' element={<AdminLogin />} />

        //Private routes
        <Route path='/admin/dashboard' element={<Protected><AdminDashboard /></Protected>}>
          {/* <Route path='createPost' element={<UploadForm />} /> */}
          <Route path='createPost' element={<AddPostForm />} />
          <Route path='updatePost' element={<UpdatePost />} />
          <Route path='allPost' element={<AllPost />} />
        </Route>

        
        <Route path="/admin/*" element={<h1>404 page not found</h1>} />
      </Routes>

      {
        pathname.includes("admin") ? null : <Footer />
      }
      <FooterNav />

    </>

  );
}

export default App;
