import React,{Component} from 'react';

import {Form,Container,Linha,ContainerRight,ContainerLeft,ContainerRepositorio,FormRepositorio,ContainerTopo} from './style.js';
import api from '../../services/api.js';
import '../../styles/global.js';
import Topo from '../../Components/Topo/Topo.js';
import Issues from '../../Components/Issues/Issues.js';


export default class Main extends Component {
/*Estados*/
  state = {
    Repositorios : [],
    repositoryInput : '',
    repositorioAtivado : undefined,
    loading : false,
    issues : [],
    issuesFilter : [],
    i : 1,
    tipo : '',
    error : "false",
  };

/*Procura o repositorio do Input*/
  search = async (e) =>{
    e.preventDefault();
    this.setState({
      loading : true,
    })
    try{
      const response = await api.get(`/repos/${this.state.repositoryInput}`);
      this.setState({
        Repositorios : [...this.state.Repositorios,response.data],
        error : "false",
      });
    }catch(err){
      console.log(err);
      this.setState({
        error : "true",
      })
    }finally{
      this.setState({
        loading : false,
        repositoryInput : '',
      })
    }
  }
/*Procura Issues do repositorio selecionado*/
  async searchIssues(repositorio) {
    let number = 0;
    await this.setState({
      i : 1,
      repositorioAtivado : repositorio,
      loading : true,
      issues : [],
      issuesFilter : [],
    });

    try{
      while(this.state.i < 15){
        number = Math.floor(Math.random() * 10000) + 1;
        const response = await api.get(`/repos/${this.state.repositorioAtivado.full_name}/issues/${this.state.i}`);
        if(response)
          this.setState({
            issues : [...this.state.issues,response.data],
            i : this.state.i + 1,
          });
      }
    }catch(err){
      console.log(err);
      this.setState({error : "true"});
    }finally{
      this.setState({loading : false});
    }
  }
/*Filtra as Issues com a categoria selecionada*/
  async filterIssues(){
    await this.setState({issuesFilter : []});
    console.log(this.state.tipo);
    for(let i = 0 ; i < this.state.issues.length;++i){
      if(this.state.tipo === this.state.issues[i].state || this.state.tipo === "all"){
        await this.setState({
          issuesFilter : [...this.state.issuesFilter,this.state.issues[i]],
        });
      }
    console.log(this.state.issuesFilter);
    }
  }

  render(){
    return(
      <Container>
        <ContainerLeft>
          <Form>
            <input placeholder = "Novo Repositorio" error = {this.state.error} value = {this.state.repositoryInput} onChange={e => this.setState({repositoryInput : e.target.value})}/>
            <button type = "submit" onClick={this.search}><i className = {this.state.loading ? "fa fa-spinner fa-pulse" : "fa fa-plus-circle"}/></button>
          </Form>
          <Linha></Linha>
          <ContainerRepositorio>
            {this.state.Repositorios.map(repositorio =>(
              <FormRepositorio key = {repositorio.id} onClick={() => this.searchIssues(repositorio)}>
                <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login}/>
                <ul>
                  <li>
                    <strong>{repositorio.name}</strong>
                  </li>
                  <li>
                    <small>{repositorio.owner.login}</small>
                  </li>
                </ul>
                <i className="fa fa-angle-right" onClick={this.searchIssues}></i>
              </FormRepositorio>
            ))
            }
          </ContainerRepositorio>
        </ContainerLeft>
        <ContainerRight>
          <ContainerTopo>
              <Topo repositorio = {this.state.repositorioAtivado}></Topo>
              <select name="text" defaultValue = {this.state.tipo} onChange={e => {this.setState({tipo : e.target.value}), this.filterIssues()}}>
                <option value="all">Selecionar Filtro...</option>
                <option value="all">Todas</option>
                <option value="open">Abertas</option>
                <option value="closed">Fechadas</option>
              </select>
          </ContainerTopo>
          <Issues issues = {this.state.issuesFilter} filter={this.state.tipo}></Issues>
        </ContainerRight>
      </Container>
    );
  }
}
