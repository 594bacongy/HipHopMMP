import { VisualMediaItem } from '@/types';

export const visualMediaCategories = [
  'All',
  'Photography',
  'Album Art',
  'Historical Imagery',
  'Video Archives',
  'Regional Expression',
] as const;

export const visualMediaItems: VisualMediaItem[] = [
  {
    id: 'media-slot-01',
    title: '[Visual Archive Slot: Bronx Origins & Block Parties]',
    category: 'Historical Imagery',
    timePeriod: '1970s – 1980s Foundational Era',
    caption:
      'Archival photograph slot planned to document the public park jams, sound system setups, and community block parties that birthed Hip Hop culture in the South Bronx.',
    sourceCredit:
      'Archival collection citation to be documented upon image licensing/fair-use curation.',
    tags: ['South Bronx', 'Block Party', 'Sound Systems', 'Archival Photo'],
    aspectRatio: 'square',
    mediaType: 'image',
    placeholderDescription:
      'Historical photograph slot: 1520 Sedgwick Ave / early Bronx park jams showing turntable setups and community gatherings.',
  },
  {
    id: 'media-slot-02',
    title: '[Visual Archive Slot: Album Cover Iconography]',
    category: 'Album Art',
    timePeriod: 'Golden Age & Beyond',
    caption:
      'Curated album art slot reserved to deconstruct visual semiotics, typography, street portraiture, and Afrocentric symbolism in landmark album packaging.',
    sourceCredit: 'Official Album Art Archive (Fair Use Educational Analysis)',
    tags: ['Album Art', 'Semiotics', 'Graphic Design', 'Afrocentricity'],
    aspectRatio: 'square',
    mediaType: 'image',
    placeholderDescription:
      'Album cover analysis slot: high-resolution sleeve artwork deconstruction focusing on visual symbolism and cultural context.',
  },
  {
    id: 'media-slot-03',
    title: '[Visual Archive Slot: Street Photography & Style]',
    category: 'Photography',
    timePeriod: 'Late 1980s – 1990s',
    caption:
      'Documentary portrait slot capturing fashion as visual literacy: b-boy/b-girl attire, custom leather jackets, Kangols, shell-toes, and cultural insignia.',
    sourceCredit: 'Street photography archive reference (in curation)',
    tags: ['Street Fashion', 'B-Boy / B-Girl', 'Identity', 'Visual Style'],
    aspectRatio: 'portrait',
    mediaType: 'image',
    placeholderDescription:
      'Portrait photography placeholder: street aesthetics, fashion literacies, and community pride.',
  },
  {
    id: 'media-slot-04',
    title: '[Video Archive Slot: Music Video Narrative Analysis]',
    category: 'Video Archives',
    timePeriod: 'Contemporary Era',
    caption:
      'Embedded video player slot formatted to analyze cinematic storytelling, visual motifs, choreography, and social critique in seminal music video direction.',
    sourceCredit: 'Director / Production House archive (Educational embed)',
    tags: ['Music Video', 'Cinematography', 'Visual Storytelling', 'Critique'],
    aspectRatio: 'video',
    mediaType: 'video',
    placeholderDescription:
      'Video embed slot: YouTube / Vimeo player embed for frame-by-frame narrative critique.',
  },
  {
    id: 'media-slot-05',
    title: '[Regional Expression: Spatial Cartography & Murals]',
    category: 'Regional Expression',
    timePeriod: 'Contemporary Communities',
    caption:
      'Visual documentation slot analyzing regional iconography, community memorial murals, and public graffiti art as spatial reclamation.',
    sourceCredit: 'Public art archive / local photography curation',
    tags: ['Regional Hip Hop', 'Murals', 'Graffiti Art', 'Public Space'],
    aspectRatio: 'square',
    mediaType: 'image',
    placeholderDescription:
      'Public artwork and aerosol mural placeholder: documenting how visual culture marks community belonging in urban landscapes.',
  },
  {
    id: 'media-slot-06',
    title: '[Visual Archive Slot: Aerosol Art & Typography]',
    category: 'Photography',
    timePeriod: 'Subway & Gallery Eras',
    caption:
      'Visual literacy slot analyzing wildstyle lettering, calligraphic mastery, and the evolution of aerosol art from train cars to institutional galleries.',
    sourceCredit: 'Urban art archive curation',
    tags: ['Wildstyle', 'Aerosol Art', 'Lettering', 'Visual Literacy'],
    aspectRatio: 'portrait',
    mediaType: 'image',
    placeholderDescription:
      'Aerosol typography analysis slot: examining letterform dynamics as an encrypted literacy of the Hip Hop nation.',
  },
];
