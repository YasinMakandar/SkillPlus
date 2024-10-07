import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import AddInstitute from './pages/AddInstitute';
import InstituteDetails from './pages/InstituteDetails';
import EditInstitute from './pages/EditInstitute';
import TrainerDetails from './pages/TrainerDetails';
import StudentDetails from './pages/StudentDetails';
import AddCourse from './pages/AddCourse';
import CourseDetails from './pages/CourseDetails';
import Course from './pages/Course';
import EditCourse from './pages/EditCourse';
import AddCourseContent from './pages/AddCourseContent';
import ContentDetails from './pages/ContentDetails';

import LessonPlan from './pages/LessonPlan';
import Module from './pages/Module';
import AdminDash from './pages/Admin/AdminDash';
import AdminCourse from './pages/Admin/AdminCourses';
import AdminCourseDetails from './pages/Admin/AdminCourseDetails';
import AdminLessonPlan from './pages/Admin/AdminLessonPlan';
import CourseDetailsTmp from './pages/CourseDetailsTemp';
import PDF from './pages/PDF';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      {/* Master Login */}
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/master" element={<Dashboard />} />
        <Route exact path='/add_institute' element={<AddInstitute/>}/>
        <Route exact path='/institute_details' element={<InstituteDetails/>} />
        <Route exact path='/edit_institute' element={<EditInstitute/>} />
        <Route exact path='/trainer_details' element={<TrainerDetails/>} />
        <Route exact path='/student_details' element={<StudentDetails/>} />
        <Route exact path='/add_course' element={<AddCourse/>} />
        <Route exact path='/courses' element={<Course/>} />
        <Route exact path='/course_details' element={<CourseDetails/>} />
        <Route exact path='/course_detailss' element={<CourseDetailsTmp/>} />
        <Route exact path='/course-details/:id' element={<CourseDetails/>} />
        <Route exact path='/edit_course' element={<EditCourse/>} />
        <Route exact path='/course_content' element={<AddCourseContent/>} />
        <Route exact path='/course_content_details' element={<ContentDetails/>} />
        <Route path="/lesson-plan/:plan" element={<LessonPlan />} />
        <Route path='/ppt/:ppt' element={<Module/>} />
        <Route path='/pdf/:pdf' element={<PDF/>} />
      </Routes>

      {/* Admin Login */}
      <Routes>
        <Route exact path='/admin' element={<AdminDash/>}/>
        <Route exact path='/admin_courses' element={<AdminCourse/>}/>
        <Route exact path='/admin_course_details' element={<AdminCourseDetails/>} />
        <Route path="/admin-lesson-plan/:plan" element={<AdminLessonPlan />} />
      </Routes>

    </>
  );
}

export default App;
