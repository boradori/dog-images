export const fetchedAllBreeds = [
  'affenpinscher',
  'african',
  'airedale',
  'akita',
  'appenzeller',
  'basenji',
  'beagle',
  'bluetick',
  'borzoi',
  'bouvier',
  'boxer',
  'brabancon',
  'briard',
  'buhund',
  'bulldog',
  'bullterrier',
  'cairn',
  'cattledog',
  'chihuahua',
  'chow',
  'clumber',
  'cockapoo',
  'collie',
  'coonhound',
  'corgi',
  'cotondetulear',
  'dachshund',
  'dalmatian',
  'dane',
  'deerhound',
  'dhole',
  'dingo',
  'doberman',
  'elkhound',
  'entlebucher',
  'eskimo',
  'frise',
  'germanshepherd',
  'greyhound',
  'groenendael',
  'hound',
  'husky',
  'keeshond',
  'kelpie',
  'komondor',
  'kuvasz',
  'labrador',
  'leonberg',
  'lhasa',
  'malamute',
  'malinois',
  'maltese',
  'mastiff',
  'mexicanhairless',
  'mix',
  'mountain',
  'newfoundland',
  'otterhound',
  'papillon',
  'pekinese',
  'pembroke',
  'pinscher',
  'pitbull',
  'pointer',
  'pomeranian',
  'poodle',
  'pug',
  'puggle',
  'pyrenees',
  'redbone',
  'retriever',
  'ridgeback',
  'rottweiler',
  'saluki',
  'samoyed',
  'schipperke',
  'schnauzer',
  'setter',
  'sheepdog',
  'shiba',
  'shihtzu',
  'spaniel',
  'springer',
  'stbernard',
  'terrier',
  'vizsla',
  'waterdog',
  'weimaraner',
  'whippet',
  'wolfhound'
]

export const fetchedDogsAkita = [
  {id: "6d480060-0571-11ea-b227-edeb30d30408", breed: "akita", imageUrl: "https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg", favorited: false},
  {id: "6d480061-0571-11ea-b227-edeb30d30408", breed: "akita", imageUrl: "https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg", favorited: false},
]

export const payloadFetchSuccess = {
  "currentBreed": {
    "breed": "akita",
    "entities": {
      "dogs": {
        "6d480060-0571-11ea-b227-edeb30d30408": {
          "id": '6d480060-0571-11ea-b227-edeb30d30408',
          "breed": 'akita',
          "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
          "favorited": false
        },
        "6d480061-0571-11ea-b227-edeb30d30408": {
          "id": '6d480061-0571-11ea-b227-edeb30d30408',
          "breed": 'akita',
          "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg',
          "favorited": false
        },
      },
    },
    "result": [
      "6d480060-0571-11ea-b227-edeb30d30408",
      "6d480061-0571-11ea-b227-edeb30d30408"
    ]
  },
  "favoriteDogs": {
    "dogs": {},
    "result": []
  },
  "allBreeds": [],
  "isLoading": false,
  "searchedBreeds": [
    {
      "breed": "akita",
      "entities": {
        "dogs": {
          "6d480060-0571-11ea-b227-edeb30d30408": {
            "id": '6d480060-0571-11ea-b227-edeb30d30408',
            "breed": 'akita',
            "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
            "favorited": false
          },
          "6d480061-0571-11ea-b227-edeb30d30408": {
            "id": '6d480061-0571-11ea-b227-edeb30d30408',
            "breed": 'akita',
            "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg',
            "favorited": false
          },
        }
      },
      "result": [
        "6d480060-0571-11ea-b227-edeb30d30408",
        "6d480061-0571-11ea-b227-edeb30d30408"
      ]
    }
  ]
}

export const payloadFavoritizeDogTrue = {
  "currentBreed": {
    "breed": "akita",
    "entities": {
      "dogs": {
        "6d480060-0571-11ea-b227-edeb30d30408": {
          "id": '6d480060-0571-11ea-b227-edeb30d30408',
          "breed": 'akita',
          "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
          "favorited": true
        },
        "6d480061-0571-11ea-b227-edeb30d30408": {
          "id": '6d480061-0571-11ea-b227-edeb30d30408',
          "breed": 'akita',
          "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg',
          "favorited": false
        },
      },
    },
    "result": [
      "6d480060-0571-11ea-b227-edeb30d30408",
      "6d480061-0571-11ea-b227-edeb30d30408"
    ]
  },
  "favoriteDogs": {
    "dogs": {
      "6d480060-0571-11ea-b227-edeb30d30408": {
        "id": '6d480060-0571-11ea-b227-edeb30d30408',
        "breed": 'akita',
        "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
        "favorited": true
      },
    },
    "result": [
      "6d480060-0571-11ea-b227-edeb30d30408",
    ]
  },
  "allBreeds": [],
  "isLoading": false,
  "searchedBreeds": [
    {
      "breed": "akita",
      "entities": {
        "dogs": {
          "6d480060-0571-11ea-b227-edeb30d30408": {
            "id": '6d480060-0571-11ea-b227-edeb30d30408',
            "breed": 'akita',
            "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
            "favorited": true
          },
          "6d480061-0571-11ea-b227-edeb30d30408": {
            "id": '6d480061-0571-11ea-b227-edeb30d30408',
            "breed": 'akita',
            "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg',
            "favorited": false
          },
        }
      },
      "result": [
        "6d480060-0571-11ea-b227-edeb30d30408",
        "6d480061-0571-11ea-b227-edeb30d30408"
      ]
    }
  ]
}

