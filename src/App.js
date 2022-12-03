import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers =[
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '980421',
    'gender' : '남자',
    'job' :'대학생'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '980421',
    'gender' : '남자',
    'job' :'대학생'
  },

  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name': '홍길동',
    'birthday': '980421',
    'gender' : '남자',
    'job' :'대학생'
  }
  
]

class App extends React.Component {
  render(){
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            
            />
          );
        })
      }
    </div>
    );
  }
}

export default App;
