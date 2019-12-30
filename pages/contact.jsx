import React from 'react'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

export default function index() {
  return (
    <Layout noHero={true}>
      <Contact/>
    </Layout>
  );
}
