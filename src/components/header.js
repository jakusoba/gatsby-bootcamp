import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

//const Header = () => {
   //const data = useStaticQuery(graphql`
    // query {
       //site {
         
        //}
      //}
   
   //`)    


    //return (
        //<header className={headerStyles.header}>
           // <h1>
               
                //</h1>
            //<nav>
                //<ul className={headerStyles.navList}>
                    //<li>
                        //<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    //</li>
                    //<li>
                        //<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    //</li>
                    //<li>
                        //<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    //</li>  
                    //<li>
                        //<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                    //</li>
               // </ul>
            //</nav>
       // </header>
    /////)
//}

//export default Header

//This was copied from line 8
//query {
    //site {
      //siteMetadata {
       //title
      //}
     //}
   //}


   //This was copied from line 20-22
   //<Link className={headerStyles.title} to="/">
   //{data.site.siteMetadata.title}
//</Link>