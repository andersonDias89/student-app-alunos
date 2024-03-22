import React, { useState } from 'react';
import './StudentForm.css'; // Isso supõe que StudentForm.css está no mesmo diretório que StudentForm.js


function StudentForm() {
  // Estado inicial para o aluno
  const [aluno, setAluno] = useState({
    nome: '',
    idade: '',
    serie: ''
  });

  // Atualiza o estado com base na entrada do usuário nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Envia os dados do aluno para o servidor quando o formulário é submetido
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de submissão do formulário

    fetch('http://localhost:5000/alunos', { // Certifique-se de que a URL está correta
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aluno)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Falha na comunicação com o servidor');
    })
    .then(data => {
      console.log(data);
      alert('Aluno cadastrado com sucesso!');
      // Limpa o formulário após a submissão bem-sucedida
      setAluno({
        nome: '',
        idade: '',
        serie: ''
      });
    })
    .catch((error) => {
      console.error('Erro:', error);
      alert('Erro ao cadastrar o aluno');
    });
  };

  // Renderiza o formulário
  return (
    <div className="form-container">
      <h2>Cadastro de Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Nome do Aluno"
            value={aluno.nome}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="idade">Idade:</label>
          <input
            id="idade"
            name="idade"
            type="number"
            placeholder="Idade"
            value={aluno.idade}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="serie">Série:</label>
          <input
            id="serie"
            name="serie"
            type="text"
            placeholder="Série"
            value={aluno.serie}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default StudentForm;
