import { storage } from "@shared/lib/storage";

const STORAGE_KEY = "alt-shift-data";

export interface Letter {
  id: string;
  jobTitle: string;
  company: string;
  skills: string;
  additionalDetails?: string;
  generatedContent: string;
  createdAt: string;
  updatedAt: string;
}

export type SaveLetterData = Omit<Letter, "id" | "createdAt" | "updatedAt">;

export type UpsertLetterData = SaveLetterData & { id?: string };

function getLetters(): Letter[] {
  return storage.get<Letter[]>(STORAGE_KEY) ?? [];
}

function setLetters(letters: Letter[]): void {
  storage.set(STORAGE_KEY, letters);
}

export const client = {
  async getAll(): Promise<Letter[]> {
    return getLetters();
  },

  async getById(id: string): Promise<Letter | undefined> {
    return getLetters().find((letter) => letter.id === id);
  },

  async save(data: SaveLetterData): Promise<Letter> {
    const now = new Date().toISOString();
    const newLetter: Letter = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };

    setLetters([newLetter, ...getLetters()]);
    return newLetter;
  },

  async upsert(data: UpsertLetterData): Promise<Letter> {
    const now = new Date().toISOString();
    const { id, ...fields } = data;

    if (id) {
      const letters = getLetters();
      const index = letters.findIndex((letter) => letter.id === id);

      if (index !== -1) {
        const updated: Letter = {
          ...letters[index],
          ...fields,
          updatedAt: now,
        };
        letters[index] = updated;
        setLetters(letters);
        return updated;
      }
    }

    const newLetter: Letter = {
      ...fields,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };
    setLetters([newLetter, ...getLetters()]);
    return newLetter;
  },

  async remove(id: string): Promise<void> {
    setLetters(getLetters().filter((letter) => letter.id !== id));
  },
};
