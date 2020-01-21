import React, { Component } from 'react'
export default class Header extends Component {

    render() {
        return (
            <div>
                {this.props.pages.map(page => {
                    return <button onClick={this.props.navbarHandle} key={page.title} data-name={page.title}>{page.title}</button>
                })}
            </div>
        )
    }

}
