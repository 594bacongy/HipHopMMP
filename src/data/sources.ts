import { ResearchSource } from '@/types';

/**
 * Academic References & Research Bibliography
 * Grounded in foundational scholarship on Hip Hop Nation Language (HHNL) and Critical Literacy.
 *
 * HOW TO ADD A SOURCE:
 * Add an object to the `researchSources` array below following the ResearchSource interface.
 */
export const researchSources: ResearchSource[] = [
  {
    id: 'source-alim-2006',
    title: 'Roc the Mic Right: The Language of Hip Hop Culture',
    author: 'H. Samy Alim',
    year: 2006,
    sourceType: 'Book',
    citation:
      'Alim, H. S. (2006). Roc the Mic Right: The Language of Hip Hop Culture. Routledge.',
    url: 'https://www.routledge.com/Roc-the-Mic-Right-The-Language-of-Hip-Hop-Culture/Alim/p/book/9780415372879',
    relatedSection: 'Identity & Cultural Expression / Language Literacies',
    annotation:
      'Foundational linguistic text examining Hip Hop Nation Language (HHNL) as a distinct, systematic, and politically charged linguistic variety that affirms Black identity and oral artistry.',
  },
  {
    id: 'source-chang-2005',
    title: "Can't Stop Won't Stop: A History of the Hip-Hop Generation",
    author: 'Jeff Chang',
    year: 2005,
    sourceType: 'Book',
    citation:
      "Chang, J. (2005). Can't Stop Won't Stop: A History of the Hip-Hop Generation. St. Martin's Press.",
    url: 'https://us.macmillan.com/books/9780312425791/cantstopwontstop',
    relatedSection: 'Historical Origins / Community & Belonging',
    annotation:
      'Comprehensive cultural and political history tracing the socio-economic conditions in the South Bronx and Jamaica that catalyzed the birth and global evolution of Hip Hop.',
  },
  {
    id: 'source-smitherman-2000',
    title:
      'Talkin that Talk: Language, Culture and Education in African America',
    author: 'Geneva Smitherman',
    year: 2000,
    sourceType: 'Book',
    citation:
      'Smitherman, G. (2000). Talkin that Talk: Language, Culture and Education in African America. Routledge.',
    url: 'https://www.routledge.com/Talkin-That-Talk-Language-Culture-and-Education-in-African-America/Smitherman/p/book/9780415208659',
    relatedSection: 'Hip Hop, Education, and Society',
    annotation:
      'Seminal sociolinguistic scholarship connecting African American speech practices, oral traditions, and communicative competence to educational equity and pedagogical reform.',
  },
  {
    id: 'source-hill-2009',
    title:
      'Beats, Rhymes, and Classroom Life: Hip-Hop Pedagogy and the Politics of Identity',
    author: 'Marc Lamont Hill',
    year: 2009,
    sourceType: 'Book',
    citation:
      'Hill, M. L. (2009). Beats, Rhymes, and Classroom Life: Hip-Hop Pedagogy and the Politics of Identity. Teachers College Press.',
    url: 'https://www.tcpress.com/beats-rhymes-and-classroom-life-9780807749609',
    relatedSection: 'Education & Youth Development',
    annotation:
      'Ethnographic study exploring how high school students and teachers negotiate identity, critical literacy, and civic agency through the intentional integration of Hip Hop culture in formal schooling.',
  },
  {
    id: 'source-emdin-2016',
    title:
      "For White Folks Who Teach in the Hood... and the Rest of Y'all Too: Reality Pedagogy and Urban Education",
    author: 'Christopher Emdin',
    year: 2016,
    sourceType: 'Book',
    citation:
      "Emdin, C. (2016). For White Folks Who Teach in the Hood... and the Rest of Y'all Too: Reality Pedagogy and Urban Education. Beacon Press.",
    url: 'https://www.beacon.org/For-White-Folks-Who-Teach-in-the-Hood-and-the-Rest-of-Yall-Too-P1158.aspx',
    relatedSection: 'Education & Youth Development',
    annotation:
      'Articulates "reality pedagogy," demonstrating how Hip Hop ciphers, call-and-response rituals, and co-teaching empower youth who have been historically alienated by traditional education systems.',
  },
];
