import './App.css';
import TeacherProfile from 'e1t1/src/TeacherThing';
import './TeacherThing.css';

function App() {
  return (
    <div class="profiles">
      <div class="profile 1">
        <TeacherProfile
          Name="Mary Jane"
          YearsTeaching="7"
          CoursesTeaching="Modern World History, AP Modern World History, AP Human Geography"
          Rating="8"></TeacherProfile>
      </div>
      <div class="profile 2">
        <TeacherProfile
          Name="James Jones"
          YearsTeaching="10"
          CoursesTeaching="Geometry, Algebra 1, Algebra 2, Pre-Calculus"
          Rating="7"></TeacherProfile>
      </div>
      <div class="profile 3">
        <TeacherProfile
          Name="Ken Lee"
          YearsTeaching="2"
          CoursesTeaching="NGSS Physics, AP Physics 2, AP Physics 3"
          Rating="6.5"></TeacherProfile>
      </div>
      <div class="profile 4">
        <TeacherProfile
          Name="Olya Homer"
          YearsTeaching="1"
          CoursesTeaching="English 1, English 2, American Literature"
          Rating="10"></TeacherProfile>
      </div>
    </div>
  );
}

export default App
