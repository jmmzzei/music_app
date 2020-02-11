import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export class Card extends Component {
    static propTypes = {
        name: PropTypes.string,
        year: PropTypes.string,
        id: PropTypes.string,
    }

    render() {
        console.log(this.props)
        return (
            <Link to={`/detail/${this.props.mbid}`} className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={this.props.image[1]['#text']} alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p target="_blank" rel="noopener noreferrer" className="title is-3 has-text-weight-medium">{this.props.name}</p>
                        </div>
                    </div>
                    <div>
                        <div className="tags is-centered">
                            {this.props.tags.tag.map(e => (
                                <span key={e.name} className="tag is-primary is-rounded">#{e.name}</span>
                            ))}
                        </div>
                    </div>
                    <hr />

                    <div className="content">
                        {this.props.bio.summary}
                    </div>
                </div>
            </Link>
        )
    }
}