export const payloadFavoritizeDogFalse = {
  "currentBreed": {
    "breed": "akita",
    "entities": {
      "dogs": {
        "6d480060-0571-11ea-b227-edeb30d30408": {
          "id": '6d480060-0571-11ea-b227-edeb30d30408',
          "breed": 'akita',
          "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
          "favorited": false
        },
        "6d480061-0571-11ea-b227-edeb30d30408": {
          "id": '6d480061-0571-11ea-b227-edeb30d30408',
          "breed": 'akita',
          "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg',
          "favorited": false
        },
      },
    },
    "result": [
      "6d480060-0571-11ea-b227-edeb30d30408",
      "6d480061-0571-11ea-b227-edeb30d30408"
    ]
  },
  "favoriteDogs": {
    "dogs": {},
    "result": []
  },
  "allBreeds": [],
  "isLoading": false,
  "searchedBreeds": [
    {
      "breed": "akita",
      "entities": {
        "dogs": {
          "6d480060-0571-11ea-b227-edeb30d30408": {
            "id": '6d480060-0571-11ea-b227-edeb30d30408',
            "breed": 'akita',
            "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
            "favorited": false
          },
          "6d480061-0571-11ea-b227-edeb30d30408": {
            "id": '6d480061-0571-11ea-b227-edeb30d30408',
            "breed": 'akita',
            "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg',
            "favorited": false
          },
        }
      },
      "result": [
        "6d480060-0571-11ea-b227-edeb30d30408",
        "6d480061-0571-11ea-b227-edeb30d30408"
      ]
    }
  ]
}

export const payloadFavoritizeNotCurrentDogTrue = {
  "currentBreed": {
    "breed": "boxer",
    "entities": {
      "dogs": {
        "5d209d80-09c4-11ea-a2a8-1713b116b34a": {
          "id": "5d209d80-09c4-11ea-a2a8-1713b116b34a",
          "breed": "boxer",
          "imageUrl": "https://images.dog.ceo/breeds/boxer/IMG_0002.jpg",
          "favorited": false
        },
        "5d209d81-09c4-11ea-a2a8-1713b116b34a": {
          "id": "5d209d81-09c4-11ea-a2a8-1713b116b34a",
          "breed": "boxer",
          "imageUrl": "https://images.dog.ceo/breeds/boxer/IMG_3394.jpg",
          "favorited": false
        }
      }
    },
    "result": [
      "5d209d80-09c4-11ea-a2a8-1713b116b34a",
      "5d209d81-09c4-11ea-a2a8-1713b116b34a"
    ]
  },
  "favoriteDogs": {
    "dogs": {
      "6d480060-0571-11ea-b227-edeb30d30408": {
        "id": '6d480060-0571-11ea-b227-edeb30d30408',
        "breed": 'akita',
        "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
        "favorited": true
      },
    },
    "result": [
      "6d480060-0571-11ea-b227-edeb30d30408",
    ]
  },
  "allBreeds": [],
  "isLoading": false,
  "searchedBreeds": [
    {
      "breed": "akita",
      "entities": {
        "dogs": {
          "6d480060-0571-11ea-b227-edeb30d30408": {
            "id": '6d480060-0571-11ea-b227-edeb30d30408',
            "breed": 'akita',
            "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
            "favorited": true
          },
          "6d480061-0571-11ea-b227-edeb30d30408": {
            "id": '6d480061-0571-11ea-b227-edeb30d30408',
            "breed": 'akita',
            "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg',
            "favorited": false
          },
        }
      },
      "result": [
        "6d480060-0571-11ea-b227-edeb30d30408",
        "6d480061-0571-11ea-b227-edeb30d30408"
      ]
    }
  ]
}

export const payloadFavoritizeNotCurrentDogFalse = {
  "currentBreed": {
    "breed": "boxer",
    "entities": {
      "dogs": {
        "5d209d80-09c4-11ea-a2a8-1713b116b34a": {
          "id": "5d209d80-09c4-11ea-a2a8-1713b116b34a",
          "breed": "boxer",
          "imageUrl": "https://images.dog.ceo/breeds/boxer/IMG_0002.jpg",
          "favorited": false
        },
        "5d209d81-09c4-11ea-a2a8-1713b116b34a": {
          "id": "5d209d81-09c4-11ea-a2a8-1713b116b34a",
          "breed": "boxer",
          "imageUrl": "https://images.dog.ceo/breeds/boxer/IMG_3394.jpg",
          "favorited": false
        }
      }
    },
    "result": [
      "5d209d80-09c4-11ea-a2a8-1713b116b34a",
      "5d209d81-09c4-11ea-a2a8-1713b116b34a"
    ]
  },
  "favoriteDogs": {
    "dogs": {},
    "result": []
  },
  "allBreeds": [],
  "isLoading": false,
  "searchedBreeds": [
    {
      "breed": "akita",
      "entities": {
        "dogs": {
          "6d480060-0571-11ea-b227-edeb30d30408": {
            "id": '6d480060-0571-11ea-b227-edeb30d30408',
            "breed": 'akita',
            "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
            "favorited": false
          },
          "6d480061-0571-11ea-b227-edeb30d30408": {
            "id": '6d480061-0571-11ea-b227-edeb30d30408',
            "breed": 'akita',
            "imageUrl": 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg',
            "favorited": false
          },
        }
      },
      "result": [
        "6d480060-0571-11ea-b227-edeb30d30408",
        "6d480061-0571-11ea-b227-edeb30d30408"
      ]
    }
  ]
}