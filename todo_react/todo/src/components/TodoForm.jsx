import { useState } from 'react'

const TodoForm = () => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return
        //adicionar todo
        //limpar os campos
        setValue("")
        setCategory("")
    }

    return (
        <div className='todoForm'>
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma catagoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm