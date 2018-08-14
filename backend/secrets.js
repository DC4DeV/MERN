const secrets = {
  // dbUri: 'mongodb+srv://admin:adminroot@cluster0-g4pif.mongodb.net/test?retryWrites=true',
};

export const getSecret = key => secrets[key];