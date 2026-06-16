import React from 'react'
import { useParams } from 'react-router';

export default function Contact() {
  const Params = useParams()
    console.log('params');
  return (
    <h1>Contact Us</h1>
  )
}