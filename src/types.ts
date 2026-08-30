export type BriefCategory = 'deep-dive' | 'prompt-engineering' | 'excel-tool' | 'ai-workflow';

export interface EsgMatrixRow {
  dimension: 'Ambiental (E)' | 'Social (S)' | 'Gobernanza (G)' | string;
  strength: string;
  gap: string;
  notes?: string;
}

export interface PromptBlock {
  title: string;
  role: string;
  instructions: string;
  variables?: { name: string; description: string; example: string }[];
  followUpPrompts?: { title: string; prompt: string }[];
  explanationPoints?: string[];
}

export interface ExcelFormulaRow {
  cell: string;
  name: string;
  formula: string;
  description: string;
}

export interface ExcelColumnSpec {
  column: string;
  title: string;
  description: string;
  block?: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
}

export interface TableRow {
  [key: string]: string;
}

export interface GenericTable {
  headers: string[];
  rows: TableRow[];
}

export interface BriefEdition {
  id: number;
  editionNumber: string; // e.g. "#01"
  title: string;
  subtitle: string;
  subjectLine: string;
  category: BriefCategory;
  categoryLabel: string;
  categoryColor: string;
  cycleWeek: number; // 1 to 4
  releaseDate: string; // ISO format e.g. "2026-09-04T08:00:00-03:00"
  formattedReleaseDate: string; // "Viernes 4 de Septiembre de 2026"
  estimatedReadingTime: string;
  caseOrTopic: string;
  standards: string[];
  introduction: string[];
  
  // Section 1: Deep Dive / Methodological Focus
  section1Title: string;
  section1Subtitle?: string;
  section1Content: string[];
  section1KeyPillars?: { title: string; description: string }[];
  
  // Section 2: Matrix or Structured Prompt/Tool
  section2Title: string;
  esgMatrix?: EsgMatrixRow[];
  genericTable?: GenericTable;
  advisorInsight?: string;
  
  // Section 3: Deliverable / Excel / Checklist
  section3Title: string;
  checklist?: ChecklistItem[];
  excelColumns?: ExcelColumnSpec[];
  excelFormulas?: ExcelFormulaRow[];
  stepByStepWorkflow?: { step: string; title: string; description: string }[];
  
  // Section 4: AI Toolkit / Master Prompt
  section4Title: string;
  promptBlock?: PromptBlock;
  nextEditionTeaser: {
    edition: string;
    date: string;
    topic: string;
    format: string;
  };
  
  productionNotes: {
    institutionalFocus: string;
    practicalValue: string;
    scheduleAlignment: string;
  };

  isPlaceholder?: boolean;
}

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  calendarDownloaded?: boolean;
}
