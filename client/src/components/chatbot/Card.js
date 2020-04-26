import React from 'react';

const Card = (props) => (
    <div style={{height: 270, float: 'left'}}>
        <div class="card">
            <div class="card-image" style={{width: 240}}>
                <img alt={props.payload.fields.header.stringValue} src={props.payload.fields.image.stringValue}/>
                <span class="card-title">{props.payload.fields.header.stringValue}</span>
            </div>
            <div class="card-content">
                {props.payload.fields.description.stringValue}
                <p>{props.payload.fields.price.stringValue}</p>
            </div>
            <div class="card-action">
                <a target="_blank" rel="noopener noreferrer" href={props.payload.fields.link.stringValue}>GET NOW</a>
            </div>
        </div>
    </div>
)

export default Card;