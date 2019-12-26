import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info:'Bla lskjdf;uh shjgisuhjx;h;s  sdlijfiuysh v;ois; ushjhs'
            },
            {
                icon:<FaHiking/>,
                title:'Endless hikings',
                info:'Bla lskjdf;uh shjgisuhjx;h;s  sdlijfiuysh v;ois; ushjhs'
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free shuttle',
                info:'Bla lskjdf;uh shjgisuhjx;h;s  sdlijfiuysh v;ois; ushjhs'
            },
            {
                icon:<FaBeer/>,
                title:'Strongest beers',
                info:'Bla lskjdf;uh shjgisuhjx;h;s  sdlijfiuysh v;ois; ushjhs'
            }
        ]
    };
    render() {
        return (
            <section className='services'> 
               <Title title='services'/>
               <div className='services-center'>
                   {this.state.services.map((item, index) => {
                       return(
                           <article key={index} className='service'>
                               <span>{item.icon}</span>
                               <h6>{item.title}</h6>
                               <p>{item.info}</p>
                           </article>
                       );
                   })}
               </div>
            </section>
        )
    }
}
