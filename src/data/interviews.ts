import { InterviewPerspective } from '@/types';

export const interviewsDescription = {
  sectionTitle: 'Interviews & Oral Perspectives',
  sectionSubtitle: 'Grounding Cultural Research in Lived Experience',
  whyPerspectivesMatter:
    'Hip Hop scholarship is incomplete without the voices of the people who live it. By gathering oral histories and qualitative interviews from students, peers, community creators, and listeners across the UMass Amherst community, our research anchors theoretical frameworks into genuine human realities. Personal narratives illuminate how Hip Hop functions as an emotional sanctuary, a linguistic homeland, and a tool for navigating everyday institutional life.',
  methodologyNote:
    'Interviews will be conducted following ethical oral history practices. Participants may choose full attribution or an anonymous institutional identifier. Questions center on personal discovery, cultural identity, linguistic agency, and moments where Hip Hop offered clarity on social or systemic challenges.',
};

/**
 * Reusable Interview Collection
 *
 * HOW TO ADD AN INTERVIEW:
 * Add an object to `interviews` matching the InterviewPerspective schema.
 */
export const interviews: InterviewPerspective[] = [
  {
    id: 'interview-slot-01',
    interviewee: '[Interview Participant 01: In Fieldwork]',
    roleOrAffiliation: 'UMass Amherst Undergraduate Student',
    date: 'Fieldwork Scheduled',
    keyQuote:
      '“Hip Hop was the first place where I heard the specific cadence of our neighborhood treated not as a deficit, but as high art.”',
    perspectiveType: 'Student',
    groupThemes: [
      'Linguistic Self-Affirmation',
      'Campus Identity & Belonging',
      'Everyday Resistance',
    ],
    qaList: [
      {
        question:
          'When was the first time Hip Hop felt personal or transformative to you rather than just background music?',
        response:
          '[Transcribed response will be documented here upon interview completion.]',
      },
      {
        question:
          'How does the language and culture of Hip Hop shape how you express yourself or connect with your community at UMass?',
        response:
          '[Transcribed response will be documented here upon interview completion.]',
      },
      {
        question:
          'In what ways has a specific artist or song helped you understand a complex social or political issue?',
        response:
          '[Transcribed response will be documented here upon interview completion.]',
      },
    ],
    mediaType: 'audio',
    mediaPlaceholderText:
      'Audio recording file (e.g. /media/audio/interview-01.mp3) will be embedded here with wave visualizer playback once recorded and edited.',
    groupReflection:
      'Analytical reflection by our research group connecting participant themes to course readings on Hip Hop Nation Language.',
    status: 'scheduled',
  },
  {
    id: 'interview-slot-02',
    interviewee: '[Interview Participant 02: In Fieldwork]',
    roleOrAffiliation: 'Community Artist / Student Creator',
    date: 'Fieldwork Scheduled',
    keyQuote:
      '“Making beats isn’t just music production; it’s an archive of emotional memory and community dialogue.”',
    perspectiveType: 'Artist',
    groupThemes: [
      'Creative Agency',
      'Intergenerational Sonic Memory',
      'Youth Empowerment',
    ],
    qaList: [
      {
        question:
          'What role does collaboration and the cipher play in your creative process?',
        response:
          '[Transcribed response will be documented here upon interview completion.]',
      },
      {
        question:
          'How do you navigate commercial pressures while maintaining authentic cultural message in your art?',
        response:
          '[Transcribed response will be documented here upon interview completion.]',
      },
    ],
    mediaType: 'text',
    mediaPlaceholderText: 'Full transcript format with key highlighted quotes.',
    groupReflection:
      'Collaborative analysis linking creative production to critical youth empowerment frameworks.',
    status: 'scheduled',
  },
];
