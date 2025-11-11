// types.ts
export interface Course {
  title: { en: string; kh: string };
  year: number;
  semester: string;
  specialist?: string;
  credit: number;
  code_name: string;
}

export interface YearCurriculum {
  semester1: Course[];
  semester2: Course[];
  totalCredit: number;
  totalCredit2: number;
}

export interface Curriculum {
  [key: string]: YearCurriculum;
}
