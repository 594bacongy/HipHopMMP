/**
 * TypeScript definitions for the Cultural Hip Hop Digital Research Project
 * EDUC 218 - University of Massachusetts Amherst
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  contributions: string[];
  focusAreas: string[];
}

export interface SongAnalysis {
  id: string;
  title: string;
  artist: string;
  releaseYear: number | string;
  albumTitle: string;
  coverImagePlaceholder?: string;
  culturalContext: string;
  lyricalThemes: string[];
  musicalAnalysis: {
    lyrics: string;
    beatsAndProduction: string;
    visualsAndAesthetics?: string;
  };
  socialPoliticalSignificance: string;
  groupInterpretation: string;
  supportingSources: string[];
  status: 'planned' | 'in-progress' | 'complete';
}

export interface InterviewQA {
  question: string;
  response: string;
}

export interface InterviewPerspective {
  id: string;
  interviewee: string; // Name or anonymous identifier (e.g., "Student Organizer, UMass Class of '25")
  roleOrAffiliation: string;
  date?: string;
  keyQuote: string;
  perspectiveType: 'Student' | 'Community Member' | 'Artist' | 'Educator';
  groupThemes: string[];
  qaList: InterviewQA[];
  mediaType: 'text' | 'audio' | 'video';
  mediaPlaceholderText?: string;
  groupReflection: string;
  status: 'scheduled' | 'transcribing' | 'completed';
}

export interface VisualMediaItem {
  id: string;
  title: string;
  category: 'All' | 'Photography' | 'Album Art' | 'Historical Imagery' | 'Video Archives' | 'Regional Expression';
  timePeriod: string;
  caption: string;
  sourceCredit: string;
  tags: string[];
  aspectRatio?: 'square' | 'video' | 'portrait';
  mediaType: 'image' | 'video';
  placeholderDescription: string;
}

export interface SocialTheme {
  id: string;
  number: number;
  title: string;
  shortDescription: string;
  centralArgument: string;
  pedagogicalRelevance: string;
  inquiryQuestions: string[];
  futureResearchSlots: {
    title: string;
    description: string;
  }[];
}

export interface ResearchSource {
  id: string;
  title: string;
  author: string;
  year: number | string;
  sourceType: 'Book' | 'Journal Article' | 'Oral History' | 'Documentary' | 'Archival Record' | 'Pedagogical Essay';
  citation: string;
  url?: string;
  relatedSection: string;
  annotation: string;
}

export interface ProjectMetadata {
  title: string;
  subtitle: string;
  centralIdea: string;
  course: string;
  courseTitle: string;
  institution: string;
  semester: string;
  researchApproach: string;
  pillars: {
    title: string;
    description: string;
  }[];
}
