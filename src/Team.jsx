import React, { useState } from 'react';
import './Team.css';

function Team() {
  const [filter, setFilter] = useState('all');

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Speech Pathologist',
      credentials: 'BSpPath (Hons), CPSP',
      discipline: 'speech',
      bio: 'Sarah has 8+ years of experience working with children with speech delays, language disorders, and autism. She specializes in early intervention and uses play-based therapy to help children find their voice.',
      expertise: ['Articulation disorders', 'Language delays', 'Autism spectrum', 'Early intervention', 'Feeding therapy'],
      emoji: '👩‍⚕️'
    },
    {
      name: 'David Martinez',
      role: 'Speech Pathologist',
      credentials: 'MSpPath, CPSP',
      discipline: 'speech',
      bio: 'David is passionate about supporting children with complex communication needs. He has extensive training in AAC (augmentative and alternative communication) and loves seeing children breakthrough communication barriers.',
      expertise: ['AAC devices', 'Complex communication needs', 'Stuttering', 'Social communication', 'Bilingual language development'],
      emoji: '👨‍⚕️'
    },
    {
      name: 'Emily Chen',
      role: 'Speech Pathologist',
      credentials: 'BSpPath, CPSP',
      discipline: 'speech',
      bio: 'Emily brings warmth and creativity to every session. She specializes in working with preschoolers and is known for making therapy feel like playtime. Fluent in Mandarin and English.',
      expertise: ['Preschool language', 'Phonological awareness', 'Literacy support', 'Bilingual therapy', 'Play-based intervention'],
      emoji: '👩‍⚕️'
    },
    {
      name: 'Michael Chen',
      role: 'Clinical Psychologist',
      credentials: 'MPsych (Clinical), MAPS',
      discipline: 'psychology',
      bio: 'Michael has 10+ years working with children and adolescents experiencing anxiety, ADHD, and emotional regulation challenges. He uses evidence-based approaches including CBT, ACT, and mindfulness.',
      expertise: ['ADHD assessment & support', 'Anxiety & worry', 'CBT for children', 'Emotional regulation', 'School refusal'],
      emoji: '👨‍⚕️'
    },
    {
      name: 'Dr. Rachel Kumar',
      role: 'Clinical Psychologist',
      credentials: 'PhD, MPsych (Clinical), MAPS',
      discipline: 'psychology',
      bio: 'Rachel specializes in autism assessment and neurodiversity-affirming practice. She is passionate about helping families understand their children better and create supportive environments for neurodiverse kids to thrive.',
      expertise: ['Autism assessment', 'ADOS-2', 'Neurodiversity-affirming care', 'Parent coaching', 'Social skills groups'],
      emoji: '👩‍⚕️'
    },
    {
      name: 'Emma Williams',
      role: 'Occupational Therapist',
      credentials: 'BOccThy, MOT',
      discipline: 'ot',
      bio: 'Emma has a special interest in sensory processing and helps children who find the world too loud, too bright, or too overwhelming. She creates individualized sensory diets that make daily life easier for kids and families.',
      expertise: ['Sensory processing', 'Fine motor skills', 'Handwriting', 'Self-care skills', 'Sensory integration therapy'],
      emoji: '👩‍⚕️'
    },
    {
      name: 'James Taylor',
      role: 'Occupational Therapist',
      credentials: 'BOccThy',
      discipline: 'ot',
      bio: 'James loves working with active kids who struggle with coordination and motor planning. His sessions are energetic, fun, and carefully designed to build confidence alongside skills.',
      expertise: ['Gross motor skills', 'Motor planning', 'Dyspraxia', 'School readiness', 'Visual-motor integration'],
      emoji: '👨‍⚕️'
    },
    {
      name: 'Sophie Bennett',
      role: 'Art Therapist',
      credentials: 'BVisArts, MArtTher, ANZACATA',
      discipline: 'art',
      bio: 'Sophie believes art speaks when words are hard to find. She works with children experiencing trauma, grief, anxiety, and emotional challenges, using creative expression as a pathway to healing.',
      expertise: ['Trauma-informed care', 'Grief & loss', 'Anxiety', 'Self-expression', 'Creative therapies'],
      emoji: '🎨'
    },
    {
      name: 'Lisa Anderson',
      role: 'Developmental Educator',
      credentials: 'BEd (Early Childhood), Grad Dip Special Ed',
      discipline: 'educator',
      bio: 'Lisa runs our School Ready Rockets program and has 15+ years in early childhood education. She knows exactly what skills kids need to thrive in kindergarten and makes learning them a blast.',
      expertise: ['School readiness', 'Early literacy', 'Play-based learning', 'Pre-literacy skills', 'Social-emotional development'],
      emoji: '👩‍🏫'
    }
  ];

  const filteredTeam = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.discipline === filter);

  const disciplines = [
    { value: 'all', label: 'All Team Members', emoji: '👥' },
    { value: 'speech', label: 'Speech Pathologists', emoji: '🗣️' },
    { value: 'psychology', label: 'Psychologists', emoji: '🧠' },
    { value: 'ot', label: 'Occupational Therapists', emoji: '✋' },
    { value: 'art', label: 'Art Therapist', emoji: '🎨' },
    { value: 'educator', label: 'Educator', emoji: '👩‍🏫' }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <h1>Meet Our Expert Team</h1>
          <p className="team-hero-subtitle">
            Passionate, qualified clinicians who love what they do and genuinely care about your child's progress.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="team-filter-section">
        <div className="container">
          <div className="filter-container">
            {disciplines.map(({ value, label, emoji }) => (
              <button
                key={value}
                className={`filter-btn ${filter === value ? 'active' : ''}`}
                onClick={() => setFilter(value)}
              >
                <span className="filter-emoji">{emoji}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-grid-section">
        <div className="container">
          <div className="team-grid">
            {filteredTeam.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-header">
                  <div className="team-card-avatar">{member.emoji}</div>
                  <div>
                    <h3>{member.name}</h3>
                    <p className="team-card-role">{member.role}</p>
                    <p className="team-card-credentials">{member.credentials}</p>
                  </div>
                </div>
                <p className="team-card-bio">{member.bio}</p>
                <div className="team-card-expertise">
                  <h4>Areas of Expertise:</h4>
                  <div className="expertise-tags">
                    {member.expertise.map((item, i) => (
                      <span key={i} className="expertise-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta">
        <div className="container">
          <div className="team-cta-content">
            <h2>Ready to Meet Your Perfect Match?</h2>
            <p>Not sure which clinician is right for your child? We'll help you find the perfect fit.</p>
            <button className="btn btn-primary">Get in Touch</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
