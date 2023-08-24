import React, {Component} from 'react'


export default class Conversor extends Component {
    constructor(props){
        super(props);


    this.state= {
   moedaA_valor: "",
   moedaB_valor: 0,

    }

      this.converter = this.converter.bind(this);
    }

    converter(){

       let moedaB_valor = (parseFloat(this.state.moedaA_valor) * 5).toFixed(2)
       this.setState({moedaB_valor})
       console.log(`O valor da conversão foi ${moedaB_valor}`)
    }
  render(){
      return (
          <div className= "Conversor">
           
           <h2 className="bg-zinc-700">{this.props.moedaA} para {this.props.moedaB}</h2>
           <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}/>
           <input type="button" value="Converter" onClick={this.converter}/>
           <h2> {this.state.moedaB_valor}</h2>
          </div>
      )
  }
}
