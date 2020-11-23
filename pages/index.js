import React, { useState } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import users from '../users'

// import CardList from '../components/CardList'
import Card from '../components/Card'
import Search from '../components/Searchbar'
import HeroBanner from "../components/Hero-banner"

export default function Home() {

const user = users; 



  return (
    <div >
      <Head>
        <title>Jambar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Search placeholder='Search Jamber' />
        <HeroBanner />
        <div>
          <h1 className="text-5xl">Freelancers in Senegal</h1>
          <div className="freelancers">
            {user.map(user =>
              <Card 
              img={user.img}
              name={user.name}
              service={user.service}
              location={user.location}
              lang={user.lang}
              />
            )}
          </div>
        </div>
        <section className="about-1">
          <div>
              <h1>Connecting Senegal</h1>
          </div>
        </section>

        <section className="services">
          <div>
          <h1>Search by Services</h1>

          </div>
        </section>
        <section className="services">
          <div>
          <h1>For The Hustlers</h1>

          </div>
        </section>
       
      </main>
      <footer >
          Made with ❤️ in Dakar
      </footer>
    </div>
  )
}
