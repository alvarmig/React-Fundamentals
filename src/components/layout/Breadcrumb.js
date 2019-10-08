import React from 'react'
import { Link } from 'react-router-dom';

export default function Breadcrumb() {
    return (
        <div>
            <ol className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>  
          </ol>
        </div>
    )
}
