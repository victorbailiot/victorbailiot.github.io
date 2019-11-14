class TarefaController {

  constructor(){
    this._tarefas = new Tarefas()
    this._tarefaService = new TarefaService()
    this._tarefaView = new TarefaView()
  }

  listar(){
    this._tarefas.limpar()
    this._tarefaService.listarTodas("")
      // Adiciona as tarefas recebidas na lista de tarefas
      .then(tarefas => {
        tarefas.map(tarefa => this._tarefas.adicionar(tarefa))
      })
      // Passa os dados para a View
      .then(() => this._tarefaView.montarGrid(this._tarefas))
  }

  carregarFormulario(){
    
    // Mostra o formulário
    $('#modal').modal('show')
  }

  inserir(){
    
    // Capturar os dados
    // const descricao = document.querySelector('#descricao').value
    // const datahorario = document.querySelector('#data').value
    // const categoria_id = document.querySelector('#categoria').value
    
    const tarefa = new Tarefa(this._tarefaView.campoDescricao, this._tarefaView.campoData, this._tarefaView.campoCategoria)

    // Criar a tarefa
    // const tarefa = new Tarefa(descricao, datahorario, categoria_id)
    
    // Enviar a tarefa
    this._tarefaService.inserir(tarefa.toJSON())
      .then(res => console.log(res))
  }

  alterar(){

  }

  deletar(){
    
  }
}
