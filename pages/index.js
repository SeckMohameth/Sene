import React, { useState } from 'react'

import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import "tailwindcss/tailwind.css"
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
          <h1 className="text-5xl p-16">Freelancers in Senegal</h1>
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
        <section className="about-1 -mt-6">
          <div className="container flex">
                <img src="/images/aboutOne.jpg" className="p-20" width="600" height="600"></img>
                <div className="flex-col p-16">
                  <div className="text-center">
                    <h1 className="text-5xl font-bold mb-5 mt-12">Connecting Senegal</h1>
                    <h2 className="not-italic text-4xl font-medium mb-8">One business and creator at a time</h2>

                    <p className="text-3xl mb-8 font-light">Jambar is a freelancing and business marketplace to connect Senegal entreprenuers with other Senegalese businesses.</p>
                    <p className="text-3xl mb-8 font-light">Find Senegalese offering their services from at home hair stylist, developers, illustrators, cooks, accountants, consultants, videoagrohers, photographers, artist, and more.</p>                  </div>
                </div>
          </div>
        </section>

        <section className="services">
          <div>
          <h1 className="text-5xl font-bold p-16">Search by Services</h1>
              <div className="service-card">
                <img src=""> </img>
              </div>

              <div className="service-card">
                <img src=""> </img>
              </div>

              <div className="service-card">
                <img src=""> </img>
              </div>

              <div className="service-card">
                <img src=""> </img>
              </div>

              <div className="service-card">
                <img src=""> </img>
              </div>

              <div className="service-card">
                <img src=""> </img>
              </div>
              
          </div>
        </section>
        <section className="services">
          <div>
          <h1 className="text-5xl font-bold mb-5 mt-12 p-16">For The Hustlers</h1>
                <p>Jambar provides tools and resources to assist you in reaching your next client. Jambar also looks to match you with the best freelancer or business based on your budget, time, and needs.</p>
          </div>
        </section>
       
      </main>
      <footer className="footer flex items-center">
          Made with ❤️ in Dakar
      </footer>
    </div>
  )
}
