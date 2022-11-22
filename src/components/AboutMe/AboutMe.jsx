import React from 'react'

function About() {
  return (
    <section id='about-me'>
         <div className="about-me-heading">
            <h1>Get to know</h1>
            <p>About me</p>
         </div>

         <div className="about_content">
            <div className="about_cards">
                <article className='about_card'>
                    <h5>Experience</h5>
                      <small>2+ Years Coding</small>
                </article>

                <article className='about_card'>
                    <h5>Clients</h5>
                      <small>2+ WorldWide</small>
                </article>

                <article className='about_card'>
                    <h5>Projects</h5>
                      <small>30+ Completed</small>
                </article>
         </div>

          <p2>
            At wethinkcode_, I studied software development where we learnt an array of languages including Python, Object Orientated programming with Java, SQL, html, CSS, JavaScript, Flutter and Dart.
            We also learnt about different frameworks like thymeleaf and handlebars, and made use of useful tools like gitlab especially for ci/cd and saving and contributing code, we also made use of codescene to check our code health, and docker as well as maven to avoid dependency issues.
            We made use of Agile methodologies where we had daily stand-ups and had 2 week sprints where we'd split up work into tickets that different people in the team would take on, we heavily relied on Test Driven Development whereby we wrote tests for our code to save time and make sure everything works the way it is supposed to.
          </p2>

         </div>
    </section>
  )
}

export default About;