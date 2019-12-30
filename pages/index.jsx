import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Offer from '../components/Offer'
import Tools from '../components/Tools'
import Reviews from '../components/Reviews'

export default function index() {
  return (
    <Layout>
      <Hero/>
      <AboutMe/>
      <Offer/>
      <Tools/>
      <Reviews/>
    </Layout>
  );
}
