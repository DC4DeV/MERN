const secrets = {
  dbUri: 'mongodb+srv://admin:nXpHJ7XAyI5sdkrC@cluster0-g4pif.mongodb.net/test?retryWrites=true',
};

export const getSecret = key => secrets[key];