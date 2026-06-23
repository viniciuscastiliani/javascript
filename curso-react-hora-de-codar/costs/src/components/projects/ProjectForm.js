function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nume do projeto" />
            </div>
            
            <div>
                <input type="number" placeholder="Insira o orçamento total" />
            </div>
            
            <div>
                <select name="categoryId">
                    <option disabled selected>Selecione a categoria</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Criar Projeto" />
            </div>

        </form>
    )
}

export default ProjectForm