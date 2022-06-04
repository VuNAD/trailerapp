import React from 'react'
import classes from './home.module.css'
import NavBar from '../../navbar/NavBar'
import Featured from '../../featured/Featured'
import WatchList from '../../list/watchlist/WatchList'

const Home = () => {
  return (
    <div className={classes.main}>
        <NavBar/>
        <Featured/>
        <WatchList/>
    </div>
  )
}

export default Home