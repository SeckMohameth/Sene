import React, { useState } from 'react'

import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import "tailwindcss/tailwind.css"
import users from '../users'

// import CardList from '../components/CardList'
import Card from '../components/Card'
import HeroBanner from "../components/Hero-banner"
import ServiceCard from "../components/ServiceCard"
import Nav from "../components/Navbar"

export default function Home() {

const user = users; 



  return (
    <body>
    <div className="p-2">
      <Head>
        <title>Jambar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <HeroBanner />
        <div>
          <h1 className="text-5xl m-16">Freelancers in Senegal</h1>
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
                <img src="/images/aboutOne.jpg" className="p-20" width="600"></img>
                <div className="flex-col p-16">
                  <div className="text-center">
                    <h1 className="text-5xl font-bold mb-5 mt-12">Connecting Senegal</h1>
                    <h2 className="not-italic text-4xl font-medium mb-8">One business and creator at a time</h2>

                    <p className="text-3xl mb-8 font-light">Jambar is a freelancing and business marketplace to connect Senegal entreprenuers with other Senegalese businesses.</p>
                    <p className="text-3xl mb-8 font-light">Find Senegalese offering their services from at home hair stylist, developers, illustrators, cooks, accountants, consultants, videoagrohers, photographers, artist, and more.</p>                  </div>
                </div>
          </div>
        </section>

        <section className="services p-3">
        <h1 className="text-5xl font-bold p-16">Search by Services</h1>

          <div className="flex justify-start grid grid-cols-3 gap-6">

              <ServiceCard 
              img="https://github.com/SeckMohameth/Sene/blob/main/public/images/pawel-czerwinski-_9dSF0Hwitw-unsplash.jpg?raw=true"
              title="Marketing"
              />

              <ServiceCard 
              img="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGNvZGV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60"
              title="Delvelopers"
              />


              <ServiceCard 
              img="https://images.unsplash.com/photo-1447758902204-48010b87c24d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              title="Artist"
              />

              <ServiceCard 
              img="https://github.com/SeckMohameth/Sene/blob/main/public/images/guilherme-petri-PtOfbGkU3uI-unsplash.jpg?raw=true"
              title="Hairstylist"
              />

              <ServiceCard 
              img="https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              title="Production"
              />

              <ServiceCard 
              img="https://images.unsplash.com/photo-1509771058437-91e2ce34b90d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
              title="Culinary"
              />

           

          </div>
        </section>
        <section className="about-2 mt-20 mb-20 p-16">
          <div className="flex ">
            <div className="flex-col text-center">
              <h1 className="text-5xl font-bold mr-20 mb-16">For The Hustlers</h1>
              <p className="mr-20 text-3xl font-light mb-8 leading-10">Jambar provides tools and resources to assist you in reaching your next client. Jambar also looks to match you with the best freelancer or business based on your budget, time, and needs.</p>
              <p className="mr-20 text-3xl font-light leading-10"> We are dedicated in serving our community and creating equal business opportunities for all. 🇸🇳</p>
            </div>
            <img className="" width="500" height="500" src="https://github.com/SeckMohameth/Sene/blob/main/public/images/francesca-noemi-marconi-PJdsv09Ep5c-unsplash.jpg?raw=true"/>

          </div>
        </section>
       
      </main>
      <footer className="footer flex items-center border-t-2 p-10 flex-col border-red-300">
          <p className="mb-4">Made with ❤️ in Dakar</p>
          <p className="mb-2">&copy; 2021 Jambar.sn </p>
      </footer>
    </div>
    </body>
  )
}
