import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        const { robots } = this.props;
        return (
            <div>
                {this.props.robots.map((user, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })}
            </div>
        );
    }
}

export default CardList;