import React from 'react';

export const Header = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="/about" className="brand-logo center">Logo</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="/translate">Translate</a></li>
                        <li><a href="/settings">Settings</a></li>
                        <li><a href="/logon">Logon</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}