export const validateName = {
  required: 'Required field!',
  minLength: {
    value: 2,
    message: 'Must contain at least 2 characters!',
  },
  pattern: {
    value: /[A-Z][a-z]*/g,
    message: 'First letter must be capitalized!',
  },
};

export const validateRequired = {
  required: 'Required field!',
};

export const validateFile = {
  validate: {
    require: (file: FileList | undefined) => (file && file.length > 0) || 'Required Field!',
    type: (file: FileList | undefined) =>
      (file && file.length > 0 && file[0].type.startsWith('image')) || 'Must be an image!',
  },
};
