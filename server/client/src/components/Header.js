import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

const Header = ({ auth }) => {
    //auth = user data
    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href='/auth/google'>Login With Google</a>
                    </li>
                );
            default:
                return (
                    <Fragment>
                        <li>
                            <Payments />
                        </li>
                        <li style={{ margin: '0 15px' }}>
                            Credits: {auth.credits}
                        </li>
                        <li>
                            <a href='/api/logout'>Logout</a>
                        </li>
                    </Fragment>
                );
        }
    };

    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to={auth ? '/surveys' : '/'} className='left brand-logo'>
                    Emaily
                </Link>
                <ul id='nav-mobile' className='right'>
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
};
const mapStateToProps = ({ auth, credits }) => ({
    auth,
});

export default connect(mapStateToProps)(Header);