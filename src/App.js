import React from 'react';
import StudentForm from './components/StudentForm';

function App() {
  const handleStudentSubmit = (studentData) => {
    // Aqui você lidaria com a submissão do formulário.
    // Por exemplo, enviando os dados para um backend.
    console.log(studentData);
    // TODO: Implemente a lógica de envio para o backend aqui.
  };

  return (
    <div className="App">
      <StudentForm onSubmit={handleStudentSubmit} />
      {/* Mais tarde aqui você pode adicionar o StudentList */}
    </div>
  );
}

export default App;
