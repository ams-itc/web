//-------------------------------------------->
// Handle localized if it is text
//-------------------------------------------->

export const parseLocalizedText = (
  value: unknown
): { en: string | string[]; kh: string | string[] } => {
  if (!value) return { en: "", kh: "" };

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (typeof parsed === "object" && parsed !== null) return parsed;
      return { en: value, kh: value };
    } catch {
      return { en: value, kh: value };
    }
  }

  if (typeof value === "object" && value !== null) {
    return value as { en: string | string[]; kh: string | string[] };
  }

  return { en: "", kh: "" };
};

//-------------------------------------------->
// Handle localized value extraction as array
//-------------------------------------------->
export const getLocalizedValue = <T = string>(
  value?: unknown,
  language: "en" | "kh" = "en",
  joinString?: string // if provided will join arrays into string
): T => {
  const parsed = parseLocalizedText(value);
  const text = parsed[language] ?? parsed.en ?? "";

  if (Array.isArray(text)) {
    if (joinString !== undefined) return text.join(joinString) as unknown as T;
    return text as unknown as T;
  }

  return text as unknown as T;
};
