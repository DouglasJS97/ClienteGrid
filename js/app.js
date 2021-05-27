class Pessoa{
	constructor(){
		this.id = 1
		this.pessoaArray = []
	}

	salvar(){
		let dadosTela = this.getDados()
		if(this.validarDados(dadosTela) == true){
			this.adicionar(dadosTela)
		}
		this.listaTabela()
		this.cancelar()
	}

	listaTabela(){
		let tbody = document.getElementById('tbody')
		
		tbody.innerText = ''
		for(let i= 0; i < this.pessoaArray.length;i++){

			let tr = tbody.insertRow()

			let td_id = tr.insertCell()
			let td_nome = tr.insertCell()
			let td_sobrenome = tr.insertCell()
			let td_email = tr.insertCell()
			let td_acao = tr.insertCell()

			td_id.innerText = this.pessoaArray[i].id
			td_nome.innerText = this.pessoaArray[i].nome
			td_sobrenome.innerText = this.pessoaArray[i].sobrenome
			td_email.innerText = this.pessoaArray[i].email

			let imgEdit = document.createElement('img')
			let imgDelete = document.createElement('img')

			imgEdit.src = 'img/edit.svg'
			imgDelete.src = 'img/delete.svg'

			td_acao.appendChild(imgEdit)
			td_acao.appendChild(imgDelete)

			td_acao.classList.add('center')
			td_id.classList.add('center')

		}

	}

	cancelar(){
		document.getElementById('nome').value = ''
		document.getElementById('sobrenome').value = ''
		document.getElementById('email').value = ''
	}


	getDados(){
		let pessoa = {}
		pessoa.id = this.id
		pessoa.nome = document.getElementById('nome').value
		pessoa.sobrenome = document.getElementById('sobrenome').value
		pessoa.email = document.getElementById('email').value
		return pessoa
	}

	adicionar(dadosTela){
		this.pessoaArray.push(dadosTela)
		this.id ++
	}

	validarDados(pessoa){
		let msg = ''
		if(pessoa.nome == ''){
			msg += '- Informar nome do cliente.\n'
		}

		if(pessoa.sobrenome == ''){
			msg += '- Informar sobrenome do cliente\n'
		}

		if(pessoa.email == ''){
			msg += '- Informar email do cliente\n'
		}

		if(msg != ''){
			alert(msg)
			return false
		}
		return true
	}

}

let pessoa = new Pessoa()