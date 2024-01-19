import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Kamal'
      }
      console.log('LifeCycleB constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleBLifeCycleB getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('LifeCycleBLifeCycleB componentDidMount')
    }
  
  render() {
    console.log('LifeCycleB render')
    return  <div>LifeCycle B</div>
      
    
  }
}

export default LifeCycleB