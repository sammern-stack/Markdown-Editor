// Regex meanings:
// \r\n - matches carriage return and newline characters (Windows-style line endings)
// g - global flag, meaning it will match all occurrences in the string
// ^[ \t]+$ - matches lines that contain only spaces or tabs
// m - multiline flag, meaning ^ and $ match the start and end of each line

export const NEW_LINE_REGEX = /\r\n/g;
export const EMPTY_LINE_REGEX = /^[ \t]+$/gm;
