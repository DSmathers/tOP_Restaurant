import React from 'react'
import Banner from './home-page-sections/Banner'
import MainSectionThree from './home-page-sections/MainSectionThree'
import OurPizza from './home-page-sections/OurPizza'

const HomePage = () => {
    return (
        <main id="home_page">
            <Banner />
            <OurPizza />
            <MainSectionThree />
        </main>
    )
}

export default HomePage
