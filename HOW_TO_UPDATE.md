# Content Management & Update Guide: Cultural Hip Hop

This document explains how to update, expand, and maintain the **Cultural Hip Hop** digital research platform.

All website content is intentionally decoupled from presentation logic and resides in typed data files inside `src/data/`.

---

## ⚡ Quick Update Via Antigravity (Recommended)

Because this website is structured around clean data schemas, you can update it in Antigravity simply by giving natural-language instructions like:

- *"Antigravity, add this new song analysis for Kendrick Lamar's 'Alright' released in 2015..."*
- *"Antigravity, update interview slot 1 with the transcript from my interview with student Jordan M...." *
- *"Antigravity, add this scholarly paper by Geneva Smitherman to the sources section..."*
- *"Antigravity, update Sophia's and Nicholas's bios with these contributions..."*

---

## 📁 Content Directory Map

| Section | Content File Path | Description |
| :--- | :--- | :--- |
| **Project & Course Info** | `src/data/projectInfo.ts` | Course title, institution, central thesis, 5 pillars |
| **Music Analyses** | `src/data/musicAnalyses.ts` | Song analyses, lyrical syntax, beat production, political context |
| **Oral History Interviews** | `src/data/interviews.ts` | Student/artist interviews, pull quotes, audio embeds, Q&A |
| **Visual Media Archive** | `src/data/visualMedia.ts` | Photography, album sleeves, graffiti murals, video archives |
| **Societal Themes** | `src/data/socialThemes.ts` | 5 thematic frameworks, research questions, case study slots |
| **Bibliography & Sources** | `src/data/sources.ts` | Academic books, peer-reviewed articles, citations, annotations |
| **Research Team** | `src/data/team.ts` | Team member names, roles, bios, contributions, focus areas |

---

## 🎵 1. How to Add or Edit Song Analyses (`src/data/musicAnalyses.ts`)

Each song entry implements the `SongAnalysis` interface. To add a song, add an object to the `songAnalyses` array:

```typescript
{
  id: 'song-unique-id',
  title: 'Song Title',
  artist: 'Artist Name',
  releaseYear: 2024,
  albumTitle: 'Album Name',
  culturalContext: 'Historical background, regional roots, socio-political climate...',
  lyricalThemes: ['Theme 1', 'Theme 2', 'Theme 3'],
  musicalAnalysis: {
    lyrics: 'Deconstruction of verse structure, rhyme schemes, and HHNL...',
    beatsAndProduction: 'Sample sources, BPM, rhythm, drum kit, bassline dynamics...',
    visualsAndAesthetics: 'Music video narrative, color palette, staging, symbolism...'
  },
  socialPoliticalSignificance: 'Connection to systemic issues, protest, empowerment...',
  groupInterpretation: 'Synthesis by Kellen, Roy, Sophia, and Nicholas for EDUC 218...',
  supportingSources: ['Author (Year). Citation text.'],
  status: 'complete' // or 'planned' | 'in-progress'
}
```

---

## 🎙️ 2. How to Add or Edit Interviews (`src/data/interviews.ts`)

To add an interview, append an object to the `interviews` array:

```typescript
{
  id: 'interview-01',
  interviewee: 'Alex R. (or Anonymous Student Organizer)',
  roleOrAffiliation: 'UMass Amherst Junior, Afro-American Studies',
  date: 'November 2024',
  keyQuote: '“Hip Hop gave me the vocabulary to name what I was feeling...”',
  perspectiveType: 'Student', // 'Student' | 'Community Member' | 'Artist' | 'Educator'
  groupThemes: ['Identity', 'Campus Belonging', 'HHNL'],
  qaList: [
    {
      question: 'How did you first encounter Hip Hop?',
      response: 'Transcript of participant answer...'
    }
  ],
  mediaType: 'audio', // 'audio' | 'video' | 'text'
  mediaPlaceholderText: 'Audio stream: /media/audio/alex-interview.mp3',
  groupReflection: 'Analysis of interview themes connecting to course readings...',
  status: 'completed'
}
```

---

## 🖼️ 3. How to Add Media Items (`src/data/visualMedia.ts`)

To add visual culture items (photographs, album artwork, murals, or videos):

```typescript
{
  id: 'media-01',
  title: 'Title of Artwork or Photo',
  category: 'Photography', // 'Photography' | 'Album Art' | 'Historical Imagery' | 'Video Archives' | 'Regional Expression'
  timePeriod: '1980s Foundational Era',
  caption: 'Detailed educational explanation of what this image shows...',
  sourceCredit: 'Photographer / Archive Collection Name',
  tags: ['Tag1', 'Tag2'],
  aspectRatio: 'square', // 'square' | 'video' | 'portrait'
  mediaType: 'image', // 'image' | 'video'
  placeholderDescription: 'Description of the graphic'
}
```

---

## 📚 4. How to Add Academic Sources (`src/data/sources.ts`)

To add a book, peer-reviewed article, or documentary:

```typescript
{
  id: 'source-author-year',
  title: 'Full Title of Scholarly Work',
  author: 'Author Name',
  year: 2024,
  sourceType: 'Journal Article', // 'Book' | 'Journal Article' | 'Oral History' | 'Documentary' | 'Archival Record'
  citation: 'Author, A. (2024). Title of work. Journal Name, Vol(Issue), pages.',
  url: 'https://doi.org/...',
  relatedSection: 'Related Theme or Pillar',
  annotation: 'Brief explanation of how this source informs our project.'
}
```
