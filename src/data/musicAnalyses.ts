import { SongAnalysis } from '@/types';

/**
 * Music Analysis Collection
 *
 * HOW TO ADD A NEW SONG:
 * Add an object to the `songAnalyses` array below following the SongAnalysis interface.
 * The website will automatically render the new song card and modal breakdown!
 */
export const songAnalyses: SongAnalysis[] = [
  {
    id: 'song-slot-01',
    title: '[Song Analysis Slot 01]',
    artist: '[Artist Selection in Progress]',
    releaseYear: 'TBD',
    albumTitle: '[Album / EP Title]',
    culturalContext:
      'This research entry will contextualize the historical moment, regional geography, and sociopolitical climate during which this track was written and released.',
    lyricalThemes: [
      'Linguistic Innovation (HHNL)',
      'Systemic & Social Critique',
      'Cultural Identity & Pride',
    ],
    musicalAnalysis: {
      lyrics:
        'Will deconstruct specific verse structures, rhetorical strategies, African American Vernacular English / Hip Hop Nation Language patterns, and thematic progression.',
      beatsAndProduction:
        'Will examine sampling lineage, drum patterning, syncopation, tempo, bass dynamics, and sonic tone as pedagogical and emotional vehicles.',
      visualsAndAesthetics:
        'Will evaluate official music video iconography, visual storytelling, symbolic mise-en-scène, and community representation.',
    },
    socialPoliticalSignificance:
      'Analysis of the composition’s resonance with larger institutional questions—including economic equity, carceral critique, police accountability, or cultural sovereignty.',
    groupInterpretation:
      'Collaborative research synthesis by team members (Kellen, Roy, Sophia, Nicholas) linking this piece to EDUC 218 literacy frameworks.',
    supportingSources: [
      'Peer-reviewed analysis or primary interview (forthcoming)',
      'Historical archival context documentation (forthcoming)',
    ],
    status: 'planned',
  },
  {
    id: 'song-slot-02',
    title: '[Song Analysis Slot 02]',
    artist: '[Artist Selection in Progress]',
    releaseYear: 'TBD',
    albumTitle: '[Album / EP Title]',
    culturalContext:
      'Second planned analysis slot exploring cross-generational dialogues and alternative regional sounds within the Hip Hop diaspora.',
    lyricalThemes: [
      'Community Consciousness',
      'Resistance Pedagogy',
      'Personal Narrative',
    ],
    musicalAnalysis: {
      lyrics:
        'Close textual analysis of narrative framing, storytelling devices, and wordplay conventions.',
      beatsAndProduction:
        'Production dissection addressing melodic sample choices, rhythmic tension, and arrangement style.',
      visualsAndAesthetics:
        'Visual culture analysis connecting cover art aesthetics and promotional media to the sonic message.',
    },
    socialPoliticalSignificance:
      'Examination of how this track functions as civic pedagogy, youth empowerment, or institutional critique.',
    groupInterpretation:
      'Synthesis connecting this track to themes of belonging and cultural self-determination in EDUC 218.',
    supportingSources: ['Archival reference pending selection'],
    status: 'planned',
  },
];
