import { BinaryToTextEncoding } from 'crypto';

export const constants = {
  fileExtension: '.tabd',
  hashAlgorithm: 'sha256', // TODO use 512
  hashEncoding:'hex' as BinaryToTextEncoding,
  storageTypes: {
    description: "Choose where to store Tab'd data",
    default: {
      name: 'repository'
    },
    repository: {
      name: 'repository'
    },
    gitNotes: {
      name: 'gitNotes',
      logDirectory: 'temp'
    },
    homeDirectory: {
      name: 'homeDirectory',
    },
    // Tests only, we never actually expect this
    storage: {
      name: 'repository'
    },
    // TODO 
    api: {
      name: 'api'
    },

  }
};